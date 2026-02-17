import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/hooks/useBrand';
import AnimatedSection from '@/components/shared/AnimatedSection';

const certs = [
    { key: 'iso9001', subKey: 'iso9001Sub' },
    { key: 'iso22000', subKey: 'iso22000Sub' },
    { key: 'gmp', subKey: 'gmpSub' },
    { key: 'iso13485', subKey: 'iso13485Sub' },
    { key: 'halal', subKey: 'halalSub' },
];

const QualityPageV1 = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div data-brand="health" className="bg-[#f5f8f8] text-[#0c1a1d] antialiased min-h-screen">
            {/* Hero — dark, minimal, premium */}
            <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#003366] text-white overflow-hidden py-36 lg:py-44">
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a5e0]/8 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                            {t('quality.pageTitle')}
                        </h1>
                        <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                            {t('quality.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Certifications — floating pills */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <AnimatedSection>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {certs.map((cert) => (
                                <div
                                    key={cert.key}
                                    className="flex items-center gap-2.5 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00a5e0]/30 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-[#00a5e0] text-xl">verified</span>
                                    <div className="text-left">
                                        <span className="font-bold text-slate-900 text-sm">{t(`quality.${cert.key}`)}</span>
                                        <span className="text-slate-400 text-xs ml-2">{t(`quality.${cert.subKey}`)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Brief statement — elegant centered text */}
            <section className="py-12">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <AnimatedSection>
                        <div className="w-12 h-px bg-[#00a5e0] mx-auto mb-8" />
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                            {t('quality.commitDesc')}
                        </p>
                        <div className="w-12 h-px bg-[#00a5e0] mx-auto mt-8" />
                    </AnimatedSection>
                </div>
            </section>

            {/* Cert Badges — existing image */}
            <section className="border-t border-[#e6f2f4] py-12">
                <AnimatedSection>
                    <div className="flex justify-center mx-auto px-6">
                        <img
                            src="/icons/cert-badges.png"
                            alt={t('quality.certsTitle')}
                            className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            style={{ maxWidth: '700px', width: '100%', height: 'auto' }}
                        />
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default QualityPageV1;
