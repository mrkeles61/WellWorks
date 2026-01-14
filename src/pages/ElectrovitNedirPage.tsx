import { ArrowRight, Droplets, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ElectrovitNedirPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">

            {/* NEW SPLIT HERO SECTION */}
            <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#E0F7FA]">
                {/* Background Water Image (Placeholder for AI Gen) */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=2030&auto=format&fit=crop"
                        alt="Water Background"
                        className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80" />
                </div>

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-20">
                    {/* LEFT: Text Content */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <AnimatedSection animation="fadeInLeft">
                            <span className="inline-block px-4 py-2 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-bold text-xs uppercase tracking-widest mb-6 border border-[#00AEEF]/20 backdrop-blur-sm">
                                {t('health.electrovitIntro.title')}
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0077B6] leading-[1.1] mb-6 font-poppins">
                                {t('health.electrovitNedir.heroTitle')} <br />
                                <span className="text-[#00A3E0] italic drop-shadow-sm">{t('health.electrovitNedir.heroTitleHighlight')}</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {t('health.electrovitNedir.introSection.paragraph1')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="https://dailyshot.com.tr/arama/electrovit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-[#00AEEF] hover:bg-[#0095CC] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-[#00AEEF]/30 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {t('health.electrovitNedir.cta')} <ArrowRight className="w-5 h-5" />
                                </a>
                                <div className="px-8 py-4 bg-white/60 backdrop-blur-md border border-[#00AEEF]/20 text-[#0077B6] rounded-full font-semibold cursor-default flex items-center justify-center gap-2">
                                    <Activity className="w-5 h-5" />
                                    {t('health.electrovitNedir.usageTime.preWorkout')}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* RIGHT: Vertical Product Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <AnimatedSection animation="fadeInUp" delay={200} className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg perspective-1000">
                            {/* Card Container for the Vertical Image */}
                            <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,163,224,0.3)] border-4 border-white transform transition-all duration-700 hover:rotate-1 hover:scale-[1.02] bg-white group">
                                <img
                                    src="/images/electrovit_vertical.jpg"
                                    alt="Electrovit Vertical"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Floating "0 Sugar" Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow border border-gray-100 hidden sm:flex">
                                <div className="bg-blue-50 p-2.5 rounded-full">
                                    <Droplets className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Şeker</div>
                                    <div className="text-xl font-black text-[#0077B6]">0 GR</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Info Card Section (Preserved & Styled) */}
            <section id="details" className="max-w-5xl mx-auto px-6 -mt-20 relative z-20 pb-24">
                <AnimatedSection animation="fadeInUp">
                    <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 lg:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] text-center relative overflow-hidden group border border-slate-100 dark:border-slate-700">
                        {/* Top Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] to-[#0077B6]"></div>

                        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00AEEF]/5 text-[#00AEEF] group-hover:scale-110 transition-transform">
                            <Activity className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-6">
                            Su İçemeyenler İçin Tasarlandı.
                        </h2>

                        <div className="max-w-2xl mx-auto space-y-6">
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Unutkanlık, tüketim alışkanlığı ya da su kaybına sebep olacak dış faktörlerin varlığı nedeniyle günlük su ihtiyacını karşılayamayanlar için geliştirilmiş bir elektrolit takviyesidir.
                            </p>
                            <div className="h-px w-24 bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                            <p className="text-slate-500 dark:text-slate-500 italic text-base">
                                Günlük elektrolit ihtiyacınızı karşılayarak vücudun sıvı dengesini, sinir iletimi ve kas fonksiyonlarını destekler. Yorgunluk ve bitkinliğin azalmasına katkıda bulunur.
                            </p>
                        </div>

                        {/* Grid Stats */}
                        <div id="how-it-works" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {[
                                { label: 'Sodyum', val: 'Na+' },
                                { label: 'Potasyum', val: 'K+' },
                                { label: 'Magnezyum', val: 'Mg++' },
                                { label: 'İlave Şeker', val: '0' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg hover:border-[#00AEEF]/30">
                                    <div className="text-[#00AEEF] font-bold text-xl mb-1">{item.val}</div>
                                    <div className="text-xs font-medium text-slate-500 uppercase">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </section>

        </div>
    );
};

export default ElectrovitNedirPage;
