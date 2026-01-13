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

      {/* Reach Us / Social Media Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              {t('health.aboutUs.reachUs.title')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16">
              {t('health.aboutUs.reachUs.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Instagram */}
              <a href="https://www.instagram.com/dailyshottr/" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img src="/images/social/dailyshot_insta.png" alt="DailyShot Instagram" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">@dailyshottr</h3>
                <p className="text-gray-500 text-sm font-medium mb-6">Instagram</p>
                <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">Takip Et</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/well-works-health/" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-blue-700/10 hover:-translate-y-1 transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img src="/images/social/wellworks_linkedin.png" alt="Well Works Health LinkedIn" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">@wellworks-health</h3>
                <p className="text-gray-500 text-sm font-medium mb-6">LinkedIn</p>
                <span className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm group-hover:bg-blue-700 group-hover:text-white transition-colors">Takip Et</span>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@Dailyshotturkiye" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img src="/images/social/dailyshot_youtube.png" alt="DailyShot YouTube" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">@Dailyshotturkiye</h3>
                <p className="text-gray-500 text-sm font-medium mb-6">YouTube</p>
                <span className="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full font-semibold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">Abone Ol</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default HealthAbout;
