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
        dailyshotNedir: 'Dailyshot Nedir?',
        electrovitNedir: 'Electrovit Nedir?',
        winDiscount: 'İndirim Kazan',
        quiz: 'Quiz',
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
        hero2: {
          label: 'Dailyshot Hakkında',
          title: 'Türkiye\'nin İlk ve Tek <0>Likit Takviye</0> Markası',
          desc: 'İnsanlara daha sağlıklı ve daha doğal bir yaşam sağlamak amacıyla yola çıktık. Doğadan aldığımız ilhamla tüketicilerimiz için sağlıklı çözümler sunmayı hedefliyor, doğanın bize sunduklarını gelecek kuşaklara taşıyor ve bu ilhamla yarattığımız besin takviyelerini ihtiyacı olanlarla buluşturuyoruz. Kendimizi, hizmet ettiğimiz kişilerin "Sağlıklı Yaşam Ortakları" olarak görüyor ve bu sorumluluk bilinci ile çalışıyoruz. Duruşumuz ve hedefimizle sektöre bambaşka bir boyut kazandırdığımız inancındayız.',
          cta: 'Ürünleri Keşfet',
        },
        certificates: {
          title: 'SERTİFİKALARIMIZ',
          desc: 'Bu ürün sertifikalı tesiste üretilmektedir.',
        },
        sections: {
          dailyshot: {
            label: 'Dailyshot',
            title: 'Likit Takviye Ürünleri',
            cta: 'Mağazaya Git',
          },
          electrovit: {
            label: 'Electrovit',
            title: 'Elektrolit Takviyeleri',
            cta: 'Ürünleri Gör',
          },
        },
        liquidRevolution: {
          label: 'Neden Likit?',
          title: 'Likit Takviye <0>Devrimi</0>',
          desc1: 'Likit formüller, hap ve kapsüllerin aksine sindirim sisteminde çözünme sürecine ihtiyaç duymaz. Bu sayede içerikler doğrudan kana karışır ve etkisini çok daha hızlı gösterir.',
          desc2: 'Araştırmalar, likit formüllerin %90\'a varan oranlarda emilim sağladığını göstermektedir. Geleneksel haplar ise yalnızca %10-20 oranında emilir.',
        },
        whyLiquid: {
          liquidForm: {
            title: 'LİKİT FORM',
            desc1: 'Vücudunuzun zamana ihtiyacı yok! Likit ürünler, içerisindeki etken maddelerin doğrudan ve hızlı emilimini sağlarken, katı formlar gibi ekstra katkı maddeleri içermez.',
            desc2: 'Bu sayede daha hızlı etki sağlar ve maksimum biyoyararlanım sunar. Çünkü hayat hızlı, kullandığınız takviye edici gıdalar da öyle olmalı!',
          },
          herbalContent: {
            title: 'BİTKİSEL İÇERİK',
            desc1: 'Ürünlerimiz, bitkisel özler, vitaminler ve mineraller ile günlük yaşamda vücudun normal fonksiyonlarına destek olmak amacıyla özenle formüle edilmiştir.',
            desc2: 'Her ürün, doğal kaynaklardan elde edilen bileşenlerle hazırlanır ve günlük beslenmenize pratik bir katkı sağlar.',
          },
          easyUse: {
            title: 'KOLAY KULLANIM',
            desc: 'Likit formlar aroma ve tat profili ile kolay ve keyifli bir içim sunar. Ayrıca tatma eylemi, besin yollarını harekete geçirir ve vücudun belirli bölgelerini hedef alarak gıda takviyesinin aktif bileşeninin daha iyi kullanılmasını sağlar.',
          },
        },
        blog: {
          title: 'Blog',
          label: 'Dailyshot',
          readMore: 'Devamını oku...',
          posts: {
            hangover: {
              title: '"Hangover" kelimesi nereden geliyor?',
              excerpt: 'Türkçede "akşamdan kalma" olarak kullandığımız Hangover kelimesinin kökenini hiç merak ettiniz mi? Aslında Hangover kelimesinin bir efsaneyle birlikte ortaya çıktığı sanılıyor.',
            },
            hangxiety: {
              title: 'Sabah gelen "EYVAH!" perilerinin ismi Hangxiety!',
              excerpt: 'Haydi itiraf edelim! Birçoğumuz alkolün dozunu biraz fazla kaçırdığımız akşamların sabahında küçük çaplı bir panik hali yaşamışızdır.',
            },
            alcoholJourney: {
              title: 'Alkolün vücudumuzdaki yolculuğunu biliyor musunuz?',
              excerpt: 'Alkolün ilk yudumla başlayıp bütün bedenimize hızla ulaşan ve sonra yavaş yavaş bizi terk eden yolculuğunu merak ediyorsanız bu yazımızı ilgiyle okuyacağınıza eminiz.',
            },
            alcoholFacts: {
              title: 'Alkol ile ilgili eğlenceli bilgiler!',
              excerpt: 'Alkol ile ilgili kimi kanıtlanmış kimi ise dile yayılmış eğlenceli mitleri öğrenmek ister misiniz? İşte bazıları!',
            },
          },
        },
        dailyshotNedir: {
          heroLabel: 'Yeni Nesil Likit Takviye',
          heroTitle: 'Dailyshot Nedir?',
          heroDesc: 'Dailyshot, doğanın gücünü bilimle buluşturan, likit formda hazırlanmış premium gıda takviyesidir. Hap yutma zorluğunu ortadan kaldıran lezzetli ve etkili formüller.',
          benefits: {
            fastAbsorption: 'Hızlı Emilim',
            fastAbsorptionDesc: 'Likit form teknolojisi ile etken maddeler dakikalar içinde kana karışır.',
            bioavailability: '%90 Biyoyararlanım',
            bioavailabilityDesc: 'Hap ve kapsüllere göre 5 kata kadar daha yüksek emilim ve etkinlik.',
            easyDrink: 'Kolay İçim',
            easyDrinkDesc: 'Su gerektirmez, çalkala ve iç. Günün her anında pratik kullanım.',
            cleanContent: 'Temiz İçerik',
            cleanContentDesc: 'Şeker ilavesiz, glütensiz ve vegan dostu bitkisel formülasyonlar.',
          },
          usageRoutine: {
            label: 'Kullanım Rutini',
            title: 'Hayatınıza Uyum Sağlar',
            morning: 'Güne Başlarken',
            morningDesc: 'Energyshot ile güne zinde başlayın, yorgunluğu geride bırakın.',
            daytime: 'Gün İçerisinde',
            daytimeDesc: 'Detox ve Defense shot ile bağışıklığınızı ve metabolizmanızı destekleyin.',
            evening: 'Günün Sonunda',
            eveningDesc: 'Relaxshot ile günün stresini atın ve kaliteli bir uykuya hazırlanın.',
          },
          targetAudience: {
            label: 'Kimler İçin?',
            title: 'Dailyshot Kimlere Uygun?',
            item1: 'Yoğun iş temposuna sahip profesyoneller',
            item2: 'Sporcular ve aktif yaşam tutkunları',
            item3: 'Tablet/kapsül yutma zorluğu yaşayanlar',
            item4: 'Hızlı ve etkili sonuç arayanlar',
            item5: 'Bütüncül sağlığına özen gösterenler',
            item6: 'Bitkisel takviyeleri tercih edenler',
          },
          productFamily: {
            label: 'Ürün Ailesi',
            title: 'Her İhtiyaca Özel Çözümler',
          },
          productCards: {
            categories: {
              energy: 'Enerji',
              hangover: 'Akşamdan Kalma',
              sleep: 'Uyku ve Stres',
              immunity: 'Bağışıklık',
              detox: 'Detoks',
              digestion: 'Sindirim',
              vitality: 'Vitalite',
              antioxidant: 'Antioksidan',
            },
            descriptions: {
              energyshot: 'GÜNÜNÜ ATEŞLE!',
              hangovershot: 'Akşamdan Kalma, Yarına Keyifle Uyan!',
              hangovershotzero: 'Şekersiz, Yarına Keyifle Uyan!',
              relaxshot: 'RAHATLA, DİNLEN, YENİLEN!',
              defenseshot: 'KORUN, SAVUN, GÜÇLEN!',
              detoxshot: 'ARINDIR, TEMİZLE, YENİLEN!',
              laxshot: 'DÜZENLİ SİNDİRİM, HAFİF HİSSET!',
              libidoshot: 'ENERJİNİ KEŞFEt, TUTKUNU YAŞA!',
              antioxshot: 'HÜCRE KORUMASI, GENÇ KAL!',
            },
            packLabel: '7\'li Kutu',
            packLabel4: '4\'lü Paket',
          },
          cta: {
            title: 'Dailyshot Sizin İçin Mükemmel Seçim.',
            desc: 'Modern yaşamın hızına ayak uydururken sağlığınızdan ödün vermeyin. Dailyshot, vücudunuzun ihtiyaç duyduğu desteği en saf ve en hızlı haliyle sunar.',
            button: 'Keşfet',
            viewProduct: 'İncele',
          },
        },
        electrovitNedir: {
          heroLabel: '',
          heroTitle: 'Su içemeyenler için',
          heroTitleHighlight: 'tasarlandı',
          heroTitleHighlight2: '',
          heroSlogan: 'Elektrovit ile Susuz Kalma!',
          heroDesc: '',
          introSection: {
            paragraph1: 'Unutkanlık, tüketim alışkanlığı ya da su kaybına sebep olacak dış faktörlerin varlığı nedeniyle günlük su ihtiyacını karşılayamayanlar için geliştirilmiş bir elektrolit takviyesidir.',
            paragraph2: 'Günlük elektrolit ihtiyacınızı karşılayarak dehidrasyonun önlenmesini, vücudun sıvı dengesini, sinir iletimi ve kas fonksiyonlarını destekler. Yorgunluk ve bitkinliğin azalmasına, enerji oluşum metabolizmasına katkıda bulunur.',
          },
          quickBenefits: {
            energy: 'Enerji Artışı',
            fluid: 'Sıvı Dengesi',
            nerve: 'Sinir İletimi',
            muscle: 'Kas Desteği',
          },
          benefits: {
            label: 'Neden Electrovit?',
            title: 'Elektrolitlerin Gücü',
            instantEnergy: 'Sodyum Desteği',
            instantEnergyDesc: 'Vücuttaki sıvı dengesini korur ve sinir-kas fonksiyonlarını destekler.',
            hydration: 'Magnezyum Katkısı',
            hydrationDesc: 'Enerji üretimini destekler, kas ve sinir fonksiyonlarına katkı sağlar.',
            muscleFunction: 'Potasyum Takviyesi',
            muscleFunctionDesc: 'Kas kasılmalarını düzenler ve kalp sağlığını destekler.',
            heartHealth: 'Saşe Kolaylığı',
            heartHealthDesc: 'Pratik saşe formatı sayesinde her an yanınızda taşıyın ve kolayca tüketin.',
          },
          usageTime: {
            label: 'Kullanım Alanları',
            title: 'Ne Zaman Kullanmalı?',
            preWorkout: 'Günlük Su İhtiyacı',
            preWorkoutDesc: 'Yetersiz su tüketimi durumlarında vücudun sıvı dengesini sağlar.',
            duringWorkout: 'Yorgunluk ve Bitkinlik',
            duringWorkoutDesc: 'Enerji oluşum metabolizmasına katkıda bulunarak zinde hissetmenizi sağlar.',
            postWorkout: 'Aktif Yaşam',
            postWorkoutDesc: 'Terleme ile kaybedilen elektrolitleri hızla yerine koyar.',
          },
          flavors: {
            label: 'Aromalar',
            title: 'İki Lezzetli Seçenek',
            watermelon: 'Karpuz',
            orange: 'Portakal',
            desc: 'Aromalı Electrovit',
            buy: 'Satın Al',
          },
          targetAudience: {
            label: 'Kimler İçin?',
            title: 'Electrovit Kimlere Uygun?',
            item1: 'Su içmeyi unutanlar ve ihmal edenler',
            item2: 'Günün koşuşturmasında sıvı kaybı yaşayanlar',
            item3: 'Odaklanma sorunu ve zihinsel yorgunluk hissedenler',
            item4: 'Gün içinde enerji düşüklüğü yaşayanlar',
            item5: 'Aktif bir yaşam tarzına sahip olanlar',
            item6: 'Sık seyahat edenler ve yolcular',
          },
          cta: 'Şimdi Keşfedin',
          disclaimer: 'Takviye edici gıdalar normal beslenmenin yerine geçemez.',
          products: {
            title: 'Ürünlerimiz',
            family: 'Electrovit Ailesi',
          },
          stats: {
            sodium: 'Sodyum',
            potassium: 'Potasyum',
            magnesium: 'Magnezyum',
            sugar: 'İlave Şeker',
          },
        },
        wellworksIntro: {
          label: 'WellWorks Health',
          title: 'Likit Takviyenin <0>Gücünü</0> Keşfedin',
          desc: 'WellWorks Health, içerisinde likit formda ürünler bulunduran bitkisel bir gıda takviyesi markasıdır. Likit yapısı sayesinde kana hızlıca karışır ve etkinin hızlı gözlemlenmesine olanak sağlar.',
          feature1: '<0>%90\'a varan</0> biyoyararlanım oranı',
          feature2: 'GMP ve Helal sertifikalı üretim',
          feature3: 'Hızlı etki başlangıcı',
          cta: 'Ürünleri Keşfet',
        },
        electrovitIntro: {
          label: '',
          title: 'Su içemeyenler için <0>tasarlandı.</0>',
          desc: 'Günlük su ihtiyacını karşılayamayanlar için geliştirilmiş elektrolit takviyesidir. Dehidrasyonu önler, sıvı dengesini korur.',
          feature1: 'Sinir iletimi ve kas fonksiyonlarını destekler',
          feature2: 'Yorgunluk ve bitkinliği azaltır',
          feature3: 'Enerji oluşum metabolizmasına katkıda bulunur',
          cta: 'Electrovit\'i Keşfet',
        },
        ourProducts: {
          label: 'Markalarımız',
          title: 'İki Marka.',
          subtitle: 'Tek Sağlık Vizyonu.',
          desc: 'Modern sağlık için özel olarak tasarlanmış likit takviye ve elektrolit ürünlerimizi keşfedin.',
          stats: {
            customers: 'Mutlu Müşteri',
            stores: 'Satış Noktası',
            brands: 'Güçlü Marka',
          },
          dailyshot: {
            title: 'Likit Takviyeler',
            desc: 'Hızlı emilim, yüksek biyoyararlanım',
          },
          electrovit: {
            title: 'Elektrolit Takviyeleri',
            desc: 'Spor ve aktif yaşam için mineral desteği',
          },
          explore: 'Keşfet',
        },
        storeLocator: {
          pageLabel: 'En Yakın Satış Noktası',
          pageTitle: 'Eczane ve Satış Noktaları',
          pageDesc: 'Size en yakın Dailyshot ve Electrovit satış noktalarını harita üzerinden kolayca bulabilir, tek tıkla yol tarifi alabilirsiniz.',
          loading: 'Yükleniyor…',
          noResults: 'Bu filtrede sonuç bulunamadı.',
          noMapResults: 'Bu filtrede haritada konum bulunamadı',
          allCities: 'Tüm Şehirler',
          allCounties: 'Tüm İlçeler',
          searchPlaceholder: 'İsim veya adres ara',
          results: 'sonuç',
          nearMe: 'Yakınımda',
          getDirections: 'Yol Tarifi',
          addressBased: 'Adres bazlı',
          onMap: 'Haritada',
        },
        aboutUs: {
          pageTitle: 'Hakkımızda',
          origin: {
            title: 'HAKKIMIZDA',
            content: 'İnsanlara daha sağlıklı ve daha doğal bir yaşam sağlamak amacıyla yola çıktık. Doğadan aldığımız ilhamla tüketicilerimiz için sağlıklı çözümler sunmayı hedefliyor, doğanın bize sunduklarını gelecek kuşaklara taşıyor ve bu ilhamla yarattığımız besin takviyelerini ihtiyacı olanlarla buluşturuyoruz. Kendimizi, hizmet ettiğimiz kişilerin "Sağlıklı Yaşam Ortakları" olarak görüyor ve bu sorumluluk bilinci ile çalışıyoruz. Duruşumuz ve hedefimizle sektöre bambaşka bir boyut kazandırdığımız inancındayız.',
          },
          qualityPolicy: {
            title: 'KALİTE POLİTİKAMIZ',
            content: 'Ürünlerimizin içeriğine, sağladığı faydalara ve kalitesine güveniyoruz. Ürünlerimizde insan sağlığına zarar verecek ya da olumsuz etki edecek hiçbir bileşene yer vermiyoruz. Patentli ham madde kullanıyor ve helal kuralları çerçevesinde birleştiriyoruz. Her gün yenilenen teknoloji ile üretim prosesimizi geliştiriyor, yenilikçi ve özgün ürünler üreterek sağlığınıza hediye ediyoruz. Kalitesinden emin olmadığımız hiçbir ürünü sizlere sunmuyor ve ürün kalitemizi üstün tutuyoruz.',
          },
          closing: 'Geçmişten geleceğe yürüdüğümüz bu yolda bize eşlik ettiğiniz için sizlere teşekkür ederiz.',
          reachUs: {
            title: 'Bize Ulaşın!',
            subtitle: '',
          },
          social: {
            title: 'SOSYAL MEDYA',
            content: 'WellWorks Health dünyasından en güncel haberler ve sağlıklı yaşam ipuçları için bizi takip edin.',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
          },
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
        bentoGrid: {
          title: 'Etkinliklerimiz',
          subtitle: 'Dünya standartlarında organizasyonlar ile markanızı unutulmaz anlarla buluşturuyoruz',
          viewAll: 'Tüm Etkinlikleri Görüntüle',
          viewDetails: 'Detayları Gör',
          viewing: 'kişi şu an inceliyor',
        },
        home: {
          hero: {
            badge: 'Premium Etkinlik Organizasyonu',
            title1: 'İstanbul\'un En',
            titleHighlight: 'Prestijli',
            title2: 'Etkinliklerini Tasarlıyoruz',
            desc: 'Modern Ege ruhunu İstanbul\'un dinamizmiyle buluşturuyoruz. Kurumsal lansmanlardan festivallere, unutulmaz anlar için çözüm ortağınız.',
            ctaPlan: 'Hemen Planla',
            ctaReel: 'Showreel İzle',
          },
          mission: {
            philosophy: 'Felsefemiz',
            title: 'Dünya standartlarında markalar için <0>unutulmaz anlar</0> yaratıyoruz.',
            desc: 'Sıradanlığı reddediyoruz. Her projeyi, markanızın ruhunu yansıtan, katılımcılarınızla derin bağlar kuran bir başyapıt olarak ele alıyoruz.',
          },
          process: {
            curation: {
              title: 'Kürasyon',
              desc: 'Marka kimliğinizi ve hedeflerinizi analiz ederek, size özel yaratıcı bir dünya kurguluyoruz. Her detay, hikayenizin bir parçası.',
            },
            planning: {
              title: 'Planlama',
              desc: 'Kusursuz operasyonel süreçler. Lojistikten teknik altyapıya kadar her adımı matematiksel bir hassasiyetle yönetiyoruz.',
            },
            experience: {
              title: 'Deneyim',
              desc: 'Katılımcılarınızın beş duyusuna hitap eden, akıllardan silinmeyecek anlar ve duygusal bağlar yaratıyoruz.',
            },
          },
          differentiators: {
            label: 'Farkımız',
            title: 'NASIL FARK YARATIYORUZ?',
            meetings: {
              title: 'Toplantılar',
              desc: 'Profesyonel toplantı yönetimi ve özelleştirilmiş mekan seçenekleri ile etkin ve verimli toplantılar düzenliyoruz.',
            },
            incentives: {
              title: 'Teşvik Programları',
              desc: 'Motivasyonu artıran ve ekip ruhunu güçlendiren özel teşvik programları ile unutulmaz deneyimler sunuyoruz.',
            },
            conferences: {
              title: 'Konferanslar',
              desc: 'Uzman konuşmacılar, interaktif teknolojiler ve kusursuz konferans yönetimi ile etkileyici konferanslar düzenliyoruz.',
            },
            exhibitions: {
              title: 'Fuarlar',
              desc: 'Markanızı ön plana çıkaran sergi planlama, ziyaretçi deneyimi önerileri ve organizasyon hizmetleri ile etkileyici fuarlar gerçekleştiriyoruz.',
            },
          },
          services: {
            label: 'Portföy',
            title: 'Hizmetlerimiz',
            desc: 'Yaratıcılığın sınırlarını zorlayan konseptler ve kusursuz operasyon yönetimi.',
            viewAll: 'Tüm Etkinlikler',
            viewGallery: 'Galeriyi İncele',
            items: [
              {
                name: 'HoliFest İstanbul',
                description: 'Renklerin dansı ve müziğin ritmiyle şehrin en enerjik festivali.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAYhIK-nGMz49c4JMrT1z0kXLI7fhR9CrKsYFAQdAjkRUkBeHWM986voT0DQliTSrXHdeydatBRnLyJrltL7-WRpdzIpFk-wHdKWyCancjBLvzeioGRjPgDh-2uhcOJfCjsNMDmSpjD-8BYDDSywzjKHY_FHOV-pG0eHkZLpfGApyh_Rk3HHipKiZc2m-xT3XrhdZPfRAN5c206NulzamjFK-DMRfB6UFhKoQP5wALDMMinrqSece_S6v0P8QfATkQVxchswtiA',
              },
              {
                name: 'Imera & Niks Carnaval',
                description: 'Müzik ve eğlencenin iç içe geçtiği benzersiz bir karnaval deneyimi.',
                image: '/images/mice/imera-carnival.png',
              },
              {
                name: 'Yıldızlı Konser Akşamları',
                description: 'Türkiye\'nin en sevilen sanatçılarıyla yıldızların altında unutulmaz konserler.',
                image: '/images/mice/yildizli-konser.png',
              },
              {
                name: 'Christmas Market',
                description: 'Kış masallarını gerçeğe dönüştüren büyülü bir pazar deneyimi.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4ncuXlL5kbcoY3syjBZySjH-voCBmDjOIFNpel4dclT_ilZiZgUBVrFmXaYyDKpdMM1uVzsFsBFBjCqDC4Z33IEtGdOXCnxHgi_D35C3IJ8QDyR1YH-meF5P0OXToF9EciSKfLjaua2LLTumOVAcFTI7JzJtBoa4H-8AhaemHNzlD74sJxDestfqPFFUsdfdj8FgsuSELg1S0M2SGwn5xwru5VSNOtfda9h1-bDEnzda7AuMq0HpQOddbof3hcGvm7H1kHJrig',
              },
              {
                name: 'Gusto Weekend',
                description: 'Gastronomi, lezzet ve yaşam tarzını kutlayan bir hafta sonu festivali.',
                image: '/images/mice/gusto-weekend.png',
              },
              {
                name: 'Business Leisure',
                description: 'Profesyonel ağ kurma ile premium eğlenceyi birleştiren seçkin etkinlikler.',
                image: '/images/mice/business-leisure.png',
              },
            ],
          },
          capabilities: {
            label: 'Uzmanlık Alanlarımız',
            title: 'Etkinlik Dünyasında Kusursuz Çözümler',
            desc: 'İhtiyaçlarınıza özel, 360 derece etkinlik yönetimi. Fikirden uygulamaya, her aşamada profesyonel dokunuş.',
            cta: 'Detaylı Bilgi Al',
            items: [
              'Konsept & Tasarım Geliştirme',
              'Mekan Yönetimi & Dekorasyon',
              'Ses, Işık & Görüntü Sistemleri',
              'Sanatçı & Performans Yönetimi',
              'Catering & İkram Deneyimi',
              'Lojistik & Konuk Ağırlama',
              'Prodüksiyon & İçerik Üretimi',
              'Basın & Halkla İlişkiler'
            ]
          },
          testimonials: {
            label: 'Referanslar',
            title: 'Müşterilerimiz Ne Diyor?',
            items: [
              {
                quote: "Well Works ekibi, hayalimizdeki lansmanı beklediğimizin çok ötesinde bir vizyonla gerçeğe dönüştürdü. Sadece bir organizasyon değil, sanat eseriydi.",
                author: "Elif Demir",
                role: "Pazarlama Direktörü, TechGlobal",
              },
              {
                quote: "Operasyonel mükemmellik ve yaratıcı zeka bir arada. Festivalimiz, onların dokunuşuyla bambaşka bir seviyeye yükseldi.",
                author: "Caner Yılmaz",
                role: "Etkinlik Yöneticisi, ArtIstanbul",
              },
            ],
          },
          cta: {
            title: 'Bir Sonraki Etkinliğiniz <0>Efsane</0> Olsun',
            desc: 'Hayalinizdeki organizasyonu gerçeğe dönüştürmek için bizimle iletişime geçin. Sizin için mükemmeli tasarlayalım.',
            button: 'Hemen Teklif Al',
            call: 'Bizi Arayın: 0 (212) 216 47 52',
          },
        },
        faq: {
          title: 'Sıkça Sorulan Sorular',
          question1: 'Hangi tür etkinlikler düzenliyorsunuz?',
          answer1: 'Festivaller, kurumsal lansmanlar, özel galalar, yaratıcı atölyeler ve daha birçok etkinlik türünde hizmet veriyoruz.',
          question2: 'Kurumsal müşterilere hizmet veriyor musunuz?',
          answer2: 'Evet, markaların lansman, toplantı, konferans ve motivasyon etkinliklerini A\'dan Z\'ye planlıyor ve yönetiyoruz.',
          question3: 'Etkinlik planlaması ne kadar sürer?',
          answer3: 'Etkinliğin büyüklüğüne göre değişmekle birlikte, genellikle 4-8 haftalık bir planlama süreci öneriyoruz.',
        },
        aboutUs: {
          pageTitle: 'Hakkımızda',
          origin: {
            title: 'BİZ KİMİZ?',
            content: 'Dünya festivallerinden edindiğimiz tecrübe ve bilgi birikimini müşteri odaklı yaklaşımımızla harmanlayarak etkinliklerinizi mükemmelleştiriyoruz. Kurumsal toplantı, müşteri seyahatleri ve şirket etkinlikleri gibi ihtiyaçlarınıza yaratıcı çözümler sunuyor, güçlü iş ortağı ağımız ve profesyonel ekibimizle düşündüğünüzden çok daha fazlasını sunuyoruz.',
          },
          qualityPolicy: {
            title: 'HİZMET ANLAYIŞIMIZ',
            content: 'Her etkinliği bir başyapıt olarak ele alıyor, markanızın ruhunu yansıtan ve katılımcılarınızla derin bağlar kuran deneyimler yaratıyoruz. Detaylara olan tutkumuz ve profesyonel yaklaşımımızla sektörde fark yaratıyoruz.',
          },
          closing: 'Bir sonraki etkinliğinizin efsane olması için buradayız.',
          reachUs: {
            title: 'Bize Ulaşın!',
            subtitle: '',
          },
          social: {
            title: 'SOSYAL MEDYA',
            content: 'WellWorks MICE dünyasından en güncel haberler ve etkinlik duyuruları için bizi takip edin.',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
          },
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
          company: 'Şirket',
          companyPlaceholder: 'Şirket adınızı girin',
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
          content: 'Emniyetevler Mahallesi Kale Sokak 2/A Kağıthane/İSTANBUL',
        },
        phone: {
          title: 'Telefon',
          content: '0 536 032 08 38',
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
      spinWheel: {
        title: 'Hediye Çarkı',
        subtitle: 'Çarkı çevir, indirim kazan!',
        spin: 'ÇEVİR',
        congratulations: 'Tebrikler!',
        wonDiscount: 'İndirim Kazandınız!',
        yourCode: 'İndirim Kodun:',
        spinAgain: 'Tekrar Çevir',
        spinNow: 'Şimdi Çevir',
        spinning: 'Çevriliyor...',
      },
      quiz: {
        title: 'Sana Özel Dailyshot',
        subtitle: 'Hayat tarzına uygun ürünü keşfet',
        question: 'Soru',
        back: 'Geri',
        next: 'İleri',
        finish: 'Bitir',
        yourProduct: 'Sana Özel Ürün',
        discountMessageDynamic: 'İndirim Kodun:',
        restart: 'Tekrar Başla',
        browseProducts: 'Ürünlere Göz At',
        q1: {
          question: 'Sabahları uyandığında kendini nasıl hissediyorsun?',
          opt1: '😴 Çok zor, alarmı kapatmakta zorlanıyorum',
          opt2: '😪 Biraz zor ama idare ediyor',
          opt3: '😐 Normal, ne iyi ne kötü',
          opt4: '⚡ Enerjik ve dinlenmiş',
        },
        q2: {
          question: 'Öğleden sonra enerji seviyen nasıl?',
          opt1: '😫 Çok düşük, sürekli yorgunum',
          opt2: '😴 Genelde yorgun hissediyorum',
          opt3: '😐 Bazen düşüyor ama idare ediyor',
          opt4: '💪 Gün boyu enerjik kalıyorum',
        },
        q3: {
          question: 'Günde kaç fincan kahve veya enerji içeceği tüketiyorsun?',
          opt1: '☕ 3+ fincan, kahve olmadan yapamam',
          opt2: '☕ 2 fincan',
          opt3: '☕ 1 fincan',
          opt4: '🍵 Hiç tüketmiyorum',
        },
        q4: {
          question: 'Genel olarak kendini nasıl hissediyorsun?',
          opt1: '😓 Sürekli yorgun ve tükenmiş',
          opt2: '😐 Pek enerjik değil',
          opt3: '🙂 Fena değil',
          opt4: '✨ Harika, çok dinamiğim',
        },
        q5: {
          question: 'Düzenli spor veya fiziksel aktivite yapıyor musun?',
          opt1: '🏋️ Çok az veya hiç',
          opt2: '🚶 Haftada 1-2 gün',
          opt3: '💪 Haftada 3-4 gün',
          opt4: '🏃 Her gün aktifim',
        },
        q6: {
          question: 'Günlük yaşam kaliteni nasıl değerlendirirsin?',
          opt1: '😔 Düşük, motivasyonsuz hissediyorum',
          opt2: '😐 Orta',
          opt3: '🙂 İyi, ama daha iyi olabilir',
          opt4: '😊 Mükemmel, hayattan keyif alıyorum',
        },
        q7: {
          question: 'Ne sıklıkla sosyal ortamlarda içki içiyorsun?',
          opt1: '🎉 Haftada birden fazla',
          opt2: '🍻 Haftada bir',
          opt3: '🥂 Ayda 1-2 kez',
          opt4: '🚫 Çok nadir veya hiç',
        },
        q8: {
          question: 'Eğlenceli bir gecenin ertesi günü nasıl hissediyorsun?',
          opt1: '🤢 Berbat, bütün gün yatakta kalıyorum',
          opt2: '😵 Zorlanıyorum ama idare ediyorum',
          opt3: '😐 Biraz yorgun ama fena değil',
          opt4: '😊 Hiç etkilenmiyorum',
        },
        q9: {
          question: 'Bir gecede genelde ne kadar içiyorsun?',
          opt1: '🍸 Epeyce, sayamıyorum',
          opt2: '🍷 Birkaç kadeh',
          opt3: '🥃 Sadece 1-2 içki',
          opt4: '🚫 Alkol kullanmıyorum',
        },
        q10: {
          question: 'Daha önce Dailyshot ürünlerini kullandın mı?',
          opt1: '🆕 Hayır, hiç kullanmadım',
          opt2: '👋 1-2 kez denedim',
          opt3: '👍 3-5 kez kullandım',
          opt4: '❤️ Düzenli kullanıyorum',
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
        dailyshotNedir: 'What is Dailyshot?',
        electrovitNedir: 'What is Electrovit?',
        winDiscount: 'Win Discount',
        quiz: 'Quiz',
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
        hero2: {
          label: 'About Dailyshot',
          title: 'Turkey\'s First and Only <0>Liquid Supplement</0> Brand',
          desc: 'We set out to provide people with a healthier and more natural life. Inspired by nature, we aim to offer healthy solutions for our consumers, carry what nature offers us to future generations, and bring the nutritional supplements we create with this inspiration to those who need them. We see ourselves as "Healthy Living Partners" of the people we serve and work with this awareness of responsibility. We believe that we have brought a completely different dimension to the sector with our stance and goal.',
          cta: 'Discover Products',
        },
        certificates: {
          title: 'OUR CERTIFICATES',
          desc: 'This product is produced in a certified facility.',
        },
        sections: {
          dailyshot: {
            label: 'Dailyshot',
            title: 'Liquid Supplement Products',
            cta: 'Go to Shop',
          },
          electrovit: {
            label: 'Electrovit',
            title: 'Electrolyte Supplements',
            cta: 'View Products',
          },
        },
        liquidRevolution: {
          label: 'Why Liquid?',
          title: 'Liquid Supplement <0>Revolution</0>',
          desc1: 'Unlike pills and capsules, liquid formulas do not require a dissolution process in the digestive system. This allows ingredients to mix directly into the blood and show their effects much faster.',
          desc2: 'Research shows that liquid formulas provide absorption rates of up to 90%. Traditional pills are only absorbed at a rate of 10-20%.',
        },
        whyLiquid: {
          liquidForm: {
            title: 'LIQUID FORM',
            desc1: 'Your body does not need time! Liquid products provide direct and fast absorption of active ingredients while not containing extra additives like solid forms.',
            desc2: 'This provides faster effect and maximum bioavailability. Because life is fast, and so should be your supplements!',
          },
          herbalContent: {
            title: 'HERBAL CONTENT',
            desc1: 'Our products are carefully formulated with herbal extracts, vitamins and minerals to support the normal functions of the body in daily life.',
            desc2: 'Each product is prepared with ingredients from natural sources and provides a practical contribution to your daily nutrition.',
          },
          easyUse: {
            title: 'EASY TO USE',
            desc: 'Liquid forms offer easy and enjoyable consumption with their aroma and taste profile. The tasting action activates the nutritional pathways and enables better use of the active ingredient of the food supplement by targeting specific areas of the body.',
          },
        },
        blog: {
          title: 'Blog',
          label: 'Dailyshot',
          readMore: 'Read more...',
          posts: {
            hangover: {
              title: 'Where does the word "Hangover" come from?',
              excerpt: 'Have you ever wondered about the origin of the word Hangover? It is believed that the word Hangover originated with a legend.',
            },
            hangxiety: {
              title: 'The morning "OH NO!" fairies are called Hangxiety!',
              excerpt: 'Let\'s admit it! Many of us have experienced a minor panic attack on the mornings after we\'ve had a bit too much to drink.',
            },
            alcoholJourney: {
              title: 'Do you know alcohol\'s journey through our body?',
              excerpt: 'If you\'re curious about alcohol\'s journey that starts with the first sip, quickly reaches our entire body, and then slowly leaves us, we\'re sure you\'ll read this article with interest.',
            },
            alcoholFacts: {
              title: 'Fun facts about alcohol!',
              excerpt: 'Would you like to learn some proven and some folklore-based fun myths about alcohol? Here are some!',
            },
          },
        },
        dailyshotNedir: {
          heroLabel: 'Next-Gen Liquid Supplement',
          heroTitle: 'What is Dailyshot?',
          heroDesc: 'Dailyshot is a premium food supplement prepared in liquid form, combining the power of nature with science. Delicious and effective formulas that eliminate the difficulty of swallowing pills.',
          benefits: {
            fastAbsorption: 'Fast Absorption',
            fastAbsorptionDesc: 'Active ingredients mix into the blood within minutes with liquid form technology.',
            bioavailability: '90% Bioavailability',
            bioavailabilityDesc: 'Up to 5 times higher absorption and effectiveness compared to pills and capsules.',
            easyDrink: 'Easy to Drink',
            easyDrinkDesc: 'No water needed, shake and drink. Practical use at any time of the day.',
            cleanContent: 'Clean Content',
            cleanContentDesc: 'Sugar-free, gluten-free and vegan-friendly herbal formulations.',
          },
          usageRoutine: {
            label: 'Usage Routine',
            title: 'Fits Your Lifestyle',
            morning: 'Starting the Day',
            morningDesc: 'Start the day fresh with Energyshot, leave fatigue behind.',
            daytime: 'During the Day',
            daytimeDesc: 'Support your immunity and metabolism with Detox and Defense shot.',
            evening: 'End of Day',
            eveningDesc: 'Relieve the stress of the day with Relaxshot and prepare for quality sleep.',
          },
          targetAudience: {
            label: 'Who is it for?',
            title: 'Who is Dailyshot Suitable For?',
            item1: 'Professionals with busy work pace',
            item2: 'Athletes and active lifestyle enthusiasts',
            item3: 'Those who have difficulty swallowing tablets/capsules',
            item4: 'Those looking for fast and effective results',
            item5: 'Those who care about holistic health',
            item6: 'Those who prefer herbal supplements',
          },
          productFamily: {
            label: 'Product Family',
            title: 'Solutions for Every Need',
          },
          productCards: {
            categories: {
              energy: 'Energy',
              hangover: 'Hangover',
              sleep: 'Sleep & Stress',
              immunity: 'Immunity',
              detox: 'Detox',
              digestion: 'Digestion',
              vitality: 'Vitality',
              antioxidant: 'Antioxidant',
            },
            descriptions: {
              energyshot: 'FUEL YOUR DAY!',
              hangovershot: 'Hungover? Wake Up Refreshed Tomorrow!',
              hangovershotzero: 'Zero Sugar, Wake Up Refreshed!',
              relaxshot: 'RELAX, REST, RENEW!',
              defenseshot: 'PROTECT, DEFEND, STRENGTHEN!',
              detoxshot: 'CLEANSE, PURIFY, RENEW!',
              laxshot: 'REGULAR DIGESTION, FEEL LIGHT!',
              libidoshot: 'DISCOVER YOUR ENERGY, LIVE YOUR PASSION!',
              antioxshot: 'CELL PROTECTION, STAY YOUNG!',
            },
            packLabel: '7-Pack Box',
            packLabel4: '4-Pack',
          },
          cta: {
            title: 'Dailyshot is The Perfect Choice For You.',
            desc: 'Don\'t compromise your health while keeping up with the pace of modern life. Dailyshot offers the support your body needs in its purest and fastest form.',
            button: 'Start Discovery',
            viewProduct: 'View',
          },
        },
        electrovitNedir: {
          heroLabel: '',
          heroTitle: 'The Smartest Way to Meet',
          heroTitleHighlight: 'Your Hydration',
          heroTitleHighlight2: 'Needs',
          heroSlogan: 'For those who can\'t drink water.',
          heroDesc: '',
          introSection: {
            paragraph1: 'It is an electrolyte supplement developed for those who cannot meet their daily water needs due to forgetfulness, consumption habits, or external factors causing water loss.',
            paragraph2: 'By meeting your daily electrolyte needs, it prevents dehydration and supports the body\'s fluid balance, nerve transmission, and muscle functions. It contributes to the reduction of tiredness and fatigue and to energy-yielding metabolism.',
          },
          quickBenefits: {
            energy: 'Energy Boost',
            fluid: 'Fluid Balance',
            nerve: 'Nerve Transmission',
            muscle: 'Muscle Support',
          },
          benefits: {
            label: 'Why Electrovit?',
            title: 'The Power of Electrolytes',
            instantEnergy: 'Sodium Support',
            instantEnergyDesc: 'Maintains fluid balance in the body and supports nerve-muscle functions.',
            hydration: 'Magnesium Boost',
            hydrationDesc: 'Supports energy production and contributes to muscle and nerve functions.',
            muscleFunction: 'Potassium Supplement',
            muscleFunctionDesc: 'Regulates muscle contractions and supports heart health.',
            heartHealth: 'Sachet Convenience',
            heartHealthDesc: 'Carry it with you anywhere and consume easily thanks to practical sachet format.',
          },
          usageTime: {
            label: 'Usage Areas',
            title: 'When to Use?',
            preWorkout: 'Daily Hydration Needs',
            preWorkoutDesc: 'Balances body fluid in cases of insufficient water consumption.',
            duringWorkout: 'Tiredness and Fatigue',
            duringWorkoutDesc: 'Contributes to energy-yielding metabolism and helps you feel fit.',
            postWorkout: 'Active Lifestyle',
            postWorkoutDesc: 'Rapidly replaces electrolytes lost through sweating.',
          },
          flavors: {
            label: 'Flavors',
            title: 'Two Delicious Options',
            watermelon: 'Watermelon',
            orange: 'Orange',
            desc: 'Flavored Electrovit',
            buy: 'Buy Now',
          },
          targetAudience: {
            label: 'Who is it for?',
            title: 'Who is Electrovit Suitable For?',
            item1: 'Those who forget or neglect to drink water',
            item2: 'Those experiencing fluid loss in daily rush',
            item3: 'Those feeling focus issues and mental fatigue',
            item4: 'Those experiencing low energy during the day',
            item5: 'Those with an active lifestyle',
            item6: 'Frequent travelers and commuters',
          },
          cta: 'Discover Now',
          disclaimer: 'Supplements cannot replace a normal diet.',
          products: {
            title: 'Our Products',
            family: 'Electrovit Family',
          },
          stats: {
            sodium: 'Sodium',
            potassium: 'Potassium',
            magnesium: 'Magnesium',
            sugar: 'Added Sugar',
          },
        },
        wellworksIntro: {
          label: 'WellWorks Health',
          title: 'Discover the <0>Power</0> of Liquid Supplements',
          desc: 'WellWorks Health is a herbal supplement brand with liquid form products. Thanks to its liquid structure, it quickly mixes into the blood and enables fast observation of the effect.',
          feature1: '<0>Up to 90%</0> bioavailability rate',
          feature2: 'GMP and Halal certified production',
          feature3: 'Fast absorption, effect in minutes',
          cta: 'Explore Products',
        },
        electrovitIntro: {
          label: '',
          title: 'Designed for those who <0>struggle to drink water.</0>',
          desc: 'An electrolyte supplement developed for those who cannot meet their daily water needs. Prevents dehydration and maintains fluid balance.',
          feature1: 'Supports nerve transmission and muscle function',
          feature2: 'Reduces tiredness and fatigue',
          feature3: 'Contributes to energy metabolism',
          cta: 'Explore Electrovit',
        },
        ourProducts: {
          label: 'Our Brands',
          title: 'Two brands.',
          subtitle: 'One health vision.',
          desc: 'Discover our specialized range of liquid supplements and electrolytes designed for modern wellness.',
          stats: {
            customers: 'Happy Customers',
            stores: 'Store Locations',
            brands: 'Strong Brands',
          },
          dailyshot: {
            title: 'Liquid Supplements',
            desc: 'Fast absorption, high bioavailability',
          },
          electrovit: {
            title: 'Electrolyte Supplements',
            desc: 'Mineral support for sports and active life',
          },
          explore: 'Explore',
        },
        storeLocator: {
          pageLabel: 'Nearest Store',
          pageTitle: 'Pharmacies & Store Locations',
          pageDesc: 'Easily find the nearest Dailyshot and Electrovit store locations on the map and get directions with one click.',
          loading: 'Loading…',
          noResults: 'No results found for this filter.',
          noMapResults: 'No locations found on map for this filter',
          allCities: 'All Cities',
          allCounties: 'All Counties',
          searchPlaceholder: 'Search name or address',
          results: 'results',
          nearMe: 'Near Me',
          getDirections: 'Get Directions',
          addressBased: 'Address based',
          onMap: 'On Map',
        },
        aboutUs: {
          pageTitle: 'About Us',
          origin: {
            title: 'ABOUT US',
            content: 'We set out with the aim of providing people with a healthier and more natural life. Inspired by nature, we aim to offer healthy solutions for our consumers, carry what nature offers us to future generations, and bring the nutritional supplements we create with this inspiration to those who need them. We see ourselves as "Healthy Living Partners" of the people we serve and work with this awareness of responsibility. We believe that we have brought a completely different dimension to the sector with our stance and goal.',
          },
          qualityPolicy: {
            title: 'OUR QUALITY POLICY',
            content: 'We trust the content, benefits and quality of our products. We do not include any components in our products that would harm human health or have negative effects. We use patented raw materials and combine them within the framework of halal rules. We improve our production process with technology that is renewed every day, producing innovative and original products and gifting them to your health. We do not offer you any product whose quality we are not sure of, and we keep our product quality superior.',
          },
          closing: 'We thank you for accompanying us on this path we walk from the past to the future.',
          reachUs: {
            title: 'Contact Us!',
            subtitle: '',
          },
          social: {
            title: 'SOCIAL MEDIA',
            content: 'Follow us for the latest news and healthy living tips from the world of WellWorks Health.',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
          },
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
        bentoGrid: {
          title: 'Our Events',
          subtitle: 'We connect your brand with unforgettable moments through world-class organizations',
          viewAll: 'View All Events',
          viewDetails: 'View Details',
          viewing: 'people viewing now',
        },
        home: {
          hero: {
            badge: 'Premium Event Organization',
            title1: 'Designing Istanbul\'s Most',
            titleHighlight: 'Prestigious',
            title2: 'Events',
            desc: 'We blend the spirit of the Modern Aegean with the dynamism of Istanbul. Your solution partner for unforgettable moments, from corporate launches to festivals.',
            ctaPlan: 'Plan Now',
            ctaReel: 'Watch Showreel',
          },
          mission: {
            philosophy: 'Our Philosophy',
            title: 'Creating <0>unforgettable moments</0> for world-class brands.',
            desc: 'We refuse mediocrity. We treat every project as a masterpiece that reflects your brand\'s spirit and builds deep connections with your attendees.',
          },
          process: {
            curation: {
              title: 'Curation',
              desc: 'We build a creative world tailored to you by analyzing your brand identity and goals. Every detail is a part of your story.',
            },
            planning: {
              title: 'Planning',
              desc: 'Flawless operational processes. We manage every step, from logistics to technical infrastructure, with mathematical precision.',
            },
            experience: {
              title: 'Experience',
              desc: 'We create moments and emotional bonds that will never be forgotten, appealing to the five senses of your attendees.',
            },
          },
          differentiators: {
            label: 'Our Edge',
            title: 'HOW DO WE MAKE A DIFFERENCE?',
            meetings: {
              title: 'Meetings',
              desc: 'We organize effective and productive meetings with professional meeting management and customized venue options.',
            },
            incentives: {
              title: 'Incentive Programs',
              desc: 'We offer unforgettable experiences with special incentive programs that boost motivation and strengthen team spirit.',
            },
            conferences: {
              title: 'Conferences',
              desc: 'We organize impressive conferences with expert speakers, interactive technologies, and flawless conference management.',
            },
            exhibitions: {
              title: 'Exhibitions',
              desc: 'We deliver impressive fairs with exhibition planning that highlights your brand, visitor experience suggestions, and organization services.',
            },
          },
          services: {
            label: 'Portfolio',
            title: 'Our Services',
            desc: 'Concepts that push the boundaries of creativity and flawless operation management.',
            viewAll: 'All Events',
            viewGallery: 'View Gallery',
            items: [
              {
                name: 'HoliFest',
                description: 'The city\'s most energetic festival with the dance of colors and rhythm of music.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAYhIK-nGMz49c4JMrT1z0kXLI7fhR9CrKsYFAQdAjkRUkBeHWM986voT0DQliTSrXHdeydatBRnLyJrltL7-WRpdzIpFk-wHdKWyCancjBLvzeioGRjPgDh-2uhcOJfCjsNMDmSpjD-8BYDDSywzjKHY_FHOV-pG0eHkZLpfGApyh_Rk3HHipKiZc2m-xT3XrhdZPfRAN5c206NulzamjFK-DMRfB6UFhKoQP5wALDMMinrqSece_S6v0P8QfATkQVxchswtiA',
              },
              {
                name: 'Imera & Niks Carnaval',
                description: 'A unique carnival experience blending music and entertainment.',
                image: '/images/mice/imera-carnival.png',
              },
              {
                name: 'Yıldızlı Konser Akşamları',
                description: 'Unforgettable concerts under the stars with Turkey\'s most beloved artists.',
                image: '/images/mice/yildizli-konser.png',
              },
              {
                name: 'Christmas Market',
                description: 'A magical market experience turning winter fairy tales into reality.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4ncuXlL5kbcoY3syjBZySjH-voCBmDjOIFNpel4dclT_ilZiZgUBVrFmXaYyDKpdMM1uVzsFsBFBjCqDC4Z33IEtGdOXCnxHgi_D35C3IJ8QDyR1YH-meF5P0OXToF9EciSKfLjaua2LLTumOVAcFTI7JzJtBoa4H-8AhaemHNzlD74sJxDestfqPFFUsdfdj8FgsuSELg1S0M2SGwn5xwru5VSNOtfda9h1-bDEnzda7AuMq0HpQOddbof3hcGvm7H1kHJrig',
              },
              {
                name: 'Gusto Weekend',
                description: 'A weekend festival celebrating gastronomy, flavors, and lifestyle.',
                image: '/images/mice/gusto-weekend.png',
              },
              {
                name: 'Business Leisure',
                description: 'Exclusive events combining professional networking with premium leisure.',
                image: '/images/mice/business-leisure.png',
              },
            ],
          },
          capabilities: {
            label: 'Our Expertise',
            title: 'Flawless Solutions in the Event World',
            desc: '360-degree event management tailored to your needs. Professional touch at every stage, from idea to execution.',
            cta: 'Get Detailed Info',
            items: [
              'Concept & Design Development',
              'Venue Management & Decoration',
              'Sound, Light & Visual Systems',
              'Artist & Performance Management',
              'Catering & Refreshment Experience',
              'Logistics & Guest Hosting',
              'Production & Content Creation',
              'Press & Public Relations'
            ]
          },
          testimonials: {
            label: 'Testimonials',
            title: 'What Our Clients Say',
            items: [
              {
                quote: "The Well Works team turned our dream launch into reality with a vision far beyond our expectations. It wasn't just an organization, it was a work of art.",
                author: "Elif Demir",
                role: "Marketing Director, TechGlobal",
              },
              {
                quote: "Operational excellence and creative intelligence combined. Our festival rose to a completely different level with their touch.",
                author: "Caner Yilmaz",
                role: "Event Manager, ArtIstanbul",
              },
            ],
          },
          cta: {
            title: 'Let Your Next Event Be <0>Legendary</0>',
            desc: 'Contact us to turn your dream organization into reality. Let us design perfection for you.',
            button: 'Get a Quote Now',
            call: 'Call Us: +90 (212) 216 47 52',
          },
        },
        faq: {
          title: 'Frequently Asked Questions',
          question1: 'What types of events do you organize?',
          answer1: 'We provide services for festivals, corporate launches, private galas, creative workshops, and many other event types.',
          question2: 'Do you serve corporate clients?',
          answer2: 'Yes, we plan and manage brand launches, meetings, conferences, and motivation events from A to Z.',
          question3: 'How long does event planning take?',
          answer3: 'Depending on the size of the event, we typically recommend a 4-8 week planning period.',
        },
        aboutUs: {
          pageTitle: 'About Us',
          origin: {
            title: 'ABOUT US',
            content: "Since 2012, we have been designing and bringing to life Istanbul's most prestigious events. From festival organizations to corporate launches, we offer services across a wide spectrum, combining creativity and operational excellence in every project.",
          },
          qualityPolicy: {
            title: 'OUR SERVICE APPROACH',
            content: "We treat every event as a masterpiece, creating experiences that reflect your brand's spirit and build deep connections with your attendees. Our passion for detail and professional approach set us apart in the industry.",
          },
          closing: 'We are here to make your next event legendary.',
          reachUs: {
            title: 'Contact Us!',
            subtitle: '',
          },
          social: {
            title: 'SOCIAL MEDIA',
            content: 'Follow us for the latest news and event announcements from the world of WellWorks MICE.',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
          },
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
          company: 'Company',
          companyPlaceholder: 'Enter your company name',
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
          content: 'Emniyetevler Mahallesi Kale Sokak 2/A Kağıthane/ISTANBUL',
        },
        phone: {
          title: 'Phone',
          content: '+90 536 032 08 38',
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
      spinWheel: {
        title: 'Prize Wheel',
        subtitle: 'Spin the wheel to win a discount!',
        spin: 'SPIN',
        congratulations: 'Congratulations!',
        wonDiscount: 'You Won a Discount!',
        yourCode: 'Your Discount Code:',
        spinAgain: 'Spin Again',
        spinNow: 'Spin Now',
        spinning: 'Spinning...',
      },
      quiz: {
        title: 'Your Personal Dailyshot',
        subtitle: 'Discover the product that fits your lifestyle',
        question: 'Question',
        back: 'Back',
        next: 'Next',
        finish: 'Finish',
        yourProduct: 'Your Perfect Product',
        discountMessageDynamic: 'Your Discount Code:',
        restart: 'Start Over',
        browseProducts: 'Browse Products',
        q1: {
          question: 'How do you feel when you wake up in the morning?',
          opt1: '😴 Very difficult, I struggle to turn off alarms',
          opt2: '😪 A bit hard but I manage',
          opt3: '😐 Normal, neither good nor bad',
          opt4: '⚡ Energetic and well-rested',
        },
        q2: {
          question: 'How are your energy levels in the afternoon?',
          opt1: "😫 Very low, I'm constantly tired",
          opt2: '😴 Usually feel tired',
          opt3: '😐 Sometimes drops but I manage',
          opt4: '💪 I stay energetic all day',
        },
        q3: {
          question: 'How many cups of coffee or energy drinks do you consume daily?',
          opt1: "☕ 3+ cups, I can't function without coffee",
          opt2: '☕ 2 cups',
          opt3: '☕ 1 cup',
          opt4: "🍵 I don't consume any",
        },
        q4: {
          question: 'How do you generally feel overall?',
          opt1: '😓 Constantly tired and burned out',
          opt2: '😐 Not very energetic',
          opt3: '🙂 Not bad',
          opt4: "✨ Great, I'm very dynamic",
        },
        q5: {
          question: 'Do you exercise or do physical activity regularly?',
          opt1: '🏋️ Very little or none',
          opt2: '🚶 1-2 days a week',
          opt3: '💪 3-4 days a week',
          opt4: "🏃 I'm active every day",
        },
        q6: {
          question: 'How would you rate your daily quality of life?',
          opt1: '😔 Low, I feel unmotivated',
          opt2: '😐 Average',
          opt3: '🙂 Good, but could be better',
          opt4: '😊 Excellent, I enjoy life',
        },
        q7: {
          question: 'How often do you go out drinking socially?',
          opt1: '🎉 More than once a week',
          opt2: '🍻 Once a week',
          opt3: '🥂 1-2 times a month',
          opt4: '🚫 Very rarely or never',
        },
        q8: {
          question: 'How do you feel the day after a night out?',
          opt1: '🤢 Terrible, I stay in bed all day',
          opt2: '😵 Struggle but manage',
          opt3: '😐 A bit tired but not bad',
          opt4: '😊 Not affected at all',
        },
        q9: {
          question: 'How much do you usually drink on a night out?',
          opt1: '🍸 Quite a lot, I lose count',
          opt2: '🍷 A few glasses',
          opt3: '🥃 Just 1-2 drinks',
          opt4: "🚫 I don't drink alcohol",
        },
        q10: {
          question: 'Have you used Dailyshot products before?',
          opt1: '🆕 No, never used them',
          opt2: '👋 Tried 1-2 times',
          opt3: '👍 Used 3-5 times',
          opt4: '❤️ I use them regularly',
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
