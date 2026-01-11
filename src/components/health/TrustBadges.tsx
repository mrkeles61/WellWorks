import { Shield, Leaf, Zap, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const badges = [
    { icon: Shield, labelTr: 'GMP Sertifikalı', labelEn: 'GMP Certified' },
    { icon: Award, labelTr: 'Helal Üretim', labelEn: 'Halal Certified' },
    { icon: Leaf, labelTr: '%100 Doğal', labelEn: '100% Natural' },
    { icon: Zap, labelTr: 'Hızlı Emilim', labelEn: 'Fast Absorption' },
];

const TrustBadges = () => {
    const { i18n } = useTranslation();
    const isTr = i18n.language === 'tr';

    return (
        <div className="py-8 border-y border-border/50 bg-card/50">
            <div className="container">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-muted-foreground hover:text-health-primary transition-colors"
                        >
                            <badge.icon className="w-6 h-6 text-health-primary" strokeWidth={1.5} />
                            <span className="text-sm font-medium">
                                {isTr ? badge.labelTr : badge.labelEn}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
