
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Language, FilterType } from '@/types/language';
import { getColorForValue } from '@/utils/colorSchemes';

interface InteractiveMapProps {
  languages: Language[];
  selectedFilter: FilterType;
  mapboxToken: string;
  onLanguageClick: (language: Language) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  languages,
  selectedFilter,
  mapboxToken,
  onLanguageClick
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 2,
      projection: 'naturalEarth'
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    console.log('Updating map with filter:', selectedFilter, 'and', languages.length, 'languages');

    // Safely remove existing sources and layers
    const existingLayers = ['language-areas', 'language-areas-stroke', 'languages-layer', 'clusters', 'cluster-count'];
    const existingSources = ['languages', 'language-areas'];

    existingLayers.forEach(layerId => {
      if (map.current?.getLayer(layerId)) {
        try {
          map.current.removeLayer(layerId);
        } catch (error) {
          console.log('Layer removal warning:', error);
        }
      }
    });

    existingSources.forEach(sourceId => {
      if (map.current?.getSource(sourceId)) {
        try {
          map.current.removeSource(sourceId);
        } catch (error) {
          console.log('Source removal warning:', error);
        }
      }
    });

    // Create language areas (simplified polygons for visualization)
    const languageAreas = {
      type: 'FeatureCollection' as const,
      features: languages.map(lang => {
        const [lng, lat] = lang.coordinates;
        // Create a simplified polygon around each language point for area visualization
        const offset = 2; // Adjust this to make areas larger or smaller
        return {
          type: 'Feature' as const,
          geometry: {
            type: 'Polygon' as const,
            coordinates: [[
              [lng - offset, lat - offset],
              [lng + offset, lat - offset],
              [lng + offset, lat + offset],
              [lng - offset, lat + offset],
              [lng - offset, lat - offset]
            ]]
          },
          properties: {
            id: lang.id,
            name: lang.name,
            family: lang.family,
            branch: lang.branch,
            speakers: lang.speakers,
            endangerment: lang.endangermentStatus,
            region: lang.region,
            color: getColorForValue(selectedFilter, getFilterValue(lang, selectedFilter))
          }
        }
      })
    };

    // Add language areas source
    map.current.addSource('language-areas', {
      type: 'geojson',
      data: languageAreas
    });

    // Add filled areas layer
    map.current.addLayer({
      id: 'language-areas',
      type: 'fill',
      source: 'language-areas',
      paint: {
        'fill-color': ['get', 'color'],
        'fill-opacity': 0.6
      }
    });

    // Add stroke layer for better visibility
    map.current.addLayer({
      id: 'language-areas-stroke',
      type: 'line',
      source: 'language-areas',
      paint: {
        'line-color': ['get', 'color'],
        'line-width': 2,
        'line-opacity': 0.8
      }
    });

    // Create point data for fallback/clustering
    const geojsonData = {
      type: 'FeatureCollection' as const,
      features: languages.map(lang => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: lang.coordinates
        },
        properties: {
          id: lang.id,
          name: lang.name,
          family: lang.family,
          branch: lang.branch,
          speakers: lang.speakers,
          endangerment: lang.endangermentStatus,
          region: lang.region,
          color: getColorForValue(selectedFilter, getFilterValue(lang, selectedFilter))
        }
      }))
    };

    // Add point source for labels and interaction backup
    map.current.addSource('languages', {
      type: 'geojson',
      data: geojsonData
    });

    // Add individual points layer (smaller, for labels)
    map.current.addLayer({
      id: 'languages-layer',
      type: 'circle',
      source: 'languages',
      paint: {
        'circle-color': ['get', 'color'],
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.9
      }
    });

    // Add click handlers
    const handleAreaClick = (e: mapboxgl.MapMouseEvent) => {
      if (e.features && e.features[0]) {
        const feature = e.features[0];
        const languageId = feature.properties?.id;
        const language = languages.find(lang => lang.id === languageId);
        if (language) {
          onLanguageClick(language);
        }
      }
    };

    map.current.on('click', 'language-areas', handleAreaClick);
    map.current.on('click', 'languages-layer', handleAreaClick);

    // Change cursor on hover
    const setCursorPointer = () => {
      if (map.current) map.current.getCanvas().style.cursor = 'pointer';
    };
    
    const setCursorDefault = () => {
      if (map.current) map.current.getCanvas().style.cursor = '';
    };

    map.current.on('mouseenter', 'language-areas', setCursorPointer);
    map.current.on('mouseleave', 'language-areas', setCursorDefault);
    map.current.on('mouseenter', 'languages-layer', setCursorPointer);
    map.current.on('mouseleave', 'languages-layer', setCursorDefault);

    // Cleanup function for event listeners
    return () => {
      if (map.current) {
        map.current.off('click', 'language-areas', handleAreaClick);
        map.current.off('click', 'languages-layer', handleAreaClick);
        map.current.off('mouseenter', 'language-areas', setCursorPointer);
        map.current.off('mouseleave', 'language-areas', setCursorDefault);
        map.current.off('mouseenter', 'languages-layer', setCursorPointer);
        map.current.off('mouseleave', 'languages-layer', setCursorDefault);
      }
    };

  }, [languages, selectedFilter, mapLoaded, onLanguageClick]);

  const getFilterValue = (language: Language, filterType: FilterType): string => {
    switch (filterType) {
      case 'family': return language.family;
      case 'branch': return language.branch;
      case 'endangerment': return language.endangermentStatus;
      case 'region': return language.region;
      case 'phonemes': return language.phonemes.length.toString();
      case 'consonants': return language.consonants.length.toString();
      case 'vowels': return language.vowels.length.toString();
      case 'syntax': return language.syntaxFeatures[0] || 'Unknown';
      default: return 'Unknown';
    }
  };

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default InteractiveMap;
