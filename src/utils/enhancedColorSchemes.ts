
import { FilterType } from '@/types/language';

// Enhanced color schemes for all classification systems
export const enhancedColorSchemes = {
  language: {
    // Major world languages
    'Spanish': '#3B82F6', // Blue
    'English': '#059669', // Emerald
    'Mandarin': '#EF4444', // Red
    'Arabic': '#F59E0B', // Orange
    'Portuguese': '#8B5CF6', // Purple
    'French': '#EC4899', // Pink
    'Russian': '#0891B2', // Cyan
    'German': '#CA8A04', // Yellow
    'Japanese': '#6366F1', // Indigo
    'Korean': '#BE123C', // Rose
    'Italian': '#DC2626', // Dark red
    'Turkish': '#9333EA', // Purple
    'Polish': '#0D9488', // Teal
    'Ukrainian': '#7C3AED', // Violet
    'Romanian': '#F97316', // Dark orange
    'Persian': '#10B981', // Green
    // Chinese languages
    'Yue (Cantonese)': '#EF4444',
    'Wu (Shanghainese)': '#DC2626',
    'Southern Min': '#991B1B',
    'Xiang (Hunanese)': '#7F1D1D',
    'Hakka': '#450A0A',
    'Jin': '#FCA5A5',
    // Indian languages
    'Hindi': '#F59E0B',
    'Bengali': '#F97316',
    'Telugu': '#EA580C',
    'Marathi': '#C2410C',
    'Tamil': '#9A3412',
    'Gujarati': '#7C2D12',
    'Kannada': '#451A03',
    'Malayalam': '#FED7AA',
    'Urdu': '#FDBA74',
    'Punjabi': '#FB923C',
    'Odia (Oriya)': '#F97316',
    'Awadhi': '#EA580C',
    'Bhojpuri': '#C2410C',
    'Maithili': '#9A3412',
    'Sindhi': '#7C2D12',
    // African languages
    'Hausa': '#10B981',
    'Yoruba': '#059669',
    'Igbo': '#047857',
    'Amharic': '#065F46',
    'Oromo': '#064E3B',
    'Fula': '#022C22',
    // Southeast Asian languages
    'Vietnamese': '#8B5CF6',
    'Thai': '#7C3AED',
    'Burmese': '#6D28D9',
    'Tagalog': '#5B21B6',
    'Javanese': '#4C1D95',
    'Sundanese': '#3730A3',
    // Central Asian languages
    'Uzbek': '#EC4899',
    'Azerbaijani': '#DB2777',
    'Kazakh': '#BE185D',
    'Kyrgyz': '#9D174D',
    'Pashto': '#831843',
    // European minority languages
    'Welsh': '#059669',
    'Irish Gaelic': '#047857',
    'Scottish Gaelic': '#065F46',
    'Basque': '#064E3B',
    'Catalan': '#022C22',
    'Galician': '#16A34A',
    'West Frisian': '#15803D',
    'Northern Sami': '#166534',
    'Romansch': '#14532D',
    'Kalmyk': '#052E16',
    'Chechen': '#BBF7D0',
    'default': '#6B7280' // Gray
  },
  family: {
    'Indo-European': '#3B82F6', // Blue
    'Sino-Tibetan': '#EF4444', // Red
    'Afro-Asiatic': '#F59E0B', // Orange
    'Turkic': '#10B981', // Green
    'Language isolate': '#8B5CF6', // Purple
    'Japonic': '#EC4899', // Pink
    'Uralic': '#059669', // Emerald
    'Mongolic': '#0891B2', // Cyan
    'Northeast Caucasian': '#BE123C', // Rose
    'Niger-Congo': '#7C3AED', // Violet
    'Austronesian': '#CA8A04', // Yellow
    'Koreanic': '#F97316', // Dark orange
    'Tai-Kadai': '#DC2626', // Dark red
    'default': '#6B7280' // Gray
  },
  branch: {
    'Romance': '#3B82F6', // Blue
    'Germanic': '#059669', // Emerald
    'Celtic': '#047857', // Dark emerald
    'Slavic': '#065F46', // Very dark emerald
    'Sinitic': '#EF4444', // Red
    'Tibetic': '#DC2626', // Dark red
    'Semitic': '#F59E0B', // Orange
    'Berber': '#8B5CF6', // Purple
    'Southeastern Turkic': '#10B981', // Green
    'Kipchak': '#CA8A04', // Yellow
    'Karluk': '#9333EA', // Purple
    'Japanese': '#EC4899', // Pink
    'Korean': '#F97316', // Dark orange
    'Samic': '#7C3AED', // Violet
    'Western Mongolic': '#0891B2', // Cyan
    'Nakh': '#BE123C', // Rose
    'Volta-Niger': '#6D28D9', // Purple
    'Cushitic': '#5B21B6', // Dark purple
    'Malayo-Polynesian': '#4C1D95', // Very dark purple
    'Tai': '#3730A3', // Indigo
    'Sino-Tibetan': '#1E1B4B', // Very dark indigo
    'Basque': '#064E3B', // Dark green
    'N/A': '#6B7280', // Gray
    'default': '#6B7280'
  },
  endangerment: {
    'safe': '#10B981', // Green
    'vulnerable': '#F59E0B', // Orange
    'definitely_endangered': '#EF4444', // Red
    'severely_endangered': '#DC2626', // Dark red
    'critically_endangered': '#991B1B', // Very dark red
    'extinct': '#374151', // Dark gray
    'default': '#6B7280'
  },
  region: {
    'Europe': '#3B82F6', // Blue
    'East Asia': '#EF4444', // Red
    'South America': '#10B981', // Green
    'Middle East': '#F59E0B', // Orange
    'North Africa': '#F97316', // Dark orange
    'Americas': '#059669', // Emerald
    'Europe, Americas': '#6366F1', // Indigo
    'Middle East, North Africa': '#F97316', // Dark orange
    'Tibet, China': '#DC2626', // Dark red
    'Xinjiang, China': '#10B981', // Green
    'Central Asia': '#CA8A04', // Yellow
    'default': '#6B7280'
  }
};

export const getColorForValue = (filterType: FilterType, value: string): string => {
  const scheme = enhancedColorSchemes[filterType as keyof typeof enhancedColorSchemes];
  if (!scheme) return enhancedColorSchemes.family.default;
  
  return (scheme as any)[value] || (scheme as any).default || enhancedColorSchemes.family.default;
};
