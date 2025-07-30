
import maplibregl from 'maplibre-gl';
import { Language } from '@/types/language';

export const createMapEventHandlers = (
  map: maplibregl.Map,
  languages: Language[],
  onLanguageClick: (language: Language) => void
) => {
  const handleAreaClick = (e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
    // Check multiple layer types for language areas
    const features = map.queryRenderedFeatures(e.point, { 
      layers: ['language-countries', 'language-subdivisions'] 
    });
    
    if (features && features[0]) {
      const feature = features[0];
      const regionName = feature.properties?.name;
      
      // Find language by region name
      const language = languages.find(lang => {
        // Check if language matches this region
        return lang.country === regionName || 
               lang.geographicArea?.some((area: any) => area.regionName === regionName) ||
               lang.alternativeNames?.some((name: string) => name === regionName);
      });
      
      if (language) {
        console.log('Language clicked:', language.name, 'in region:', regionName);
        onLanguageClick(language);
      } else {
        console.log('No language found for region:', regionName);
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
    // Add click events for both country and subdivision layers
    map.on('click', 'language-countries', handleAreaClick);
    map.on('click', 'language-subdivisions', handleAreaClick);
    map.on('mouseenter', 'language-countries', setCursorPointer);
    map.on('mouseenter', 'language-subdivisions', setCursorPointer);
    map.on('mouseleave', 'language-countries', setCursorDefault);
    map.on('mouseleave', 'language-subdivisions', setCursorDefault);
  };

  const removeEventListeners = () => {
    // Remove click events for both country and subdivision layers
    map.off('click', 'language-countries', handleAreaClick);
    map.off('click', 'language-subdivisions', handleAreaClick);
    map.off('mouseenter', 'language-countries', setCursorPointer);
    map.off('mouseenter', 'language-subdivisions', setCursorPointer);
    map.off('mouseleave', 'language-countries', setCursorDefault);
    map.off('mouseleave', 'language-subdivisions', setCursorDefault);
  };

  return {
    addEventListeners,
    removeEventListeners
  };
};
