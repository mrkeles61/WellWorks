import energyshot_img from '@/assets/products/energy-shot.jpg';
import hangover_black_img from '@/assets/products/hangover-shot-black.jpg';
import hangover_white_img from '@/assets/products/hangover-shot-white.jpg';
import relax_img from '@/assets/products/relax-shot.jpg';
import defense_img from '@/assets/products/defense-shot.jpg';
import detox_img from '@/assets/products/detox-shot.jpg';
import lax_img from '@/assets/products/lax-shot.jpg';
import libido_img from '@/assets/products/libido-shot.jpg';
import antiox_img from '@/assets/products/antiox-shot.jpg';
import electrovit_orange_8 from '@/assets/products/electrovit-portakal-final.png';
import electrovit_watermelon_8 from '@/assets/products/electrovit-karpuz-final.png';

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  shortDescriptionTr: string;
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
  customButtonColor?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'EnergyShot',
    slug: 'energyshot-7-li-kutu',
    shortDescription: 'FUEL YOUR DAY',
    shortDescriptionTr: 'GÜNÜNÜ ATEŞLE!',
    tagline: 'Enerji',
    price: 489,
    image: energyshot_img,
    color: '#F05A28',
    category: 'Enerji',
    brand: 'dailyshot',
    isNew: false,
    features: ['3+ Ginseng Complex', 'Fuel Your Day', 'Liquid Form'],
    featuresTr: ['3\'lü Ginseng Kompleks', 'Hızlı Enerji Desteği', 'Anında Performans Artışı'],
    rating: 5.0,
    reviews: 0,
  },
  {
    id: '2',
    name: 'HangoverShot',
    slug: 'hangovershot4lupaket',
    shortDescription: 'SAVE YOUR NEXT DAY',
    shortDescriptionTr: 'Akşamdan Kalma, Yarına Keyifle Uyan!',
    tagline: 'Akşamdan Kalma',
    price: 375,
    image: hangover_white_img,
    color: '#BF1E2E',
    category: 'Akşamdan Kalma',
    brand: 'dailyshot',
    isNew: false,
    features: ['Save Your Next Day', 'Willow Bark Extract', 'Fast Effect'],
    featuresTr: ['Ertesi Gününü Kurtar', 'Söğüt Kabuğu Ekstresi', 'Hızlı Etki'],
    rating: 5.0,
    reviews: 11,
  },
  {
    id: '11',
    name: 'HangoverShot Zero',
    slug: 'hangovershotzero4lupaket',
    shortDescription: 'SAVE YOUR NEXT DAY — ZERO SUGAR',
    shortDescriptionTr: 'Şekersiz, Yarına Keyifle Uyan!',
    tagline: 'Akşamdan Kalma',
    price: 375,
    image: hangover_black_img,
    color: '#231F20',
    category: 'Akşamdan Kalma',
    brand: 'dailyshot',
    isNew: true,
    features: ['Save Your Next Day', 'Willow Bark Extract', 'Zero Sugar'],
    featuresTr: ['Ertesi Gününü Kurtar', 'Söğüt Kabuğu Ekstresi', 'Şekersiz'],
    rating: 5.0,
    reviews: 0,
  },
  {
    id: '3',
    name: 'RelaxShot',
    slug: 'relaxshot-7-li-kutu',
    shortDescription: 'MOOD UP & SLEEP TIGHT',
    shortDescriptionTr: 'RAHATLA, DİNLEN, YENİLEN!',
    tagline: 'Uyku ve Stres',
    price: 515,
    image: relax_img,
    color: '#0A75BB',
    category: 'Uyku ve Stres',
    brand: 'dailyshot',
    isNew: false,
    features: ['Mood Up & Sleep Tight', 'Rich Herbal Extract', 'Fast Effect'],
    featuresTr: ['Uyku ve Stres Yönetimi', 'Zengin Bitkisel Özler', 'Hızlı Etki Başlangıcı'],
    rating: 5.0,
    reviews: 0,
  },
  {
    id: '4',
    name: 'DefenseShot',
    slug: 'defenseshot-7-li-kutu',
    shortDescription: 'WHATEVER THE WEATHER',
    shortDescriptionTr: 'KORUN, SAVUN, GÜÇLEN!',
    tagline: 'Bağışıklık',
    price: 498,
    image: defense_img,
    color: '#5E227A',
    category: 'Bağışıklık',
    brand: 'dailyshot',
    isNew: true,
    features: ['Rich Herbal Extract + Vit C', 'Introduction to Wellness', 'Liquid Form'],
    featuresTr: ['Zengin Bitkisel İçerik', 'C Vitamini ve Çinko', 'Hızlı Emilim'],
    rating: 5.0,
    reviews: 10,
  },
  {
    id: '5',
    name: 'DetoxShot',
    slug: 'detoxshot-kilo-kontrol-destegi',
    shortDescription: 'FEEL LIGHT, SHINE BRIGHT',
    shortDescriptionTr: 'ARINDIR, TEMİZLE, YENİLEN!',
    tagline: 'Detoks',
    price: 1749,
    image: detox_img,
    color: '#8BC43F',
    category: 'Detoks',
    brand: 'dailyshot',
    isNew: true,
    features: ['21 Day Program', 'Metabolism Support', 'Fat Burn Support'],
    featuresTr: ['21 Günlük Program', 'Metabolizma Desteği', 'Yağ Yakımına Destek'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '6',
    name: 'LaxShot',
    slug: 'laxshot-bagirsak-ve-sindirim-sistemi-duzenleyici-gaz-siskinlik-icin-lax-shot',
    shortDescription: 'FAST. GENTLE. RELIEF.',
    shortDescriptionTr: 'DÜZENLİ SİNDİRİM, HAFİF HİSSET!',
    tagline: 'Sindirim',
    price: 529,
    image: lax_img,
    color: '#7C56A3',
    category: 'Sindirim',
    brand: 'dailyshot',
    isNew: true,
    features: ['Digestive Support', 'Natural Ingredients', 'Fast Relief'],
    featuresTr: ['Sindirim Sistemi Düzenleyici', 'Doğal Bitkisel İçerik', 'Gaz ve Şişkinliğe Son'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '7',
    name: 'LibidoShot',
    slug: 'libidoshot-14-lu-kutu',
    shortDescription: 'READY WHEN YOU ARE',
    shortDescriptionTr: 'ENERJİNİ KEŞFET, TUTKUNU YAŞA!',
    tagline: 'Cinsel Sağlık',
    price: 1689,
    image: libido_img,
    color: '#3F6DA1',
    category: 'Cinsel Sağlık',
    brand: 'dailyshot',
    isNew: true,
    features: ['WWH-12 Formula', 'For Him & Her', 'Energy Boost'],
    featuresTr: ['WWH-12 Formülü', 'Kadın ve Erkek İçin', 'Enerji ve Canlılık'],
    rating: 5.0,
    reviews: 7,
  },
  {
    id: '8',
    name: 'WellAgingShot',
    slug: 'anti-ox-shot-14-lu',
    shortDescription: 'YOUTH, BOTTLED.',
    shortDescriptionTr: 'HÜCRE KORUMASI, GENÇ KAL!',
    tagline: 'Anti-Aging',
    price: 899,
    image: antiox_img,
    color: '#EB1C24',
    category: 'Anti-Aging',
    brand: 'dailyshot',
    isNew: true,
    features: ['Cellular Renewal', 'Collagen & Hyaluronic Acid', 'Antioxidant Rich'],
    featuresTr: ['Hücresel Yenilenme', 'Kolajen & Hyaluronik Asit', 'Güçlü Antioksidan'],
    rating: 0,
    reviews: 0,
  },
  {
    id: '9',
    name: 'Electrovit Portakal',
    slug: 'electrovit-portakal-aromali-8-li',
    shortDescription: 'MORE THAN WATER',
    shortDescriptionTr: 'Sudan Daha Fazlası',
    tagline: 'Elektrolit',
    price: 379,
    image: electrovit_orange_8,
    color: '#F58220', // Updated to Orange
    category: 'Elektrolit',
    brand: 'electrovit',
    isNew: true,
    features: ['Hydration Support', 'Magnesium & Potassium', 'Delicious Taste'],
    featuresTr: ['Hızlı Hidrasyon', 'Magnezyum & Potasyum', 'Lezzetli Tadım'],
    rating: 0,
    reviews: 0,
    customButtonColor: '#F58220', // Orange color
  },
  {
    id: '10',
    name: 'Electrovit Karpuz',
    slug: 'electrovit-karpuzlu-8-li',
    shortDescription: 'MORE THAN WATER',
    shortDescriptionTr: 'Sudan Daha Fazlası',
    tagline: 'Elektrolit',
    price: 379,
    image: electrovit_watermelon_8,
    color: '#EF4444', // Updated to Watermelon Red
    category: 'Elektrolit',
    brand: 'electrovit',
    isNew: true,
    features: ['Hydration Support', 'Sugar Free', 'Refreshing'],
    featuresTr: ['Elektrolit Desteği', 'Şekersiz', 'Ferahlatıcı Lezzet'],
    rating: 0,
    reviews: 0,
    customButtonColor: '#EF4444', // Watermelon red (Tailwind red-500)
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
