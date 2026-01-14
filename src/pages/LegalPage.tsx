import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useBrand } from '@/hooks/useBrand';
import { FileText } from 'lucide-react';

const LegalPage = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();
  const { type } = useParams<{ type: string }>();

  useEffect(() => {
    setBrand('health');
  }, [setBrand]);

  const getTitleKey = () => {
    switch (type) {
      case 'kvkk':
        return 'legal.kvkk.title';
      case 'cerezler':
        return 'legal.cookies.title';
      case 'kosullar':
        return 'legal.terms.title';
      default:
        return 'legal.title';
    }
  };

  const getContentKey = () => {
    switch (type) {
      case 'kvkk':
        return 'legal.kvkk.content';
      case 'cerezler':
        return 'legal.cookies.content';
      case 'kosullar':
        return 'legal.terms.content';
      default:
        return 'legal.content';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FileText className="w-10 h-10 text-health-primary" />
            <h1 className="text-3xl md:text-4xl font-bold font-poppins text-health-primary">
              {t(getTitleKey())}
            </h1>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {t(getContentKey())}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
