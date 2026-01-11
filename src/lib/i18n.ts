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
        menu: 'Menü',
        close: 'Kapat',
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
          subtitle: 'Dailyshot likit gıda takviyeleri, her ihtiyaca ve hedefe yönelik formülasyonları ile gün içerisinde vücudunuzun ihtiyaç duyduğu her alanda sizlere destek olur.',
          viewAll: 'Tümünü Gör',
          discover: 'Keşfet',
          new: 'Yeni',
        },
        about: {
          title: 'Dailyshot Nedir?',
        },
        why: {
          fastAbsorption: 'Hızlı Emilim',
          fastAbsorptionDesc: 'Likit form sayesinde dakikalar içinde etki',
          highBioavailability: 'Yüksek Biyoyararlanım',
          highBioavailabilityDesc: 'Vücudunuz daha fazla fayda alır',
          naturalIngredients: 'Doğal İçerikler',
          naturalIngredientsDesc: 'Bitkisel ve patentli formüller',
          certifiedQuality: 'Sertifikalı Kalite',
          certifiedQualityDesc: 'GMP ve Helal sertifikalı üretim',
        },
        whereToBuy: {
          title: 'Nereden Satın Alınır?',
          description: 'Dailyshot ürünlerini resmi online mağazamızdan güvenle satın alabilirsiniz.',
          cta: 'Online Mağazaya Git',
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
        stats: {
          experience: 'Yıllık Sektör Deneyimi',
          events: 'Başarıyla Tamamlanan Etkinlik',
          attendees: 'Mutlu Katılımcı',
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
        close: 'Kapat',
      },
      whatsapp: {
        tooltip: 'Bize yazın! 7/24 destek',
      },
      notFound: {
        message: 'Aradığınız sayfa bulunamadı',
        backHome: 'Ana Sayfaya Dön',
      },
      compare: {
        title: 'Ürün Karşılaştır',
        subtitle: 'Ürünleri yan yana karşılaştırın ve size en uygun olanı seçin.',
        comingSoon: 'Bu özellik yakında aktif olacaktır.',
      },
      contact: {
        title: 'İletişim',
        subtitle: 'Sorularınız, önerileriniz veya işbirliği talepleriniz için bize ulaşın.',
        form: {
          fullName: 'Ad Soyad',
          fullNamePlaceholder: 'Adınız Soyadınız',
          email: 'E-posta',
          emailPlaceholder: 'ornek@email.com',
          phone: 'Telefon',
          phonePlaceholder: '+90 555 123 4567',
          subject: 'Konu',
          subjectGeneral: 'Genel Bilgi',
          subjectProduct: 'Ürün Hakkında',
          subjectEvent: 'Etkinlik',
          subjectPartnership: 'İş Birliği',
          message: 'Mesajınız',
          messagePlaceholder: 'Lütfen mesajınızı buraya yazın...',
          submit: 'Gönder',
        },
        info: {
          title: 'İletişim Bilgileri',
        },
        address: {
          title: 'Adres',
          content: 'Fulya, Ortaklar Cd. No.14 K.3 D.5\n34360 Şişli/İstanbul',
        },
        phone: {
          title: 'Telefon',
          content: '0 (212) 216 47 52',
        },
        email: {
          title: 'E-posta',
          content: 'info@wellworksturkey.com',
        },
        hours: {
          title: 'Çalışma Saatleri',
          content: 'Pzt - Cum: 09:00 - 18:00\nCmt: 10:00 - 14:00',
        },
        map: {
          view: 'Google Maps\'te Görüntüle',
        },
        faq: {
          title: 'Sıkça Sorulan Sorular',
          question1: 'Ürünlerinizi nereden alabilirim?',
          answer1: 'Dailyshot ürünlerimizi resmi online mağazamız dailyshot.com.tr üzerinden güvenle satın alabilirsiniz.',
          question2: 'Teslimat süresi ne kadar?',
          answer2: '250 TL üzeri siparişlerinizde ücretsiz kargo ile 2-3 iş günü içinde teslimat yapılmaktadır.',
          question3: 'Toplu sipariş verebilir miyim?',
          answer3: 'Evet, kurumsal ve toplu siparişler için lütfen bizimle iletişime geçin. Özel fiyatlandırma ve hızlı teslimat seçenekleri sunuyoruz.',
        },
      },
      legal: {
        title: 'Yasal Bilgiler',
        content: 'İçerik hazırlanıyor...',
        kvkk: {
          title: 'KVKK Aydınlatma Metni',
          content: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verileriniz, Well Works Turkey tarafından veri sorumlusu sıfatıyla işlenmektedir.\n\nKişisel verileriniz; hizmetlerimizin sunulması, müşteri ilişkilerinin yönetilmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.\n\nKişisel verileriniz, ilgili mevzuatta belirtilen süreler boyunca saklanmakta ve bu sürelerin sonunda silinmekte, yok edilmekte veya anonim hale getirilmektedir.\n\nKVKK kapsamındaki haklarınız hakkında detaylı bilgi almak için info@wellworksturkey.com adresine başvurabilirsiniz.',
        },
        cookies: {
          title: 'Çerez Politikası',
          content: 'Web sitemiz, size daha iyi bir deneyim sunmak için çerezler kullanmaktadır.\n\nÇerezler, web sitemizi ziyaret ettiğinizde tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır.\n\nKullandığımız çerez türleri:\n• Zorunlu Çerezler: Web sitesinin düzgün çalışması için gereklidir.\n• Analitik Çerezler: Ziyaretçi davranışlarını anlamamıza yardımcı olur.\n• Pazarlama Çerezleri: Size özelleştirilmiş reklamlar göstermek için kullanılır.\n\nTarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler düzgün çalışmayabilir.',
        },
        terms: {
          title: 'Kullanım Koşulları',
          content: 'Web sitemizi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.\n\n1. Genel Koşullar\nBu web sitesi Well Works Turkey tarafından işletilmektedir. Siteyi kullanarak bu koşulları kabul etmiş olursunuz.\n\n2. Fikri Mülkiyet\nSitedeki tüm içerik, logolar ve görseller Well Works Turkey\'e aittir ve izinsiz kullanılamaz.\n\n3. Sorumluluk Reddi\nSite içeriği bilgilendirme amaçlıdır. Ürünlerimiz tıbbi tedavi yerine geçmez.\n\n4. Değişiklikler\nBu koşulları önceden haber vermeksizin değiştirme hakkımızı saklı tutarız.',
        },
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
        menu: 'Menu',
        close: 'Close',
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
          subtitle: 'Dailyshot liquid supplements support your body throughout the day with formulations designed for every need and goal.',
          viewAll: 'View All',
          discover: 'Discover',
          new: 'New',
        },
        about: {
          title: 'What is Dailyshot?',
        },
        why: {
          fastAbsorption: 'Fast Absorption',
          fastAbsorptionDesc: 'Takes effect within minutes',
          highBioavailability: 'High Bioavailability',
          highBioavailabilityDesc: 'Your body absorbs more benefits',
          naturalIngredients: 'Natural Ingredients',
          naturalIngredientsDesc: 'Herbal and patented formulas',
          certifiedQuality: 'Certified Quality',
          certifiedQualityDesc: 'GMP and Halal certified production',
        },
        whereToBuy: {
          title: 'Where to Buy?',
          description: 'You can safely purchase Dailyshot products from our official online store.',
          cta: 'Visit Online Store',
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
        stats: {
          experience: 'Years Industry Experience',
          events: 'Successfully Completed Events',
          attendees: 'Happy Attendees',
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
        close: 'Close',
      },
      whatsapp: {
        tooltip: 'Message us! 24/7 support',
      },
      notFound: {
        message: 'The page you are looking for was not found',
        backHome: 'Back to Home',
      },
      compare: {
        title: 'Compare Products',
        subtitle: 'Compare products side by side and choose the best one for you.',
        comingSoon: 'This feature will be available soon.',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with us for questions, suggestions, or partnership inquiries.',
        form: {
          fullName: 'Full Name',
          fullNamePlaceholder: 'Your Name',
          email: 'Email',
          emailPlaceholder: 'example@email.com',
          phone: 'Phone',
          phonePlaceholder: '+90 555 123 4567',
          subject: 'Subject',
          subjectGeneral: 'General Inquiry',
          subjectProduct: 'About Product',
          subjectEvent: 'Event',
          subjectPartnership: 'Partnership',
          message: 'Your Message',
          messagePlaceholder: 'Please write your message here...',
          submit: 'Send Message',
        },
        info: {
          title: 'Contact Information',
        },
        address: {
          title: 'Address',
          content: 'Fulya, Ortaklar Cd. No.14 K.3 D.5\n34360 Şişli/Istanbul',
        },
        phone: {
          title: 'Phone',
          content: '0 (212) 216 47 52',
        },
        email: {
          title: 'Email',
          content: 'info@wellworksturkey.com',
        },
        hours: {
          title: 'Business Hours',
          content: 'Mon - Fri: 09:00 - 18:00\nSat: 10:00 - 14:00',
        },
        map: {
          view: 'View on Google Maps',
        },
        faq: {
          title: 'Frequently Asked Questions',
          question1: 'Where can I buy your products?',
          answer1: 'You can safely purchase Dailyshot products from our official online store at dailyshot.com.tr.',
          question2: 'How long does delivery take?',
          answer2: 'Free shipping for orders over 250 TL, delivery within 2-3 business days.',
          question3: 'Can I place bulk orders?',
          answer3: 'Yes, please contact us for corporate and bulk orders. We offer special pricing and fast delivery options.',
        },
      },
      legal: {
        title: 'Legal Information',
        content: 'Content is being prepared...',
        kvkk: {
          title: 'Privacy Policy (KVKK)',
          content: 'Your personal data is processed by Well Works Turkey as the data controller under the Personal Data Protection Law (KVKK).\n\nYour personal data is processed for the purposes of providing our services, managing customer relationships, and fulfilling legal obligations.\n\nYour personal data is stored for the periods specified in the relevant legislation and is deleted, destroyed, or anonymized at the end of these periods.\n\nFor detailed information about your rights under KVKK, you can contact info@wellworksturkey.com.',
        },
        cookies: {
          title: 'Cookie Policy',
          content: 'Our website uses cookies to provide you with a better experience.\n\nCookies are small text files saved to your device by your browser when you visit our website.\n\nTypes of cookies we use:\n• Essential Cookies: Required for the website to function properly.\n• Analytics Cookies: Help us understand visitor behavior.\n• Marketing Cookies: Used to show you personalized ads.\n\nYou can disable cookies from your browser settings, but some features may not work properly.',
        },
        terms: {
          title: 'Terms of Service',
          content: 'By using our website, you agree to the following terms.\n\n1. General Terms\nThis website is operated by Well Works Turkey. By using the site, you agree to these terms.\n\n2. Intellectual Property\nAll content, logos, and images on the site belong to Well Works Turkey and cannot be used without permission.\n\n3. Disclaimer\nSite content is for informational purposes. Our products do not replace medical treatment.\n\n4. Changes\nWe reserve the right to change these terms without prior notice.',
        },
      },
    },
  },
};

// Get saved language from localStorage or default to Turkish
const savedLang = typeof window !== 'undefined' 
  ? localStorage.getItem('wellworks-lang') 
  : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || 'tr',
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
  },
});

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('wellworks-lang', lng);
  }
});

export default i18n;
