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

const QualityPageV2 = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div data-brand="health" className="bg-white text-[#0c1a1d] antialiased min-h-screen">
            {/* Hero — clean white with accent line */}
            <section className="relative pt-36 pb-20 px-6 text-center overflow-hidden">
                {/* Subtle gradient accent at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a5e0] to-transparent" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a5e0]/5 border border-[#00a5e0]/15 mb-8">
                            <span className="material-symbols-outlined text-[#00a5e0] text-lg">shield</span>
                            <span className="text-sm font-semibold text-[#00a5e0] tracking-wide uppercase">{t('quality.certsTitle')}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
                            {t('quality.pageTitle')}
                        </h1>
                        <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                            {t('quality.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Certifications — clean grid of mini cards */}
            <section className="py-12 bg-[#f8fafb]">
                <div className="max-w-5xl mx-auto px-6">
                    <AnimatedSection>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {certs.map((cert) => (
                                <div
                                    key={cert.key}
                                    className="bg-white p-5 rounded-2xl border border-slate-100 text-center hover:border-[#00a5e0]/30 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 bg-[#00a5e0]/8 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00a5e0] transition-colors">
                                        <span className="material-symbols-outlined text-[#00a5e0] text-xl group-hover:text-white transition-colors">verified</span>
                                    </div>
                                    <h4 className="font-bold text-sm text-slate-900">{t(`quality.${cert.key}`)}</h4>
                                    <p className="text-xs text-slate-400 mt-1">{t(`quality.${cert.subKey}`)}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Statement — left-aligned with accent border */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <div className="border-l-4 border-[#00a5e0] pl-8 py-2">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('quality.commitTitle')}</h3>
                            <p className="text-base text-slate-500 leading-relaxed">
                                {t('quality.commitDesc')}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Cert Badges — existing image */}
            <section className="border-t border-[#e6f2f4] py-12 bg-[#f8fafb]">
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

export default QualityPageV2;
