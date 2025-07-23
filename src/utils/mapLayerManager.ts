import maplibregl from 'maplibre-gl';
import { Language, FilterType } from '@/types/language';
import { getColorForValue } from '@/utils/enhancedColorSchemes';
import { MAPTILER_API_KEY } from '@/utils/maptilerConfig';

export const removeExistingLayers = (map: maplibregl.Map): void => {
  const existingLayers = ['language-areas', 'language-areas-stroke', 'language-countries', 'language-subdivisions'];
  
  existingLayers.forEach(layerId => {
    if (map.getLayer(layerId)) {
      try {
        map.removeLayer(layerId);
      } catch (error) {
        console.log('Layer removal warning:', error);
      }
    }
  });
};

// Region to language mapping for precise administrative boundaries
const regionLanguageMap: Record<string, string[]> = {
  // Countries
  'Spain': ['Spanish', 'Basque', 'Catalan', 'Galician'],
  'France': ['French', 'Basque', 'Catalan', 'Corsican'],
  'China': ['Mandarin', 'Cantonese', 'Uyghur', 'Tibetan'],
  'Russia': ['Russian', 'Chechen', 'Tatar', 'Kalmyk'],
  'Kazakhstan': ['Kazakh', 'Russian'],
  'Uzbekistan': ['Uzbek'],
  'Kyrgyzstan': ['Kyrgyz'],
  'Turkmenistan': ['Turkmen'],
  'Tajikistan': ['Tajik'],
  'Mongolia': ['Mongolian'],
  'Japan': ['Japanese'],
  'Germany': ['German', 'Low German'],
  'Netherlands': ['Dutch', 'West Frisian'],
  'Italy': ['Italian', 'Romansch'],
  'Switzerland': ['German', 'French', 'Italian', 'Romansch'],
  'Norway': ['Norwegian', 'Northern Sami'],
  'Sweden': ['Swedish', 'Northern Sami'],
  'Finland': ['Finnish', 'Northern Sami'],
  'India': ['Hindi', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Assamese'],
  
  // Subdivisions (level 1)
  'Basque Country': ['Basque', 'Spanish'],
  'Catalonia': ['Catalan', 'Spanish'],
  'Galicia': ['Galician', 'Spanish'],
  'Corsica': ['Corsican', 'French'],
  'Xinjiang': ['Uyghur', 'Mandarin'],
  'Tibet': ['Tibetan', 'Mandarin'],
  'Chechnya': ['Chechen', 'Russian'],
  'Tatarstan': ['Tatar', 'Russian'],
  'Kalmykia': ['Kalmyk', 'Russian'],
  'Friesland': ['West Frisian', 'Dutch'],
  'Graubünden': ['Romansch', 'German'],
  'Finnmark': ['Northern Sami', 'Norwegian'],
  'Norrbotten': ['Northern Sami', 'Swedish'],
  'Lapland': ['Northern Sami', 'Finnish'],
};

export const addLanguageAreasLayers = (map: maplibregl.Map, languages: Language[], selectedFilter: FilterType): void => {
  // First, add the countries source from Maptiler if it doesn't exist
  if (!map.getSource('countries')) {
    map.addSource('countries', {
      type: 'vector',
      url: `https://api.maptiler.com/tiles/countries/tiles.json?key=${MAPTILER_API_KEY}`
    });
  }

  // Use a timeout to ensure the source is ready
  setTimeout(() => {
    try {
      addLayersToMap();
    } catch (error) {
      console.error('Error adding layers:', error);
    }
  }, 1000);

  function addLayersToMap() {
    // Create color mapping for languages
    const languageColors: Record<string, string> = {};
    languages.forEach(lang => {
      languageColors[lang.name] = getColorForValue(selectedFilter, getFilterValue(lang, selectedFilter));
    });

    // Build proper MapLibre expressions
    const countryColorExpression: any[] = ['case'];
    const subdivisionColorExpression: any[] = ['case'];
    const strokeColorExpression: any[] = ['case'];

    Object.entries(regionLanguageMap).forEach(([region, regionLanguages]) => {
      const primaryLanguage = regionLanguages[0];
      const color = languageColors[primaryLanguage] || 'rgba(128, 128, 128, 0.3)';
      
      countryColorExpression.push(['==', ['get', 'name'], region], color);
      subdivisionColorExpression.push(['==', ['get', 'name'], region], color);
      strokeColorExpression.push(['==', ['get', 'name'], region], color);
    });

    // Add default colors
    countryColorExpression.push('rgba(200, 200, 200, 0.1)');
    subdivisionColorExpression.push('rgba(0, 0, 0, 0)');
    strokeColorExpression.push('rgba(200, 200, 200, 0.3)');

    try {
      // Add country-level language areas
      map.addLayer({
        id: 'language-countries',
        type: 'fill',
        source: 'countries',
        'source-layer': 'administrative',
        paint: {
          'fill-color': countryColorExpression as any,
          'fill-opacity': 0.4
        },
        filter: ['==', 'level', 0] // Country level
      });

      // Add subdivision-level language areas for more precise regions
      map.addLayer({
        id: 'language-subdivisions',
        type: 'fill', 
        source: 'countries',
        'source-layer': 'administrative',
        paint: {
          'fill-color': subdivisionColorExpression as any,
          'fill-opacity': 0.6
        },
        filter: ['==', 'level', 1] // State/province level
      });

      // Add outline for better visibility
      map.addLayer({
        id: 'language-areas-stroke',
        type: 'line',
        source: 'countries',
        'source-layer': 'administrative',
        paint: {
          'line-color': strokeColorExpression as any,
          'line-width': 1,
          'line-opacity': 0.8
        },
        filter: ['in', 'level', 0, 1]
      });
      
      console.log('Successfully added language area layers');
    } catch (error) {
      console.error('Error adding individual layers:', error);
    }
  }
};

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