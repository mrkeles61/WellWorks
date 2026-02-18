import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/hooks/useBrand';
import { ShieldCheck, FlaskConical, Factory, Leaf } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const certs = [
    { key: 'iso9001', subKey: 'iso9001Sub', icon: ShieldCheck },
    { key: 'iso22000', subKey: 'iso22000Sub', icon: ShieldCheck },
    { key: 'gmp', subKey: 'gmpSub', icon: FlaskConical },
];

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
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            {t('quality.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 py-4">
                {/* Standards Grid */}
                <section className="mb-6">
                    <AnimatedSection>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold">{t('quality.certsTitle')}</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-[#00bbe0]/20 to-transparent ml-8" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certs.map((cert) => {
                                const Icon = cert.icon;
                                return (
                                    <div
                                        key={cert.key}
                                        className="bg-white p-8 rounded-xl border border-[#cde5ea] flex flex-col items-center text-center group hover:border-[#00bbe0] hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-16 h-16 bg-[#00bbe0]/10 rounded-full flex items-center justify-center text-[#00bbe0] mb-6 group-hover:bg-[#00bbe0] group-hover:text-white transition-colors">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">{t(`quality.${cert.key}`)}</h4>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest">{t(`quality.${cert.subKey}`)}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </AnimatedSection>
                </section>

                {/* Commitment Cards */}
                <section className="mb-6">
                    <AnimatedSection>
                        <h3 className="text-2xl font-bold mb-6">{t('quality.commitTitle')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-xl border-l-4 border-[#00bbe0] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Factory className="w-8 h-8 text-[#00bbe0]" />
                                    <h4 className="text-2xl font-bold">{t('quality.productionTitle')}</h4>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {t('quality.productionDesc')}
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-xl border-l-4 border-[#00bbe0] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Leaf className="w-8 h-8 text-[#00bbe0]" />
                                    <h4 className="text-2xl font-bold">{t('quality.rawMaterialTitle')}</h4>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {t('quality.rawMaterialDesc')}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

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
