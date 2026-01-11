import enerji1 from '@/assets/products/enerji-1.jpg';
import hango1 from '@/assets/products/hango-1.jpg';
import relax1 from '@/assets/products/relax-1.png';
import kis2 from '@/assets/products/kis-semptomlari-2.png';
import kis10 from '@/assets/products/kis-semptomlari-10.png';
import lax6 from '@/assets/products/lax-6.jpg';
import lbd1 from '@/assets/products/lbd-1.jpg';
import prtk5 from '@/assets/products/prtk5.jpg';
import elct2 from '@/assets/products/elct2.jpg';
import energy6 from '@/assets/products/energy-6.jpeg';

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
  brand: 'dailyshot' | 'electrovit';
  isNew?: boolean;
  features?: string[];
  featuresTr?: string[];
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Energyshot 7\'li Kutu',
    slug: 'energyshot-7-li-kutu',
    shortDescription: 'Anında enerji, uzun süreli performans',
    tagline: 'Enerji',
    price: 489,
    image: enerji1,
    color: '#FF6B35',
    category: 'Enerji',
    brand: 'dailyshot',
    isNew: false,
    features: ['3+ Ginseng Complex', 'WWH-13 Formula', 'Fuel Your Day'],
    featuresTr: ['3+ Ginseng Kompleksi', 'WWH-13 Formülü', 'Gününe Güç Kat'],
    rating: 5.0,
    reviews: 0,
  },
  {
    id: '2',
    name: 'Hangovershot 4\'lü Kutu',
    slug: 'hangovershot4lupaket',
    shortDescription: 'Yarına keyifle uyan',
    tagline: 'Akşamdan Kalma',
    price: 375,
    image: hango1,
    color: '#E63946',
    category: 'Akşamdan Kalma',
    brand: 'dailyshot',
    isNew: false,
    features: ['Save Your Next Day', '4X Shot', 'Forest Fruit Flavour'],
    featuresTr: ['Ertesi Gününü Kurtar', '4X Shot', 'Orman Meyveli Aroma'],
    rating: 5.0,
    reviews: 11,
  },
  {
    id: '3',
    name: 'Relaxshot 7\'li Kutu',
    slug: 'relaxshot-7-li-kutu',
    shortDescription: 'Rahatla, dinlen, yenilen',
    tagline: 'Uyku ve Stres',
    price: 515,
    image: relax1,
    color: '#457B9D',
    category: 'Uyku ve Stres',
    brand: 'dailyshot',
    isNew: false,
    features: ['Mood Up & Sleep Tight', 'Rich Herbal Extract', 'WWH-7 Formula'],
    featuresTr: ['Ruh Halin Yükselsin, Uyku Derinleşsin', 'Zengin Bitkisel Özler', 'WWH-7 Formülü'],
    rating: 5.0,
    reviews: 0,
  },
  {
    id: '4',
    name: 'Defenseshot 7\'li Kutu',
    slug: 'defenseshot-7-li-kutu',
    shortDescription: 'Bağışıklığını güçlendir',
    tagline: 'Kış Semptomları',
    price: 498,
    image: kis2,
    color: '#9B5DE5',
    category: 'Kış Semptomları',
    brand: 'dailyshot',
    isNew: true,
    features: ['Rich Herbal Extract + Vit C', 'WWH-9 Formula', 'Whatever The Weather'],
    featuresTr: ['Zengin Bitkisel Özler + C Vitamini', 'WWH-9 Formülü', 'Her Mevsim Güçlü Kal'],
    rating: 5.0,
    reviews: 10,
  },
  {
    id: '5',
    name: 'DetoxShot 21\'li Kutu',
    slug: 'detoxshot-kilo-kontrol-destegi',
    shortDescription: 'Kilo kontrol desteği',
    tagline: 'Detoks',
    price: 1749,
    image: kis10,
    color: '#2ECC71',
    category: 'Detoks',
    brand: 'dailyshot',
    isNew: true,
    features: ['21 Day Program', 'Natural Ingredients', 'Liver Support'],
    featuresTr: ['21 Günlük Program', 'Doğal İçerikler', 'Karaciğer Desteği'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '6',
    name: 'LaxShot 7\'li Kutu',
    slug: 'laxshot-bagirsak-ve-sindirim-sistemi-duzenleyici-gaz-siskinlik-icin-lax-shot',
    shortDescription: 'Bağırsak ve sindirim sistemi düzenleyici',
    tagline: 'Sindirim',
    price: 529,
    image: lax6,
    color: '#F4A261',
    category: 'Sindirim',
    brand: 'dailyshot',
    isNew: true,
    features: ['For Gas & Bloating', 'Natural Fiber Source', 'Regular Digestion'],
    featuresTr: ['Gaz & Şişkinlik İçin', 'Doğal Lif Kaynağı', 'Düzenli Sindirim'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '7',
    name: 'Lbdshot 14\'lü Kutu',
    slug: 'libidoshot-14-lu-kutu',
    shortDescription: 'Libido desteği',
    tagline: 'Libido',
    price: 1689,
    image: lbd1,
    color: '#E91E63',
    category: 'Libido',
    brand: 'dailyshot',
    isNew: true,
    features: ['14 Day Program', 'Natural Formula', 'Energy & Vitality'],
    featuresTr: ['14 Günlük Kür', 'Doğal Formül', 'Enerji & Canlılık'],
    rating: 5.0,
    reviews: 7,
  },
  {
    id: '8',
    name: 'Electrovit Portakal 8\'li',
    slug: 'electrovit-portakal-aromali-8-li',
    shortDescription: 'Elektrolit takviyesi',
    tagline: 'Elektrolit',
    price: 379,
    image: prtk5,
    color: '#FF9800',
    category: 'Elektrolit',
    brand: 'electrovit',
    isNew: true,
    features: ['Orange Flavored', '8 Pack', 'Post Workout'],
    featuresTr: ['Portakal Aromalı', '8\'li Paket', 'Spor Sonrası'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '9',
    name: 'Electrovit Karpuz 8\'li',
    slug: 'electrovit-karpuzlu-8-li',
    shortDescription: 'Elektrolit takviyesi',
    tagline: 'Elektrolit',
    price: 379,
    image: elct2,
    color: '#4CAF50',
    category: 'Elektrolit',
    brand: 'electrovit',
    isNew: true,
    features: ['Watermelon Flavored', '8 Pack', 'Refreshing'],
    featuresTr: ['Karpuz Aromalı', '8\'li Paket', 'Ferahlatıcı'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '10',
    name: 'Energyshot 2\'li Kutu',
    slug: 'energyshot-2-li-kutu',
    shortDescription: 'Deneme paketi',
    tagline: 'Enerji',
    price: 199,
    image: energy6,
    color: '#FF6B35',
    category: 'Enerji',
    brand: 'dailyshot',
    isNew: false,
    features: ['2 Pack Trial', '3+ Ginseng Complex', 'Fuel Your Day'],
    featuresTr: ['2\'li Deneme Paketi', '3+ Ginseng Kompleksi', 'Gününe Güç Kat'],
    rating: 0,
    reviews: 0,
  },
];

// Dailyshot description for "Dailyshot Nedir?" page
export const dailyshotDescription = {
  title: 'DAILYSHOT NEDİR?',
  content: 'Dailyshot, içerisinde likit formada ürünler bulunduran bitkisel bir gıda takviyesi markasıdır. Dailyshot ürünleri, likit yapısı sayesinde kana hızlıca karışır ve etkinin hızlı gözlemlenmesine olanak sağlar. Dailyshot likit gıda takviyeleri, her ihtiyaca ve hedefe yönelik formülasyonları ile gün içerisinde vücüdünuzun ihtiyaç duyduğu her alanda sizlere destek olur.',
};

// About page content
export const aboutContent = {
  title: 'HAKKIMIZDA',
  intro: 'İnsanlara daha sağlıklı ve daha doğal bir yaşam sağlamak amacıyla yola çıktık. Doğadan aldığımız ilhamla tüketicilerimiz için sağlıklı çözümler sunmayı hedefliyor, doğanın bize sunduklarını gelecek kuşaklara taşıyor ve bu ilhamla yarattığımız besin takviyelerini ihtiyacı olanlarla buluşturuyoruz. Kendimizi, hizmet ettiğimiz kişilerin "Sağlıklı Yaşam Ortakları" olarak görüyor ve bu sorumluluk bilinci ile çalışıyoruz. Duruşumuz ve hedefimizle sektöre bambaşka bir boyut kazandırdığımız inancındayız.',
  qualityPolicy: {
    title: 'KALİTE POLİTİKAMIZ',
    content: 'Ürünlerimizin içeriğine, sağladığı faydalara ve kalitesine güveniyoruz. Ürünlerimizde insan sağlığına zarar verecek ya da olumsuz etki edecek hiçbir bileşene yer vermiyoruz. Patentli ham madde kullanıyor ve helal kuralları çerçevesinde birleştiriyoruz. Her gün yenilenen teknoloji ile üretim prosesimizi geliştiriyor, yenilikçi ve özgün ürünler üreterek sağlığınıza hediye ediyoruz. Kalitesinden emin olmadığımız hiçbir ürünü sizlere sunmuyor ve ürün kalitemizi üstün tutuyoruz.',
  },
  closing: 'Geçmişten geleceğe yürüdüğümüz bu yolda bize eşlik ettiğiniz için sizlere teşekkür ederiz.',
};

// Contact information
export const contactInfo = {
  address: 'Emniyetevler Mahallesi Kale Sokak 2/A Kağıthane/ISTANBUL',
  phone: '+90 536 032 08 38',
  email: 'info@wellworksturkey.com',
  social: {
    instagram: 'https://www.instagram.com/dailyshottr/',
    youtube: 'https://www.youtube.com/@Dailyshotturkiye',
  },
};
