import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/hooks/useBrand';
import AnimatedSection from '@/components/shared/AnimatedSection';

const QualityPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div data-brand="health" className="bg-[#f5f8f8] text-[#0c1a1d] antialiased">
            {/* Hero */}
            <section className="text-center pt-32 pb-4 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                            {t('quality.pageTitle')}
                        </h1>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            {t('quality.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 py-4">
                {/* Cert Badges */}
                <section className="border-t border-[#e6f2f4] py-6">
                    <AnimatedSection>
                        <div className="flex justify-center mx-auto">
                            <img
                                src="/icons/cert-badges.png"
                                alt={t('quality.certsTitle')}
                                className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                style={{ maxWidth: '700px', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </AnimatedSection>
                </section>
            </main>
        </div>
    );
};

export default QualityPage;
