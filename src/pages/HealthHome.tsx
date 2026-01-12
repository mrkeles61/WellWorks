import { ArrowRight, Play, Zap, ShieldCheck, Timer, Shield, Droplets, Activity } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { products } from '@/data/products';
import ProductCard from '@/components/health/ProductCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import BlogSection from '@/components/health/BlogSection';
import bottleOfHealth from '@/assets/bottle-of-health.png';
import certificationsTransparentImg from '@/assets/certifications_transparent.png';
import { useEffect, useRef } from 'react';
import { useBrand } from '@/context/BrandContext';
import StoreLocator from '@/components/health/StoreLocator';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { animate, stagger } from 'animejs';

const HealthHome = () => {
  const { setBrand } = useBrand();
  const { t } = useTranslation();
  const dailyshotSectionRef = useRef<HTMLDivElement>(null);
  const electrovitSectionRef = useRef<HTMLDivElement>(null);

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

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
                WellWorks Health
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                Likit Takviyenin <span className="text-health-primary">Gücünü</span> Keşfedin
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                WellWorks Health, içerisinde likit formda ürünler bulunduran bitkisel bir gıda takviyesi markasıdır.
                Likit yapısı sayesinde kana hızlıca karışır ve etkinin hızlı gözlemlenmesine olanak sağlar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <Zap className="w-5 h-5 text-health-primary" />
                  <span><strong>%90'a varan</strong> biyoyararlanım oranı</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <Shield className="w-5 h-5 text-health-primary" />
                  <span>GMP ve Helal sertifikalı üretim</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <Droplets className="w-5 h-5 text-health-primary" />
                  <span>Hızlı emilim, dakikalar içinde etki</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-health-primary text-white hover:bg-health-primary/90 rounded-full px-8 mt-4"
              >
                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                  Ürünleri Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Image in glassmorphism card */}
            <a
              href="https://dailyshot.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 relative group"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="/images/dailyshot_ingredients.jpg"
                  alt="Dailyshot Products with Natural Ingredients"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Gradient transition: WellWorks intro -> Carousel */}
      {/* Spacer (removed gradient) */}
      <div className="h-12 bg-white" />

      {/* Dailyshot Products Carousel Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
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
            <Button asChild variant="ghost" className="text-health-primary hover:text-health-primary/80">
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
      {/* ===== ELECTROVIT INTRO SECTION (Overlay Split Pattern) ===== */}
      <section ref={electrovitSectionRef} className="relative w-full h-[85vh] overflow-hidden flex items-center">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/electrovit_stadium.png"
            alt="Electrovit Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hard Edge Gradient Overlay (Left Split) - Color Zone */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-health-primary via-health-primary/95 to-transparent w-full md:w-[75%]" />

        {/* Soft Radial Watermark for Texture */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl z-10 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Zone (Text) */}
            <div className="max-w-2xl text-white">
              {/* Brand/Category Tag */}
              <div className="inline-flex items-center gap-2 mb-6 border-b border-white/30 pb-2">
                <span className="font-oswald text-xl uppercase tracking-widest text-white/90">
                  PERFORMANS SERİSİ
                </span>
              </div>

              {/* Main Headline - Condensed Bold Uppercase */}
              <h2 className="font-oswald text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tight mb-8">
                SPORCULARIN<br />
                <span className="text-white/80">ELEKTROLİT</span><br />
                TERCİHİ
              </h2>

              {/* Description - Sans Serif Clean */}
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-10 max-w-lg border-l-4 border-white/30 pl-6">
                Electrovit, aktif yaşam sürenler için özel formüle edilmiş <span className="font-semibold">likit elektrolit</span> takviyesidir. Toz karışıklığına son verin.
              </p>

              {/* Functional Attributes */}
              <div className="flex flex-wrap gap-6 mb-12">
                {[
                  { icon: Zap, label: "ANINDA ENERJİ" },
                  { icon: Droplets, label: "HIZLI EMİLİM" },
                  { icon: Activity, label: "ŞEKERSİZ" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                    <span className="font-bold text-sm tracking-wider">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                className="bg-white text-health-primary hover:bg-gray-100 text-lg px-10 py-8 rounded-full font-bold shadow-2xl transition-transform hover:scale-105 border-0"
              >
                <a href="https://dailyshot.com.tr/arama/electrovit" target="_blank" rel="noopener noreferrer">
                  ELECTROVIT'İ KEŞFET <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Electrovit Products Carousel Section */}
      <section className="py-16 lg:py-24 bg-white">
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
                LİKİT FORM
              </h3>
              <div className="h-1 w-20 bg-white/40 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                <Trans i18nKey="health.liquidRevolution.desc1">
                  Vücudunuzun zamana ihtiyacı yok! Likit ürünler, içerisindeki etken maddelerin doğrudan ve hızlı emilimini sağlarken, katı formlar gibi ekstra katkı maddeleri içermez.
                </Trans>
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Bu sayede daha hızlı etki sağlar ve maksimum biyoyararlanım sunar. Çünkü hayat hızlı, kullandığınız takviye edici gıdalar da öyle olmalı!
              </p>
            </div>

            {/* Feature 2: Bitkisel İçerik */}
            <div className="space-y-4">
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
                BİTKİSEL İÇERİK
              </h3>
              <div className="h-1 w-20 bg-white/40 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Ürünlerimiz, bitkisel özler, vitaminler ve mineraller ile günlük yaşamda vücudun normal fonksiyonlarına destek olmak amacıyla özenle formüle edilmiştir.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Her ürün, doğal kaynaklardan elde edilen bileşenlerle hazırlanır ve günlük beslenmenize pratik bir katkı sağlar.
              </p>
            </div>

            {/* Feature 3: Kolay Kullanım */}
            <div className="space-y-4">
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
                KOLAY KULLANIM
              </h3>
              <div className="h-1 w-20 bg-white/40 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Likit formlar aroma ve tat profili ile kolay ve keyifli bir içim sunar. Ayrıca tatma eylemi, besin yollarını harekete geçirir ve vücudun belirli bölgelerini hedef alarak gıda takviyesinin aktif bileşeninin daha iyi kullanılmasını sağlar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Store Locator Section */}
      <StoreLocator />

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
};

export default HealthHome;
