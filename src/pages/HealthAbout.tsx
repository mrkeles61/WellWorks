import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/shared/AnimatedSection';
import wellworksHealthHqImg from '@/assets/wellworks_health_hq.png';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const HealthAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero / Origin Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
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

        {/* Social Media Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <AnimatedSection animation="fadeInUp">
              <div className="flex flex-col items-center justify-center text-center space-y-8">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 relative inline-block">
                  {t('health.aboutUs.social.title')}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-50" />
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  {t('health.aboutUs.social.content')}
                </p>

                <div className="flex gap-8 mt-8 justify-center">
                  <a href="https://www.instagram.com/dailyshottr/" target="_blank" rel="noopener noreferrer"
                    className="group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Instagram className="w-8 h-8 text-gray-700 group-hover:text-white relative z-10 transition-colors duration-300" />
                  </a>

                  <a href="https://www.youtube.com/@Dailyshotturkiye" target="_blank" rel="noopener noreferrer"
                    className="group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Youtube className="w-8 h-8 text-gray-700 group-hover:text-white relative z-10 transition-colors duration-300" />
                  </a>

                  <a href="https://www.linkedin.com/company/well-works-health/" target="_blank" rel="noopener noreferrer"
                    className="group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Linkedin className="w-8 h-8 text-gray-700 group-hover:text-white relative z-10 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default HealthAbout;
