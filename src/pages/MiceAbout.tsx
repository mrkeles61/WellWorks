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

            {/* Reach Us / Social Media Section */}
            <div className="bg-[#1A1C20] py-20 relative overflow-hidden border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-16 inline-block relative">
                            {t('mice.aboutUs.reachUs.title')}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#2DB34A] rounded-full" />
                        </h2>

                        <div className="flex justify-center">
                            <a
                                href="https://www.instagram.com/wellworksmice/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full max-w-sm bg-[#22252A] rounded-3xl p-8 border border-white/5 hover:border-[#2DB34A]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2DB34A]/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2DB34A]/0 to-[#2DB34A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="relative w-24 h-24 mb-6">
                                        <div className="w-full h-full rounded-full p-1 border-2 border-dashed border-[#2DB34A]/30 group-hover:border-[#2DB34A] transition-colors duration-300 overflow-hidden bg-white/5">
                                            <img
                                                src="/images/social/mice_insta.png"
                                                alt="WellWorks MICE Instagram"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 border-2 border-[#22252A] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-6 font-poppins">Instagram</h3>

                                    <div className="px-6 py-2 rounded-full bg-[#2DB34A]/10 text-[#2DB34A] font-semibold text-sm group-hover:bg-[#2DB34A] group-hover:text-white transition-all duration-300">
                                        Takip Et
                                    </div>
                                </div>
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
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
