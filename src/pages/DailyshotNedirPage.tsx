import { ArrowRight, Zap, Shield, Droplets, Moon, Sun, Clock, Activity, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { products } from '@/data/products';

const DailyshotNedirPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    // Filter and transform products for display
    const displayProducts = products
        .filter(p => p.brand === 'dailyshot' && p.id !== '10' && p.id !== '10') // Exclude Energyshot 2'li (ID 10)
        .map(p => {
            // Extract pack size from name relative to Turkish grammar e.g "7'li Kutu"
            // Most names are like "Product Name 7'li Kutu"
            const nameParts = p.name.split(' ');
            const packSize = nameParts.slice(-2).join(' '); // "7'li Kutu"
            const baseName = nameParts.slice(0, -2).join(' '); // "Product Name"

            return {
                ...p,
                displayName: baseName,
                packLabel: packSize.replace("'", "'"), // Ensure correct typography if needed
                displayImage: p.image
            };
        });

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: t('health.dailyshotNedir.benefits.fastAbsorption'),
            description: t('health.dailyshotNedir.benefits.fastAbsorptionDesc'),
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: t('health.dailyshotNedir.benefits.bioavailability'),
            description: t('health.dailyshotNedir.benefits.bioavailabilityDesc'),
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: t('health.dailyshotNedir.benefits.easyDrink'),
            description: t('health.dailyshotNedir.benefits.easyDrinkDesc'),
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: t('health.dailyshotNedir.benefits.cleanContent'),
            description: t('health.dailyshotNedir.benefits.cleanContentDesc'),
        },
    ];

    const useCases = [
        {
            icon: <Sun className="w-8 h-8" />,
            title: t('health.dailyshotNedir.usageRoutine.morning'),
            description: t('health.dailyshotNedir.usageRoutine.morningDesc'),
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: t('health.dailyshotNedir.usageRoutine.daytime'),
            description: t('health.dailyshotNedir.usageRoutine.daytimeDesc'),
        },
        {
            icon: <Moon className="w-8 h-8" />,
            title: t('health.dailyshotNedir.usageRoutine.evening'),
            description: t('health.dailyshotNedir.usageRoutine.eveningDesc'),
        },
    ];

    const targetAudience = [
        t('health.dailyshotNedir.targetAudience.item1'),
        t('health.dailyshotNedir.targetAudience.item2'),
        t('health.dailyshotNedir.targetAudience.item3'),
        t('health.dailyshotNedir.targetAudience.item4'),
        t('health.dailyshotNedir.targetAudience.item5'),
        t('health.dailyshotNedir.targetAudience.item6'),
    ];

    return (
        <div data-brand="health" className="bg-gray-50 min-h-screen font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/products_showcase.png"
                        alt="Dailyshot Ürünleri"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-6 block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit mx-auto border border-white/10">
                            {t('health.dailyshotNedir.heroLabel')}
                        </span>
                        <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6">
                            {t('health.dailyshotNedir.heroTitle')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-10">
                            {t('health.dailyshotNedir.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 lg:py-28 relative z-20 -mt-10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-health-primary mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Liquid / Use Cases */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            {t('health.dailyshotNedir.usageRoutine.label')}
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 max-w-2xl mx-auto">
                            {t('health.dailyshotNedir.usageRoutine.title')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {useCases.map((useCase, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center h-full">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-health-primary mb-6 mx-auto">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {useCase.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Family Grid */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            {t('health.dailyshotNedir.productFamily.label')}
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                            {t('health.dailyshotNedir.productFamily.title')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {displayProducts.map((product, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <a
                                    href={`https://dailyshot.com.tr/urun/${product.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full hover:-translate-y-1"
                                >
                                    {/* Image Area */}
                                    <div className="h-64 bg-gray-100 relative p-4 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20" style={{ backgroundColor: product.color }}></div>
                                        <img
                                            src={product.displayImage}
                                            alt={product.name}
                                            className="h-full w-full object-contain drop-shadow-xl transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: product.color }}>
                                                {product.category}
                                            </span>
                                        </div>
                                        <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2 group-hover:text-health-primary transition-colors">
                                            {product.displayName}
                                        </h3>
                                        <p className="text-gray-500 font-medium mb-4">
                                            {product.packLabel}
                                        </p>
                                        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                                            {product.shortDescription}
                                        </p>

                                        <div className="flex items-center text-health-primary font-bold text-sm">
                                            {t('health.dailyshotNedir.cta.viewProduct')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience / CTA */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                {/* Molecular Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/dailyshot_molecule_bg.png" className="w-full h-full object-cover" alt="pattern" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection animation="fadeInRight">
                            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
                                {t('health.dailyshotNedir.targetAudience.label')}
                            </span>
                            <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-8 leading-tight">
                                {t('health.dailyshotNedir.cta.title')}
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                {t('health.dailyshotNedir.cta.desc')}
                            </p>

                            <Button
                                asChild
                                size="lg"
                                className="bg-health-primary hover:bg-blue-600 text-white font-bold rounded-full px-10 py-7 text-lg shadow-lg shadow-blue-500/30"
                            >
                                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                    {t('health.dailyshotNedir.cta.button')} <ArrowRight className="w-5 h-5 ml-3" />
                                </a>
                            </Button>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInLeft" delay={200}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {targetAudience.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DailyshotNedirPage;
