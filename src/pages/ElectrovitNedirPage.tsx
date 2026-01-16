import { ArrowRight, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useBrand } from '@/hooks/useBrand';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { products } from '@/data/products';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const ProductCard = ({ product, t }: { product: any, t: any }) => {
    const { i18n } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <a
            href={`https://dailyshot.com.tr/urun/${product.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full hover:-translate-y-1 border border-blue-100"
        >
            {/* Image Area */}
            <div className="h-64 bg-gray-50 relative p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10" style={{ backgroundColor: product.color }}></div>
                {!isLoaded && (
                    <Skeleton className="absolute inset-0 bg-gray-100" />
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    onLoad={() => setIsLoaded(true)}
                    className={cn(
                        "h-full w-full object-contain drop-shadow-xl transform transition-all duration-500 group-hover:scale-110",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                />
            </div>

            {/* Content Area */}
            <div className="p-8">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: product.color }}>
                        {product.category}
                    </span>
                </div>
                <h3
                    className="font-poppins font-bold text-2xl mb-2 transition-colors"
                    style={{ color: product.color }}
                >
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {i18n.language === 'tr' ? (product.shortDescriptionTr || product.shortDescription) : product.shortDescription}
                </p>

                <div
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full font-bold text-sm text-white transition-all hover:scale-105 shadow-md"
                    style={{ backgroundColor: product.color }}
                >
                    {t('health.dailyshotNedir.cta.viewProduct')} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </a>
    );
};

const ElectrovitNedirPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const electrovitProducts = products.filter(p => p.brand === 'electrovit');

    return (
        <div className="bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">

            {/* NEW HERO SECTION - STANDARD (Solid Blue) */}
            <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#00AEEF]">
                {/* Background Pattern Layer (Optional subtle overlay) */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-20">
                    {/* LEFT: Text Content */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <AnimatedSection animation="fadeInLeft">
                            {/* Main Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 font-poppins drop-shadow-sm">
                                {t('health.electrovitNedir.heroTitle')} <br />
                                {t('health.electrovitNedir.heroTitleHighlight')} <br />
                                <span className="text-white italic relative inline-block">
                                    {t('health.electrovitNedir.heroTitleHighlight2')}
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-white/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-blue-50 font-medium mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {t('health.electrovitNedir.introSection.paragraph2')}
                            </p>

                            {/* CTA Button */}
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="https://dailyshot.com.tr/arama/electrovit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-white text-[#00AEEF] hover:bg-blue-50 rounded-full font-bold transition-all shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95 flex items-center gap-2 text-lg"
                                >
                                    {t('health.electrovitNedir.cta')} <ArrowRight className="w-5 h-5" />
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
                            {t('health.electrovitIntro.title')}
                        </h2>

                        <div className="max-w-2xl mx-auto space-y-6">
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                {t('health.electrovitNedir.introSection.paragraph1')}
                            </p>
                            <div className="h-px w-24 bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                            <p className="text-slate-500 dark:text-slate-500 italic text-base">
                                {t('health.electrovitIntro.desc')}
                            </p>
                        </div>

                        {/* Grid Stats */}
                        <div id="how-it-works" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {[
                                { label: t('health.electrovitNedir.stats.sodium', 'Sodyum'), val: 'Na+' },
                                { label: t('health.electrovitNedir.stats.potassium', 'Potasyum'), val: 'K+' },
                                { label: t('health.electrovitNedir.stats.magnesium', 'Magnezyum'), val: 'Mg++' },
                                { label: t('health.electrovitNedir.stats.sugar', 'İlave Şeker'), val: '0' }
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

            {/* Products Section */}
            <section className="py-20 lg:py-28 bg-white relative z-10">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-[#00AEEF] text-sm font-semibold uppercase tracking-widest mb-4 block">
                            {t('health.electrovitNedir.products.title')}
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                            {t('health.electrovitNedir.products.family')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {electrovitProducts.map((product, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <ProductCard product={product} t={t} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ElectrovitNedirPage;
