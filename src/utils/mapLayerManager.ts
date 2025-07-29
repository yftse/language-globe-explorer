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

// Comprehensive region to language mapping for precise administrative boundaries
const regionLanguageMap: Record<string, string[]> = {
  // Countries - Major world languages
  'United States': ['English'],
  'United Kingdom': ['English'],
  'Canada': ['English', 'French'],
  'Australia': ['English'],
  'New Zealand': ['English'],
  'Ireland': ['English'],
  'South Africa': ['English'],
  'Spain': ['Spanish'],
  'Mexico': ['Spanish'],
  'Argentina': ['Spanish'],
  'Colombia': ['Spanish'],
  'Peru': ['Spanish'],
  'Venezuela': ['Spanish'],
  'Chile': ['Spanish'],
  'Ecuador': ['Spanish'],
  'Guatemala': ['Spanish'],
  'Cuba': ['Spanish'],
  'Bolivia': ['Spanish'],
  'Dominican Republic': ['Spanish'],
  'Honduras': ['Spanish'],
  'Paraguay': ['Spanish'],
  'Nicaragua': ['Spanish'],
  'El Salvador': ['Spanish'],
  'Costa Rica': ['Spanish'],
  'Panama': ['Spanish'],
  'Uruguay': ['Spanish'],
  'China': ['Mandarin', 'Yue (Cantonese)', 'Wu (Shanghainese)', 'Xiang (Hunanese)', 'Hakka', 'Jin', 'Southern Min'],
  'Taiwan': ['Mandarin', 'Southern Min', 'Hakka'],
  'Hong Kong': ['Yue (Cantonese)', 'Mandarin', 'English'],
  'Macau': ['Yue (Cantonese)', 'Mandarin'],
  'Singapore': ['Mandarin', 'English'],
  'Malaysia': ['Hakka', 'Yue (Cantonese)', 'Southern Min'],
  'India': ['Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Urdu', 'Kannada', 'Odia (Oriya)', 'Malayalam', 'Punjabi', 'Awadhi', 'Bhojpuri', 'Maithili', 'Sindhi'],
  'Pakistan': ['Urdu', 'Punjabi', 'Sindhi', 'Pashto'],
  'Bangladesh': ['Bengali'],
  'Sri Lanka': ['Tamil'],
  'Nepal': ['Hindi', 'Awadhi', 'Bhojpuri', 'Maithili'],
  'Myanmar': ['Burmese'],
  'Thailand': ['Thai'],
  'Vietnam': ['Vietnamese'],
  'Philippines': ['Tagalog'],
  'Indonesia': ['Javanese', 'Sundanese'],
  'Japan': ['Japanese'],
  'South Korea': ['Korean'],
  'North Korea': ['Korean'],
  'France': ['French'],
  'Germany': ['German'],
  'Italy': ['Italian'],
  'Poland': ['Polish'],
  'Romania': ['Romanian'],
  'Ukraine': ['Ukrainian'],
  'Russia': ['Russian'],
  'Turkey': ['Turkish'],
  'Iran': ['Persian'],
  'Afghanistan': ['Pashto', 'Persian'],
  'Uzbekistan': ['Uzbek'],
  'Azerbaijan': ['Azerbaijani'],
  'Brazil': ['Portuguese'],
  'Portugal': ['Portuguese'],
  'Saudi Arabia': ['Arabic'],
  'Egypt': ['Arabic'],
  'Iraq': ['Arabic'],
  'Syria': ['Arabic'],
  'Jordan': ['Arabic'],
  'Lebanon': ['Arabic'],
  'Morocco': ['Arabic'],
  'Algeria': ['Arabic'],
  'Tunisia': ['Arabic'],
  'Libya': ['Arabic'],
  'Sudan': ['Arabic'],
  'Yemen': ['Arabic'],
  'Oman': ['Arabic'],
  'UAE': ['Arabic'],
  'Kuwait': ['Arabic'],
  'Qatar': ['Arabic'],
  'Bahrain': ['Arabic'],
  'Ethiopia': ['Amharic', 'Oromo'],
  'Nigeria': ['Hausa', 'Yoruba', 'Igbo', 'Fula'],
  'Ghana': ['Hausa'],
  'Mali': ['Fula'],
  'Burkina Faso': ['Fula'],
  'Niger': ['Hausa', 'Fula'],
  'Senegal': ['Fula'],
  'Guinea': ['Fula'],
  'Cameroon': ['Fula'],
  
  // Subdivisions and regions for minority languages
  'Guangdong': ['Yue (Cantonese)', 'Hakka'],
  'Guangxi': ['Yue (Cantonese)'],
  'Fujian': ['Southern Min', 'Hakka'],
  'Jiangsu': ['Wu (Shanghainese)', 'Mandarin'],
  'Zhejiang': ['Wu (Shanghainese)', 'Mandarin'],
  'Shanghai': ['Wu (Shanghainese)', 'Mandarin'],
  'Hunan': ['Xiang (Hunanese)', 'Mandarin'],
  'Shanxi': ['Jin', 'Mandarin'],
  'Inner Mongolia': ['Jin', 'Mandarin'],
  'Hebei': ['Jin', 'Mandarin'],
  'Maharashtra': ['Marathi'],
  'West Bengal': ['Bengali'],
  'Andhra Pradesh': ['Telugu'],
  'Telangana': ['Telugu'],
  'Tamil Nadu': ['Tamil'],
  'Gujarat': ['Gujarati'],
  'Karnataka': ['Kannada'],
  'Kerala': ['Malayalam'],
  'Punjab': ['Punjabi'],
  'Uttar Pradesh': ['Hindi', 'Urdu', 'Awadhi', 'Bhojpuri'],
  'Bihar': ['Hindi', 'Bhojpuri', 'Maithili'],
  'Odisha': ['Odia (Oriya)'],
  'Assam': ['Bengali'],
  'Sindh': ['Sindhi'],
  'Khyber Pakhtunkhwa': ['Pashto'],
  'Balochistan': ['Pashto'],
  'Java': ['Javanese'],
  'West Java': ['Sundanese'],
  'Luzon': ['Tagalog'],
  'Mindanao': ['Tagalog']
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