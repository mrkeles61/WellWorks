import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/context/BrandContext';
import ProductCard from '@/components/health/ProductCard';
import { products } from '@/data/products';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const HealthProducts = () => {
  const { t, i18n } = useTranslation();
  const { setBrand } = useBrand();
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

  // Show sticky bar after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      {/* Hero Section - Bold Typography */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-health-primary/10 via-transparent to-health-secondary/5" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-health-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-health-secondary/10 rounded-full blur-[80px]" />

        <div className="container relative z-10">
          <AnimatedSection animation="fadeInUp">
            {/* Bold heading - 80-100px */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-center font-poppins leading-[0.9] tracking-tight mb-8">
              <span className="text-health-primary">{t('health.products.title')}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={100}>
            <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('health.products.subtitle')}
            </p>
          </AnimatedSection>

          {/* Stats/Trust bar */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-health-primary" />
                <span>10+ Ürün Çeşidi</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-health-primary" />
                <span>GMP Sertifikalı</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-health-primary" />
                <span>Helal Üretim</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid - Larger Cards, 2-3 columns */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Changed to 1-2-3 column layout for larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation="fadeInUp"
                delay={index * 50}
              >
                <ProductCard product={product} priority={index < 3} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA Section */}
      <section className="py-20 bg-gradient-to-r from-health-primary to-health-secondary text-white">
        <div className="container text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              {t('health.whereToBuy.title')}
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t('health.whereToBuy.description')}
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={200}>
            <a
              href="https://www.dailyshot.com.tr/kategori/online-alisveris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-health-primary font-bold text-lg rounded-2xl hover:bg-white/90 transition-all hover:scale-105 shadow-2xl shadow-black/20"
            >
              <ShoppingBag className="w-6 h-6" />
              {t('health.whereToBuy.cta')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl transition-all duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-health-primary" />
              <div>
                <p className="font-semibold">Dailyshot Ürünleri</p>
                <p className="text-sm text-muted-foreground">Resmi online mağazadan satın al</p>
              </div>
            </div>
            <a
              href="https://www.dailyshot.com.tr/kategori/online-alisveris"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 bg-health-primary text-white font-bold rounded-xl hover:bg-health-primary-hover transition-colors"
            >
              <span>Satın Al</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthProducts;



