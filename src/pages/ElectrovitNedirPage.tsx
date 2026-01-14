import { ArrowRight, Zap, Droplets, Heart, Activity, Dumbbell, Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ProductCard from '@/components/health/ProductCard';
import { products } from '@/data/products';

const ElectrovitNedirPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: t('health.electrovitNedir.benefits.instantEnergy'),
            description: t('health.electrovitNedir.benefits.instantEnergyDesc'),
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: t('health.electrovitNedir.benefits.hydration'),
            description: t('health.electrovitNedir.benefits.hydrationDesc'),
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: t('health.electrovitNedir.benefits.muscleFunction'),
            description: t('health.electrovitNedir.benefits.muscleFunctionDesc'),
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: t('health.electrovitNedir.benefits.heartHealth'),
            description: t('health.electrovitNedir.benefits.heartHealthDesc'),
        },
    ];

    const useCases = [
        {
            icon: <Droplets className="w-8 h-8" />,
            title: t('health.electrovitNedir.usageTime.preWorkout'),
            description: t('health.electrovitNedir.usageTime.preWorkoutDesc'),
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: t('health.electrovitNedir.usageTime.duringWorkout'),
            description: t('health.electrovitNedir.usageTime.duringWorkoutDesc'),
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: t('health.electrovitNedir.usageTime.postWorkout'),
            description: t('health.electrovitNedir.usageTime.postWorkoutDesc'),
        },
    ];

    // Get electrovit products for their images
    const electrovitProducts = products.filter(p => p.brand === 'electrovit');

    const targetAudience = [
        t('health.electrovitNedir.targetAudience.item1'),
        t('health.electrovitNedir.targetAudience.item2'),
        t('health.electrovitNedir.targetAudience.item3'),
        t('health.electrovitNedir.targetAudience.item4'),
        t('health.electrovitNedir.targetAudience.item5'),
        t('health.electrovitNedir.targetAudience.item6'),
    ];

    const [imagePosition, setImagePosition] = useState(() => {
        const saved = localStorage.getItem('electrovit_image_pos');
        return saved ? Number(saved) : 41;
    });

    const [cardWidth, setCardWidth] = useState(() => {
        const saved = localStorage.getItem('electrovit_card_width');
        return saved ? Number(saved) : 627;
    });

    useEffect(() => {
        localStorage.setItem('electrovit_image_pos', String(imagePosition));
    }, [imagePosition]);

    useEffect(() => {
        localStorage.setItem('electrovit_card_width', String(cardWidth));
    }, [cardWidth]);

    return (
        <div data-brand="health" className="bg-gray-50 min-h-screen">
            {/* Temporary Control Panel */}
            <div className="fixed top-24 left-4 z-50 bg-black/80 p-4 rounded-lg text-white border border-white/20 shadow-xl backdrop-blur-md w-64">
                <h3 className="text-xs font-bold mb-3 uppercase tracking-wider text-gray-400 border-b border-gray-700 pb-1">Page Controls</h3>

                {/* Image Position */}
                <div className="mb-4">
                    <p className="text-[10px] font-bold mb-1 uppercase text-orange-400">Hero Image Y-Pos</p>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={imagePosition}
                        onChange={(e) => setImagePosition(Number(e.target.value))}
                        className="w-full accent-orange-500 cursor-pointer"
                    />
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-gray-500">Top</span>
                        <span className="text-sm font-bold font-mono text-orange-400">{imagePosition}%</span>
                        <span className="text-[10px] text-gray-500">Bottom</span>
                    </div>
                </div>

                {/* Card Width */}
                <div>
                    <p className="text-[10px] font-bold mb-1 uppercase text-blue-400">Content Card Width</p>
                    <input
                        type="range"
                        min="400"
                        max="1200"
                        value={cardWidth}
                        onChange={(e) => setCardWidth(Number(e.target.value))}
                        className="w-full accent-blue-500 cursor-pointer"
                    />
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-gray-500">Narrow</span>
                        <span className="text-sm font-bold font-mono text-blue-400">{cardWidth}px</span>
                        <span className="text-[10px] text-gray-500">Wide</span>
                    </div>
                </div>
            </div>

            {/* Hero Section - 65vh with centered logo */}
            <section className="relative h-[65vh] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/electrovit_hero_v2.png"
                        alt="Electrovit Ürünleri"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-all duration-100 ease-out"
                        style={{ objectPosition: `center ${imagePosition}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 to-amber-900/90 mix-blend-multiply" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center px-4">
                    <span className="text-white font-black text-4xl md:text-6xl tracking-tight drop-shadow-2xl font-poppins italic">
                        {t('health.electrovitNedir.heroSlogan')}
                    </span>
                </div>
            </section>

            {/* Overlapping Content Card */}
            <section className="relative -mt-32 pb-24 px-6 z-10" id="intro-card-section">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* LEFT PRODUCT - Watermelon */}
                    <div className="hidden lg:block w-48 xl:w-64">
                        <AnimatedSection animation="fadeInRight" delay={300}>
                            <a href="https://www.dailyshot.com.tr/urun/electrovit-karpuzlu-8-li" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                                <img
                                    src={products.find(p => p.slug.includes('karpuz'))?.image}
                                    alt="Electrovit Karpuz"
                                    className="w-full h-auto object-contain drop-shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500"
                                />
                            </a>
                        </AnimatedSection>
                    </div>

                    {/* Dynamic Width Container */}
                    <div className="transition-all duration-200 ease-out flex-shrink-0" style={{ width: `${cardWidth}px`, maxWidth: '100%' }}>
                        <AnimatedSection animation="fadeInUp">
                            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-500" />
                                {/* Water Drop Icon */}
                                <div className="flex justify-center mb-6">
                                    <Droplets className="w-12 h-12 text-[#E67E22]" />
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 tracking-tight font-poppins">
                                    {t('health.electrovitNedir.heroTitle')} <span className="text-[#E67E22]">{t('health.electrovitNedir.heroTitleHighlight')}</span>
                                </h1>

                                {/* Content Paragraphs */}
                                <div className="space-y-6 text-center">
                                    <p className="text-lg md:text-xl leading-relaxed text-gray-500 font-light">
                                        {t('health.electrovitNedir.introSection.paragraph1')}
                                    </p>
                                    <div className="h-px w-24 bg-[#E67E22]/30 mx-auto my-8" />
                                    <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                                        {t('health.electrovitNedir.introSection.paragraph2')}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* CTA Button inside Card */}
                        <div className="text-center mt-10">
                            <a
                                href="https://dailyshot.com.tr/arama/electrovit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#E67E22] hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-1"
                            >
                                {t('health.electrovitNedir.cta')}
                            </a>
                            <p className="mt-6 text-gray-500 text-sm italic">
                                *{t('health.electrovitNedir.disclaimer')}
                            </p>
                        </div>
                    </div>


                    {/* RIGHT PRODUCT - Orange */}
                    <div className="hidden lg:block w-48 xl:w-64">
                        <AnimatedSection animation="fadeInLeft" delay={300}>
                            <a href="https://www.dailyshot.com.tr/urun/electrovit-portakal-aromali-8-li" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                                <img
                                    src={products.find(p => p.slug.includes('portakal'))?.image}
                                    alt="Electrovit Portakal"
                                    className="w-full h-auto object-contain drop-shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500"
                                />
                            </a>
                        </AnimatedSection>
                    </div>
                </div >
            </section >

            {/* Benefits */}
            < section className="py-20 lg:py-28" >
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                            {t('health.electrovitNedir.benefits.label')}
                        </span>
                        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 max-w-2xl mx-auto">
                            {t('health.electrovitNedir.benefits.title')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow text-center">
                                    <div className="w-14 h-14 bg-[#FF9800]/10 rounded-2xl flex items-center justify-center text-[#FF9800] mb-6 mx-auto">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {benefit.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section >

            {/* When to Use */}
            < section className="py-20 bg-gray-100" >
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                            {t('health.electrovitNedir.usageTime.label')}
                        </span>
                        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
                            {t('health.electrovitNedir.usageTime.title')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {useCases.map((useCase, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                    <div className="w-16 h-16 bg-[#FF9800] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg">{useCase.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section >

            {/* Flavors */}
            < section className="py-20 lg:py-28" >
                <div className="container mx-auto px-6">


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {electrovitProducts.map((product, index) => (
                            <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 100}>
                                <div className="h-full">
                                    <ProductCard product={product} />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section >

            {/* Target Audience */}
            < section className="py-20 bg-gray-900 text-white" >
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
                            <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                                {t('health.electrovitNedir.targetAudience.label')}
                            </span>
                            <h2 className="font-poppins font-bold text-4xl md:text-5xl">
                                {t('health.electrovitNedir.targetAudience.title')}
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInUp" delay={100}>
                            <div className="grid md:grid-cols-2 gap-4">
                                {targetAudience.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-xl px-6 py-4 transition-colors hover:bg-white/10">
                                        <div className="w-2 h-2 bg-[#FF9800] rounded-full" />
                                        <span className="text-gray-200 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInUp" delay={200} className="text-center mt-12">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#FF9800] hover:bg-[#FF9800]/90 text-white font-bold rounded-full px-10"
                            >
                                <a href="https://dailyshot.com.tr/arama/electrovit" target="_blank" rel="noopener noreferrer">
                                    {t('health.electrovitNedir.cta')} <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElectrovitNedirPage;
