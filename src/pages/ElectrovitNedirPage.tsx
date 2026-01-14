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
            {/* Blue Hero Background - The "Base" */}
            <section className="relative h-[50vh] w-full bg-gradient-to-b from-[#00A3E0] to-[#0077B6] flex items-center justify-center overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />

                {/* Hero Text */}
                <div className="relative z-10 text-center px-6 -mt-20">
                    <AnimatedSection animation="fadeInUp">
                        <span className="text-white/80 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                            {t('health.electrovitNedir.heroLabel')}
                        </span>
                        <h1 className="text-white font-black text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg font-poppins italic mb-6">
                            {t('health.electrovitNedir.heroSlogan')}
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            {t('health.electrovitNedir.introSection.paragraph1')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Overlapping Image Section - The "Bridge" */}
            <div className="relative z-20 -mt-48 container mx-auto px-6">
                <AnimatedSection animation="fadeInUp" delay={200}>
                    <div className="relative max-w-5xl mx-auto">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-[#00A3E0]/40 blur-3xl transform scale-90 -z-10 rounded-full" />

                        {/* The Image Card */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
                            <div className="bg-white rounded-[20px] overflow-hidden relative aspect-[21/9] shadow-inner group">
                                <img
                                    src="/images/electrovit_info.png"
                                    alt="Electrovit Info"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    style={{
                                        filter: 'grayscale(100%) sepia(100%) hue-rotate(170deg) saturate(200%) brightness(0.95)'
                                    }}
                                />
                                {/* Inner Shadow Overlay for depth */}
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Intro Content - The "Landing" */}
            <section className="pt-24 pb-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-poppins">
                            {t('health.electrovitNedir.heroTitle')} <span className="text-[#00A3E0]">{t('health.electrovitNedir.heroTitleHighlight')}</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            {t('health.electrovitNedir.introSection.paragraph2')}
                        </p>

                        <div className="mt-12">
                            <a
                                href="https://dailyshot.com.tr/arama/electrovit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#00A3E0] hover:bg-[#0077B6] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
                            >
                                {t('health.electrovitNedir.cta')}
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

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
