import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Calendar, Star, Users, ArrowRight, MapPin, Layers, Medal, Hotel, Briefcase, Palette, Megaphone, FileBarChart } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import StaggeredList from '@/components/shared/StaggeredList';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import BentoGrid from '@/components/mice/BentoGrid';

const MiceHome = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();

  useEffect(() => {
    setBrand('mice');
  }, [setBrand]);

  /* 5 Service / Differentiator cards */
  const serviceCards = [
    {
      icon: <Users className="w-7 h-7" />,
      title: t('mice.home.differentiators.meetings.title'),
      description: t('mice.home.differentiators.meetings.desc'),
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: t('mice.home.differentiators.incentives.title'),
      description: t('mice.home.differentiators.incentives.desc'),
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: t('mice.home.differentiators.conferences.title'),
      description: t('mice.home.differentiators.conferences.desc'),
    },
    {
      icon: <Medal className="w-7 h-7" />,
      title: t('mice.home.differentiators.exhibitions.title'),
      description: t('mice.home.differentiators.exhibitions.desc'),
    },
    {
      icon: <Hotel className="w-7 h-7" />,
      title: t('mice.home.differentiators.accommodation.title'),
      description: t('mice.home.differentiators.accommodation.desc'),
    },
  ];

  /* 7 Stats from MD */
  const stats = [
    { value: 1, suffix: 'M+', label: t('mice.home.stats.participants') },
    { value: 283, suffix: '', label: t('mice.home.stats.brands') },
    { value: 5, suffix: '', label: t('mice.home.stats.festivals') },
    { value: 135, suffix: 'K m²', label: t('mice.home.stats.area') },
    { value: 52, suffix: '', label: t('mice.home.stats.cities') },
    { value: 178, suffix: '', label: t('mice.home.stats.concerts') },
    { value: 500, suffix: '+', label: t('mice.home.stats.influencers') },
  ];

  /* 5-step operational process */
  const processSteps = t('mice.home.operationalProcess.steps', { returnObjects: true }) as {
    title: string;
    items: string[];
  }[];

  const processIcons = [
    <Palette className="w-6 h-6" />,
    <Briefcase className="w-6 h-6" />,
    <Megaphone className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
    <FileBarChart className="w-6 h-6" />,
  ];

  /* BentoGrid services data */
  const services = t('mice.home.services.items', { returnObjects: true }) as {
    name: string;
    description: string;
    image: string;
  }[];

  return (
    <div data-brand="mice" className="bg-[#1A1C20] text-[#F7F4EF] min-h-screen">

      {/* 1. VIDEO HERO — foreground player with controls */}
      <section className="bg-[#0f1114] pt-8 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
            <video
              controls
              playsInline
              className="w-full aspect-video bg-black"
              preload="metadata"
              src="/images/mice/mice_video.mp4"
            />
          </div>

          {/* Title + CTA below video */}
          <div className="mt-10 text-center">
            <AnimatedSection animation="fadeInUp" delay={100}>
              <h1 className="font-oswald text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
                {t('mice.home.hero.title1')}{' '}
                <span className="text-[#2DB34A]">{t('mice.home.hero.titleHighlight')}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <p className="text-lg md:text-xl text-[#D8DEE6] mb-8 max-w-2xl mx-auto opacity-90">
                {t('mice.home.hero.desc')}
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/mice/iletisim"
                  className="bg-[#2DB34A] hover:bg-[#249A3D] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#2DB34A]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('mice.home.hero.ctaPlan')}</span>
                </Link>
                <Link
                  to="/mice/isler-gucler"
                  className="border border-white/20 text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-[#0B3A5B] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>{t('mice.home.hero.ctaProjects')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. HAKKIMIZDA (About) */}
      <section className="py-24 px-4 bg-[#1A1C20] border-b border-white/5">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-8">
              <span className="text-[#2DB34A] text-sm font-medium uppercase tracking-widest mb-3 block">
                {t('mice.home.about.label')}
              </span>
            </div>
            <p className="text-[#D8DEE6] text-lg md:text-xl leading-relaxed opacity-80 max-w-3xl mx-auto text-center mb-10">
              {t('mice.home.about.text')}
            </p>
            <div className="border-l-4 border-[#2DB34A] pl-6 max-w-2xl mx-auto">
              <p className="text-[#D8DEE6] text-xl italic font-serif leading-relaxed">
                "{t('mice.home.about.quote')}"
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. STATS BAR — 7 metrics as green circles */}
      <section className="py-20 px-4 bg-[#111315]">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeInUp">
            <h2 className="font-oswald text-3xl md:text-5xl text-white font-bold mb-16">
              12 yılı aşkın deneyimle;
            </h2>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 items-start" staggerDelay={80} animation="fadeInUp">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#2DB34A] flex flex-col items-center justify-center mb-3 shadow-lg shadow-[#2DB34A]/20">
                  <span className="font-oswald text-3xl md:text-4xl font-extrabold text-white leading-none">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + i * 200} />
                  </span>
                </div>
                <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wider leading-tight max-w-[120px]">{stat.label}</span>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* 4. HİZMET ALANLARIMIZ — 5 service cards */}
      <section className="py-20 px-4 bg-[#1A1C20]">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <span className="text-[#2DB34A] text-sm font-medium uppercase tracking-widest mb-3 block">
              {t('mice.home.differentiators.label')}
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold">
              {t('mice.home.differentiators.title')}
            </h2>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={100}>
            {serviceCards.map((card, index) => (
              <div key={index} className="flex flex-col items-center text-center group bg-[#16181b] rounded-2xl p-6 border border-white/5 hover:border-[#2DB34A]/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#2DB34A]/10 flex items-center justify-center text-[#2DB34A] mb-5 group-hover:bg-[#2DB34A]/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-oswald text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-[#8B9199] leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* 5. OPERASYONEL YAKLASIMIMIZ — 5-step process timeline */}
      <section className="py-20 px-4 bg-[#16181b] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <span className="text-[#2DB34A] text-sm font-medium uppercase tracking-widest mb-3 block">
              {t('mice.home.operationalProcess.label')}
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold mb-4">
              {t('mice.home.operationalProcess.title')}
            </h2>
            <p className="text-[#8B9199] text-lg max-w-3xl mx-auto">
              {t('mice.home.operationalProcess.desc')}
            </p>
          </AnimatedSection>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#2DB34A]/30" />

            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={120}>
              {processSteps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="w-16 h-16 rounded-full bg-[#2DB34A] flex items-center justify-center text-white font-oswald text-xl font-bold mb-6 relative z-10 shadow-lg shadow-[#2DB34A]/20">
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-[#1E2125] rounded-xl p-5 border border-white/5 w-full">
                    <div className="text-[#2DB34A] mb-3 flex justify-center">{processIcons[i]}</div>
                    <h3 className="font-oswald text-lg font-bold text-white mb-3">{step.title}</h3>
                    <ul className="space-y-1.5">
                      {step.items.map((item, j) => (
                        <li key={j} className="text-[#8B9199] text-xs flex items-start gap-1.5">
                          <span className="text-[#2DB34A] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </section>

      {/* 6. BENTO GRID — project showcase */}
      <BentoGrid
        items={services.map((s, i) => ({
          id: `service-${i}`,
          title: s.name,
          subtitle: s.description,
          image: s.image,
          date: i === 0 ? '2025' : undefined,
          location: i === 0 ? 'İstanbul' : undefined
        }))}
      />

      {/* 7. CTA Section */}
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default MiceHome;
