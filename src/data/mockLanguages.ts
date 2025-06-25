
import { Language } from '@/types/language';

export const mockLanguages: Language[] = [
  {
    id: 'spanish',
    name: 'Spanish',
    coordinates: [-3.7038, 40.4168], // Madrid
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 500000000,
    endangermentStatus: 'safe',
    region: 'Europe, Americas',
    script: 'Latin',
    alphabet: 'A, B, C, CH, D, E, F, G, H, I, J, K, L, LL, M, N, Ñ, O, P, Q, R, RR, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'θ', 's', 'x', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'θ', 's', 'x', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'gender agreement', 'verb conjugation'],
    grammarNotes: 'Highly inflected verb system with rich conjugation patterns. Grammatical gender for nouns.',
    country: 'Spain',
    alternativeNames: ['Castilian', 'Español', 'Castellano']
  },
  {
    id: 'mandarin',
    name: 'Mandarin Chinese',
    coordinates: [116.4074, 39.9042], // Beijing
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 918000000,
    endangermentStatus: 'safe',
    region: 'East Asia',
    script: 'Chinese characters',
    alphabet: 'Logographic system with thousands of characters',
    phonemes: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'f', 's', 'ʂ', 'x', 'tʂ', 'tʂʰ', 'm', 'n', 'ŋ', 'l', 'ɻ'],
    consonants: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'f', 's', 'ʂ', 'x', 'tʂ', 'tʂʰ', 'm', 'n', 'ŋ', 'l', 'ɻ'],
    vowels: ['a', 'ə', 'e', 'i', 'o', 'u', 'y'],
    syntaxFeatures: ['SVO', 'tonal', 'isolating'],
    grammarNotes: 'Tonal language with four main tones. Minimal inflection, meaning conveyed through word order and context.',
    country: 'China',
    alternativeNames: ['Standard Chinese', 'Putonghua', '普通话']
  },
  {
    id: 'quechua',
    name: 'Quechua',
    coordinates: [-71.9675, -13.5320], // Cusco
    family: 'Quechuan',
    branch: 'Quechua I',
    speakers: 8000000,
    endangermentStatus: 'vulnerable',
    region: 'South America',
    script: 'Latin',
    alphabet: 'A, CH, CH\', E, H, I, K, K\', L, LL, M, N, Ñ, O, P, P\', Q, Q\', R, S, T, T\', U, W, Y',
    phonemes: ['p', 'pʼ', 't', 'tʼ', 'k', 'kʼ', 'q', 'qʼ', 's', 'ʃ', 'χ', 'h', 'm', 'n', 'ɲ', 'l', 'ʎ', 'ɾ'],
    consonants: ['p', 'pʼ', 't', 'tʼ', 'k', 'kʼ', 'q', 'qʼ', 's', 'ʃ', 'χ', 'h', 'm', 'n', 'ɲ', 'l', 'ʎ', 'ɾ'],
    vowels: ['a', 'i', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative', 'evidentiality'],
    grammarNotes: 'Agglutinative language with extensive use of suffixes. Features evidentiality markers.',
    country: 'Peru',
    alternativeNames: ['Runasimi', 'Kichwa']
  },
  {
    id: 'basque',
    name: 'Basque',
    coordinates: [-2.9253, 43.2630], // Bilbao
    family: 'Language isolate',
    branch: 'N/A',
    speakers: 750000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, X, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'x', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'x', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'ergative', 'agglutinative'],
    grammarNotes: 'Ergative-absolutive alignment. Complex verb agreement system. Language isolate with no known relatives.',
    country: 'Spain/France',
    alternativeNames: ['Euskera', 'Euskara']
  },
  {
    id: 'arabic',
    name: 'Modern Standard Arabic',
    coordinates: [39.8579, 21.4858], // Saudi Arabia
    family: 'Afro-Asiatic',
    branch: 'Semitic',
    speakers: 422000000,
    endangermentStatus: 'safe',
    region: 'Middle East, North Africa',
    script: 'Arabic',
    alphabet: 'ا، ب، ت، ث، ج، ح، خ، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ع، غ، ف، ق، ك، ل، م، ن، ه، و، ي',
    phonemes: ['b', 't', 'θ', 'd', 'ð', 'k', 'q', 'ʔ', 'f', 's', 'ʃ', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['b', 't', 'θ', 'd', 'ð', 'k', 'q', 'ʔ', 'f', 's', 'ʃ', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u'],
    syntaxFeatures: ['VSO', 'trilateral roots', 'gender agreement'],
    grammarNotes: 'Semitic language with trilateral root system. Rich morphological system with extensive derivation patterns.',
    country: 'Multiple',
    alternativeNames: ['العربية', 'al-ʿArabiyyah']
  },
  {
    id: 'japanese',
    name: 'Japanese',
    coordinates: [139.6917, 35.6895], // Tokyo
    family: 'Japonic',
    branch: 'Japanese',
    speakers: 125000000,
    endangermentStatus: 'safe',
    region: 'East Asia',
    script: 'Hiragana, Katakana, Kanji',
    alphabet: 'ひらがな (Hiragana), カタカナ (Katakana), 漢字 (Kanji)',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Complex honorific system. Three writing systems used simultaneously. Agglutinative with extensive verb conjugation.',
    country: 'Japan',
    alternativeNames: ['日本語', 'Nihongo']
  }
];

export const classificationFilters = [
  { id: 'family', name: 'Language Family', description: 'Group by major language families' },
  { id: 'branch', name: 'Language Branch', description: 'Sub-groups within language families' },
  { id: 'phonemes', name: 'Shared Phonemes', description: 'Common sound systems' },
  { id: 'consonants', name: 'Consonant Systems', description: 'Consonant inventories' },
  { id: 'vowels', name: 'Vowel Systems', description: 'Vowel inventories' },
  { id: 'syntax', name: 'Syntax Features', description: 'Word order and grammatical patterns' },
  { id: 'endangerment', name: 'Endangerment Level', description: 'Conservation status' },
  { id: 'region', name: 'Geographic Region', description: 'Continental groupings' }
];
