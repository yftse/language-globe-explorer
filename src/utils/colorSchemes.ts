
import { FilterType } from '@/types/language';

// Color schemes for different classification systems
export const colorSchemes = {
  family: {
    'Indo-European': '#3B82F6', // Blue
    'Sino-Tibetan': '#EF4444', // Red
    'Afro-Asiatic': '#F59E0B', // Orange
    'Quechuan': '#10B981', // Green
    'Language isolate': '#8B5CF6', // Purple
    'Japonic': '#EC4899', // Pink
    'default': '#6B7280' // Gray
  },
  branch: {
    'Romance': '#3B82F6',
    'Sinitic': '#EF4444',
    'Semitic': '#F59E0B',
    'Quechua I': '#10B981',
    'Japanese': '#EC4899',
    'N/A': '#8B5CF6',
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
    'Europe': '#3B82F6',
    'East Asia': '#EF4444',
    'South America': '#10B981',
    'Middle East': '#F59E0B',
    'North Africa': '#F59E0B',
    'Americas': '#10B981',
    'Europe, Americas': '#6366F1',
    'Middle East, North Africa': '#F97316',
    'default': '#6B7280'
  }
};

export const getColorForValue = (filterType: FilterType, value: string): string => {
  const scheme = colorSchemes[filterType as keyof typeof colorSchemes];
  if (!scheme) return colorSchemes.family.default;
  
  return (scheme as any)[value] || (scheme as any).default || colorSchemes.family.default;
};
