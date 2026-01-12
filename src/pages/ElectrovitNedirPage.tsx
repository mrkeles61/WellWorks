import { ArrowRight, Zap, Droplets, Heart, Activity, Dumbbell, Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ElectrovitNedirPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Anında Enerji',
            description: 'Elektrolitleri hızla yerine koyarak performansınızı artırır.',
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: 'Optimal Hidrasyon',
            description: 'Vücudunuzun su dengesini korur ve dehidrasyonu önler.',
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: 'Kas Fonksiyonu',
            description: 'Kasların düzgün çalışmasını destekler, krampları önler.',
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: 'Kalp Sağlığı',
            description: 'Sodyum-potasyum dengesi ile kalp ritmini destekler.',
        },
    ];

    const useCases = [
        {
            icon: <Dumbbell className="w-8 h-8" />,
            title: 'Antrenman Öncesi',
            description: 'Performansınızı artırmak için egzersizden 15-30 dakika önce için.',
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: 'Antrenman Sırasında',
            description: 'Uzun süreli aktivitelerde elektrolit kaybını önleyin.',
        },
        {
            icon: <Timer className="w-8 h-8" />,
            title: 'Antrenman Sonrası',
            description: 'Kaybedilen elektrolitleri hızla yerine koyun.',
        },
    ];

    const flavors = [
        {
            name: 'Karpuz',
            color: '#E91E63',
            gradient: 'from-pink-500 to-red-500',
            link: 'https://dailyshot.com.tr/urun/electrovit-karpuzlu-8-li',
        },
        {
            name: 'Portakal',
            color: '#FF9800',
            gradient: 'from-orange-400 to-orange-600',
            link: 'https://dailyshot.com.tr/urun/electrovit-portakal-aromali-8-li',
        },
    ];

    const targetAudience = [
        'Sporcular ve fitness tutkunları',
        'Yoğun tempolu iş hayatı yaşayanlar',
        'Açık havada çalışanlar',
        'Sıcak havalarda aktif olanlar',
        'Yüksek terleme oranına sahip kişiler',
        'Seyahat edenler',
    ];

    return (
        <div data-brand="health" className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#FF9800] to-orange-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection animation="fadeInUp">
                        <div className="max-w-3xl">
                            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4 block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                                Elektrolit Takviyesi
                            </span>
                            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                                Electrovit Nedir?
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                                Electrovit, aktif yaşam sürenler ve sporcular için özel olarak formüle edilmiş likit elektrolit takviyesidir.
                                Toz değil, hazır içilebilir formatta sunulur.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Neden Electrovit?
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 max-w-2xl mx-auto">
                            Elektrolitlerin Gücü
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow text-center">
                                    <div className="w-14 h-14 bg-[#FF9800]/10 rounded-2xl flex items-center justify-center text-[#FF9800] mb-6 mx-auto">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Use */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Kullanım Zamanı
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                            Ne Zaman Kullanmalı?
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {useCases.map((useCase, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                    <div className="w-16 h-16 bg-[#FF9800] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-600">{useCase.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flavors */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Aromalar
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                            İki Lezzetli Seçenek
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {flavors.map((flavor, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <a
                                    href={flavor.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block bg-gradient-to-br ${flavor.gradient} rounded-3xl p-10 text-white text-center hover:scale-105 transition-transform shadow-xl`}
                                >
                                    <div className="text-6xl mb-4">{flavor.name === 'Karpuz' ? '🍉' : '🍊'}</div>
                                    <h3 className="font-poppins font-bold text-3xl mb-2">{flavor.name}</h3>
                                    <p className="text-white/80 mb-4">Aromalı Electrovit</p>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold">
                                        Satın Al <ArrowRight className="w-4 h-4" />
                                    </span>
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
                            <span className="text-[#FF9800] text-sm font-semibold uppercase tracking-widest mb-4 block">
                                Kimler İçin?
                            </span>
                            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
                                Electrovit Sizin İçin mi?
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInUp" delay={100}>
                            <div className="grid md:grid-cols-2 gap-4">
                                {targetAudience.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-xl px-6 py-4">
                                        <div className="w-2 h-2 bg-[#FF9800] rounded-full" />
                                        <span className="text-gray-200">{item}</span>
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
                                    Electrovit'i Dene <ArrowRight className="w-5 h-5 ml-2" />
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
