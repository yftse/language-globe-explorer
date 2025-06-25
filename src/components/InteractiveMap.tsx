
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

    // Remove existing sources and layers
    if (map.current.getSource('languages')) {
      map.current.removeLayer('languages-layer');
      map.current.removeSource('languages');
    }

    // Create GeoJSON data
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

    // Add source
    map.current.addSource('languages', {
      type: 'geojson',
      data: geojsonData,
      cluster: true,
      clusterMaxZoom: 8,
      clusterRadius: 50
    });

    // Add clustered points layer
    map.current.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'languages',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6',
          5,
          '#f1f075',
          10,
          '#f28cb1'
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          5,
          30,
          10,
          40
        ]
      }
    });

    // Add cluster count labels
    map.current.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'languages',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      }
    });

    // Add individual points layer
    map.current.addLayer({
      id: 'languages-layer',
      type: 'circle',
      source: 'languages',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': ['get', 'color'],
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          2, 6,
          10, 12,
          15, 20
        ],
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      }
    });

    // Add click handler for individual points
    map.current.on('click', 'languages-layer', (e) => {
      if (e.features && e.features[0]) {
        const feature = e.features[0];
        const languageId = feature.properties?.id;
        const language = languages.find(lang => lang.id === languageId);
        if (language) {
          onLanguageClick(language);
        }
      }
    });

    // Add click handler for clusters
    map.current.on('click', 'clusters', (e) => {
      if (!map.current || !e.features || !e.features[0]) return;
      
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });
      
      if (features[0] && features[0].properties) {
        const clusterId = features[0].properties.cluster_id;
        const source = map.current.getSource('languages') as mapboxgl.GeoJSONSource;
        
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err || !map.current) return;
          
          const geometry = features[0].geometry;
          if (geometry.type === 'Point') {
            map.current.easeTo({
              center: geometry.coordinates as [number, number],
              zoom: zoom
            });
          }
        });
      }
    });

    // Change cursor on hover
    map.current.on('mouseenter', 'languages-layer', () => {
      if (map.current) map.current.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'languages-layer', () => {
      if (map.current) map.current.getCanvas().style.cursor = '';
    });

    map.current.on('mouseenter', 'clusters', () => {
      if (map.current) map.current.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'clusters', () => {
      if (map.current) map.current.getCanvas().style.cursor = '';
    });

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
