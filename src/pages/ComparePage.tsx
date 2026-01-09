import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/context/BrandContext';
import { Scale } from 'lucide-react';

const ComparePage = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <Scale className="w-16 h-16 mx-auto text-health-primary mb-6" />
          <h1 className="text-4xl font-bold font-poppins text-health-primary mb-4">
            {t('compare.title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t('compare.subtitle')}
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <p className="text-muted-foreground">
              {t('compare.comingSoon')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparePage;
