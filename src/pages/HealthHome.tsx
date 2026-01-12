import { ArrowRight, Zap, Shield, Droplets, Heart } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { products } from '@/data/products';
import ProductCard from '@/components/health/ProductCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import BlogSection from '@/components/health/BlogSection';
import bottleOfHealth from '@/assets/bottle-of-health.png';
import certificationsTransparentImg from '@/assets/certifications_transparent.png';
import { useEffect, useRef } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import anime from 'animejs';

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
          anime({
            targets: target.querySelectorAll('.animate-on-scroll'),
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            delay: anime.stagger(150),
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
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        {/* Subtle background gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-health-primary/5 to-transparent pointer-events-none" />

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

      {/* Certificates Section */}
      <section className="bg-[#0f2942] py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-white text-lg md:text-xl font-semibold italic tracking-wide whitespace-nowrap flex-shrink-0 opacity-80">
              {t('health.certificates.title')}
            </h2>
            <div className="flex-1 flex justify-center">
              <a
                href="https://dailyshot.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl px-12 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={certificationsTransparentImg}
                  alt="ISO 22000:2018, GMP, ISO 9001:2015, Well Works Health"
                  className="h-24 md:h-32 lg:h-44 w-auto object-contain"
                />
              </a>
            </div>
            <div className="text-white text-xs max-w-[150px] hidden lg:block flex-shrink-0 text-right">
              <p className="text-white/40 text-[9px] leading-tight">
                {t('health.certificates.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DAILYSHOT INTRO SECTION (80% width, text + image) ===== */}
      <section
        ref={dailyshotSectionRef}
        className="py-20 lg:py-32 bg-white"
      >
        <div className="mx-auto px-6" style={{ maxWidth: '80%' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll opacity-0 space-y-6">
              <span className="text-health-primary text-sm font-semibold uppercase tracking-widest">
                Dailyshot Nedir?
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                Likit Takviyenin <span className="text-health-primary">Gücünü</span> Keşfedin
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dailyshot, içerisinde likit formda ürünler bulunduran bitkisel bir gıda takviyesi markasıdır.
                Likit yapısı sayesinde kana hızlıca karışır ve etkinin hızlı gözlemlenmesine olanak sağlar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <Zap className="w-5 h-5 text-health-primary" />
                  <span><strong>%90'a varan</strong> biyoyararlanım oranı</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-health-primary" />
                  <span>GMP ve Helal sertifikalı üretim</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Droplets className="w-5 h-5 text-health-primary" />
                  <span>Hızlı emilim, dakikalar içinde etki</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white rounded-full px-8 mt-4"
              >
                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                  Ürünleri Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Image */}
            <a
              href="https://dailyshot.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 relative group"
            >
              <img
                src="/images/dailyshot_lifestyle.png"
                alt="Dailyshot Lifestyle"
                className="w-full rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-health-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

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

      {/* ===== ELECTROVIT INTRO SECTION (80% width, text + image, reversed) ===== */}
      <section
        ref={electrovitSectionRef}
        className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-white"
      >
        <div className="mx-auto px-6" style={{ maxWidth: '80%' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image (left on desktop) */}
            <a
              href="https://dailyshot.com.tr/arama/electrovit"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 relative group order-2 lg:order-1"
            >
              <img
                src="/images/electrovit_sports.png"
                alt="Electrovit Sports Hydration"
                className="w-full rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Text Content (right on desktop) */}
            <div className="animate-on-scroll opacity-0 space-y-6 order-1 lg:order-2">
              <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest">
                Electrovit Nedir?
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                Sporcuların <span className="text-[#FF9800]">Elektrolit</span> Tercihi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Electrovit, aktif yaşam sürenler ve sporcular için özel olarak formüle edilmiş likit elektrolit takviyesidir.
                Toz değil, hazır içilebilir formatta sunulur.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <Zap className="w-5 h-5 text-[#FF9800]" />
                  <span>Anında enerji ve performans desteği</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Droplets className="w-5 h-5 text-[#FF9800]" />
                  <span>Karpuz ve Portakal aromalarında</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Heart className="w-5 h-5 text-[#FF9800]" />
                  <span>Antrenman öncesi, sırası ve sonrasında kullanım</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#FF9800] text-[#FF9800] hover:bg-[#FF9800] hover:text-white rounded-full px-8 mt-4"
              >
                <a href="https://dailyshot.com.tr/arama/electrovit" target="_blank" rel="noopener noreferrer">
                  Electrovit'i Keşfet <ArrowRight className="w-4 h-4 ml-2" />
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
              <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-2 block">
                {t('health.sections.electrovit.label')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
                {t('health.sections.electrovit.title')}
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-[#FF9800] hover:text-[#FF9800]/80">
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
            <CarouselPrevious className="-left-4 lg:-left-12 bg-white border-gray-200 text-gray-700 hover:bg-[#FF9800] hover:text-white hover:border-[#FF9800]" />
            <CarouselNext className="-right-4 lg:-right-12 bg-white border-gray-200 text-gray-700 hover:bg-[#FF9800] hover:text-white hover:border-[#FF9800]" />
          </Carousel>
        </div>
      </section>

      {/* Why Liquid Section */}
      <section className="py-24 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              {t('health.liquidRevolution.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">
              <Trans i18nKey="health.liquidRevolution.title" components={[<span className="text-health-primary" />]} />
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('health.liquidRevolution.desc1')}
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              {t('health.liquidRevolution.desc2')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
};

export default HealthHome;
