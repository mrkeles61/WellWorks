import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import wellworksMiceHqImg from '@/assets/wellworks_mice_hq.png';

const MiceAbout = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#1A1C20] text-[#F7F4EF]">
            {/* Hero / Origin Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 mb-10">
                <AnimatedSection animation="fadeInUp">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={wellworksMiceHqImg}
                                    alt="WellWorks MICE"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white relative inline-block">
                                {t('mice.aboutUs.origin.title')}
                                <div className="absolute -bottom-3 left-0 w-24 h-1 bg-[#2DB34A] rounded-full" />
                            </h1>
                            <p className="text-lg md:text-xl text-[#D8DEE6] leading-relaxed">
                                {t('mice.aboutUs.origin.content')}
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Quality Policy Section */}
            <div className="bg-[#16181b] py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2DB34A 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-8 inline-block relative">
                            {t('mice.aboutUs.qualityPolicy.title')}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#2DB34A] rounded-full" />
                        </h2>

                        <div className="bg-[#1A1C20] p-8 md:p-12 rounded-3xl shadow-xl border border-white/10">
                            <p className="text-lg md:text-xl text-[#D8DEE6] leading-relaxed font-medium">
                                "{t('mice.aboutUs.qualityPolicy.content')}"
                            </p>
                        </div>

                        <div className="mt-12">
                            <p className="text-xl text-[#2DB34A] font-serif italic">
                                {t('mice.aboutUs.closing')}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default MiceAbout;
