import { ArrowRight, Play, Zap, ShieldCheck, Timer, Shield, Droplets, Activity, Sparkles } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { products } from '@/data/products';
import ProductCard from '@/components/health/ProductCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import BlogSection from '@/components/health/BlogSection';
import bottleOfHealth from '@/assets/bottle-of-health.png';
import certificationsTransparentImg from '@/assets/certifications_transparent.png';
import { useEffect, useRef, useState } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { animate, stagger } from 'animejs';

interface ProductCardProps {
  type: 'dailyshot' | 'electrovit';
  onClick: () => void;
  title: string;
  desc: string;
  ctaText: string;
}

const InteractiveProductCard = ({ type, onClick, title, desc, ctaText }: ProductCardProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (bgRef.current) {
      animate(bgRef.current, { height: '100%', duration: 400, easing: 'easeOutQuad' });
    }
  };

  const handleLeave = () => {
    if (bgRef.current) {
      animate(bgRef.current, { height: '0%', duration: 400, easing: 'easeInQuad' });
    }
  };

  const isDailyshot = type === 'dailyshot';
  const lightBg = isDailyshot ? 'bg-blue-50/50' : 'bg-orange-50/50';
  const borderColor = isDailyshot ? 'border-blue-100' : 'border-orange-100';
  const fillGradient = isDailyshot ? 'bg-gradient-to-br from-[#00A3E0] to-[#0077B6]' : 'bg-gradient-to-br from-[#FF9800] to-orange-700';
  const iconBg = isDailyshot ? 'bg-blue-100' : 'bg-orange-100';
  const iconColor = isDailyshot ? 'text-[#00A3E0]' : 'text-[#FF9800]';

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative overflow-hidden rounded-2xl border ${borderColor} ${lightBg} shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 cursor-pointer`}
    >
      <div ref={bgRef} className={`absolute bottom-0 left-0 w-full h-0 ${fillGradient} z-0`} />

      <div className={`h-16 w-16 flex-shrink-0 rounded-full ${iconBg} flex items-center justify-center ${iconColor} relative z-10 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300`}>
        {isDailyshot ? <Droplets className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
      </div>

      <div className="flex-grow relative z-10 group-hover:text-white transition-colors duration-300">
        <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
          {desc}
        </p>
      </div>

      <div className="flex-shrink-0 relative z-10 self-end sm:self-center group-hover:text-white transition-colors duration-300">
        <span className={`inline-flex items-center text-sm font-semibold ${iconColor} group-hover:text-white group-hover:translate-x-1 transition-all`}>
          {ctaText} <ArrowRight className="ml-1 w-4 h-4" />
        </span>
      </div>
    </div>
  );
};

const HealthHome = () => {

  const { setBrand } = useBrand();
  const { t, i18n } = useTranslation();
  const dailyshotSectionRef = useRef<HTMLDivElement>(null);
  const electrovitSectionRef = useRef<HTMLDivElement>(null);

  // Determine image based on language (default to TR if not English)
  const liquidAdvantagesImage = i18n.language === 'en'
    ? '/images/liquid-advantages-en.png'
    : '/images/liquid-advantages-tr.png';

  // Determine intro image based on language
  const introLiquidImage = i18n.language === 'en'
    ? '/images/intro-liquid-en.png'
    : '/images/intro-liquid-tr.png';

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

  // Anime.js entrance animation for feature sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const animateSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          animate(target.querySelectorAll('.animate-on-scroll'), {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            delay: stagger(150),
            easing: 'easeOutCubic',
          });
        }
      });
    };

    const observer = new IntersectionObserver(animateSection, observerOptions);

    if (dailyshotSectionRef.current) observer.observe(dailyshotSectionRef.current);
    if (electrovitSectionRef.current) observer.observe(electrovitSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div data-brand="health" className="bg-gray-100 min-h-screen">
      {/* Hero Section - About Us Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Solid Background - Sharp Change */}
        <div className="absolute inset-0 bg-slate-50" />

        {/* Subtle side accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-health-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Dailyshot Logo - Top of Hero, Full Width */}
          <div className="w-full mb-8 flex justify-center">
            <img
              src="/images/dailyshot_logo_transparent.png"
              alt="Dailyshot"
              className="w-full object-contain drop-shadow-sm transform scale-105"
              style={{ maxHeight: '250px' }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content - About Us */}
            <div className="flex flex-col items-start space-y-6">
              <span className="inline-block text-health-primary text-sm font-semibold uppercase tracking-widest">
                {t('health.hero2.label')}
              </span>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900">
                <Trans i18nKey="health.hero2.title" components={[<span className="text-health-primary" />]} />
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                {t('health.hero2.desc')}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-health-primary hover:bg-health-primary/90 text-white font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-health-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                    {t('health.hero2.cta')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Transparent Image */}
            <a
              href="https://dailyshot.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 group cursor-pointer"
            >
              <img
                src={bottleOfHealth}
                alt="Dailyshot - A Bottle of Health"
                className="w-full max-w-lg mx-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Background glow */}
              <div className="absolute inset-0 -z-10 bg-health-primary/10 blur-3xl rounded-full transform scale-75" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== WELLWORKS HEALTH INTRO SECTION (Dark Blue Background) ===== */}
      <section
        ref={dailyshotSectionRef}
        className="py-20 lg:py-32 relative overflow-hidden bg-[#0f2942]"
      >
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-health-primary/10 rounded-full blur-3xl" />

        <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '80%' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll opacity-0 space-y-6">
              <span className="text-health-primary text-sm font-semibold uppercase tracking-widest">
                {t('health.wellworksIntro.label')}
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                <Trans i18nKey="health.wellworksIntro.title" components={[<span className="text-health-primary" />]} />
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {t('health.wellworksIntro.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <Zap className="w-5 h-5 text-health-primary" />
                  <span><Trans i18nKey="health.wellworksIntro.feature1" components={[<strong />]} /></span>
                </li>

                <li className="flex items-center gap-3 text-white/90">
                  <Droplets className="w-5 h-5 text-health-primary" />
                  <span>{t('health.wellworksIntro.feature3')}</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-health-primary text-white hover:bg-health-primary/90 rounded-full px-8 mt-4"
              >
                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                  {t('health.wellworksIntro.cta')} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Image in glassmorphism card */}
            <a
              href="https://dailyshot.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 relative group flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <img
                  src={introLiquidImage}
                  alt="Dailyshot Liquid Advantages"
                  className="w-full h-auto object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Gradient transition: WellWorks intro -> Carousel */}
      {/* Spacer (removed gradient) */}
      <div className="h-12 bg-white" />

      {/* ===== OUR PRODUCTS SECTION ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Floating Product Image */}
            <AnimatedSection animation="fadeInLeft" className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <div className="relative z-10 p-6">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-health-primary/20 blur-3xl rounded-full transform scale-75" />
                <img
                  src="/images/products_showcase.png"
                  alt="DailyShot and Electrovit Products"
                  className="relative w-full h-auto scale-110 object-contain drop-shadow-2xl transition-transform duration-500 animate-float-slow"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-health-primary/20 rounded-full hidden lg:block" />
            </AnimatedSection>

            {/* Right: Content */}
            <AnimatedSection animation="fadeInRight" className="w-full lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2">
              {/* Headlines */}
              <div className="space-y-4">
                <span className="text-health-primary font-bold tracking-[0.2em] text-sm uppercase block">
                  {t('health.ourProducts.label')}
                </span>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold leading-tight text-gray-900">
                  {t('health.ourProducts.title')}
                  <br />
                  <span className="text-health-primary">{t('health.ourProducts.subtitle')}</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                  {t('health.ourProducts.desc')}
                </p>
              </div>

              {/* Product Cards */}
              <div className="grid gap-6 mt-4">
                <InteractiveProductCard
                  type="dailyshot"
                  title="DailyShot"
                  desc={t('health.ourProducts.dailyshot.desc')}
                  ctaText={`${t('health.ourProducts.explore')} DailyShot`}
                  onClick={() => document.getElementById('dailyshot-products')?.scrollIntoView({ behavior: 'smooth' })}
                />

                <InteractiveProductCard
                  type="electrovit"
                  title="Electrovit"
                  desc={t('health.ourProducts.electrovit.desc')}
                  ctaText={`${t('health.ourProducts.explore')} Electrovit`}
                  onClick={() => document.getElementById('electrovit-products')?.scrollIntoView({ behavior: 'smooth' })}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dailyshot Products Carousel Section */}
      <section id="dailyshot-products" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="flex items-center justify-between mb-10">
            <div>
              <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
                {t('health.sections.dailyshot.label')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
                {t('health.sections.dailyshot.title')}
              </h2>
            </div>
            <Button asChild className="bg-health-primary text-white hover:bg-health-primary rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-health-primary/30">
              <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                {t('health.sections.dailyshot.cta')} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </AnimatedSection>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4">
              {products.filter(p => p.brand === 'dailyshot').map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 bg-white border-gray-200 text-gray-700 hover:bg-health-primary hover:text-white hover:border-health-primary" />
            <CarouselNext className="-right-4 lg:-right-12 bg-white border-gray-200 text-gray-700 hover:bg-health-primary hover:text-white hover:border-health-primary" />
          </Carousel>
        </div>
      </section>

      {/* Gradient transition: Carousel -> Electrovit intro */}
      {/* Spacer (removed gradient) */}
      <div className="h-12 bg-white" />

      {/* ===== ELECTROVIT INTRO SECTION (Red Background) ===== */}
      {/* ===== ELECTROVIT SECTION (Navy Cinematic - No Badge) ===== */}
      <section ref={electrovitSectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-[#0f1c2e] text-white">

        {/* Background Visuals */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '80%' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div className="text-[#0ea5e9] font-bold tracking-widest text-xs uppercase mb-2">
                {t('health.electrovitIntro.label')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                <Trans i18nKey="health.electrovitIntro.title" components={[<span className="text-[#0ea5e9]" />]} />
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
                <Trans i18nKey="health.electrovitIntro.desc" components={[<strong className="text-slate-200" />]} />
              </p>

              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-slate-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                    <Zap className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium text-sm md:text-base">{t('health.electrovitIntro.feature1')}</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                    <Droplets className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium text-sm md:text-base">{t('health.electrovitIntro.feature2')}</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                    <Activity className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium text-sm md:text-base">{t('health.electrovitIntro.feature3')}</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button
                  asChild
                  className="inline-flex items-center justify-center px-8 py-6 text-base font-semibold text-white transition-all duration-200 bg-[#0ea5e9] rounded-full hover:bg-[#0284c7] hover:shadow-lg hover:shadow-[#0ea5e9]/30 border-0"
                >
                  <a href="https://dailyshot.com.tr/arama/electrovit" target="_blank" rel="noopener noreferrer" className="group">
                    {t('health.electrovitIntro.cta')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative w-full h-auto overflow-hidden rounded-3xl shadow-2xl shadow-black/50 group">
                <img
                  src={liquidAdvantagesImage}
                  alt="Liquid Form Advantages"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Electrovit Products Carousel Section */}
      <section id="electrovit-products" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-2 block">
                {t('health.sections.electrovit.label')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
                {t('health.sections.electrovit.title')}
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-[#38BDF8] hover:text-[#38BDF8]/80">
              <a href="https://dailyshot.com.tr/arama/electrovit" target="_blank" rel="noopener noreferrer">
                {t('health.sections.electrovit.cta')} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </AnimatedSection>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4">
              {products.filter(p => p.brand === 'electrovit').map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 bg-white border-gray-200 text-gray-700 hover:bg-[#38BDF8] hover:text-white hover:border-[#38BDF8]" />
            <CarouselNext className="-right-4 lg:-right-12 bg-white border-gray-200 text-gray-700 hover:bg-[#38BDF8] hover:text-white hover:border-[#38BDF8]" />
          </Carousel>
        </div>
      </section>

      {/* ===== WHY LIQUID? (Liquid Form Info Section) - Reference Image 4 Style ===== */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dailyshot_ingredients.jpg"
            alt="Natural Ingredients"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Strong Orange/Amber Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-orange-600/90 via-amber-600/80 to-amber-500/40" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid md:grid-cols-3 gap-12 text-white">

            {/* Feature 1: Likit Form */}
            <div className="space-y-4">
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
                {t('health.whyLiquid.liquidForm.title')}
              </h3>
              <div className="h-1 w-20 bg-white/40 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                {t('health.whyLiquid.liquidForm.desc1')}
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                {t('health.whyLiquid.liquidForm.desc2')}
              </p>
            </div>

            {/* Feature 2: Bitkisel İçerik */}
            <div className="space-y-4">
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
                {t('health.whyLiquid.herbalContent.title')}
              </h3>
              <div className="h-1 w-20 bg-white/40 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                {t('health.whyLiquid.herbalContent.desc1')}
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                {t('health.whyLiquid.herbalContent.desc2')}
              </p>
            </div>

            {/* Feature 3: Kolay Kullanım */}
            <div className="space-y-4">
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
                {t('health.whyLiquid.easyUse.title')}
              </h3>
              <div className="h-1 w-20 bg-white/40 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                {t('health.whyLiquid.easyUse.desc')}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Blog Section */}
      <BlogSection />
    </div>
  );
};

export default HealthHome;
