
import { Language } from '@/types/language';

export const europeanLanguages: Language[] = [
  {
    id: 'frisian',
    name: 'West Frisian',
    coordinates: [5.8, 53.2],
    family: 'Indo-European',
    branch: 'Germanic',
    speakers: 470000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'x', 'ɣ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'x', 'ɣ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'y', 'ø'],
    syntaxFeatures: ['SVO', 'Germanic syntax'],
    grammarNotes: 'West Germanic language closely related to English and Low German.',
    country: 'Netherlands',
    alternativeNames: ['Frysk'],
    geographicArea: [
      [[4.9, 52.9], [4.9, 53.5], [6.1, 53.5], [6.1, 52.9], [4.9, 52.9]]
    ]
  },
  {
    id: 'sami',
    name: 'Northern Sami',
    coordinates: [23.0, 69.0],
    family: 'Uralic',
    branch: 'Samic',
    speakers: 20000,
    endangermentStatus: 'definitely_endangered',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'Extended Latin with special characters',
    phonemes: ['p', 't', 'k', 'b', 'd', 'g', 'f', 's', 'ʃ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 't', 'k', 'b', 'd', 'g', 'f', 's', 'ʃ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Uralic language with extensive case system.',
    country: 'Norway/Sweden/Finland',
    alternativeNames: ['Davvisámegiella'],
    geographicArea: [
      [[15.0, 67.0], [15.0, 71.0], [30.0, 71.0], [30.0, 67.0], [15.0, 67.0]]
    ]
  },
  {
    id: 'romansch',
    name: 'Romansch',
    coordinates: [9.5, 46.6],
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 60000,
    endangermentStatus: 'definitely_endangered',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'm', 'n', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'm', 'n', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'Romance syntax'],
    grammarNotes: 'Rhaeto-Romance language spoken in Switzerland.',
    country: 'Switzerland',
    alternativeNames: ['Rumantsch', 'Rhaeto-Romance'],
    geographicArea: [
      [[9.3, 46.4], [9.3, 46.8], [10.5, 46.8], [10.5, 46.4], [9.3, 46.4]]
    ]
  },
  {
    id: 'kalmyk',
    name: 'Kalmyk',
    coordinates: [44.3, 46.3],
    family: 'Mongolic',
    branch: 'Western Mongolic',
    speakers: 80000,
    endangermentStatus: 'severely_endangered',
    region: 'Europe',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Mongolic language spoken in Kalmykia, Russia.',
    country: 'Russia',
    alternativeNames: ['Хальмг келн'],
    geographicArea: [
      [[41.0, 45.0], [41.0, 47.5], [47.0, 47.5], [47.0, 45.0], [41.0, 45.0]]
    ]
  },
  {
    id: 'chechen',
    name: 'Chechen',
    coordinates: [45.7, 43.3],
    family: 'Northeast Caucasian',
    branch: 'Nakh',
    speakers: 1350000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'ʔ', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'ʔ', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'ergative'],
    grammarNotes: 'Northeast Caucasian language with complex phonology.',
    country: 'Russia',
    alternativeNames: ['Нохчийн мотт'],
    geographicArea: [
      [[45.0, 42.8], [45.0, 43.8], [46.2, 43.8], [46.2, 42.8], [45.0, 42.8]]
    ]
  },
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
  {
    id: 'welsh',
    name: 'Welsh',
    coordinates: [-3.4, 52.1],
    family: 'Indo-European',
    branch: 'Celtic',
    speakers: 560000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, Ch, D, Dd, E, F, Ff, G, Ng, H, I, J, L, Ll, M, N, O, P, Ph, R, Rh, S, T, Th, U, W, Y',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'x', 'θ', 'ð', 'm', 'n', 'ŋ', 'l', 'ɬ', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'x', 'θ', 'ð', 'm', 'n', 'ŋ', 'l', 'ɬ', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'y'],
    syntaxFeatures: ['VSO', 'Celtic syntax', 'mutation'],
    grammarNotes: 'Celtic language with initial consonant mutations.',
    country: 'United Kingdom',
    alternativeNames: ['Cymraeg'],
    geographicArea: [
      [[-5.5, 51.3], [-5.5, 53.4], [-2.6, 53.4], [-2.6, 51.3], [-5.5, 51.3]]
    ]
  },
  {
    id: 'irish',
    name: 'Irish Gaelic',
    coordinates: [-8.0, 53.4],
    family: 'Indo-European',
    branch: 'Celtic',
    speakers: 170000,
    endangermentStatus: 'definitely_endangered',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['VSO', 'Celtic syntax', 'mutation'],
    grammarNotes: 'Celtic language with complex initial mutations.',
    country: 'Ireland',
    alternativeNames: ['Gaeilge'],
    geographicArea: [
      [[-10.5, 51.4], [-10.5, 55.4], [-5.4, 55.4], [-5.4, 51.4], [-10.5, 51.4]]
    ]
  },
  {
    id: 'scottish_gaelic',
    name: 'Scottish Gaelic',
    coordinates: [-4.2, 57.5],
    family: 'Indo-European',
    branch: 'Celtic',
    speakers: 57000,
    endangermentStatus: 'definitely_endangered',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['VSO', 'Celtic syntax', 'mutation'],
    grammarNotes: 'Celtic language closely related to Irish.',
    country: 'United Kingdom',
    alternativeNames: ['Gàidhlig'],
    geographicArea: [
      [[-8.5, 55.3], [-8.5, 58.6], [-1.8, 58.6], [-1.8, 55.3], [-8.5, 55.3]]
    ]
  },
  {
    id: 'basque',
    name: 'Basque',
    coordinates: [-1.6, 43.0],
    family: 'Language isolate',
    branch: 'Basque',
    speakers: 750000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'z', 'ʃ', 'x', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'z', 'ʃ', 'x', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'ergative', 'agglutinative'],
    grammarNotes: 'Language isolate with ergative-absolutive alignment.',
    country: 'Spain/France',
    alternativeNames: ['Euskera'],
    geographicArea: [
      [[-3.4, 42.3], [-3.4, 43.5], [0.8, 43.5], [0.8, 42.3], [-3.4, 42.3]]
    ]
  },
  {
    id: 'catalan',
    name: 'Catalan',
    coordinates: [1.5, 41.6],
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 10000000,
    endangermentStatus: 'safe',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, Ç, D, E, F, G, H, I, J, K, L, L·L, M, N, NY, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'm', 'n', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'm', 'n', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'ɛ', 'i', 'o', 'ɔ', 'u'],
    syntaxFeatures: ['SVO', 'Romance syntax'],
    grammarNotes: 'Romance language with distinctive phonological features.',
    country: 'Spain',
    alternativeNames: ['Català'],
    geographicArea: [
      [[-1.2, 40.5], [-1.2, 42.9], [3.3, 42.9], [3.3, 40.5], [-1.2, 40.5]]
    ]
  },
  {
    id: 'galician',
    name: 'Galician',
    coordinates: [-7.9, 42.8],
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 2400000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'm', 'n', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'm', 'n', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'Romance syntax'],
    grammarNotes: 'Romance language closely related to Portuguese.',
    country: 'Spain',
    alternativeNames: ['Galego'],
    geographicArea: [
      [[-9.3, 41.8], [-9.3, 43.8], [-6.7, 43.8], [-6.7, 41.8], [-9.3, 41.8]]
    ]
  }
];
