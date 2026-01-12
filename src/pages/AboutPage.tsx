import { ArrowRight, Heart, Shield, Award, Leaf, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';

const AboutPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Sağlıklı Yaşam Ortağı',
            description: 'Kendimizi, hizmet ettiğimiz kişilerin "Sağlıklı Yaşam Ortakları" olarak görüyoruz.',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Kalite Güvencesi',
            description: 'Kalitesinden emin olmadığımız hiçbir ürünü sizlere sunmuyoruz.',
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Patentli Hammaddeler',
            description: 'Patentli ham madde kullanıyor ve helal kuralları çerçevesinde birleştiriyoruz.',
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Doğadan İlham',
            description: 'Doğanın bize sunduklarını gelecek kuşaklara taşıyoruz.',
        },
    ];

    const stats = [
        { value: '10+', label: 'Ürün Çeşidi' },
        { value: 'GMP', label: 'Sertifikalı Üretim' },
        { value: 'HELAL', label: 'Sertifikalı' },
        { value: '7/24', label: 'Destek Hattı' },
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
                                Dailyshot Hakkında
                            </span>
                            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                                Hakkımızda
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                                İnsanlara daha sağlıklı ve daha doğal bir yaşam sağlamak amacıyla yola çıktık.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection animation="fadeInUp">
                            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100">
                                <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                                    Misyonumuz
                                </span>
                                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-8">
                                    Sağlıklı Yaşam, Doğal Çözümler
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Doğadan aldığımız ilhamla tüketicilerimiz için sağlıklı çözümler sunmayı hedefliyor,
                                    doğanın bize sunduklarını gelecek kuşaklara taşıyor ve bu ilhamla yarattığımız besin
                                    takviyelerini ihtiyacı olanlarla buluşturuyoruz.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Kendimizi, hizmet ettiğimiz kişilerin "Sağlıklı Yaşam Ortakları" olarak görüyor ve bu
                                    sorumluluk bilinci ile çalışıyoruz. Duruşumuz ve hedefimizle sektöre bambaşka bir boyut
                                    kazandırdığımız inancındayız.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-health-primary/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-health-primary mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Policy Section */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Kalite Politikamız
                        </span>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 max-w-2xl mx-auto">
                            Sizin Sağlığınız, Bizim Önceliğimiz
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow">
                                    <div className="w-16 h-16 bg-health-primary/10 rounded-2xl flex items-center justify-center text-health-primary mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <AnimatedSection animation="fadeInUp">
                            <Users className="w-16 h-16 mx-auto mb-8 text-health-primary" />
                            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                                Ürünlerimizin Kalitesine Güveniyoruz
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Ürünlerimizde insan sağlığına zarar verecek ya da olumsuz etki edecek hiçbir bileşene
                                yer vermiyoruz. Her gün yenilenen teknoloji ile üretim prosesimizi geliştiriyor,
                                yenilikçi ve özgün ürünler üreterek sağlığınıza hediye ediyoruz.
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-health-primary hover:bg-health-primary/90 text-white font-bold rounded-full px-10"
                            >
                                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                    Ürünleri Keşfet <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
