import { Language } from '@/types/language';

export const centralAsianLanguages: Language[] = [
  {
    id: 'kazakh',
    name: 'Kazakh',
    coordinates: [66.9, 48.0],
    family: 'Turkic',
    branch: 'Kipchak',
    speakers: 13000000,
    endangermentStatus: 'safe',
    region: 'Central Asia',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony.',
    country: 'Kazakhstan',
    alternativeNames: ['Қазақ тілі'],
    geographicArea: [
      [[46.5, 40.6], [46.5, 55.4], [87.3, 55.4], [87.3, 40.6], [46.5, 40.6]]
    ]
  },
  {
    id: 'uzbek',
    name: 'Uzbek',
    coordinates: [64.6, 41.4],
    family: 'Turkic',
    branch: 'Karluk',
    speakers: 34000000,
    endangermentStatus: 'safe',
    region: 'Central Asia',
    script: 'Latin',
    alphabet: 'Latin script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Turkic language of the Karluk branch.',
    country: 'Uzbekistan',
    alternativeNames: ['Oʻzbek tili'],
    geographicArea: [
      [[55.9, 37.2], [55.9, 45.6], [73.1, 45.6], [73.1, 37.2], [55.9, 37.2]]
    ]
  },
  {
    id: 'kyrgyz',
    name: 'Kyrgyz',
    coordinates: [74.6, 41.2],
    family: 'Turkic',
    branch: 'Kipchak',
    speakers: 4300000,
    endangermentStatus: 'safe',
    region: 'Central Asia',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony system.',
    country: 'Kyrgyzstan',
    alternativeNames: ['Кыргыз тили'],
    geographicArea: [
      [[69.3, 39.2], [69.3, 43.2], [80.3, 43.2], [80.3, 39.2], [69.3, 39.2]]
    ]
  },
];