import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import wellworksHealthHqImg from '@/assets/wellworks_health_hq.png';

const HealthAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero / Origin Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 mb-10">
        <AnimatedSection animation="fadeInUp">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={wellworksHealthHqImg}
                  alt="WellWorks Health"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  WellWorks Health
                </span>
              </div>

              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
                {t('health.aboutUs.origin.title')}
              </h1>

              <div className="prose prose-lg text-gray-600">
                <p className="whitespace-pre-wrap">
                  {t('health.aboutUs.origin.content')}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Quality Policy Section */}
      <div className="bg-gray-50 py-20 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-8 inline-block relative">
              {t('health.aboutUs.qualityPolicy.title')}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full" />
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                "{t('health.aboutUs.qualityPolicy.content')}"
              </p>
            </div>

            <div className="mt-12">
              <p className="text-xl text-blue-800 font-serif italic">
                {t('health.aboutUs.closing')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default HealthAbout;
