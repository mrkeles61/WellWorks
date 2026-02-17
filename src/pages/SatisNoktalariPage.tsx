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
        accentBg: 'rgba(242, 122, 26, 0.08)',
        accentBorder: 'rgba(242, 122, 26, 0.2)',
        icon: ShoppingBag,
        cta: 'Mağazaya Git',
    },
    {
        name: 'Dailyshot.com.tr',
        logo: '/logos/dailyshotlogo.png',
        url: 'https://www.dailyshot.com.tr/',
        descKey: 'salesPoints.dailyshotDesc',
        accent: '#00A3E0',
        accentBg: 'rgba(0, 163, 224, 0.08)',
        accentBorder: 'rgba(0, 163, 224, 0.2)',
        icon: Globe,
        cta: 'Siteye Git',
    },
    {
        name: 'Eczane Satış Noktaları',
        logo: '/logos/eczane.png',
        url: 'https://www.dailyshot.com.tr/sayfa/eczane-satis-noktalari',
        descKey: 'salesPoints.eczaneDesc',
        accent: '#4CAF50',
        accentBg: 'rgba(76, 175, 80, 0.08)',
        accentBorder: 'rgba(76, 175, 80, 0.2)',
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
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <section className="pt-32 pb-20 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <AnimatedSection>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-5">
                            {t('salesPoints.title')}
                        </h1>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto">
                            Ürünlerimizi satın alabileceğiniz online ve fiziksel mağazalarımız
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="pb-24 px-4">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {salesPoints.map((point) => {
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
                                            className="relative h-full rounded-2xl border p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white"
                                            style={{
                                                borderColor: '#e5e7eb',
                                            }}
                                        >
                                            {/* Logo Container */}
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 mb-6 group-hover:scale-110 transition-transform duration-300"
                                                style={{ backgroundColor: point.accentBg }}
                                            >
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
                                            <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">{point.name}</h3>

                                            {/* Description */}
                                            <p className="text-gray-500 text-sm mb-6 flex-1">{t(point.descKey)}</p>

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

        </div>
    );
};

export default SatisNoktalariPage;
