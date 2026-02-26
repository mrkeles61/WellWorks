import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/hooks/useBrand';
import AnimatedSection from '@/components/shared/AnimatedSection';

const partners = [
    { name: 'Hyundai', logo: '/images/mice/partners/hyundai.png' },
    { name: 'Karaca', logo: '/images/mice/partners/karaca.png' },
    { name: 'La Roche-Posay', logo: '/images/mice/partners/laroche-posay.png' },
    { name: 'CeraVe', logo: '/images/mice/partners/cerave.png', logoClass: 'max-h-48' },
    { name: 'Starbucks', logo: '/images/mice/partners/starbucks.png' },
    { name: 'Vichy', logo: '/images/mice/partners/vichy.png' },
    { name: 'Urban Care', logo: '/images/mice/partners/urbancare.png', logoClass: 'max-h-48' },
    { name: 'Bridgestone', logo: '/images/mice/partners/bridgestone.png' },
    { name: 'Koç Healthcare', logo: '/images/mice/partners/koc-healthcare.png', logoClass: 'max-h-40' },
    { name: 'DenizBank', logo: '/images/mice/partners/denizbank.png' },
    { name: 'Biscolata', logo: '/images/mice/partners/biscolata.png' },
    { name: 'Mont Blanc', logo: '/images/mice/partners/montblanc.png' },
    { name: 'Yves Rocher', logo: '/images/mice/partners/yves-rocher.png', logoClass: 'max-h-48' },
    { name: 'Four Seasons', logo: '/images/mice/partners/four-seasons.png' },
    { name: 'Jo Malone London', logo: '/images/mice/partners/jo-malone.png' },
    { name: 'Hilton', logo: '/images/mice/partners/hilton.png' },
    { name: 'Bioderma', logo: '/images/mice/partners/bioderma.png' },
    { name: 'Milka', logo: '/images/mice/partners/milka.png' },
    { name: 'Bubilet', logo: '/images/mice/partners/bubilet.png' },
    { name: 'Power Türk', logo: '/images/mice/partners/powerturk.png' },
    { name: 'Akbank', logo: '/images/mice/partners/akbank.png' },
    { name: 'Hilltown İstanbul', logo: '/images/mice/partners/hilltown.png' },
    { name: 'Hilltown İzmir', logo: '/images/mice/partners/hilltown.png' },
    { name: 'Maltepe Park', logo: '/images/mice/partners/maltepe_park.png' },
    { name: 'Rönesans Holding', logo: '/images/mice/partners/ronesans.png' },
];

const MicePartners = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('mice');
    }, [setBrand]);

    return (
        <div data-brand="mice" className="bg-[#1A1C20] text-[#F7F4EF] min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 bg-[#0B3A5B] overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2DB34A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <span className="text-[#2DB34A] font-bold uppercase tracking-wider text-sm mb-4 block">
                            {t('mice.aboutUs.partners.pageTitle')}
                        </span>
                        <h1 className="font-oswald text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('mice.aboutUs.partners.heroTitle')}
                        </h1>
                        <p className="text-lg md:text-xl text-[#D8DEE6] max-w-2xl mx-auto opacity-80">
                            {t('mice.aboutUs.partners.heroSubtitle')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Partner Logos Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <AnimatedSection animation="fadeInUp">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                            {partners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-48 shadow-lg hover:shadow-xl hover:shadow-[#2DB34A]/10 hover:-translate-y-1 border-2 border-transparent hover:border-[#2DB34A]/40 transition-all duration-300"
                                >
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className={`${partner.logoClass || 'max-h-24'} max-w-full object-contain mb-3`}
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent && !parent.querySelector('span')) {
                                                const span = document.createElement('span');
                                                span.className = 'font-bold text-gray-700 text-lg text-center';
                                                span.textContent = partner.name;
                                                parent.insertBefore(span, target);
                                            }
                                        }}
                                    />
                                    <span className="text-gray-700 text-sm font-bold">{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default MicePartners;
