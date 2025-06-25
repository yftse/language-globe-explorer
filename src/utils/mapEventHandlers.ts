
import mapboxgl from 'mapbox-gl';
import { Language } from '@/types/language';

export const createMapEventHandlers = (
  map: mapboxgl.Map,
  languages: Language[],
  onLanguageClick: (language: Language) => void
) => {
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

  const setCursorPointer = () => {
    map.getCanvas().style.cursor = 'pointer';
  };
  
  const setCursorDefault = () => {
    map.getCanvas().style.cursor = '';
  };

  const addEventListeners = () => {
    map.on('click', 'language-areas', handleAreaClick);
    map.on('mouseenter', 'language-areas', setCursorPointer);
    map.on('mouseleave', 'language-areas', setCursorDefault);
  };

  const removeEventListeners = () => {
    map.off('click', 'language-areas', handleAreaClick);
    map.off('mouseenter', 'language-areas', setCursorPointer);
    map.off('mouseleave', 'language-areas', setCursorDefault);
  };

  return {
    addEventListeners,
    removeEventListeners
  };
};
