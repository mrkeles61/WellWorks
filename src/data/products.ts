export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  tagline: string;
  price: number;
  image: string;
  color: string;
  category: string;
  isNew?: boolean;
  features?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Energyshot',
    slug: 'energyshot-7li-kutu',
    shortDescription: 'Anında enerji, uzun süreli performans',
    tagline: 'Enerji',
    price: 489,
    image: '/products/energyshot.jpg',
    color: '#FF6B35',
    category: 'Enerji',
    isNew: false,
    features: ['3+ Ginseng Complex', 'WWH-13 Formula', 'Fuel Your Day'],
  },
  {
    id: '2',
    name: 'Hangovershot',
    slug: 'hangovershot-4lu-kutu',
    shortDescription: 'Yarına keyifle uyan',
    tagline: 'Akşamdan Kalma',
    price: 375,
    image: '/products/hangovershot.jpg',
    color: '#E63946',
    category: 'Akşamdan Kalma',
    isNew: false,
    features: ['Save Your Next Day', '4X Shot', 'Forest Fruit Flavour'],
  },
  {
    id: '3',
    name: 'Relaxshot',
    slug: 'relaxshot-7li-kutu',
    shortDescription: 'Rahatla, dinlen, yenilen',
    tagline: 'Uyku ve Stres',
    price: 425,
    image: '/products/relaxshot.jpg',
    color: '#457B9D',
    category: 'Uyku ve Stres',
    isNew: true,
    features: ['Mood Up & Sleep Tight', 'Rich Herbal Extract', 'WWH-7 Formula'],
  },
  {
    id: '4',
    name: 'Defenseshot',
    slug: 'defenseshot-7li-kutu',
    shortDescription: 'Bağışıklığını güçlendir',
    tagline: 'Kış Semptomları',
    price: 498,
    image: '/products/defenseshot.jpg',
    color: '#9B5DE5',
    category: 'Kış Semptomları',
    isNew: false,
    features: ['Rich Herbal Extract + Vit C', 'WWH-9 Formula', 'Whatever The Weather'],
  },
  {
    id: '5',
    name: 'Detoxshot',
    slug: 'detoxshot-21li-kutu',
    shortDescription: 'Vücudunu arındır',
    tagline: 'Detoks',
    price: 1749,
    image: '/products/energyshot.jpg',
    color: '#2ECC71',
    category: 'Detoks',
    isNew: true,
    features: ['21 Günlük Program', 'Doğal İçerikler', 'Karaciğer Desteği'],
  },
  {
    id: '6',
    name: 'Laxshot',
    slug: 'laxshot-7li-kutu',
    shortDescription: 'Sindirim sistemi desteği',
    tagline: 'Sindirim',
    price: 529,
    image: '/products/relaxshot.jpg',
    color: '#F4A261',
    category: 'Sindirim',
    isNew: true,
    features: ['Doğal Lif Kaynağı', 'Prebiyotik', 'Düzenli Sindirim'],
  },
];
