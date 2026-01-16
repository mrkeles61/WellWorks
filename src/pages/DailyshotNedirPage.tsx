import { ArrowRight, Zap, Shield, Droplets, Moon, Sun, Clock, Activity, Check, Settings, X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { animate } from 'animejs';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { products } from '@/data/products';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { useRef } from 'react';
const InteractiveHeroButton = ({ text, href, color }: { text: string, href: string, color?: string }) => {
    const bgRef = useRef<HTMLDivElement>(null);

    const handleEnter = () => {
        if (bgRef.current) {
            animate(bgRef.current, { scaleY: 1, duration: 400, easing: 'easeOutQuad' });
        }
    };

    const handleLeave = () => {
        if (bgRef.current) {
            animate(bgRef.current, { scaleY: 0, duration: 400, easing: 'easeInQuad' });
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={cn(
                "group relative px-10 py-4 bg-white rounded-full font-bold transition-all flex items-center gap-2 text-lg overflow-hidden border-2 inline-flex",
                color ? `shadow-[0_10px_20px_-5px_${color}4d] hover:shadow-[0_15px_25px_-5px_${color}66]` : "text-health-primary border-health-primary shadow-[0_10px_20px_-5px_rgba(0,174,239,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(0,174,239,0.4)]"
            )}
            style={color ? { color: color, borderColor: color } : undefined}
        >
            <div
                ref={bgRef}
                className={cn("absolute bottom-0 left-0 w-full h-full origin-bottom scale-y-0 z-0", !color && "bg-health-primary")}
                style={color ? { backgroundColor: color } : undefined}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                {text} <ArrowRight className="w-5 h-5" />
            </span>
        </a>
    );
};

const DailyshotProductCard = ({ product, t }: { product: any, t: any }) => {
    const { i18n } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);

    // Map product slug to i18n description key
    const getDescriptionKey = (slug: string) => {
        if (slug.includes('energyshot')) return 'energyshot';
        if (slug.includes('hangovershotzero')) return 'hangovershotzero';
        if (slug.includes('hangovershot')) return 'hangovershot';
        if (slug.includes('relaxshot')) return 'relaxshot';
        if (slug.includes('defenseshot')) return 'defenseshot';
        if (slug.includes('detoxshot')) return 'detoxshot';
        if (slug.includes('laxshot')) return 'laxshot';
        if (slug.includes('libidoshot')) return 'libidoshot';
        if (slug.includes('antioxshot')) return 'antioxshot';
        return 'energyshot'; // fallback
    };

    // Map category to i18n key
    const getCategoryKey = (category: string) => {
        const categoryMap: { [key: string]: string } = {
            'Enerji': 'energy',
            'Akşamdan Kalma': 'hangover',
            'Uyku ve Stres': 'sleep',
            'Bağışıklık': 'immunity',
            'Detoks': 'detox',
            'Sindirim': 'digestion',
            'Vitalite': 'vitality',
            'Antioksidan': 'antioxidant',
        };
        return categoryMap[category] || 'energy';
    };

    const descKey = getDescriptionKey(product.slug);
    const catKey = getCategoryKey(product.category);
    const packLabelKey = product.slug.includes('4') ? 'packLabel4' : 'packLabel';

    return (
        <a
            href={`https://dailyshot.com.tr/urun/${product.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full hover:-translate-y-1"
        >
            {/* Image Area */}
            <div className="h-64 bg-gray-100 relative p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20" style={{ backgroundColor: product.color }}></div>
                {!isLoaded && (
                    <Skeleton className="absolute inset-0 bg-gray-200" />
                )}
                <img
                    src={product.displayImage}
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
                        {t(`health.dailyshotNedir.productCards.categories.${catKey}`)}
                    </span>
                </div>
                <h3
                    className="font-poppins font-bold text-2xl mb-2 transition-colors"
                    style={{ color: product.color }}
                >
                    {product.displayName}
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

    // Image Editor State - Load from localStorage if available
    const [editorOpen, setEditorOpen] = useState(true);
    const [imgScale, setImgScale] = useState(() => {
        const saved = localStorage.getItem('dailyshot_imgScale');
        return saved ? Number(saved) : 100;
    });
    const [imgX, setImgX] = useState(() => {
        const saved = localStorage.getItem('dailyshot_imgX');
        return saved ? Number(saved) : 50;
    });
    const [imgY, setImgY] = useState(() => {
        const saved = localStorage.getItem('dailyshot_imgY');
        return saved ? Number(saved) : 50;
    });
    const [imgRotate, setImgRotate] = useState(() => {
        const saved = localStorage.getItem('dailyshot_imgRotate');
        return saved ? Number(saved) : 0;
    });
    const [objectFit, setObjectFit] = useState<'cover' | 'contain' | 'fill' | 'none' | 'scale-down'>(() => {
        const saved = localStorage.getItem('dailyshot_objectFit');
        return (saved as 'cover' | 'contain' | 'fill' | 'none' | 'scale-down') || 'cover';
    });

    // Persist slider values to localStorage
    useEffect(() => { localStorage.setItem('dailyshot_imgScale', imgScale.toString()); }, [imgScale]);
    useEffect(() => { localStorage.setItem('dailyshot_imgX', imgX.toString()); }, [imgX]);
    useEffect(() => { localStorage.setItem('dailyshot_imgY', imgY.toString()); }, [imgY]);
    useEffect(() => { localStorage.setItem('dailyshot_imgRotate', imgRotate.toString()); }, [imgRotate]);
    useEffect(() => { localStorage.setItem('dailyshot_objectFit', objectFit); }, [objectFit]);

    return (
        <div data-brand="health" className="bg-gray-50 min-h-screen font-sans">



            {/* Hero Section */}
            <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-white">
                {/* Background Pattern Layer */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-20">
                    {/* LEFT: Text Content */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <AnimatedSection animation="fadeInLeft">
                            {/* Main Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-health-primary leading-[1.1] mb-6 font-poppins drop-shadow-sm">
                                {t('health.dailyshotNedir.heroTitle')}
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {t('health.dailyshotNedir.heroDesc')}
                            </p>

                            {/* CTA Button */}
                            <div className="flex justify-center lg:justify-start">
                                <InteractiveHeroButton
                                    text={t('health.dailyshotNedir.cta.button')}
                                    href="https://dailyshot.com.tr"
                                />
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* RIGHT: Image Area */}
                    <div className="relative flex items-center justify-center lg:justify-end w-full">
                        <AnimatedSection animation="fadeInUp" delay={200} className="relative w-full aspect-[16/9] lg:aspect-[2/1] overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-gray-50/50 backdrop-blur-sm">
                            <img
                                src="/images/dailyshot_full_range.png"
                                alt="Dailyshot Ürün Ailesi"
                                className="w-full h-full object-contain p-8"
                                style={{
                                    objectPosition: `${imgX}% ${imgY}%`,
                                    transform: `scale(${imgScale / 100}) rotate(${imgRotate}deg)`
                                }}
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            < section className="py-20 lg:py-28 relative z-20 -mt-0" >
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
            </section >

            {/* Why Liquid / Use Cases */}
            < section className="py-20 bg-white" >
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
            </section >

            {/* Product Family Grid */}
            < section className="py-20 lg:py-28 bg-gray-50" >
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
                                <DailyshotProductCard product={product} t={t} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section >

            {/* Target Audience / CTA */}
            < section className="py-24 bg-gray-900 text-white relative overflow-hidden" >
                {/* Molecular Pattern Background */}
                < div className="absolute inset-0 opacity-10" >
                    <img src="/images/dailyshot_molecule_bg.png" className="w-full h-full object-cover" alt="pattern" />
                </div >

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

                            <div className="flex justify-start">
                                <InteractiveHeroButton
                                    text={t('health.dailyshotNedir.cta.button')}
                                    href="https://dailyshot.com.tr"
                                    color="#751421"
                                />
                            </div>
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
            </section >

            {/* Image Editor Controls - Top Left Fixed */}
            <div className="fixed top-24 left-4 z-50 flex flex-col items-start gap-2">
                {!editorOpen && (
                    <Button
                        onClick={() => setEditorOpen(true)}
                        variant="outline"
                        size="icon"
                        className="bg-white/80 backdrop-blur shadow-lg hover:bg-white"
                    >
                        <Settings className="w-5 h-5 text-gray-700" />
                    </Button>
                )}

                {editorOpen && (
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-200 w-80 animate-in slide-in-from-left-2">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-900">Image Settings</h3>
                            <Button variant="ghost" size="sm" onClick={() => setEditorOpen(false)} className="h-6 w-6 p-0 rounded-full">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 flex justify-between">
                                    Scale <span>{imgScale}%</span>
                                </label>
                                <Slider
                                    value={[imgScale]}
                                    onValueChange={(v) => setImgScale(v[0])}
                                    min={50}
                                    max={200}
                                    step={1}
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 flex justify-between">
                                    Position X <span>{imgX}%</span>
                                </label>
                                <Slider
                                    value={[imgX]}
                                    onValueChange={(v) => setImgX(v[0])}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 flex justify-between">
                                    Position Y <span>{imgY}%</span>
                                </label>
                                <Slider
                                    value={[imgY]}
                                    onValueChange={(v) => setImgY(v[0])}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 flex justify-between">
                                    Rotation <span>{imgRotate}°</span>
                                </label>
                                <Slider
                                    value={[imgRotate]}
                                    onValueChange={(v) => setImgRotate(v[0])}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />
                            </div>
                            <div className="pt-2 text-xs text-center text-gray-400">
                                Values saved automatically
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DailyshotNedirPage;
