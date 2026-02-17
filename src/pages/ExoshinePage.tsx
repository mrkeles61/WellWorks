import { useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ExoshinePage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div className="bg-[#f5f8f8] text-slate-900 antialiased min-h-screen flex flex-col">
            {/* Hero */}
            <section className="relative flex-1 flex items-center justify-center py-40 px-4 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0a1628 0%, #003366 50%, #00a5e0 100%)' }}
            >
                {/* Soft glow */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00a5e0]/10 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
                            <span className="material-symbols-outlined text-[#00a5e0]">auto_awesome</span>
                            <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">Exoshine</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-6">
                            Exo<span className="text-[#00a5e0]">shine</span>
                        </h1>

                        <p className="text-2xl md:text-3xl font-light text-white/70 mb-12">
                            {t('exoshine.comingSoon', 'Çok Yakında')}
                        </p>

                        <div className="flex items-center justify-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#00a5e0] animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-[#00a5e0] animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <div className="w-2 h-2 rounded-full bg-[#00a5e0] animate-pulse" style={{ animationDelay: '0.6s' }} />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ExoshinePage;
