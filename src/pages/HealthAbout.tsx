import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
                <motion.img
                  src={wellworksHealthHqImg}
                  alt="WellWorks Health"
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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

      {/* Reach Us / Social Media Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-16">
              {t('health.aboutUs.reachUs.title')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
              {/* Instagram */}
              <a href="https://www.instagram.com/dailyshottr/" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-5 border border-gray-100 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="/images/social/dailyshot_insta.png" alt="DailyShot Instagram" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 border-2 border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">Instagram</h3>
                <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-semibold text-sm group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 group-hover:text-white transition-colors">Takip Et</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/well-works-health/" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-5 border border-gray-100 hover:shadow-xl hover:shadow-[#0A4D80]/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="/images/social/wellworks_linkedin.png" alt="Well Works Health LinkedIn" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#0A4D80] border-2 border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">LinkedIn</h3>
                <span className="inline-block px-6 py-2 bg-[#0A4D80]/10 text-[#0A4D80] rounded-full font-semibold text-sm group-hover:bg-[#0A4D80] group-hover:text-white transition-colors">Takip Et</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/905360320838?text=Merhaba,%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-5 border border-gray-100 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img src={wellworksHealthHqImg} alt="Health WhatsApp" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">WhatsApp</h3>
                <span className="inline-block px-6 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-sm group-hover:bg-green-500 group-hover:text-white transition-colors">Mesaj Gönder</span>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/dailyshottr" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-5 border border-gray-100 hover:shadow-xl hover:shadow-gray-800/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Main Icon Circle - Using Black BG for X */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  {/* Small badge */}
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">X</h3>
                <span className="inline-block px-6 py-2 bg-gray-100 text-gray-800 rounded-full font-semibold text-sm group-hover:bg-black group-hover:text-white transition-colors">Takip Et</span>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@Dailyshotturkiye" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-5 border border-gray-100 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="/images/social/dailyshot_youtube.png" alt="DailyShot YouTube" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#FF0000] border-2 border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">YouTube</h3>
                <span className="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full font-semibold text-sm group-hover:bg-[#FF0000] group-hover:text-white transition-colors">Abone Ol</span>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@dailyshot.tr" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-3xl p-5 border border-gray-100 hover:shadow-xl hover:shadow-gray-800/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">TikTok</h3>
                <span className="inline-block px-6 py-2 bg-gray-100 text-gray-800 rounded-full font-semibold text-sm group-hover:bg-black group-hover:text-white transition-colors">Takip Et</span>
              </a>
              <h3 className="font-bold text-xl text-gray-900 mb-6 font-poppins">YouTube</h3>
              <span className="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full font-semibold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">Abone Ol</span>
            </a>
        </div>
      </AnimatedSection>
    </div>
      </div >

  {/* Quality Policy Section */ }
  < div className = "bg-gray-50 py-20 relative overflow-hidden" >
    {/* Decorative Background Element */ }
    < div className = "absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2" />

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
      </div >
    </div >
  );
};

export default HealthAbout;
