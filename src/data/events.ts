export interface Event {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  size: 'large' | 'tall' | 'small' | 'wide';
}

export const events: Event[] = [
  {
    id: 'holifest',
    name: 'HoliFest',
    slug: 'holifest',
    description: "Hint Mitolojisi'nden ilham alan, baharın gelişini kutlayan renk festivali.",
    image: '/placeholder.svg',
    size: 'large',
  },
  {
    id: 'christmas-market',
    name: 'Christmas Market',
    slug: 'christmas-market',
    description: "Avrupa'nın geleneksel yılbaşı pazarı konsepti, Türkiye'de ilk kez.",
    image: '/placeholder.svg',
    size: 'tall',
  },
  {
    id: 'imera-niks',
    name: 'Imera & Niks Carnaval',
    slug: 'imera-niks',
    description: "Türkiye'nin ilk karnavalı. Gece ve gündüzü birleştiren eşsiz deneyim.",
    image: '/placeholder.svg',
    size: 'small',
  },
  {
    id: 'yildizli-konser',
    name: 'Yıldızlı Konser Akşamları',
    slug: 'yildizli-konser',
    description: "Yaz gecelerinde açık havada, Türkiye'nin en sevilen sanatçılarıyla.",
    image: '/placeholder.svg',
    size: 'small',
  },
  {
    id: 'business-leisure',
    name: 'Business Leisure',
    slug: 'business-leisure',
    description: 'Kurumsal etkinlikler, bayi toplantıları, teşvik seyahatleri.',
    image: '/placeholder.svg',
    size: 'wide',
  },
  {
    id: 'gusto-weekend',
    name: 'Gusto Weekend',
    slug: 'gusto-weekend',
    description: 'Yemek, müzik ve workshopların buluştuğu gastronomi festivali.',
    image: '/placeholder.svg',
    size: 'small',
  },
];
