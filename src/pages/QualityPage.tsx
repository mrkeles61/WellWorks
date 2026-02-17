import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Shield, Award, FlaskConical, HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';

const certs = [
    { key: 'iso9001', icon: Shield },
    { key: 'iso22000', icon: Shield },
    { key: 'gmp', icon: FlaskConical },
    { key: 'iso13485', icon: Shield },
    { key: 'halal', icon: Award },
];

const QualityPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const sections = [
        { titleKey: 'quality.techTitle', descKey: 'quality.techDesc', icon: FlaskConical },
        { titleKey: 'quality.certsTitle', descKey: 'quality.certsDesc', icon: Award },
        { titleKey: 'quality.safetyTitle', descKey: 'quality.safetyDesc', icon: Shield },
        { titleKey: 'quality.commitTitle', descKey: 'quality.commitDesc', icon: HeartHandshake },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <Award className="w-16 h-16 mx-auto mb-6 text-health-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                            {t('quality.pageTitle')}
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            {t('quality.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 px-4">
                <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <AnimatedSection key={section.titleKey}>
                                <div className={cn(
                                    'bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full',
                                    'hover:border-health-primary/40 transition-all duration-300'
                                )}>
                                    <Icon className="w-10 h-10 text-health-primary mb-4" />
                                    <h2 className="text-xl font-bold font-poppins mb-3">
                                        {t(section.titleKey)}
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed">
                                        {t(section.descKey)}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="py-16 px-4 bg-slate-800/30">
                <div className="container max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold font-poppins mb-8 text-center">
                            {t('quality.certsTitle')}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {certs.map((cert) => {
                                const Icon = cert.icon;
                                return (
                                    <div
                                        key={cert.key}
                                        className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center
                               hover:border-health-primary/40 transition-all duration-300"
                                    >
                                        <Icon className="w-8 h-8 mx-auto mb-3 text-health-primary" />
                                        <p className="text-sm font-semibold">{t(`quality.${cert.key}`)}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Cert Badges Image */}
            <section className="py-12 px-4">
                <div className="container max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <img
                            src="/icons/cert-badges.png"
                            alt="Quality Certifications"
                            className="mx-auto max-h-32 object-contain opacity-80"
                        />
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default QualityPage;
