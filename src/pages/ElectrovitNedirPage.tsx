import { ArrowRight, Activity } from 'lucide-react';
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

            {/* NEW HERO SECTION */}
            <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-white">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/electrovit_reklam.png"
                        alt="Background"
                        className="w-full h-full object-cover object-left opacity-100" // Assuming the image is the full splash art
                    />
                    {/* Optional Gradient Fade for text readability on mobile if needed */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:hidden" />
                </div>

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-20">
                    {/* LEFT: Text Content */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <AnimatedSection animation="fadeInLeft">
                            {/* Main Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 font-poppins">
                                Su İhtiyacınızı <br />
                                Karşılamanın <br />
                                <span className="text-[#00AEEF] italic">En Akıllı</span> Yolu
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Günlük elektrolit ihtiyacını karşılayarak dehidrasyonun önlenmesini, vücudun sıvı dengesini, sinir iletimi ve kas fonksiyonlarını destekler.
                            </p>

                            {/* CTA Button */}
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="https://dailyshot.com.tr/arama/electrovit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95 flex items-center gap-2 text-lg"
                                >
                                    Hemen Keşfedin <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* RIGHT: Product Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <AnimatedSection animation="fadeInUp" delay={200} className="relative w-full max-w-md lg:max-w-lg">
                            <div className="relative transform hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src="/images/electrovit_hero_bottle.png"
                                    alt="Electrovit Bottle"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Info Card Section (Preserved) */}
            <section id="details" className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 pb-24">
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
