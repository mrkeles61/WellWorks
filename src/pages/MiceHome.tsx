import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Calendar, Star, Diamond, CalendarDays, Users, ArrowRight, Play, MapPin, Phone, Mail, Clock, Quote, Check, Sparkles, Layers, Medal } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';
import StaggeredList from '@/components/shared/StaggeredList';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import BentoGrid from '@/components/mice/BentoGrid';

const MiceHome = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBrand('mice');
  }, [setBrand]);

  // Parallax scroll effect for hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setParallaxY(window.scrollY * 0.3);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Process / Differentiators - "Nasıl Fark Yaratıyoruz?" content */
  const processSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('mice.home.differentiators.meetings.title'),
      description: t('mice.home.differentiators.meetings.desc'),
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t('mice.home.differentiators.incentives.title'),
      description: t('mice.home.differentiators.incentives.desc'),
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: t('mice.home.differentiators.conferences.title'),
      description: t('mice.home.differentiators.conferences.desc'),
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: t('mice.home.differentiators.exhibitions.title'),
      description: t('mice.home.differentiators.exhibitions.desc'),
    },
  ];

  /* Capabilities List */
  const capabilitiesList = t('mice.home.capabilities.items', { returnObjects: true }) as string[];

  const stats = [
    { icon: <Diamond className="w-12 h-12" />, value: '12+', label: t('mice.stats.experience') },
    { icon: <CalendarDays className="w-12 h-12" />, value: '100+', label: t('mice.stats.events') },
    { icon: <Users className="w-12 h-12" />, value: '500K+', label: t('mice.stats.attendees') },
  ];

  const services = [
    {
      name: 'HoliFest İstanbul',
      description: 'Renklerin dansı ve müziğin ritmiyle şehrin en enerjik festivali.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAYhIK-nGMz49c4JMrT1z0kXLI7fhR9CrKsYFAQdAjkRUkBeHWM986voT0DQliTSrXHdeydatBRnLyJrltL7-WRpdzIpFk-wHdKWyCancjBLvzeioGRjPgDh-2uhcOJfCjsNMDmSpjD-8BYDDSywzjKHY_FHOV-pG0eHkZLpfGApyh_Rk3HHipKiZc2m-xT3XrhdZPfRAN5c206NulzamjFK-DMRfB6UFhKoQP5wALDMMinrqSece_S6v0P8QfATkQVxchswtiA',
    },
    {
      name: 'Christmas Market',
      description: 'Kış masallarını gerçeğe dönüştüren büyülü bir pazar deneyimi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4ncuXlL5kbcoY3syjBZySjH-voCBmDjOIFNpel4dclT_ilZiZgUBVrFmXaYyDKpdMM1uVzsFsBFBjCqDC4Z33IEtGdOXCnxHgi_D35C3IJ8QDyR1YH-meF5P0OXToF9EciSKfLjaua2LLTumOVAcFTI7JzJtBoa4H-8AhaemHNzlD74sJxDestfqPFFUsdfdj8FgsuSELg1S0M2SGwn5xwru5VSNOtfda9h1-bDEnzda7AuMq0HpQOddbof3hcGvm7H1kHJrig',
    },
    {
      name: 'Coffee Festival',
      description: 'Şehrin en iyi kahve kokularını ve baristalarını buluşturuyoruz.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNCxQsMAXt1YugVjgtgIe8Pzxd4S_MAz_pFrwYujsXnneEHPHfriZd59wc4QdhKkHF8KVGAlJwtsuMyDpW_N0lgK1ueJsbkTjaBupsTpgiYla9YZ2Ek9uOEIPejz2Gn0W7HCMTPzftaLbvu0TsWDBHkr5uxtHOx0MNqCjhIU3jpWcXCHAwb0Pj2luN05AMySHg6Q3VUcduQP4_nXTaUFQ13Ka4CLLjxNYUtRqQl6h6MirUGVoT03gii04bs8g5J0EOBSZq_XRPpg',
    },
    {
      name: 'Kurumsal Lansman',
      description: 'Markanızın gücünü yansıtan profesyonel tanıtım etkinlikleri.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClNOVi_xSGO70QYVZy1oFE-T90pTqaP7bzczPGxJ31MsgzolhmrSp6RQ-YAuM_JlEQREoxFAHk1xCip0hLmJpWZGT_OlrkXclPg7tfMEm1Dkwozq0Z58jEHcwrZC8IhgR8ceseHC19xJTIvZ3HckFNUgJwZXMpE50Rl7FUqu-m1_KeEkeIx7-xEtjPYWSRsysL44zUBgQIJdwJyJt5R0MRBH2YtjrR2Fop_APqr9_T2htqqFiskEq4CSJTMSOf-QjkqjEHVdJTag',
    },
    {
      name: 'Özel Galalar',
      description: 'Seçkin davetliler için tasarlanmış şık ve unutulmaz geceler.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtzHcwz3t_Yf1CigEKQ6WO5LahhV2jXYnk50lOIHmlmHH61ZuXOOS8Ft-UsOvF9tzvXJh_L4cy_GHfznjJL6YQi9hurJryRXNrmzWgN_k-HC7cJ3YU2zyna37ZSd_Pl_akZxect71IrFmS7tvweVbJHtLaiM1lNU70t1AWPjgsEz7P1HEpmQDs9RZ-50J3Rd7rnVhWnrQiGBEBD49Boe5KnIG3Vqh_hpIWivezeBCZPG1OdBXbMb8nn8gUjDzoIfMTMbd9NTxZ5A',
    },
    {
      name: 'Yaratıcı Atölyeler',
      description: 'İlham veren ve yetenekleri keşfettiren interaktif workshoplar.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPy3yey5lMkiNfhoojJqF_u6ySRPRTC_bdciIlQ-cwqyc_hfAF1twz0sjuGIqMHeP8xf2OggslMXKIZkIMMnKKpw7yAJA3GqZi0qVd_HwfU4mx9HG4q540TXDAr4zP-4CWbhAhGdctdNeOeDafTw5BUZx2U7EUj5FgDxfwYpLukpxI16QKEtzCufF6g1bHsnMeh1NTSDSLOPqVRZJqp6Kx2o23P2yWNaQoakoPFmnDGU7E87fPAQ6yUOM1SzRgfMMDhsVVYhtYvA',
    },
  ];



  /* Testimonials Data */
  const testimonials = [
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
  ];



  return (
    <div data-brand="mice" className="bg-[#1A1C20] text-[#F7F4EF] min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0B3A5B]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C20]/90 via-[#0B3A5B]/80 to-transparent z-10" />
          <img
            alt="Crowd cheering at a large outdoor concert event in Istanbul at night with stage lights"
            className="w-full h-full object-cover opacity-80 transition-transform duration-100"
            style={{ transform: `translateY(${parallaxY}px) scale(1.1)` }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi4gsfCAzRdPxBGif47y5vpGpqbZMCeDKuHbf_tSmcTo-zTAZn2z39gCYmeIETJfRUYvWSW4Aj8r7i24G0fTEra5cyzNR7d6_OIDHGmgr2c1_Vvs8ogSpgz48BaFsCWTaLtv1_X02v75ArDj5BH0LyzJoi5Pu4h5SnBLQUNTgXSMbALd6vbjZ6ih0JfTdW201hlA8ocJ5MtJYpUfnA3IjwXOIlf-jighliS9-R5hWYADnkJ6y-o96L5lbIIi9ynkld4SFAx70UQg"
          />
        </div>
        <div className="container relative z-20 px-4 mx-auto sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <AnimatedSection animation="fadeInUp">
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={100}>
              <h1 className="font-oswald text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
                {t('mice.home.hero.title1')} <span className="text-[#2DB34A]">{t('mice.home.hero.titleHighlight')}</span>
                <br />
                {t('mice.home.hero.title2')}
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <p className="text-lg md:text-xl text-[#D8DEE6] mb-10 leading-relaxed max-w-2xl opacity-90 drop-shadow-md">
                {t('mice.home.hero.desc')}
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/mice/iletisim"
                  className="bg-[#2DB34A] hover:bg-[#249A3D] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#2DB34A]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>{t('mice.home.hero.ctaPlan')}</span>
                  <Calendar className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 -mt-16 md:-mt-20 px-4 mb-20">
        <div className="container mx-auto">
          <div className="bg-[#23262B] rounded-xl shadow-2xl p-8 md:p-12 border border-white/5">
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={100} animation="fadeInUp">
              {/* Animated Counter Stats */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-[#2DB34A] mb-4"><Diamond className="w-12 h-12" /></div>
                <span className="font-oswald text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={12} suffix="+" duration={2000} />
                </span>
                <span className="text-[#D8DEE6] font-medium">{t('mice.stats.experience')}</span>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-[#2DB34A] mb-4"><CalendarDays className="w-12 h-12" /></div>
                <span className="font-oswald text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={100} suffix="+" duration={2500} />
                </span>
                <span className="text-[#D8DEE6] font-medium">{t('mice.stats.events')}</span>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-[#2DB34A] mb-4"><Users className="w-12 h-12" /></div>
                <span className="font-oswald text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={500} suffix="K+" duration={3000} />
                </span>
                <span className="text-[#D8DEE6] font-medium">{t('mice.stats.attendees')}</span>
              </div>
            </StaggeredList>
          </div>
        </div>
      </section>

      {/* NEW: Welcome / Mission Section (Centered, Editorial) */}
      <section className="py-24 px-4 bg-[#1A1C20] border-b border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection animation="fadeInUp">
            <span className="text-[#2DB34A] font-serif italic text-xl mb-6 block">{t('mice.home.mission.philosophy')}</span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-8">
              <Trans i18nKey="mice.home.mission.title" components={[<span className="text-[#2DB34A] italic font-serif" />]} />
            </h2>
            <p className="text-[#D8DEE6] text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mx-auto font-light">
              {t('mice.home.mission.desc')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* NASIL FARK YARATIYORUZ? Section */}
      <section className="py-20 px-4 bg-[#16181b]">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <span className="text-[#2DB34A] text-sm font-medium uppercase tracking-widest mb-3 block">{t('mice.home.differentiators.label')}</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold">{t('mice.home.differentiators.title')}</h2>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={150}>
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group bg-[#2DB34A] rounded-2xl p-6 hover:bg-[#249A3D] transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-5">
                  {step.icon}
                </div>
                <p className="text-white leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Services Section - Editorial Style */}
      <section className="py-28 px-4 md:px-6 bg-[#1A1C20]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#2DB34A] text-sm font-medium uppercase tracking-widest mb-3 block">{t('mice.home.services.label')}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4 italic">{t('mice.home.services.title')}</h2>
              <p className="text-[#D8DEE6] max-w-2xl text-lg">{t('mice.home.services.desc')}</p>
            </div>
            <Link
              to="/mice/etkinlikler"
              className="text-[#2DB34A] font-medium hover:text-white transition-colors flex items-center gap-2 group text-sm uppercase tracking-wider"
            >
              {t('mice.home.services.viewAll')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            staggerDelay={100}
            animation="fadeInUp"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                  <img
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={service.image}
                    loading="lazy"
                  />
                </div>

                {/* Editorial Text */}
                <div className="space-y-3">
                  <span className="text-[#2DB34A] text-xs uppercase tracking-widest font-medium">Event</span>
                  <h3 className="font-serif text-2xl text-white italic group-hover:text-[#2DB34A] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-[#8B9199] text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to="/mice/etkinlikler"
                    className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors pt-2"
                  >
                    {t('mice.home.services.viewGallery')} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>



      {/* MODIFIED: Capabilities Section (Was About) */}
      <section className="py-24 px-4 md:px-6 bg-[#131518] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <AnimatedSection animation="fadeInRight">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-12 bg-[#2DB34A]" />
                  <span className="text-[#2DB34A] font-bold uppercase tracking-wider text-sm">{t('mice.home.capabilities.label')}</span>
                </div>
                <h2 className="font-oswald text-4xl font-bold text-white mb-8">{t('mice.home.capabilities.title')}</h2>
                <p className="text-[#D8DEE6] text-lg mb-10 leading-relaxed">
                  {t('mice.home.capabilities.desc')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {capabilitiesList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[#D8DEE6]">
                      <Check className="w-5 h-5 text-[#2DB34A] flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    to="/mice/iletisim"
                    className="border border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-[#0B3A5B] transition-colors hover:shadow-lg inline-block"
                  >
                    {t('mice.home.capabilities.cta')}
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    alt="Group of people toasting with drinks at a sunny outdoor event"
                    className="rounded-xl object-cover h-80 w-full shadow-lg transform translate-y-12 brightness-90 hover:brightness-100 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv6Tsog9T0tNgPDROvFUG1affI1fvpQoZRf2p2auR-vODkErmvVSFXcLsUko9qFK1f4KZ6C6RFOOXWqFRbHUJuydcrBuQTuvNnPUOna_LVbry3dsmQ_UUM0qqPGaqiqClSIro0ei77tkYlY7ivt0Mq53TFdMDhHVU768Yd1M8kEJhxiyQRbP7kdqmjLdETqEemHXoRQdJl0-hj7ukDqCD-MAm-rD_fNEUnKR4D_PQ4jbkIlQCooM_iFSyTvpiiU6EOEllnUoZ91A"
                    loading="lazy"
                  />
                  <img
                    alt="Modern event venue interior with architectural details and lighting"
                    className="rounded-xl object-cover h-80 w-full shadow-lg brightness-90 hover:brightness-100 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeQrYZZ33if6SA-vyDmpJNfbi7DtM72h1ClX4OTuKm8zLmz42_gDFrhtqaxHJGD5FD25XYD3Wrbk5YYCPxBpW92zzUDRCdRpbk9jixGBXf0gWbSiI019Efjhbusiyblu7kivUJLtHhwUzX8CS9UjlE3Dmgtmk1R8N9BMWCMlJJTPNu-OCHhmQmHMR_TSfEh0ZMpy1iRC47_1Y4WxOUJBmH_9UVPYGpKMwtjfM57ZkiriQ497JX1sjQFVrHDUp-C5UiprucjqT3qw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-[#2DB34A]/20 rounded-full blur-3xl" />
                <div className="absolute -z-10 top-8 -right-8 w-48 h-48 bg-[#0B3A5B]/30 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Editorial Testimonials */}
      <section className="py-24 px-4 bg-[#1A1C20] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#2DB34A] font-bold uppercase tracking-wider text-sm">{t('mice.home.testimonials.label')}</span>
            <h2 className="font-oswald text-4xl text-white mt-2">{t('mice.home.testimonials.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#16181b] p-10 rounded-2xl relative border border-white/5 hover:border-[#2DB34A]/30 transition-colors">
                <Quote className="absolute top-8 left-8 w-10 h-10 text-[#2DB34A]/20" />
                <p className="text-[#D8DEE6] text-xl font-serif italic mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2DB34A] flex items-center justify-center text-white font-bold text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.author}</h4>
                    <span className="text-[#8B9199] text-sm">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#0B3A5B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2DB34A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2DB34A] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A1C20] rounded-full blur-[80px] opacity-30 translate-y-1/3 -translate-x-1/3" />
        <div className="container mx-auto relative z-10 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <Trans i18nKey="mice.home.cta.title" components={[<span className="text-[#2DB34A]" />]} />
            </h2>
            <p className="text-xl text-[#D8DEE6] mb-10 max-w-2xl mx-auto">
              {t('mice.home.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/mice/iletisim"
                className="bg-[#2DB34A] hover:bg-[#249A3D] text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg shadow-black/20 hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300"
              >
                {t('mice.home.cta.button')}
              </Link>
              <a
                href="tel:+905360320838"
                className="bg-transparent border border-white/20 hover:bg-white/10 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all"
              >
                {t('mice.home.cta.call')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default MiceHome;
