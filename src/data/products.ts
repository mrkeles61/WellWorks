export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  price: number;
  image: string;
  color: string;
  isNew?: boolean;
  features?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Energyshot',
    slug: 'energyshot',
    shortDescription: 'Anında enerji, uzun süreli performans',
    price: 375,
    image: '/placeholder.svg',
    color: '#FF6B35',
    isNew: false,
    features: ['Kafein', 'B Vitaminleri', 'Taurin'],
  },
  {
    id: '2',
    name: 'Hangovershot',
    slug: 'hangovershot',
    shortDescription: 'Yarına keyifle uyan',
    price: 498,
    image: '/placeholder.svg',
    color: '#E63946',
    isNew: false,
    features: ['Kudzu Kökü', 'Zencefil', 'NAC'],
  },
  {
    id: '3',
    name: 'Relaxshot',
    slug: 'relaxshot',
    shortDescription: 'Rahatla, dinlen, yenilen',
    price: 425,
    image: '/placeholder.svg',
    color: '#457B9D',
    isNew: true,
    features: ['Melatonin', 'Magnezyum', 'Pasiflora'],
  },
  {
    id: '4',
    name: 'Immuneshot',
    slug: 'immuneshot',
    shortDescription: 'Bağışıklığını güçlendir',
    price: 450,
    image: '/placeholder.svg',
    color: '#2A9D8F',
    isNew: false,
    features: ['C Vitamini', 'Çinko', 'Ekinezya'],
  },
  {
    id: '5',
    name: 'Beautyshot',
    slug: 'beautyshot',
    shortDescription: 'İçten gelen güzellik',
    price: 525,
    image: '/placeholder.svg',
    color: '#E9C46A',
    isNew: true,
    features: ['Kolajen', 'Hyaluronik Asit', 'Biotin'],
  },
  {
    id: '6',
    name: 'Focusshot',
    slug: 'focusshot',
    shortDescription: 'Zihinsel netlik ve odaklanma',
    price: 400,
    image: '/placeholder.svg',
    color: '#9B5DE5',
    isNew: false,
    features: ['Ginseng', 'Ginkgo Biloba', 'L-Theanine'],
  },
];
