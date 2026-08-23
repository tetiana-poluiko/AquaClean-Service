export interface Product {
  id: number;
  name: string;
  category: string | string[];
  price: number;
  description: string;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  // Раковины (waschbacken)
  {
    id: 1,
    name: 'Keramik-Waschbecken Modern',
    category: 'Waschbacken',
    price: 150,
    description: 'Stilvolles Aufsatzwaschbecken für das moderne Badezimmer.',
    imageUrl: '/sink2.jpg'
  },
  {
    id: 2,
    name: 'Eckwaschbecken Kompakt',
    category: 'Waschbacken',
    price: 110,
    description: 'Platzsparendes Waschbecken ideal für das Gäste-WC.',
    imageUrl: '/sink1.jpg'
  },
  {
    id: 3,
    name: 'Möbelwaschbecken Classic',
    category: 'Waschbacken',
    price: 195,
    description: 'Elegantes Waschbecken zur Kombination mit Waschtischunterschrank.',
    imageUrl: '/sink3.jpg'
  },

  // Унитазы (WCs)
  {
    id: 4,
    name: 'Wand-WC EcoClean',
    category: 'WCs',
    price: 280,
    description: 'Spülrandloses Wand-WC mit Anti-Splash-System.',
    imageUrl: '/toilet1.jpg'
  },
  {
    id: 5,
    name: 'Stand-WC Comfort',
    category: 'WCs',
    price: 220,
    description: 'Klassisches Stand-WC mit Tiefspüler und WC-Sitz.',
    imageUrl: '/toilet2.jpg'
  },
  {
    id: 6,
    name: 'Modernes Dusch-WC',
    category: ['WCs', 'Duschen'],
    price: 650,
    description: 'Modernes Dusch-WC mit Intimwäsche und Föhn.',
    imageUrl: '/dusch-wc-1.jpg'
  },

  // Душевые кабины (Duschen)
  {
    id: 7,
    name: 'Duschkabine Eckeingang',
    category: 'Duschen',
    price: 450,
    description: 'Eck-Duschkabine aus Sicherheitsglas mit Schiebetüren.',
    imageUrl: '/shower1.jpg'
  },
  {
    id: 8,
    name: 'Komplettdusche Wellness',
    category: 'Duschen',
    price: 890,
    description: 'Fertigdusche mit Regendusche und Massagedüsen.',
    imageUrl: '/shower2.jpg'
  },
  {
    id: 9,
    name: 'Walk-In Dusche Glas',
    category: 'Duschen',
    price: 380,
    description: 'Freistehende Glaswand für eine moderne, schwellenlose Dusche.',
    imageUrl: '/shower3.jpg'
  },

  // Краны для раковины / Смесители (Armaturen)
  {
    id: 10,
    name: 'Waschtischarmatur Chrome',
    category: 'Armaturen',
    price: 90,
    description: 'Einhebel-Waschtischarmatur',
    imageUrl: '/tap1.jpg'
  },
  {
    id: 11,
    name: 'Waschtischbatterie High',
    category: 'Armaturen',
    price: 130,
    description: 'Erhöhte Armatur speziell für Aufsatzwaschbecken.',
    imageUrl: '/tap2.jpg'
  },
  {
    id: 12,
    name: 'Unterputz Armatur Line',
    category: 'Armaturen',
    price: 175,
    description: 'Minimalistische Unterputz-Einheit für das Waschbecken.',
    imageUrl: '/tap3.jpg'
  },
  {
    id: 13,
    name: 'Sensor Armatur Touchless',
    category: 'Armaturen',
    price: 210,
    description: 'Berührungslose Armatur mit Infrarot-Sensor für mehr Hygiene.',
    imageUrl: '/tap4.jpg'
  },

  // Ванные (Badewannen)
  {
    id: 14,
    name: 'Freistehende Badewanne Oval',
    category: 'Badewannen',
    price: 950,
    description: 'Luxuriöse freistehende Acryl-Badewanne im modernen Design.',
    imageUrl: '/bathtub1.jpg'
  },
  {
    id: 15,
    name: 'Rechteck-Badewanne Space',
    category: 'Badewannen',
    price: 340,
    description: 'Robuste Einbau-Badewanne für jeden Standard-Badezimmergrundriss.',
    imageUrl: '/bathtub2.jpg'
  },
   {
    id: 16,
    name: 'Freistehende Badewanne Elegance',
    category: 'Badewannen',
    price: 650,
    description: 'Freistehende Badewanne in modernem Design für ein stilvolles Badezimmer.',
    imageUrl: '/bathtub3.jpg'
  }
];