
import maplibregl from 'maplibre-gl';
import { Language } from '@/types/language';

export const createMapEventHandlers = (
  map: maplibregl.Map,
  languages: Language[],
  onLanguageClick: (language: Language) => void
) => {
  const handleAreaClick = (e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
    console.log('Area clicked at:', e.lngLat);
    
    // Check multiple layer types for language areas
    const features = map.queryRenderedFeatures(e.point, { 
      layers: ['language-countries', 'language-subdivisions'] 
    });
    
    console.log('Features found:', features?.length || 0);
    
    if (features && features[0]) {
      const feature = features[0];
      const regionName = feature.properties?.name || feature.properties?.name_en;
      console.log('Region clicked:', regionName, 'Properties:', feature.properties);
      
      // Find language by region name using multiple strategies
      const language = languages.find(lang => {
        // Strategy 1: Exact country match (prioritize this)
        const exactCountryMatch = lang.country === regionName;
        if (exactCountryMatch) return true;
        
        // Strategy 2: Alternative names match
        const altNameMatch = lang.alternativeNames?.some((name: string) => 
          name.toLowerCase() === regionName?.toLowerCase()
        );
        if (altNameMatch) return true;
        
        // Strategy 3: Check if the clicked region belongs to the language's country
        // For subdivisions like "Ghardaïa" in Algeria, check if country contains "Algeria"
        const parentCountryMatch = feature.properties?.level_0 && 
          (lang.country === feature.properties.level_0 || 
           // Handle country codes like "DZ" for Algeria
           (feature.properties.iso_a2 === 'DZ' && lang.country === 'Algeria') ||
           (feature.properties.iso_a2 === 'CN' && lang.country === 'China') ||
           (feature.properties.iso_a2 === 'IN' && lang.country === 'India') ||
           (feature.properties.iso_a2 === 'FR' && lang.country === 'France'));
        
        console.log(`Checking language ${lang.name}: country=${lang.country}, region=${regionName}, parentCountry=${feature.properties?.level_0}, iso=${feature.properties?.iso_a2}`);
        return parentCountryMatch;
      });
      
      if (language) {
        console.log('Language found and clicked:', language.name, 'in region:', regionName);
        onLanguageClick(language);
      } else {
        console.log('No language found for region:', regionName, 'Available languages:', languages.map(l => l.name).join(', '));
      }
    } else {
      console.log('No features found at click point');
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
