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
    image: '/products/energyshot.jpg',
    color: '#FF6B35',
    category: 'Enerji',
    isNew: false,
    features: ['3+ Ginseng Complex', 'WWH-13 Formula', 'Fuel Your Day'],
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
    image: '/products/hangovershot.jpg',
    color: '#E63946',
    category: 'Akşamdan Kalma',
    isNew: false,
    features: ['Save Your Next Day', '4X Shot', 'Forest Fruit Flavour'],
    rating: 5.0,
    reviews: 11,
  },
  {
    id: '3',
    name: 'Relaxshot 7\'li Kutu',
    slug: 'relaxshot-7-li-kutu',
    shortDescription: 'Rahatla, dinlen, yenilen',
    tagline: 'Uyku ve Stres',
    price: 425,
    image: '/products/relaxshot.jpg',
    color: '#457B9D',
    category: 'Uyku ve Stres',
    isNew: false,
    features: ['Mood Up & Sleep Tight', 'Rich Herbal Extract', 'WWH-7 Formula'],
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
    image: '/products/defenseshot.jpg',
    color: '#9B5DE5',
    category: 'Kış Semptomları',
    isNew: true,
    features: ['Rich Herbal Extract + Vit C', 'WWH-9 Formula', 'Whatever The Weather'],
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
    image: '/products/energyshot.jpg',
    color: '#2ECC71',
    category: 'Detoks',
    isNew: true,
    features: ['21 Günlük Program', 'Doğal İçerikler', 'Karaciğer Desteği'],
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
    image: '/products/relaxshot.jpg',
    color: '#F4A261',
    category: 'Sindirim',
    isNew: true,
    features: ['Gaz & Şişkinlik İçin', 'Doğal Lif Kaynağı', 'Düzenli Sindirim'],
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
    image: '/products/hangovershot.jpg',
    color: '#E91E63',
    category: 'Libido',
    isNew: true,
    features: ['14 Günlük Kür', 'Doğal Formül', 'Enerji & Canlılık'],
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
    image: '/products/energyshot.jpg',
    color: '#FF9800',
    category: 'Elektrolit',
    isNew: true,
    features: ['Portakal Aromalı', '8\'li Paket', 'Spor Sonrası'],
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
    image: '/products/relaxshot.jpg',
    color: '#4CAF50',
    category: 'Elektrolit',
    isNew: true,
    features: ['Karpuz Aromalı', '8\'li Paket', 'Ferahlatıcı'],
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
    image: '/products/energyshot.jpg',
    color: '#FF6B35',
    category: 'Enerji',
    isNew: false,
    features: ['2\'li Deneme Paketi', '3+ Ginseng Complex', 'Fuel Your Day'],
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
