import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { ExternalLink, MapPin, ShoppingBag, Globe } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const salesPoints = [
    {
        name: 'Trendyol',
        logo: '/logos/trendyol.png',
        url: 'https://www.trendyol.com/magaza/dailyshot-m-763181?channelId=1&sst=0&sk=1',
        descKey: 'salesPoints.trendyolDesc',
        accent: '#F27A1A',
        accentBg: 'rgba(242, 122, 26, 0.1)',
        accentBorder: 'rgba(242, 122, 26, 0.3)',
        icon: ShoppingBag,
        cta: 'Mağazaya Git',
    },
    {
        name: 'Dailyshot.com.tr',
        logo: '/logos/dailyshotlogo.png',
        url: 'https://www.dailyshot.com.tr/',
        descKey: 'salesPoints.dailyshotDesc',
        accent: '#00A3E0',
        accentBg: 'rgba(0, 163, 224, 0.1)',
        accentBorder: 'rgba(0, 163, 224, 0.3)',
        icon: Globe,
        cta: 'Siteye Git',
    },
    {
        name: 'Eczane Satış Noktaları',
        logo: '/logos/eczane.png',
        url: 'https://www.dailyshot.com.tr/sayfa/eczane-satis-noktalari',
        descKey: 'salesPoints.eczaneDesc',
        accent: '#4CAF50',
        accentBg: 'rgba(76, 175, 80, 0.1)',
        accentBorder: 'rgba(76, 175, 80, 0.3)',
        icon: MapPin,
        cta: 'Noktaları Gör',
    },
];

const SatisNoktalariPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero */}
            <section className="pt-32 pb-20 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-health-primary/30 bg-health-primary/10 text-health-primary text-sm font-medium mb-6">
                            <ShoppingBag className="w-4 h-4" />
                            {t('nav.salesPoints')}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-5">
                            {t('salesPoints.title')}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-xl mx-auto">
                            Ürünlerimizi satın alabileceğiniz online ve fiziksel mağazalarımız
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="pb-24 px-4">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {salesPoints.map((point, idx) => {
                            const Icon = point.icon;
                            return (
                                <AnimatedSection key={point.name}>
                                    <a
                                        href={point.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block h-full"
                                    >
                                        <div
                                            className="relative h-full rounded-2xl border p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 bg-slate-800/40 backdrop-blur-sm"
                                            style={{
                                                borderColor: point.accentBorder,
                                            }}
                                        >
                                            {/* Glow effect on hover */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                                style={{
                                                    boxShadow: `0 0 60px ${point.accentBg}, 0 0 120px ${point.accentBg}`,
                                                }}
                                            />

                                            {/* Logo Container */}
                                            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <img
                                                    src={point.logo}
                                                    alt={point.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Icon Badge */}
                                            <div
                                                className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4"
                                                style={{ backgroundColor: point.accentBg }}
                                            >
                                                <Icon className="w-5 h-5" style={{ color: point.accent }} />
                                            </div>

                                            {/* Name */}
                                            <h3 className="text-xl font-bold font-poppins mb-2">{point.name}</h3>

                                            {/* Description */}
                                            <p className="text-slate-400 text-sm mb-6 flex-1">{t(point.descKey)}</p>

                                            {/* CTA Button */}
                                            <div
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white text-sm transition-all duration-300 group-hover:gap-3"
                                                style={{ backgroundColor: point.accent }}
                                            >
                                                {point.cta}
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </a>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom Info */}
            <section className="pb-16 px-4">
                <div className="container max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
                            <p className="text-slate-400 text-sm">
                                Ürünlerimiz hakkında detaylı bilgi almak veya toptan sipariş vermek için{' '}
                                <a href="mailto:pazarlama@wellworksturkey.com" className="text-health-primary hover:underline">
                                    pazarlama@wellworksturkey.com
                                </a>
                                {' '}adresinden bize ulaşabilirsiniz.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default SatisNoktalariPage;
