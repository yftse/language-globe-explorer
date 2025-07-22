
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
    alternativeNames: ['Castilian', 'Español', 'Castellano'],
    // Geographic coverage area for Spain and Latin America
    geographicArea: [
      [[-9.034818,41.880571],[-8.984433,42.592775],[-9.392884,43.026625],[-7.97819,43.748338],
       [-6.754492,43.567909],[-5.411886,43.57424],[-4.347843,43.403449],[-3.517532,43.455901],
       [-1.901351,43.422802],[-1.502771,43.034014],[0.338047,42.579546],[0.701591,42.795734],
       [1.826793,42.343385],[2.985999,42.473015],[3.039484,41.89212],[2.091842,41.226089],
       [0.810525,41.014732],[0.721331,40.678318],[0.106692,40.123934],[-0.278711,39.309978],
       [0.111291,38.738514],[-0.467124,38.292366],[-0.683389,37.642354],[-1.438382,37.443064],
       [-2.146453,36.674144],[-3.415781,36.6589],[-4.368901,36.677839],[-4.995219,36.324708],
       [-5.37716,35.94685],[-5.866432,36.029817],[-6.236694,36.367677],[-6.520191,36.942913],
       [-7.453726,37.097788],[-7.537105,37.428904],[-7.166508,37.803894],[-7.029281,38.075764],
       [-7.374092,38.373059],[-7.098037,39.030073],[-7.498632,39.629571],[-7.066592,39.711892],
       [-7.026413,40.184524],[-6.86402,40.330872],[-6.851127,41.111083],[-6.389088,41.381815],
       [-6.668606,41.883387],[-7.251309,41.918346],[-7.422513,41.792075],[-8.013175,41.790886],
       [-8.263857,42.280469],[-8.671946,42.134689],[-9.034818,41.880571]], // Spain
      [[-97.140008,25.869997],[-97.528072,24.992144],[-97.702946,24.272343],[-97.776042,22.93258],
       [-97.872367,22.444212],[-97.699044,21.898689],[-97.38896,21.411019],[-97.189333,20.635433],
       [-96.525576,19.890931],[-96.292127,19.320371],[-95.900885,18.828024],[-94.839063,18.562717],
       [-94.42573,18.144371],[-93.548651,18.423837],[-92.786114,18.524839],[-92.037348,18.704569],
       [-91.407903,18.876083],[-90.77187,19.28412],[-90.53359,19.867418],[-90.451476,20.707522],
       [-90.278618,20.999855],[-89.601321,21.261726],[-88.543866,21.493675],[-87.658417,21.458846],
       [-87.05189,21.543543],[-86.811982,21.331515],[-86.845908,20.849865],[-87.383291,20.255405],
       [-87.621054,19.646553],[-87.43675,19.472403],[-87.58656,19.04013],[-87.837191,18.259816],
       [-88.090664,18.516648],[-88.300031,18.499982],[-88.490123,18.486831],[-88.848344,17.883198],
       [-89.029857,18.001511],[-89.150909,17.955468],[-89.14308,17.808319],[-90.067934,17.819326],
       [-91.00152,17.817595],[-91.002269,17.254658],[-91.453921,17.252177],[-91.08167,16.918477],
       [-90.711822,16.687483],[-90.600847,16.470778],[-90.438867,16.41011],[-90.464473,16.069562],
       [-91.74796,16.066565],[-92.229249,15.251447],[-92.087216,15.064585],[-92.20323,14.830103],
       [-92.22775,14.538829],[-93.359464,15.61543],[-93.875169,15.940164],[-94.691656,16.200975],
       [-95.250227,16.128318],[-96.053382,15.752088],[-96.557434,15.653515],[-97.263592,15.917065],
       [-98.01303,16.107312],[-98.947676,16.566043],[-99.697397,16.706164],[-100.829499,17.171071],
       [-101.666089,17.649026],[-101.918528,17.91609],[-102.478132,17.975751],[-103.50099,18.292295],
       [-103.917527,18.748572],[-104.99201,19.316134],[-105.493038,19.946767],[-105.731396,20.434102],
       [-105.397773,20.531719],[-105.500661,20.816895],[-105.270752,21.076285],[-105.265817,21.422104],
       [-105.603161,21.871146],[-105.693414,22.26908],[-106.028716,22.773752],[-106.90998,23.767774],
       [-107.915449,24.548915],[-108.401905,25.172314],[-109.260199,25.580609],[-109.444089,25.824884],
       [-109.291644,26.442934],[-109.801458,26.676176],[-110.391732,27.162115],[-110.641019,27.859876],
       [-111.178919,27.941241],[-111.759607,28.467953],[-112.228235,28.954409],[-112.271824,29.266844],
       [-112.809594,30.021114],[-113.163811,30.786881],[-113.148669,31.170966],[-113.871881,31.567608],
       [-114.205737,31.524045],[-114.776451,31.799532],[-114.9367,31.393485],[-114.771232,30.913617],
       [-114.673899,30.162681],[-114.330974,29.750432],[-113.588875,29.061611],[-113.424053,28.826174],
       [-113.271969,28.754783],[-113.140039,28.411289],[-112.962298,28.42519],[-112.761587,27.780217],
       [-112.457911,27.525814],[-112.244952,27.171727],[-111.616489,26.662817],[-111.284675,25.73259],
       [-110.987819,25.294606],[-110.710007,24.826004],[-110.655049,24.298595],[-110.172856,24.265548],
       [-109.771847,23.811183],[-109.409104,23.364672],[-109.433392,23.185588],[-109.854219,22.818272],
       [-110.031392,22.823078],[-110.295071,23.430973],[-110.949501,24.000964],[-111.670568,24.484423],
       [-112.182036,24.738413],[-112.148989,25.470125],[-112.300711,26.012004],[-112.777297,26.32196],
       [-113.464671,26.768186],[-113.59673,26.63946],[-113.848937,26.900064],[-114.465747,27.14209],
       [-115.055142,27.722727],[-114.982253,27.7982],[-114.570366,27.741485],[-114.199329,28.115003],
       [-114.162018,28.566112],[-114.931842,29.279479],[-115.518654,29.556362],[-115.887365,30.180794],
       [-116.25835,30.836464],[-116.721526,31.635744],[-117.12776,32.53534],[-115.99135,32.61239],
       [-114.72139,32.72083],[-114.815,32.52528],[-113.30498,32.03914],[-111.02361,31.33472],
       [-109.035,31.34194],[-108.24194,31.34222],[-108.24,31.754854],[-106.50759,31.75452],
       [-106.1429,31.39995],[-105.63159,31.08383],[-105.03737,30.64402],[-104.70575,30.12173],
       [-104.45697,29.57196],[-103.94,29.27],[-103.11,28.97],[-102.48,29.76],[-101.6624,29.7793],
       [-100.9576,29.38071],[-100.45584,28.69612],[-100.11,28.11],[-99.52,27.54],[-99.3,26.84],
       [-99.02,26.37],[-98.24,26.06],[-97.53,25.84],[-97.140008,25.869997]], // Mexico
      [[-81.4, -4.2], [-81.4, 12.4], [-66.9, 12.4], [-66.9, -4.2], [-81.4, -4.2]], // Northern South America
      [[-74.0, -55.1], [-74.0, -21.8], [-53.6, -21.8], [-53.6, -55.1], [-74.0, -55.1]]  // Southern South America
    ]
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
    alternativeNames: ['Standard Chinese', 'Putonghua', '普通话'],
    // Geographic coverage area for China (excluding Tibet, Xinjiang special cases)
    geographicArea: [
        [[110.339188,18.678395],[109.47521,18.197701],[108.655208,18.507682],[108.626217,19.367888],[109.119056,19.821039],[110.211599,20.101254],[110.786551,20.077534],[111.010051,19.69593],[110.570647,19.255879],[110.339188,18.678395]]
    ]
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
    alternativeNames: ['العربية', 'al-ʿArabiyyah'],
    // Geographic coverage area for MENA region
    geographicArea: [
      [[-17.1, 12.0], [-17.1, 37.5], [63.3, 37.5], [63.3, 12.0], [-17.1, 12.0]]
    ]
  },
  {
    id: 'berber',
    name: 'Berber (Tamazight)',
    coordinates: [-6.8498, 34.0209], // Morocco
    family: 'Afro-Asiatic',
    branch: 'Berber',
    speakers: 25000000,
    endangermentStatus: 'vulnerable',
    region: 'North Africa',
    script: 'Tifinagh, Arabic, Latin',
    alphabet: 'ⵜⵉⴼⵉⵏⴰⵖ (Tifinagh script)',
    phonemes: ['b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u'],
    syntaxFeatures: ['VSO', 'trilateral roots', 'gender agreement'],
    grammarNotes: 'Afro-Asiatic language with complex verb conjugation system. Various regional dialects.',
    country: 'Morocco, Algeria, Tunisia',
    alternativeNames: ['Amazigh', 'Tamazight'],
    // Geographic coverage area for Berber regions in North Africa (overlaps with Arabic)
    geographicArea: [
      [[-12.0, 27.7], [-12.0, 35.9], [11.9, 35.9], [11.9, 27.7], [-12.0, 27.7]]
    ]
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
    alternativeNames: ['Euskera', 'Euskara'],
    // Geographic coverage area for Basque Country (overlaps with Spanish)
    geographicArea: [
      [[-3.4, 42.6], [-3.4, 43.5], [-1.7, 43.5], [-1.7, 42.6], [-3.4, 42.6]]
    ]
  },
  {
    id: 'tibetan',
    name: 'Tibetan',
    coordinates: [91.1, 29.6], // Lhasa
    family: 'Sino-Tibetan',
    branch: 'Tibetic',
    speakers: 6000000,
    endangermentStatus: 'vulnerable',
    region: 'Tibet, China',
    script: 'Tibetan',
    alphabet: 'Tibetan script (དབུ་ཅན་)',
    phonemes: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'q', 'qʰ', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'q', 'qʰ', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Sino-Tibetan language with complex honorific system. Written in Tibetan script.',
    country: 'China (Tibet)',
    alternativeNames: ['བོད་སྐད', 'Bod skad'],
    // Geographic coverage area for Tibet (overlaps with Mandarin)
    geographicArea: [
      [[78.4, 26.8], [78.4, 36.5], [104.7, 36.5], [104.7, 26.8], [78.4, 26.8]]
    ]
  },
  {
    id: 'uyghur',
    name: 'Uyghur',
    coordinates: [87.6, 43.8], // Urumqi
    family: 'Turkic',
    branch: 'Southeastern Turkic',
    speakers: 10000000,
    endangermentStatus: 'vulnerable',
    region: 'Xinjiang, China',
    script: 'Arabic, Latin, Cyrillic',
    alphabet: 'Modified Arabic script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony and agglutinative morphology.',
    country: 'China (Xinjiang)',
    alternativeNames: ['ئۇيغۇر تىلى', 'Uyghur tili'],
    // Geographic coverage area for Xinjiang (overlaps with Mandarin)
    geographicArea: [
      [[73.4, 34.3], [73.4, 49.2], [96.4, 49.2], [96.4, 34.3], [73.4, 34.3]]
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
    alphabet: 'ひらがな (Hiragana), カタカナ (Katakana), 漢字 (Kanji)',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Complex honorific system. Three writing systems used simultaneously. Agglutinative with extensive verb conjugation.',
    country: 'Japan',
    alternativeNames: ['日本語', 'Nihongo'],
    // Geographic coverage area for Japan
    geographicArea: [
        [[[134.638428,34.149234],[134.766379,33.806335],[134.203416,33.201178],[133.79295,33.521985],[133.280268,33.28957],[133.014858,32.704567],[132.363115,32.989382],[132.371176,33.463642],[132.924373,34.060299],[133.492968,33.944621],[133.904106,34.364931],[134.638428,34.149234]]],[[[140.976388,37.142074],[140.59977,36.343983],[140.774074,35.842877],[140.253279,35.138114],[138.975528,34.6676],[137.217599,34.606286],[135.792983,33.464805],[135.120983,33.849071],[135.079435,34.596545],[133.340316,34.375938],[132.156771,33.904933],[130.986145,33.885761],[132.000036,33.149992],[131.33279,31.450355],[130.686318,31.029579],[130.20242,31.418238],[130.447676,32.319475],[129.814692,32.61031],[129.408463,33.296056],[130.353935,33.604151],[130.878451,34.232743],[131.884229,34.749714],[132.617673,35.433393],[134.608301,35.731618],[135.677538,35.527134],[136.723831,37.304984],[137.390612,36.827391],[138.857602,37.827485],[139.426405,38.215962],[140.05479,39.438807],[139.883379,40.563312],[140.305783,41.195005],[141.368973,41.37856],[141.914263,39.991616],[141.884601,39.180865],[140.959489,38.174001],[140.976388,37.142074]]],[[[143.910162,44.1741],[144.613427,43.960883],[145.320825,44.384733],[145.543137,43.262088],[144.059662,42.988358],[143.18385,41.995215],[141.611491,42.678791],[141.067286,41.584594],[139.955106,41.569556],[139.817544,42.563759],[140.312087,43.333273],[141.380549,43.388825],[141.671952,44.772125],[141.967645,45.551483],[143.14287,44.510358],[143.910162,44.1741]]]
    ]
  }
];

export const classificationFilters = [
  { id: 'language', name: 'Individual Language', description: 'Each language shown separately' },
  { id: 'family', name: 'Language Family', description: 'Group by major language families' },
  { id: 'branch', name: 'Language Branch', description: 'Sub-groups within language families' },
  { id: 'phonemes', name: 'Shared Phonemes', description: 'Common sound systems' },
  { id: 'consonants', name: 'Consonant Systems', description: 'Consonant inventories' },
  { id: 'vowels', name: 'Vowel Systems', description: 'Vowel inventories' },
  { id: 'syntax', name: 'Syntax Features', description: 'Word order and grammatical patterns' },
  { id: 'endangerment', name: 'Endangerment Level', description: 'Conservation status' },
  { id: 'region', name: 'Geographic Region', description: 'Continental groupings' }
];
