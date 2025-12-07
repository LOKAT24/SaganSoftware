export interface AppData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl?: string; // Optional GIF or secondary image
  screenshots?: string[]; // Array of screenshot URLs for hover preview
  appUrl: string;
  githubRepo?: string; // e.g. "facebook/react"
  tags: string[];
}

export const appsData: AppData[] = [
  {
    id: '1',
    title: 'ProduktConfigurator',
    description: 'Interaktywne narzędzie webowe do konfiguracji wariantów produktów. Umożliwia dynamiczny wybór parametrów i wizualizację zmian w czasie rzeczywistym, dedykowane dla rozwiązań e-commerce.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/00f0ff?text=Produkt+Configurator',
    hoverImageUrl: 'https://placehold.co/600x400/000000/00f0ff?text=Configurator+Preview',
    screenshots: [
      'screenshots/konf_prod1.png',
    ],
    appUrl: 'https://lokat24.github.io/ProduktConfigurator/',
    githubRepo: 'LOKAT24/ProduktConfigurator',
    tags: ['Configurator', 'E-commerce', 'State Management']
  },
  {
    id: '2',
    title: 'CSV Oscilloscope',
    description: 'Aplikacja do wizualizacji szeregów czasowych z plików CSV, symulująca interfejs oscyloskopu. Ułatwia analizę logów z systemów wbudowanych i debugowanie sygnałów cyfrowych.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/00ff00?text=CSV+Oscilloscope',
    hoverImageUrl: 'https://placehold.co/600x400/000000/00ff00?text=Waveform+Preview',
    screenshots: [
      'screenshots/csv1.png',
      'screenshots/gen1.png',
    ],
    appUrl: 'https://lokat24.github.io/CSV-Oscilloscope/',
    githubRepo: 'LOKAT24/CSV-Oscilloscope',
    tags: ['Data Visualization', 'CSV Parsing', 'Canvas API', 'Engineering']
  },
  {
    id: '3',
    title: 'Gerber2Lightburn',
    description: 'Konwerter plików produkcyjnych PCB (Gerber RS-274X) do formatów wektorowych kompatybilnych z LightBurn. Narzędzie wspiera proces prototypowania PCB i wycinania szablonów SMT laserem.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ff0055?text=Gerber2Lightburn',
    hoverImageUrl: 'https://placehold.co/600x400/000000/ff0055?text=PCB+Conversion',
    screenshots: [
      'screenshots/gerber2lightburn1.png',
    ],
    appUrl: 'https://lokat24.github.io/gerber2lightburn/',
    githubRepo: 'LOKAT24/gerber2lightburn',
    tags: ['PCB Design', 'File Parsing', 'Vector Graphics', 'CNC/Laser']
  },
  {
    id: '4',
    title: 'WykresReader',
    description: 'Narzędzie inżynierii odwrotnej (digitalizer) służące do ekstrakcji surowych danych numerycznych z obrazów rastrowych wykresów. Pozwala na odzyskanie koordynatów X/Y poprzez mapowanie punktów.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ffcc00?text=WykresReader',
    hoverImageUrl: 'https://placehold.co/600x400/000000/ffcc00?text=Digitizer+Action',
    screenshots: [
      'screenshots/wykres1.png',
    ],
    appUrl: 'https://lokat24.github.io/WykresReader/',
    githubRepo: 'LOKAT24/WykresReader',
    tags: ['Reverse Engineering', 'Image Processing', 'Data Extraction', 'Algorithms']
  }
];
