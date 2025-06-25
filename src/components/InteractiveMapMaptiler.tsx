
import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Language, FilterType } from '@/types/language';
import { createMaptilerMap, addNavigationControl } from '@/utils/maptilerConfig';
import { removeExistingLayers, createLanguageAreasData, addLanguageAreasLayers } from '@/utils/mapLayerManager';
import { createMapEventHandlers } from '@/utils/mapEventHandlers';

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
  const eventHandlers = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = createMaptilerMap(mapContainer.current);
    addNavigationControl(map.current);

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

    // Remove existing layers and event listeners
    if (eventHandlers.current) {
      eventHandlers.current.removeEventListeners();
    }
    removeExistingLayers(map.current);

    // Create and add new layers
    const languageAreas = createLanguageAreasData(languages, selectedFilter);
    addLanguageAreasLayers(map.current, languageAreas);

    // Set up event handlers
    eventHandlers.current = createMapEventHandlers(map.current, languages, onLanguageClick);
    eventHandlers.current.addEventListeners();

    // Cleanup function for event listeners
    return () => {
      if (eventHandlers.current) {
        eventHandlers.current.removeEventListeners();
      }
    };

  }, [languages, selectedFilter, mapLoaded, onLanguageClick]);

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
