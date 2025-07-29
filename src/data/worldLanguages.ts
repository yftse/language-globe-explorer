import { Language } from '@/types/language';

export const worldLanguages: Language[] = [
  {
    id: 'english',
    name: 'English',
    coordinates: [-0.1276, 51.5074], // London
    family: 'Indo-European',
    branch: 'Germanic',
    speakers: 1500000000,
    endangermentStatus: 'safe',
    region: 'Global',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['i', 'ɪ', 'e', 'æ', 'a', 'ɒ', 'ɔ', 'u', 'ʊ', 'ʌ', 'ə', 'ɜ'],
    syntaxFeatures: ['SVO', 'analytic'],
    grammarNotes: 'Germanic language with simplified inflection and rich vocabulary.',
    country: 'Multiple',
    alternativeNames: ['English'],
    geographicArea: [
      [[-8.0, 49.5], [-8.0, 61.0], [2.0, 61.0], [2.0, 49.5], [-8.0, 49.5]], // UK & Ireland
      [[-130.0, 20.0], [-130.0, 72.0], [-60.0, 72.0], [-60.0, 20.0], [-130.0, 20.0]], // North America
      [[110.0, -44.0], [110.0, -10.0], [155.0, -10.0], [155.0, -44.0], [110.0, -44.0]], // Australia
      [[-180.0, -48.0], [-180.0, -34.0], [-166.0, -34.0], [-166.0, -48.0], [-180.0, -48.0]], // New Zealand
      [[18.0, -35.0], [18.0, -22.0], [33.0, -22.0], [33.0, -35.0], [18.0, -35.0]] // South Africa
    ]
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
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
    grammarNotes: 'Tonal language with four main tones.',
    country: 'China',
    alternativeNames: ['Standard Chinese', 'Putonghua'],
    geographicArea: [
      [[73.0, 18.0], [73.0, 54.0], [135.0, 54.0], [135.0, 18.0], [73.0, 18.0]]
    ]
  },
  {
    id: 'hindi',
    name: 'Hindi',
    coordinates: [77.1025, 28.7041], // New Delhi
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 600000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Devanagari',
    alphabet: 'Devanagari script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language with complex verb system.',
    country: 'India',
    alternativeNames: ['हिन्दी'],
    geographicArea: [
      [[68.0, 8.0], [68.0, 37.0], [97.0, 37.0], [97.0, 8.0], [68.0, 8.0]]
    ]
  },
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
    grammarNotes: 'Romance language with rich conjugation patterns.',
    country: 'Spain',
    alternativeNames: ['Español', 'Castellano'],
    geographicArea: [
      [[-9.3, 35.9], [-9.3, 43.8], [4.3, 43.8], [4.3, 35.9], [-9.3, 35.9]], // Spain
      [[-118.0, 14.0], [-118.0, 33.0], [-86.0, 33.0], [-86.0, 14.0], [-118.0, 14.0]], // Mexico
      [[-82.0, -56.0], [-82.0, 13.0], [-34.0, 13.0], [-34.0, -56.0], [-82.0, -56.0]] // South America
    ]
  },
  {
    id: 'arabic',
    name: 'Arabic',
    coordinates: [39.8579, 21.4858], // Saudi Arabia
    family: 'Afro-Asiatic',
    branch: 'Semitic',
    speakers: 422000000,
    endangermentStatus: 'safe',
    region: 'Middle East, North Africa',
    script: 'Arabic',
    alphabet: 'Arabic script',
    phonemes: ['b', 't', 'θ', 'd', 'ð', 'k', 'q', 'ʔ', 'f', 's', 'ʃ', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['b', 't', 'θ', 'd', 'ð', 'k', 'q', 'ʔ', 'f', 's', 'ʃ', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u'],
    syntaxFeatures: ['VSO', 'trilateral roots', 'gender agreement'],
    grammarNotes: 'Semitic language with trilateral root system.',
    country: 'Multiple',
    alternativeNames: ['العربية'],
    geographicArea: [
      [[-17.0, 12.0], [-17.0, 37.5], [63.3, 37.5], [63.3, 12.0], [-17.0, 12.0]]
    ]
  },
  {
    id: 'bengali',
    name: 'Bengali',
    coordinates: [90.3563, 23.6850], // Dhaka
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 300000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Bengali',
    alphabet: 'Bengali script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language spoken in Bengal region.',
    country: 'Bangladesh',
    alternativeNames: ['বাংলা'],
    geographicArea: [
      [[88.0, 20.5], [88.0, 26.8], [93.0, 26.8], [93.0, 20.5], [88.0, 20.5]]
    ]
  },
  {
    id: 'portuguese',
    name: 'Portuguese',
    coordinates: [-9.1393, 38.7223], // Lisbon
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 260000000,
    endangermentStatus: 'safe',
    region: 'Europe, Americas, Africa',
    script: 'Latin',
    alphabet: 'Latin script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'gender agreement'],
    grammarNotes: 'Romance language with complex verb system.',
    country: 'Portugal',
    alternativeNames: ['Português'],
    geographicArea: [
      [[-9.5, 36.9], [-9.5, 42.2], [-6.2, 42.2], [-6.2, 36.9], [-9.5, 36.9]], // Portugal
      [[-74.0, -34.0], [-74.0, 5.3], [-35.0, 5.3], [-35.0, -34.0], [-74.0, -34.0]] // Brazil
    ]
  },
  {
    id: 'russian',
    name: 'Russian',
    coordinates: [37.6176, 55.7558], // Moscow
    family: 'Indo-European',
    branch: 'Slavic',
    speakers: 258000000,
    endangermentStatus: 'safe',
    region: 'Europe, Asia',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'case system'],
    grammarNotes: 'Slavic language with complex case system.',
    country: 'Russia',
    alternativeNames: ['Русский'],
    geographicArea: [
      [[19.0, 41.0], [19.0, 82.0], [180.0, 82.0], [180.0, 41.0], [19.0, 41.0]]
    ]
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
    alphabet: 'Mixed writing system',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Complex honorific system with three writing systems.',
    country: 'Japan',
    alternativeNames: ['日本語', 'Nihongo'],
    geographicArea: [
      [[129.0, 31.0], [129.0, 46.0], [146.0, 46.0], [146.0, 31.0], [129.0, 31.0]]
    ]
  },
  {
    id: 'yue',
    name: 'Yue (Cantonese)',
    coordinates: [113.2644, 23.1291], // Guangzhou
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 85000000,
    endangermentStatus: 'safe',
    region: 'East Asia',
    script: 'Chinese characters',
    alphabet: 'Traditional Chinese characters',
    phonemes: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'kʷ', 'kʷʰ', 'f', 's', 'h', 'ts', 'tsʰ', 'm', 'n', 'ŋ', 'l', 'w', 'j'],
    consonants: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'kʷ', 'kʷʰ', 'f', 's', 'h', 'ts', 'tsʰ', 'm', 'n', 'ŋ', 'l', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɵ', 'ɐ', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'tonal', 'isolating'],
    grammarNotes: 'Tonal Chinese variety with 6-9 tones.',
    country: 'China',
    alternativeNames: ['Cantonese', '粵語'],
    geographicArea: [
      [[110.0, 20.0], [110.0, 26.0], [117.0, 26.0], [117.0, 20.0], [110.0, 20.0]]
    ]
  },
  {
    id: 'urdu',
    name: 'Urdu',
    coordinates: [67.0011, 24.8607], // Karachi
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 230000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Arabic',
    alphabet: 'Arabic script (modified)',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language written in Arabic script.',
    country: 'Pakistan',
    alternativeNames: ['اردو'],
    geographicArea: [
      [[60.8, 23.7], [60.8, 37.1], [77.8, 37.1], [77.8, 23.7], [60.8, 23.7]]
    ]
  },
  {
    id: 'korean',
    name: 'Korean',
    coordinates: [126.9780, 37.5665], // Seoul
    family: 'Koreanic',
    branch: 'Korean',
    speakers: 81000000,
    endangermentStatus: 'safe',
    region: 'East Asia',
    script: 'Hangul',
    alphabet: 'Hangul (한글)',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 's', 'ʃ', 'h', 'm', 'n', 'ŋ', 'l', 'ɾ'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 's', 'ʃ', 'h', 'm', 'n', 'ŋ', 'l', 'ɾ'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɯ', 'ʌ'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Agglutinative language with complex honorific system.',
    country: 'South Korea',
    alternativeNames: ['한국어', 'Hangugeo'],
    geographicArea: [
      [[124.0, 33.0], [124.0, 43.0], [131.9, 43.0], [131.9, 33.0], [124.0, 33.0]]
    ]
  },
  {
    id: 'french',
    name: 'French',
    coordinates: [2.3522, 48.8566], // Paris
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 280000000,
    endangermentStatus: 'safe',
    region: 'Europe, Africa, Americas',
    script: 'Latin',
    alphabet: 'Latin script with diacritics',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'm', 'n', 'ɲ', 'l', 'ʁ'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'm', 'n', 'ɲ', 'l', 'ʁ'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'y', 'ø', 'œ', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'gender agreement'],
    grammarNotes: 'Romance language with complex orthography.',
    country: 'France',
    alternativeNames: ['Français'],
    geographicArea: [
      [[-5.1, 41.3], [-5.1, 51.1], [9.6, 51.1], [9.6, 41.3], [-5.1, 41.3]], // France
      [[-74.0, 45.0], [-74.0, 63.0], [-57.0, 63.0], [-57.0, 45.0], [-74.0, 45.0]], // Canada
      [[-18.0, -5.0], [-18.0, 15.0], [52.0, 15.0], [52.0, -5.0], [-18.0, -5.0]] // West/Central Africa
    ]
  },
  {
    id: 'turkish',
    name: 'Turkish',
    coordinates: [32.8597, 39.9334], // Ankara
    family: 'Turkic',
    branch: 'Oghuz',
    speakers: 88000000,
    endangermentStatus: 'safe',
    region: 'Middle East, Europe',
    script: 'Latin',
    alphabet: 'Latin script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y', 'ɯ'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony and agglutination.',
    country: 'Turkey',
    alternativeNames: ['Türkçe'],
    geographicArea: [
      [[26.0, 35.8], [26.0, 42.1], [45.0, 42.1], [45.0, 35.8], [26.0, 35.8]]
    ]
  },
  {
    id: 'vietnamese',
    name: 'Vietnamese',
    coordinates: [105.8542, 21.0285], // Hanoi
    family: 'Austro-Asiatic',
    branch: 'Vietic',
    speakers: 95000000,
    endangermentStatus: 'safe',
    region: 'Southeast Asia',
    script: 'Latin',
    alphabet: 'Latin script with diacritics',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɯ', 'ɤ', 'ɔ', 'ă'],
    syntaxFeatures: ['SVO', 'tonal', 'isolating'],
    grammarNotes: 'Tonal language with 6 tones.',
    country: 'Vietnam',
    alternativeNames: ['Tiếng Việt'],
    geographicArea: [
      [[102.1, 8.6], [102.1, 23.4], [109.5, 23.4], [109.5, 8.6], [102.1, 8.6]]
    ]
  },
  {
    id: 'marathi',
    name: 'Marathi',
    coordinates: [72.8777, 19.0760], // Mumbai
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 83000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Devanagari',
    alphabet: 'Devanagari script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Maharashtra.',
    country: 'India',
    alternativeNames: ['मराठी'],
    geographicArea: [
      [[72.6, 15.6], [72.6, 22.0], [80.9, 22.0], [80.9, 15.6], [72.6, 15.6]]
    ]
  },
  {
    id: 'tamil',
    name: 'Tamil',
    coordinates: [80.2707, 13.0827], // Chennai
    family: 'Dravidian',
    branch: 'Southern Dravidian',
    speakers: 78000000,
    endangermentStatus: 'safe',
    region: 'South Asia, Southeast Asia',
    script: 'Tamil',
    alphabet: 'Tamil script',
    phonemes: ['p', 't', 'k', 'tʃ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'ɳ', 'ɲ', 'ŋ', 'l', 'ɭ', 'r', 'ɻ'],
    consonants: ['p', 't', 'k', 'tʃ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'ɳ', 'ɲ', 'ŋ', 'l', 'ɭ', 'r', 'ɻ'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Dravidian language with ancient literary tradition.',
    country: 'India',
    alternativeNames: ['தமிழ்'],
    geographicArea: [
      [[76.2, 8.1], [76.2, 13.6], [80.3, 13.6], [80.3, 8.1], [76.2, 8.1]]
    ]
  },
  {
    id: 'wu',
    name: 'Wu (Shanghainese)',
    coordinates: [121.4737, 31.2304], // Shanghai
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 81000000,
    endangermentStatus: 'vulnerable',
    region: 'East Asia',
    script: 'Chinese characters',
    alphabet: 'Chinese characters',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɤ', 'ø'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Wu Chinese variety with complex tone system.',
    country: 'China',
    alternativeNames: ['吳語', 'Shanghainese'],
    geographicArea: [
      [[119.0, 27.0], [119.0, 33.0], [122.0, 33.0], [122.0, 27.0], [119.0, 27.0]]
    ]
  },
  {
    id: 'javanese',
    name: 'Javanese',
    coordinates: [110.4203, -7.7956], // Yogyakarta
    family: 'Austronesian',
    branch: 'Malayo-Polynesian',
    speakers: 68000000,
    endangermentStatus: 'safe',
    region: 'Southeast Asia',
    script: 'Javanese, Latin',
    alphabet: 'Javanese script and Latin',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'tʃ', 'dʒ', 'f', 's', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'tʃ', 'dʒ', 'f', 's', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SVO', 'honorific levels'],
    grammarNotes: 'Austronesian language with complex honorific system.',
    country: 'Indonesia',
    alternativeNames: ['Basa Jawa'],
    geographicArea: [
      [[105.8, -8.8], [105.8, -5.9], [114.6, -5.9], [114.6, -8.8], [105.8, -8.8]]
    ]
  },
  {
    id: 'pashto',
    name: 'Pashto',
    coordinates: [69.2075, 34.5553], // Kabul
    family: 'Indo-European',
    branch: 'Iranian',
    speakers: 60000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Arabic',
    alphabet: 'Arabic script (modified)',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'ergative'],
    grammarNotes: 'Iranian language with ergative alignment.',
    country: 'Afghanistan',
    alternativeNames: ['پښتو'],
    geographicArea: [
      [[60.5, 29.4], [60.5, 38.5], [75.0, 38.5], [75.0, 29.4], [60.5, 29.4]]
    ]
  },
  {
    id: 'telugu',
    name: 'Telugu',
    coordinates: [78.4867, 17.3850], // Hyderabad
    family: 'Dravidian',
    branch: 'South-Central Dravidian',
    speakers: 95000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Telugu',
    alphabet: 'Telugu script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Dravidian language of Andhra Pradesh and Telangana.',
    country: 'India',
    alternativeNames: ['తెలుగు'],
    geographicArea: [
      [[76.8, 12.6], [76.8, 20.0], [84.8, 20.0], [84.8, 12.6], [76.8, 12.6]]
    ]
  },
  {
    id: 'xiang',
    name: 'Xiang (Hunanese)',
    coordinates: [112.9820, 28.1941], // Changsha
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 36000000,
    endangermentStatus: 'vulnerable',
    region: 'East Asia',
    script: 'Chinese characters',
    alphabet: 'Chinese characters',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɤ'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Chinese variety spoken in Hunan province.',
    country: 'China',
    alternativeNames: ['湘語', 'Hunanese'],
    geographicArea: [
      [[109.0, 24.6], [109.0, 30.1], [114.2, 30.1], [114.2, 24.6], [109.0, 24.6]]
    ]
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    coordinates: [74.3587, 31.5497], // Lahore
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 113000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Gurmukhi, Shahmukhi',
    alphabet: 'Gurmukhi and Shahmukhi scripts',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Punjab region.',
    country: 'India',
    alternativeNames: ['ਪੰਜਾਬੀ', 'پنجابی'],
    geographicArea: [
      [[73.0, 29.5], [73.0, 34.0], [77.6, 34.0], [77.6, 29.5], [73.0, 29.5]]
    ]
  },
  {
    id: 'hakka',
    name: 'Hakka',
    coordinates: [115.8932, 25.0918], // Meizhou
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 48000000,
    endangermentStatus: 'vulnerable',
    region: 'East Asia, Southeast Asia',
    script: 'Chinese characters',
    alphabet: 'Chinese characters',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 'v', 's', 'h', 'm', 'n', 'ŋ', 'l'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 'v', 's', 'h', 'm', 'n', 'ŋ', 'l'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɨ'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Chinese variety spoken by Hakka people.',
    country: 'China',
    alternativeNames: ['客家話', 'Hak-kâ-fa'],
    geographicArea: [
      [[114.0, 23.0], [114.0, 27.0], [118.0, 27.0], [118.0, 23.0], [114.0, 23.0]]
    ]
  },
  {
    id: 'jin',
    name: 'Jin',
    coordinates: [112.5486, 37.8718], // Taiyuan
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 45000000,
    endangermentStatus: 'vulnerable',
    region: 'East Asia',
    script: 'Chinese characters',
    alphabet: 'Chinese characters',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɤ'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Chinese variety spoken in Shanxi province.',
    country: 'China',
    alternativeNames: ['晉語'],
    geographicArea: [
      [[110.2, 34.3], [110.2, 40.7], [114.6, 40.7], [114.6, 34.3], [110.2, 34.3]]
    ]
  },
  {
    id: 'hausa',
    name: 'Hausa',
    coordinates: [8.5167, 12.0022], // Kano
    family: 'Afro-Asiatic',
    branch: 'Chadic',
    speakers: 70000000,
    endangermentStatus: 'safe',
    region: 'Africa',
    script: 'Arabic, Latin',
    alphabet: 'Arabic and Latin scripts',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'tone'],
    grammarNotes: 'Chadic language widely used as lingua franca.',
    country: 'Nigeria',
    alternativeNames: ['Harshen Hausa'],
    geographicArea: [
      [[2.2, 10.0], [2.2, 16.0], [16.0, 16.0], [16.0, 10.0], [2.2, 10.0]]
    ]
  },
  {
    id: 'yoruba',
    name: 'Yoruba',
    coordinates: [3.3792, 6.5244], // Lagos
    family: 'Niger-Congo',
    branch: 'Volta-Niger',
    speakers: 46000000,
    endangermentStatus: 'safe',
    region: 'Africa',
    script: 'Latin',
    alphabet: 'Latin script with diacritics',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'kp', 'gb', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'kp', 'gb', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Niger-Congo language with complex tone system.',
    country: 'Nigeria',
    alternativeNames: ['Èdè Yorùbá'],
    geographicArea: [
      [[2.0, 6.0], [2.0, 10.0], [6.5, 10.0], [6.5, 6.0], [2.0, 6.0]]
    ]
  },
  {
    id: 'igbo',
    name: 'Igbo',
    coordinates: [7.0498, 5.8851], // Enugu
    family: 'Niger-Congo',
    branch: 'Volta-Niger',
    speakers: 27000000,
    endangermentStatus: 'safe',
    region: 'Africa',
    script: 'Latin',
    alphabet: 'Latin script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'kp', 'gb', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'kp', 'gb', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Niger-Congo language with complex verb system.',
    country: 'Nigeria',
    alternativeNames: ['Asụsụ Igbo'],
    geographicArea: [
      [[6.0, 4.8], [6.0, 7.2], [9.0, 7.2], [9.0, 4.8], [6.0, 4.8]]
    ]
  },
  {
    id: 'german',
    name: 'German',
    coordinates: [13.4050, 52.5200], // Berlin
    family: 'Indo-European',
    branch: 'Germanic',
    speakers: 132000000,
    endangermentStatus: 'safe',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'Latin script with umlauts',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SOV', 'case system'],
    grammarNotes: 'Germanic language with complex case system.',
    country: 'Germany',
    alternativeNames: ['Deutsch'],
    geographicArea: [
      [[5.9, 47.3], [5.9, 55.1], [15.0, 55.1], [15.0, 47.3], [5.9, 47.3]]
    ]
  },
  {
    id: 'italian',
    name: 'Italian',
    coordinates: [12.4964, 41.9028], // Rome
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 65000000,
    endangermentStatus: 'safe',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'Latin script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'ts', 'dz', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'ts', 'dz', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'gender agreement'],
    grammarNotes: 'Romance language with rich phonological system.',
    country: 'Italy',
    alternativeNames: ['Italiano'],
    geographicArea: [
      [[6.6, 36.6], [6.6, 47.1], [18.5, 47.1], [18.5, 36.6], [6.6, 36.6]]
    ]
  },
  {
    id: 'romanian',
    name: 'Romanian',
    coordinates: [26.1025, 44.4268], // Bucharest
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 22000000,
    endangermentStatus: 'safe',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'Latin script with diacritics',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'ts', 'tʃ', 'dʒ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'ts', 'tʃ', 'dʒ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ə', 'ɨ'],
    syntaxFeatures: ['SVO', 'case remnants'],
    grammarNotes: 'Eastern Romance language with Slavic influences.',
    country: 'Romania',
    alternativeNames: ['Română'],
    geographicArea: [
      [[20.3, 43.6], [20.3, 48.3], [29.7, 48.3], [29.7, 43.6], [20.3, 43.6]]
    ]
  },
  {
    id: 'ukrainian',
    name: 'Ukrainian',
    coordinates: [30.5234, 50.4501], // Kyiv
    family: 'Indo-European',
    branch: 'Slavic',
    speakers: 37000000,
    endangermentStatus: 'safe',
    region: 'Europe',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'case system'],
    grammarNotes: 'Slavic language closely related to Russian.',
    country: 'Ukraine',
    alternativeNames: ['Українська'],
    geographicArea: [
      [[22.1, 44.4], [22.1, 52.4], [40.2, 52.4], [40.2, 44.4], [22.1, 44.4]]
    ]
  },
  {
    id: 'polish',
    name: 'Polish',
    coordinates: [21.0122, 52.2297], // Warsaw
    family: 'Indo-European',
    branch: 'Slavic',
    speakers: 45000000,
    endangermentStatus: 'safe',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'Latin script with diacritics',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'x', 'h', 'm', 'n', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'x', 'h', 'm', 'n', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'case system'],
    grammarNotes: 'West Slavic language with complex case system.',
    country: 'Poland',
    alternativeNames: ['Polski'],
    geographicArea: [
      [[14.1, 49.0], [14.1, 54.8], [24.1, 54.8], [24.1, 49.0], [14.1, 49.0]]
    ]
  },
  {
    id: 'persian',
    name: 'Persian',
    coordinates: [53.6880, 32.4279], // Isfahan
    family: 'Indo-European',
    branch: 'Iranian',
    speakers: 110000000,
    endangermentStatus: 'safe',
    region: 'Middle East, Central Asia',
    script: 'Arabic',
    alphabet: 'Arabic script (modified)',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'ezafe construction'],
    grammarNotes: 'Iranian language with rich literary tradition.',
    country: 'Iran',
    alternativeNames: ['فارسی', 'Fārsi'],
    geographicArea: [
      [[44.0, 25.1], [44.0, 39.8], [63.3, 39.8], [63.3, 25.1], [44.0, 25.1]]
    ]
  },
  {
    id: 'thai',
    name: 'Thai',
    coordinates: [100.9925, 15.8700], // Nakhon Ratchasima
    family: 'Kra-Dai',
    branch: 'Tai',
    speakers: 60000000,
    endangermentStatus: 'safe',
    region: 'Southeast Asia',
    script: 'Thai',
    alphabet: 'Thai script',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 's', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 'f', 's', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɛ', 'ɔ', 'ɯ', 'ə'],
    syntaxFeatures: ['SVO', 'tonal', 'isolating'],
    grammarNotes: 'Tonal language with 5 tones.',
    country: 'Thailand',
    alternativeNames: ['ภาษาไทย'],
    geographicArea: [
      [[97.3, 5.6], [97.3, 20.5], [105.6, 20.5], [105.6, 5.6], [97.3, 5.6]]
    ]
  },
  {
    id: 'burmese',
    name: 'Burmese',
    coordinates: [96.1951, 21.9162], // Mandalay
    family: 'Sino-Tibetan',
    branch: 'Lolo-Burmese',
    speakers: 33000000,
    endangermentStatus: 'safe',
    region: 'Southeast Asia',
    script: 'Burmese',
    alphabet: 'Burmese script',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 's', 'ʃ', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'd', 'k', 'kʰ', 'g', 's', 'ʃ', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SOV', 'tonal'],
    grammarNotes: 'Sino-Tibetan language with complex tone system.',
    country: 'Myanmar',
    alternativeNames: ['မြန်မာဘာသာ'],
    geographicArea: [
      [[92.2, 9.8], [92.2, 28.5], [101.2, 28.5], [101.2, 9.8], [92.2, 9.8]]
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
    id: 'gujarati',
    name: 'Gujarati',
    coordinates: [72.5850, 23.0225], // Ahmedabad
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 56000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Gujarati',
    alphabet: 'Gujarati script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Gujarat state.',
    country: 'India',
    alternativeNames: ['ગુજરાતી'],
    geographicArea: [
      [[68.2, 20.1], [68.2, 24.7], [74.5, 24.7], [74.5, 20.1], [68.2, 20.1]]
    ]
  },
  {
    id: 'kannada',
    name: 'Kannada',
    coordinates: [77.5946, 12.9716], // Bangalore
    family: 'Dravidian',
    branch: 'Southern Dravidian',
    speakers: 44000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Kannada',
    alphabet: 'Kannada script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Dravidian language of Karnataka state.',
    country: 'India',
    alternativeNames: ['ಕನ್ನಡ'],
    geographicArea: [
      [[74.0, 11.5], [74.0, 18.5], [78.6, 18.5], [78.6, 11.5], [74.0, 11.5]]
    ]
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    coordinates: [76.2711, 10.8505], // Kochi
    family: 'Dravidian',
    branch: 'Southern Dravidian',
    speakers: 35000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Malayalam',
    alphabet: 'Malayalam script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Dravidian language of Kerala state.',
    country: 'India',
    alternativeNames: ['മലയാളം'],
    geographicArea: [
      [[74.9, 8.2], [74.9, 12.8], [77.4, 12.8], [77.4, 8.2], [74.9, 8.2]]
    ]
  },
  {
    id: 'tagalog',
    name: 'Tagalog',
    coordinates: [121.0244, 14.5995], // Quezon City
    family: 'Austronesian',
    branch: 'Malayo-Polynesian',
    speakers: 28000000,
    endangermentStatus: 'safe',
    region: 'Southeast Asia',
    script: 'Latin',
    alphabet: 'Latin script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['VSO', 'focus system'],
    grammarNotes: 'Austronesian language with complex focus system.',
    country: 'Philippines',
    alternativeNames: ['Filipino'],
    geographicArea: [
      [[116.9, 4.6], [116.9, 21.1], [126.6, 21.1], [126.6, 4.6], [116.9, 4.6]]
    ]
  },
  {
    id: 'azerbaijani',
    name: 'Azerbaijani',
    coordinates: [49.8671, 40.4093], // Baku
    family: 'Turkic',
    branch: 'Oghuz',
    speakers: 23000000,
    endangermentStatus: 'safe',
    region: 'Middle East, Europe',
    script: 'Latin',
    alphabet: 'Latin script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Turkic language with agglutinative morphology.',
    country: 'Azerbaijan',
    alternativeNames: ['Azərbaycan dili'],
    geographicArea: [
      [[44.8, 38.4], [44.8, 41.9], [50.4, 41.9], [50.4, 38.4], [44.8, 38.4]]
    ]
  },
  {
    id: 'amharic',
    name: 'Amharic',
    coordinates: [38.7469, 9.1450], // Addis Ababa
    family: 'Afro-Asiatic',
    branch: 'Semitic',
    speakers: 32000000,
    endangermentStatus: 'safe',
    region: 'Africa',
    script: 'Ge\'ez',
    alphabet: 'Ge\'ez script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'ʔ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'ʔ', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'trilateral roots'],
    grammarNotes: 'Semitic language with ancient writing system.',
    country: 'Ethiopia',
    alternativeNames: ['አማርኛ'],
    geographicArea: [
      [[32.9, 3.4], [32.9, 18.0], [48.0, 18.0], [48.0, 3.4], [32.9, 3.4]]
    ]
  },
  {
    id: 'oromo',
    name: 'Oromo',
    coordinates: [38.7469, 9.1450], // Addis Ababa
    family: 'Afro-Asiatic',
    branch: 'Cushitic',
    speakers: 37000000,
    endangermentStatus: 'safe',
    region: 'Africa',
    script: 'Latin',
    alphabet: 'Latin script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Cushitic language with complex verb system.',
    country: 'Ethiopia',
    alternativeNames: ['Afaan Oromoo'],
    geographicArea: [
      [[32.9, 3.4], [32.9, 18.0], [48.0, 18.0], [48.0, 3.4], [32.9, 3.4]]
    ]
  },
  {
    id: 'southern_min',
    name: 'Southern Min',
    coordinates: [118.1689, 24.4798], // Xiamen
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 49000000,
    endangermentStatus: 'vulnerable',
    region: 'East Asia, Southeast Asia',
    script: 'Chinese characters',
    alphabet: 'Chinese characters',
    phonemes: ['p', 'pʰ', 'b', 't', 'tʰ', 'k', 'kʰ', 'g', 'f', 's', 'h', 'ts', 'tsʰ', 'm', 'n', 'ŋ', 'l'],
    consonants: ['p', 'pʰ', 'b', 't', 'tʰ', 'k', 'kʰ', 'g', 'f', 's', 'h', 'ts', 'tsʰ', 'm', 'n', 'ŋ', 'l'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ɔ'],
    syntaxFeatures: ['SVO', 'tonal'],
    grammarNotes: 'Chinese variety with complex tone system.',
    country: 'China',
    alternativeNames: ['閩南語', 'Hokkien'],
    geographicArea: [
      [[117.0, 23.0], [117.0, 27.0], [120.5, 27.0], [120.5, 23.0], [117.0, 23.0]]
    ]
  },
  {
    id: 'sundanese',
    name: 'Sundanese',
    coordinates: [107.6098, -6.9175], // Bandung
    family: 'Austronesian',
    branch: 'Malayo-Polynesian',
    speakers: 40000000,
    endangermentStatus: 'safe',
    region: 'Southeast Asia',
    script: 'Latin, Sundanese',
    alphabet: 'Latin and Sundanese scripts',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'i', 'u', 'e', 'o', 'ɛ', 'ɔ'],
    syntaxFeatures: ['SVO', 'honorific levels'],
    grammarNotes: 'Austronesian language with honorific system.',
    country: 'Indonesia',
    alternativeNames: ['Basa Sunda'],
    geographicArea: [
      [[105.0, -7.8], [105.0, -5.9], [109.0, -5.9], [109.0, -7.8], [105.0, -7.8]]
    ]
  },
  {
    id: 'fula',
    name: 'Fula',
    coordinates: [0.0, 12.0], // West Africa
    family: 'Niger-Congo',
    branch: 'Atlantic',
    speakers: 25000000,
    endangermentStatus: 'safe',
    region: 'Africa',
    script: 'Latin, Arabic',
    alphabet: 'Latin and Arabic scripts',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'h', 'm', 'n', 'ɲ', 'ŋ', 'l', 'r', 'w', 'j'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'noun classes'],
    grammarNotes: 'Niger-Congo language with complex noun class system.',
    country: 'Multiple',
    alternativeNames: ['Fulfulde', 'Pulaar'],
    geographicArea: [
      [[-17.0, 9.0], [-17.0, 16.0], [15.0, 16.0], [15.0, 9.0], [-17.0, 9.0]]
    ]
  },
  {
    id: 'awadhi',
    name: 'Awadhi',
    coordinates: [81.8463, 26.8467], // Lucknow
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 38000000,
    endangermentStatus: 'vulnerable',
    region: 'South Asia',
    script: 'Devanagari',
    alphabet: 'Devanagari script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Uttar Pradesh.',
    country: 'India',
    alternativeNames: ['अवधी'],
    geographicArea: [
      [[80.0, 24.0], [80.0, 28.5], [84.0, 28.5], [84.0, 24.0], [80.0, 24.0]]
    ]
  },
  {
    id: 'bhojpuri',
    name: 'Bhojpuri',
    coordinates: [83.9777, 25.5941], // Varanasi
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 51000000,
    endangermentStatus: 'vulnerable',
    region: 'South Asia',
    script: 'Devanagari',
    alphabet: 'Devanagari script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Bihar and eastern Uttar Pradesh.',
    country: 'India',
    alternativeNames: ['भोजपुरी'],
    geographicArea: [
      [[82.0, 24.0], [82.0, 27.5], [88.0, 27.5], [88.0, 24.0], [82.0, 24.0]]
    ]
  },
  {
    id: 'maithili',
    name: 'Maithili',
    coordinates: [85.9180, 26.1197], // Darbhanga
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 34000000,
    endangermentStatus: 'vulnerable',
    region: 'South Asia',
    script: 'Devanagari',
    alphabet: 'Devanagari script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Mithila region.',
    country: 'India',
    alternativeNames: ['मैथिली'],
    geographicArea: [
      [[85.0, 25.5], [85.0, 27.5], [87.5, 27.5], [87.5, 25.5], [85.0, 25.5]]
    ]
  },
  {
    id: 'odia',
    name: 'Odia (Oriya)',
    coordinates: [85.8245, 20.9517], // Bhubaneswar
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 37000000,
    endangermentStatus: 'safe',
    region: 'South Asia',
    script: 'Odia',
    alphabet: 'Odia script',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Odisha state.',
    country: 'India',
    alternativeNames: ['ଓଡ଼ିଆ'],
    geographicArea: [
      [[81.4, 17.8], [81.4, 22.6], [87.5, 22.6], [87.5, 17.8], [81.4, 17.8]]
    ]
  },
  {
    id: 'sindhi',
    name: 'Sindhi',
    coordinates: [68.3773, 25.3960], // Hyderabad, Pakistan
    family: 'Indo-European',
    branch: 'Indo-Aryan',
    speakers: 25000000,
    endangermentStatus: 'vulnerable',
    region: 'South Asia',
    script: 'Arabic, Devanagari',
    alphabet: 'Arabic and Devanagari scripts',
    phonemes: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'pʰ', 'b', 'bʰ', 't', 'tʰ', 'd', 'dʰ', 'k', 'kʰ', 'g', 'gʰ', 's', 'ʃ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'case marking'],
    grammarNotes: 'Indo-Aryan language of Sindh region.',
    country: 'Pakistan',
    alternativeNames: ['سنڌي', 'सिन्धी'],
    geographicArea: [
      [[66.0, 23.5], [66.0, 28.5], [71.0, 28.5], [71.0, 23.5], [66.0, 23.5]]
    ]
  }
];