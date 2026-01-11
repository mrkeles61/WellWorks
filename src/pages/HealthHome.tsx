import { ArrowRight, ShieldCheck, Award, Zap, Leaf } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/health/ProductCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import TrustBadges from '@/components/health/TrustBadges';
import bottleOfHealth from '@/assets/bottle-of-health.png';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HealthHome = () => {
  const { setBrand } = useBrand();

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

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
              Dailyshot Hakkında
            </span>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900">
              Türkiye'nin İlk ve Tek <span className="text-health-primary">Likit Takviye</span> Markası
            </h1>
            <p className="text-lg text-gray-600 font-medium max-w-lg leading-relaxed">
              Dailyshot, geleneksel hap ve kapsül formlarından farklı olarak, yüksek biyoyararlanımlı sıvı formülleriyle vücudunuz tarafından daha hızlı ve etkili bir şekilde emilir.
            </p>
            <p className="text-base text-gray-500 max-w-lg">
              Bilimsel araştırmalara dayanan formüllerimiz, en saf ve doğal içeriklerle hazırlanır. Şekersiz, katkısız ve pratik shot formatıyla sağlığınıza her gün bir adım daha yaklaşın.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://dailyshot.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-health-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-health-primary/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ürünleri Keşfet
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Transparent Image */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src={bottleOfHealth}
              alt="Dailyshot - A Bottle of Health"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 bg-health-primary/10 blur-3xl rounded-full transform scale-75" />
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-gray-200 border-t border-gray-300 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
            <div className="flex items-center gap-3 group cursor-default">
              <ShieldCheck className="w-8 h-8 text-health-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">GMP Sertifikalı</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <Award className="w-8 h-8 text-health-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">Helal Üretim</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <Leaf className="w-8 h-8 text-health-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">%100 Doğal</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <Zap className="w-8 h-8 text-health-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">Hızlı Emilim</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="flex items-center justify-between mb-10">
            <div>
              <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-2 block">Ürünlerimiz</span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
                Tüm Dailyshot Ürünleri
              </h2>
            </div>
            <a
              href="https://dailyshot.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-health-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              Mağazaya Git <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>

          {/* Horizontal Scroll Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
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

      {/* About Section */}
      <section className="py-24 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Neden Likit?</span>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">
              Likit Takviye <span className="text-health-primary">Devrimi</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Likit formüller, hap ve kapsüllerin aksine sindirim sisteminde çözünme sürecine ihtiyaç duymaz. Bu sayede içerikler doğrudan kana karışır ve etkisini çok daha hızlı gösterir.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Araştırmalar, likit formüllerin %90'a varan oranlarda emilim sağladığını göstermektedir. Geleneksel haplar ise yalnızca %10-20 oranında emilir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthHome;
