import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/context/BrandContext';
import ProductCard from '@/components/health/ProductCard';
import { products } from '@/data/products';

const HealthProducts = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-health-primary/5 to-transparent">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-poppins text-health-primary mb-4">
            {t('health.products.title')}
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {t('health.products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthProducts;
