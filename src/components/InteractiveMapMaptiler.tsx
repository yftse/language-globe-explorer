
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Language, FilterType } from '@/types/language';
import { getColorForValue } from '@/utils/colorSchemes';

interface InteractiveMapMaptilerProps {
  languages: Language[];
  selectedFilter: FilterType;
  onLanguageClick: (language: Language) => void;
}

const InteractiveMapMaptiler: React.FC<InteractiveMapMaptilerProps> = ({
  languages,
  selectedFilter,
  onLanguageClick
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Configure for Maptiler
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=gyNfeRRGKgZuqBD5plxn`,
      center: [0, 20],
      zoom: 2,
      projection: 'globe'
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    console.log('Updating Maptiler map with filter:', selectedFilter, 'and', languages.length, 'languages');

    // Remove existing layers and sources
    const existingLayers = ['language-areas', 'language-areas-stroke'];
    const existingSources = ['language-areas'];

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

    // Create language areas with realistic geographic polygons
    const languageAreas = {
      type: 'FeatureCollection' as const,
      features: languages.map(lang => ({
        type: 'Feature' as const,
        geometry: {
          type: 'MultiPolygon' as const,
          coordinates: lang.geographicArea.map(area => [area])
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

    // Add language areas source
    map.current.addSource('language-areas', {
      type: 'geojson',
      data: languageAreas
    });

    // Add filled areas layer with transparency for overlapping
    map.current.addLayer({
      id: 'language-areas',
      type: 'fill',
      source: 'language-areas',
      paint: {
        'fill-color': ['get', 'color'],
        'fill-opacity': 0.4
      }
    });

    // Add stroke layer for better visibility
    map.current.addLayer({
      id: 'language-areas-stroke',
      type: 'line',
      source: 'language-areas',
      paint: {
        'line-color': ['get', 'color'],
        'line-width': 1.5,
        'line-opacity': 0.8
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

    // Change cursor on hover
    const setCursorPointer = () => {
      if (map.current) map.current.getCanvas().style.cursor = 'pointer';
    };
    
    const setCursorDefault = () => {
      if (map.current) map.current.getCanvas().style.cursor = '';
    };

    map.current.on('mouseenter', 'language-areas', setCursorPointer);
    map.current.on('mouseleave', 'language-areas', setCursorDefault);

    // Cleanup function for event listeners
    return () => {
      if (map.current) {
        map.current.off('click', 'language-areas', handleAreaClick);
        map.current.off('mouseenter', 'language-areas', setCursorPointer);
        map.current.off('mouseleave', 'language-areas', setCursorDefault);
      }
    };

  }, [languages, selectedFilter, mapLoaded, onLanguageClick]);

  const getFilterValue = (language: Language, filterType: FilterType): string => {
    switch (filterType) {
      case 'language': return language.name;
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
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
        Maptiler
      </div>
    </div>
  );
};

export default InteractiveMapMaptiler;
