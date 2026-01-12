import { ArrowRight, Zap, Shield, Droplets, Beaker, Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';

const DailyshotNedirPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Hızlı Emilim',
            description: 'Likit form sayesinde dakikalar içinde kana karışır.',
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: '%90 Biyoyararlanım',
            description: 'Geleneksel hapların aksine vücudunuz daha fazla fayda alır.',
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: 'Kolay Kullanım',
            description: 'Su gerektirmez, dilediğiniz yerde kolayca içebilirsiniz.',
        },
        {
            icon: <Beaker className="w-6 h-6" />,
            title: 'Bilimsel Formülasyon',
            description: 'Patentli hammaddelerle desteklenmiş etkili formüller.',
        },
    ];

    const productCategories = [
        { name: 'Hangovershot', desc: 'Akşamdan kalma belirtileri için', color: '#9C27B0' },
        { name: 'Energyshot', desc: 'Enerji ve performans desteği', color: '#FF5722' },
        { name: 'Defenseshot', desc: 'Bağışıklık sistemi desteği', color: '#4CAF50' },
        { name: 'Relaxshot', desc: 'Rahatlama ve uyku kalitesi', color: '#2196F3' },
        { name: 'Detoxshot', desc: 'Kilo kontrol desteği', color: '#00BCD4' },
        { name: 'Libidoshot', desc: 'Cinsel sağlık desteği', color: '#E91E63' },
    ];

    const comparison = [
        { feature: 'Emilim Hızı', liquid: 'Dakikalar içinde', pill: '30-60 dakika' },
        { feature: 'Biyoyararlanım', liquid: '%90\'a kadar', pill: '%10-20' },
        { feature: 'Sindirim Gereksinimi', liquid: 'Hayır', pill: 'Evet' },
        { feature: 'Su İhtiyacı', liquid: 'Hayır', pill: 'Evet' },
        { feature: 'Etki Süresi', liquid: 'Hızlı', pill: 'Yavaş' },
    ];

    return (
        <div data-brand="health" className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-health-primary to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection animation="fadeInUp">
                        <div className="max-w-3xl">
                            <span className="text-health-primary/80 text-sm font-semibold uppercase tracking-widest mb-4 block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                                Likit Takviye Devrimi
                            </span>
                            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                                Dailyshot Nedir?
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                                Dailyshot, içerisinde likit formda ürünler bulunduran bitkisel bir gıda takviyesi markasıdır.
                                Likit yapısı sayesinde kana hızlıca karışır ve etkinin hızlı gözlemlenmesine olanak sağlar.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* What Makes It Different */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Neden Likit?
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 max-w-2xl mx-auto">
                            Likit Formun Avantajları
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow text-center">
                                    <div className="w-14 h-14 bg-health-primary/10 rounded-2xl flex items-center justify-center text-health-primary mb-6 mx-auto">
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

            {/* Comparison Table */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-12">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Karşılaştırma
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
                            Likit vs. Hap & Kapsül
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={100}>
                        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-3 bg-gray-900 text-white font-bold">
                                <div className="p-4 text-center">Özellik</div>
                                <div className="p-4 text-center bg-health-primary">Likit (Dailyshot)</div>
                                <div className="p-4 text-center">Hap & Kapsül</div>
                            </div>
                            {comparison.map((row, index) => (
                                <div key={index} className="grid grid-cols-3 border-b border-gray-100 last:border-0">
                                    <div className="p-4 font-medium text-gray-700">{row.feature}</div>
                                    <div className="p-4 text-center bg-health-primary/5 font-semibold text-health-primary flex items-center justify-center gap-2">
                                        <Check className="w-4 h-4" /> {row.liquid}
                                    </div>
                                    <div className="p-4 text-center text-gray-500 flex items-center justify-center gap-2">
                                        <X className="w-4 h-4 text-red-400" /> {row.pill}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Ürün Ailemiz
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 max-w-2xl mx-auto">
                            Her İhtiyaca Özel Formülasyon
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productCategories.map((category, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 80}>
                                <a
                                    href={`https://dailyshot.com.tr/arama/${category.name.toLowerCase()}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-lg"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        {category.name.charAt(0)}
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2 group-hover:text-health-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600">{category.desc}</p>
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-health-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                            Likit Takviye Devrimine Katılın
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                            Dailyshot ürünlerini resmi online mağazamızdan güvenle satın alabilirsiniz.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-health-primary hover:bg-gray-100 font-bold rounded-full px-10"
                        >
                            <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                Mağazaya Git <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default DailyshotNedirPage;
