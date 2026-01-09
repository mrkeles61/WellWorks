import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      nav: {
        home: 'Anasayfa',
        products: 'Ürünler',
        about: 'Dailyshot Nedir?',
        shop: 'Mağaza',
        events: 'İşler Güçler',
        team: 'Familyamız',
        contact: 'İletişim',
      },
      gateway: {
        health: {
          headline: 'YENİ NESİL LİKİT ÜRÜNLER',
          subline: 'Hızlı Etki, Yüksek Biyoyararlanım.',
          cta: 'Keşfet',
        },
        mice: {
          headline: 'KAOSTAN DOĞAN DÜZEN',
          subline: 'Festivalden Kurumsal Zirveye.',
          cta: 'Keşfet',
        },
        scrollHint: 'Aşağı Kaydır',
      },
      health: {
        hero: {
          title: 'Yeni Nesil Likit Takviyeler',
          subtitle: "Türkiye'nin ilk ve tek likit takviye markası",
          cta: 'Ürünleri Keşfet',
        },
        products: {
          title: 'Ürünlerimiz',
          viewAll: 'Tümünü Gör',
          buyNow: 'Satın Al',
          compare: 'Karşılaştır',
          quickView: 'Hızlı Bakış',
          new: 'Yeni',
        },
        trust: {
          freeShipping: 'Ücretsiz Kargo',
          freeShippingDesc: '250 TL üzeri siparişlerde',
          securePayment: 'Güvenli Ödeme',
          securePaymentDesc: '256-bit SSL koruması',
          support: '7/24 Destek',
          supportDesc: 'WhatsApp ile anında yardım',
          easyReturn: 'Kolay İade',
          easyReturnDesc: '14 gün içinde ücretsiz iade',
        },
      },
      mice: {
        hero: {
          title: 'Unutulmaz Deneyimler Yaratıyoruz',
          subtitle: "2012'den beri Türkiye'nin en büyük festivallerini organize ediyoruz",
          cta: 'Etkinliklerimizi Keşfet',
          stats: {
            attendees: 'Katılımcı',
            events: 'Etkinlik',
            experience: 'Yıllık Deneyim',
          },
        },
        events: {
          title: 'İşler Güçler',
          subtitle: 'Her biri benzersiz, hepsi unutulmaz',
          viewDetails: 'Detayları Gör',
        },
      },
      team: {
        title: 'Familyamız',
        subtitle: 'Genç, dinamik ve tutkulu ekibimizle tanışın',
      },
      footer: {
        description: "2012'den beri sağlıklı yaşam ürünleri ve unutulmaz etkinlikler.",
        healthLinks: 'Dailyshot',
        miceLinks: 'Etkinlikler',
        contact: 'İletişim',
        rights: '© 2024 Well Works Turkey. Tüm hakları saklıdır.',
        privacy: 'KVKK',
        cookies: 'Çerez Politikası',
        terms: 'Kullanım Koşulları',
        onlineShop: 'Online Mağaza',
        compareProducts: 'Ürün Karşılaştır',
        hours: 'Pzt - Cum: 09:00 - 18:00',
      },
      cookie: {
        message: 'Bu web sitesi, deneyiminizi geliştirmek için çerezler kullanmaktadır.',
        policy: 'Çerez Politikamızı',
        privacy: 'KVKK Aydınlatma Metnini',
        acceptAll: 'Tümünü Kabul Et',
        acceptNecessary: 'Sadece Gerekli',
      },
      search: {
        placeholder: 'Ürün, etkinlik veya sayfa ara...',
        popular: 'Popüler Aramalar',
        noResults: 'Sonuç bulunamadı',
      },
      whatsapp: {
        tooltip: 'Bize yazın! 7/24 destek',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'What is Dailyshot?',
        shop: 'Shop',
        events: 'Our Work',
        team: 'Our Team',
        contact: 'Contact',
      },
      gateway: {
        health: {
          headline: 'NEXT-GEN LIQUID SUPPLEMENTS',
          subline: 'Fast Action, High Bioavailability.',
          cta: 'Explore',
        },
        mice: {
          headline: 'ORDER FROM CHAOS',
          subline: 'From Festivals to Corporate Summits.',
          cta: 'Explore',
        },
        scrollHint: 'Scroll Down',
      },
      health: {
        hero: {
          title: 'Next-Gen Liquid Supplements',
          subtitle: "Turkey's first and only liquid supplement brand",
          cta: 'Explore Products',
        },
        products: {
          title: 'Our Products',
          viewAll: 'View All',
          buyNow: 'Buy Now',
          compare: 'Compare',
          quickView: 'Quick View',
          new: 'New',
        },
        trust: {
          freeShipping: 'Free Shipping',
          freeShippingDesc: 'On orders over 250 TL',
          securePayment: 'Secure Payment',
          securePaymentDesc: '256-bit SSL protection',
          support: '24/7 Support',
          supportDesc: 'Instant help via WhatsApp',
          easyReturn: 'Easy Returns',
          easyReturnDesc: 'Free returns within 14 days',
        },
      },
      mice: {
        hero: {
          title: 'Creating Unforgettable Experiences',
          subtitle: "Organizing Turkey's biggest festivals since 2012",
          cta: 'Explore Our Events',
          stats: {
            attendees: 'Attendees',
            events: 'Events',
            experience: 'Years Experience',
          },
        },
        events: {
          title: 'Our Work',
          subtitle: 'Each one unique, all unforgettable',
          viewDetails: 'View Details',
        },
      },
      team: {
        title: 'Our Team',
        subtitle: 'Meet our young, dynamic and passionate team',
      },
      footer: {
        description: 'Healthy living products and unforgettable events since 2012.',
        healthLinks: 'Dailyshot',
        miceLinks: 'Events',
        contact: 'Contact',
        rights: '© 2024 Well Works Turkey. All rights reserved.',
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy',
        terms: 'Terms of Service',
        onlineShop: 'Online Shop',
        compareProducts: 'Compare Products',
        hours: 'Mon - Fri: 09:00 - 18:00',
      },
      cookie: {
        message: 'This website uses cookies to enhance your experience.',
        policy: 'Cookie Policy',
        privacy: 'Privacy Policy',
        acceptAll: 'Accept All',
        acceptNecessary: 'Necessary Only',
      },
      search: {
        placeholder: 'Search products, events or pages...',
        popular: 'Popular Searches',
        noResults: 'No results found',
      },
      whatsapp: {
        tooltip: 'Message us! 24/7 support',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
