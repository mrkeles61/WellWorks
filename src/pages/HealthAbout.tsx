import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/context/BrandContext';
import { dailyshotDescription, aboutContent } from '@/data/products';

const HealthAbout = () => {
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
            {t('health.about.title')}
          </h1>
        </div>
      </section>

      {/* Dailyshot Nedir Section */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-health-primary mb-6">
              {dailyshotDescription.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {dailyshotDescription.content}
            </p>
          </div>

          {/* Hakkımızda Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-health-primary mb-6">
              {aboutContent.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutContent.intro}
            </p>

            <h3 className="text-xl font-bold font-poppins text-health-primary mb-4">
              {aboutContent.qualityPolicy.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutContent.qualityPolicy.content}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed italic">
              {aboutContent.closing}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthAbout;
