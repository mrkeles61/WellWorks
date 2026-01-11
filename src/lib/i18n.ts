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
        rights: 'Tüm hakları saklıdır.',
        privacy: 'KVKK',
        cookies: 'Çerez Politikası',
        terms: 'Kullanım Koşulları',
        onlineShop: 'Online Mağaza',
        compareProducts: 'Ürün Karşılaştır',
        hours: 'Pzt - Cum: 09:00 - 18:00',
        corporate: 'Kurumsal',
        about: 'Hakkımızda',
        contactLink: 'İletişim',
        privacyPolicy: 'Kişisel Veriler Politikası',
        socialMedia: 'Sosyal Medya',
        addressContact: 'Adres & İletişim',
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
          title: 'Kişisel Veriler Politikası',
          content: `Well Works Health İlaç Gıda Ve Sağlık Ürünleri Sanayi Tic. Ltd. Şti. Kişisel Veriler Politikası

Kişisel Veriler Kanunu hakkında genel bilgilendirme

6698 Sayılı Kişisel Verilerin Korunması Kanunu (bundan sonra KVKK olarak anılacaktır) 24 Mart 2016 tarihinde kabul edilmiş, 7 Nisan 2016 tarihli 29677 sayılı Resmi Gazete'de yayınlanmıştır. KVKK'nun bir kısmı yayın tarihinde, bir kısmı ise 7 Ekim 2016'da yürürlüğe girmiştir.

Veri sorumlusu sıfatıyla bilgilendirme

6698 sayılı KVKK uyarınca ve Veri Sorumlusu sıfatıyla, kişisel verileriniz bu sayfada açıklandığı çerçevede; kaydedilecek, saklanacak, güncellenecek, mevzuatın izin verdiği durumlarda 3. kişilere açıklanabilecek / devredilebilecek, sınıflandırılabilecek ve KVKK'da sayılan şekillerde işlenebilecektir.

Kişisel verilerinizin ne şekilde işlenebileceği

6698 sayılı KVKK uyarınca, Firmamız ile paylaştığınız kişisel verileriniz, tamamen veya kısmen, otomatik olarak, veyahut herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilerek, kaydedilerek, depolanarak, değiştirilerek, yeniden düzenlenerek, kısacası veriler üzerinde gerçekleştirilen her türlü işleme konu olarak tarafımızdan işlenebilecektir. KVKK kapsamında veriler üzerinde gerçekleştirilen her türlü işlem "kişisel verilerin işlenmesi" olarak kabul edilmektedir.

Kişisel verilerinizin işlenme amaçları ve hukuki sebepleri

Paylaştığınız kişisel veriler,

• Müşterilerimize verdiğimiz hizmetlerin gereklerini, sözleşmenin ve teknolojinin gereklerine uygun şekilde yapabilmek, sunulan ürün ve hizmetlerimizi geliştirebilmek için;

• 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ile bu düzenlemelere dayanak yapılarak hazırlanan 26.08.2015 tarihli 29457 sayılı RG'de yayınlanan Elektronik Ticarette Hizmet Sağlayıcı ve Aracı Hizmet Sağlayıcılar Hakkında Yönetmelik, 27.11.2014 tarihli ve 29188 sayılı RG'de yayınlanan Mesafeli Sözleşmeler Yönetmeliği ve diğer ilgili mevzuat kapsamında işlem sahibinin bilgilerini tespit için kimlik, adres ve diğer gerekli bilgileri kaydetmek için;

• Bankacılık ve Elektronik Ödeme alanında zorunlu olan ödeme sistemleri, elektronik sözleşme veya kağıt ortamında işleme dayanak olacak tüm kayıt ve belgeleri düzenlemek; mevzuat gereği ve diğer otoritelerce öngörülen bilgi saklama, raporlama, bilgilendirme yükümlülüklerine uymak için;

• Kamu güvenliğine ilişkin hususlarda ve hukuki uyuşmazlıklarda, talep halinde ve mevzuat gereği savcılıklara, mahkemelere ve ilgili kamu görevlilerine bilgi verebilmek için;

6698 sayılı KVKK ve ilgili ikincil düzenlemelere uygun olarak işlenecektir.

Kişisel verilerinizin aktarılabileceği üçüncü kişi veya kuruluşlar hakkında bilgilendirme

Yukarıda belirtilen amaçlarla, Firmamız ile paylaştığınız kişisel verilerinizin aktarılabileceği kişi / kuruluşlar; başta Firmamızın e-ticaret altyapısını sağlayan IdeaSoft Yazılım San. ve Tic. A.Ş. olmak üzere, tedarikçiler, kargo şirketleri gibi sunulan hizmetler ile ilgili kişi ve kuruluşlar, faaliyetlerimizi yürütmek üzere ve/veya Veri İşleyen sıfatı ile hizmet alınan, iş birliği yaptığımız program ortağı kuruluşları, yurtiçi / yurtdışı kuruluşlar ve diğer 3. kişilerdir.

Kişisel verilerinizin toplanma şekli

Kişisel verileriniz,

• Firmamız internet sitesi ve mobil uygulamalarındaki formlar aracılığıyla ad, soyad, TC kimlik numarası, adres, telefon, iş veya özel e-posta adresi gibi bilgiler ile; kullanıcı adı ve şifresi kullanılarak giriş yapılan sayfalardaki tercihleri, gerçekleştirilen işlemlerin IP kayıtları, tarayıcı tarafından toplanan çerez verileri ile gezinme süre ve detaylarını içeren veriler, konum verileri şeklinde;

• Satış ve pazarlama departmanı çalışanlarımız, şubelerimiz, tedarikçilerimiz, diğer satış kanalları, kağıt üzerindeki formlar, kartvizitler, dijital pazarlama ve çağrı merkezi gibi kanallarımız aracılığıyla sözlü, yazılı veya elektronik ortamdan;

• Firmamız ile ticari ilişki kurmak, iş başvurusu yapmak, teklif vermek gibi amaçlarla, kartvizit, özgeçmiş (cv), teklif vermek ve sair yollarla kişisel verilerini paylaşan kişilerden alınan, fiziki veya sanal bir ortamda, yüz yüze ya da mesafeli, sözlü veya yazılı ya da elektronik ortamdan;

• Ayrıca farklı kanallardan dolaylı yoldan elde edilen, web sitesi, blog, yarışma, anket, oyun, kampanya ve benzeri amaçlı kullanılan (mikro) web sitelerinden ve sosyal medyadan elde edilen veriler, e-bülten okuma veya tıklama hareketleri, kamuya açık veri tabanlarının sunduğu veriler, sosyal medya platformlarından paylaşıma açık profil ve verilerden; işlenebilmekte ve toplanabilmektedir.

KVKK yürürlüğe girmeden önce elde edilen kişisel verileriniz

KVKK'nun yürürlük tarihi olan 7 Nisan 2016 tarihinden önce, üyelik, elektronik ileti izni, ürün / hizmet satın alma ve diğer şekillerde hukuka uygun olarak elde edilmiş olan kişisel verileriniz de bu belgede düzenlenen şart ve koşullara uygun olarak işlenmekte ve muhafaza edilmektedir.

Kişisel verilerinizin yurtdışına aktarılması

Türkiye'de işlenerek veya Türkiye dışında işlenip muhafaza edilmek üzere, yukarıda sayılan yöntemlerden herhangi birisi ile toplanmış kişisel verileriniz KVKK kapsamında kalmak kaydıyla ve sözleşme amaçlarına uygun olarak yurtdışında bulunan (Kişisel Veriler Kurulu tarafından akredite edilen ve kişisel verilerin korunması hususunda yeterli korumanın bulunduğu ülkelere) hizmet aracılarına da aktarılabilecektir.

Kişisel verilerin saklanması ve korunması

Kişisel verileriniz, Firmamız nezdinde yer alan veri tabanında ve sistemlerde KVKK'nun 12. maddesi gereğince gizli olarak saklanacak; yasal zorunluluklar ve bu belgede belirtilen düzenlemeler haricinde hiçbir şekilde üçüncü kişilerle paylaşılmayacaktır. Firmamız, kişisel verilerinizin barındığı sistemleri ve veri tabanlarını, KVKK'nun 12. Maddesi gereği kişisel verilerin hukuka aykırı olarak işlenmesini önlemekle, yetkisiz kişilerin erişimlerini engellemekle, erişim yönetimi gibi yazılımsal tedbirleri ve fiziksel güvenlik önlemleri almakla mükelleftir.

Kişisel verilerin güncel ve doğru tutulması

KVKK'nun 4. maddesi uyarınca Firmamızın kişisel verilerinizi doğru ve güncel olarak tutma yükümlülüğü bulunmaktadır. Bu kapsamda Firmamızın yürürlükteki mevzuattan doğan yükümlülüklerini yerine getirebilmesi için Müşterilerimizin doğru ve güncel verilerini paylaşması veya web sitesi / mobil uygulama üzerinden güncellemesi gerekmektedir.

6698 sayılı KVKK uyarınca kişisel veri sahibinin hakları

6698 sayılı KVKK 11.maddesi 07 Ekim 2016 tarihinde yürürlüğe girmiş olup ilgili madde gereğince, Kişisel Veri Sahibi'nin bu tarihten sonraki hakları aşağıdaki gibidir:

• Kişisel veri işlenip işlenmediğini öğrenme,
• Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
• Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,
• Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,
• KVKK'nun 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,
• Kişisel verilerin düzeltilmesi, silinmesi, yok edilmesi halinde bu işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere de bildirilmesini isteme,
• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,
• Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.

İstanbul Ticaret Odası'nın 422501-5 sicil sayısında kayıtlı, 0801158805500001 MERSİS numarasına sahip, Fulya mahallesi Ortaklar caddesi No:14/5 Şişli/İstanbul adresinde bulunan Well Works Turkey Health İlaç Gıda ve Sağlık Ürünleri Sanayi Ticaret Limited Şirketi, KVKK kapsamında Veri Sorumlusu'dur.

Kişisel Veri Sahipleri, sorularını, görüşlerini veya taleplerini aşağıdaki iletişim kanallarından herhangi birisine yöneltebilir:

E-posta: info@wellworksturkey.com
Telefon: +90 536 032 08 38`,
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
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy',
        terms: 'Terms of Service',
        onlineShop: 'Online Shop',
        compareProducts: 'Compare Products',
        hours: 'Mon - Fri: 09:00 - 18:00',
        corporate: 'Corporate',
        about: 'About Us',
        contactLink: 'Contact',
        privacyPolicy: 'Privacy Policy',
        socialMedia: 'Social Media',
        addressContact: 'Address & Contact',
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
