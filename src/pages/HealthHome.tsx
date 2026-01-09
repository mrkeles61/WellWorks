import { useTranslation } from 'react-i18next';
import { ArrowRight, Truck, ShieldCheck, Headphones, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { products } from '@/data/products';
import ProductCard from '@/components/health/ProductCard';
import healthHeroImage from '@/assets/health-hero-products.jpg';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';

const HealthHome = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

  const trustBadges = [
    {
      icon: <Truck className="w-8 h-8 text-health-primary" />,
      title: t('health.trust.freeShipping'),
      description: t('health.trust.freeShippingDesc'),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-health-primary" />,
      title: t('health.trust.securePayment'),
      description: t('health.trust.securePaymentDesc'),
    },
    {
      icon: <Headphones className="w-8 h-8 text-health-primary" />,
      title: t('health.trust.support'),
      description: t('health.trust.supportDesc'),
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-health-primary" />,
      title: t('health.trust.easyReturn'),
      description: t('health.trust.easyReturnDesc'),
    },
  ];

  return (
    <div data-brand="health" className="bg-background">
      {/* Hero Slider */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-white via-health-bg-alt to-white">
              <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4">
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-health-text mb-4 opacity-0 animate-slide-up">
                    {t('health.hero.title')}
                  </h1>
                  <p className="text-lg md:text-xl text-health-text-muted mb-8 opacity-0 animate-slide-up stagger-1">
                    {t('health.hero.subtitle')}
                  </p>
                  <Link
                    to="/health/urunler"
                    className="btn-health inline-flex items-center gap-2 opacity-0 animate-slide-up stagger-2"
                  >
                    {t('health.hero.cta')} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex-1 opacity-0 animate-scale-in stagger-3">
                  <img
                    src={healthHeroImage}
                    alt="Dailyshot Products"
                    className="w-full max-w-lg mx-auto animate-float"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-y border-border bg-health-bg-alt">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-4 justify-center lg:justify-start">
                {badge.icon}
                <div>
                  <p className="font-semibold text-sm">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-health-text">
              {t('health.products.title')}
            </h2>
            <Link
              to="/health/urunler"
              className="text-health-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              {t('health.products.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthHome;
