import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import AnimatedSection from '@/components/shared/AnimatedSection';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_f2y3p0i';
const EMAILJS_TEMPLATE_ID = 'template_vb2gzts';
const EMAILJS_PUBLIC_KEY = '8hR_14ZoUWEHPY5wp';

const ContactPage = () => {
  const { t } = useTranslation();
  const { brand, setBrand } = useBrand();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/mice')) setBrand('mice');
    else setBrand('health');
  }, [setBrand]);

  const accent = brand === 'mice' ? '#10b981' : '#00a5e0';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const honeypot = (formRef.current.querySelector('[name="website"]') as HTMLInputElement)?.value;
    if (honeypot) return;
    if (Date.now() - lastSubmit < 60000) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setIsSuccess(true);
      formRef.current.reset();
      setLastSubmit(Date.now());
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      // silent
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 'block w-full pl-4 rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:border-[var(--accent)] focus:ring-[var(--accent)] sm:text-sm py-3';

  return (
    <div className="bg-[#f8fafb] text-[#0c181d] antialiased min-h-screen flex flex-col" style={{ '--accent': accent } as React.CSSProperties}>
      {/* Hero Section — from Stitch */}
      <section className="relative py-20 px-4 text-center sm:py-24 lg:py-28 overflow-hidden"
        style={{ background: `linear-gradient(to bottom right, ${brand === 'mice' ? '#064e3b' : '#003366'}, ${accent})` }}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <AnimatedSection>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-blue-100 font-medium sm:text-xl max-w-2xl mx-auto mt-4">
              {t('contact.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        {/* Info Cards Grid — from Stitch */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
              <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center mb-5" style={{ color: accent }}>
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.address.title')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('contact.address.content')}
              </p>
            </div>
            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
              <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center mb-5" style={{ color: accent }}>
                <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.phone.title')}</h3>
              <div className="text-gray-500 text-sm space-y-1">
                <p className="hover:text-[var(--accent)] transition-colors cursor-pointer">{t('contact.phone.content')}</p>
                <p className="flex items-center justify-center gap-1.5 text-green-600 font-medium mt-2">
                  WhatsApp
                </p>
              </div>
            </div>
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
              <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center mb-5" style={{ color: accent }}>
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.email.title')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {t('contact.email.content')}
              </p>
              <a className="font-semibold hover:underline" style={{ color: accent }} href={`mailto:${t('contact.email.content')}`}>{t('contact.email.content')}</a>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Layout: Map & Form — from Stitch */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Map Section */}
            <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-md relative group">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Emniyetevler+Mahallesi+Kale+Sokak+2%2FA+Ka%C4%9F%C4%B1thane+%C4%B0stanbul&zoom=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title={t('contact.map.view')}
              />
            </div>

            {/* Contact Form Section — from Stitch */}
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 sm:p-10 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.formTitle')}</h2>
                <p className="text-gray-500">{t('contact.subtitle')}</p>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="full-name">{t('contact.form.fullName')}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <input className="block w-full pl-10 rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:border-[var(--accent)] focus:ring-[var(--accent)] sm:text-sm py-3" id="full-name" name="from_name" placeholder={t('contact.form.fullNamePlaceholder')} type="text" required />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">{t('contact.form.email')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </div>
                      <input className="block w-full pl-10 rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:border-[var(--accent)] focus:ring-[var(--accent)] sm:text-sm py-3" id="email" name="from_email" placeholder={t('contact.form.emailPlaceholder')} type="email" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">{t('contact.form.phone')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <input className="block w-full pl-10 rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:border-[var(--accent)] focus:ring-[var(--accent)] sm:text-sm py-3" id="phone" name="phone" placeholder={t('contact.form.phonePlaceholder')} type="tel" />
                    </div>
                  </div>
                </div>

                {/* Company & Subject Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="company">{t('contact.form.company')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">business</span>
                      </div>
                      <input className="block w-full pl-10 rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:border-[var(--accent)] focus:ring-[var(--accent)] sm:text-sm py-3" id="company" name="company" placeholder={t('contact.form.companyPlaceholder')} type="text" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subject">{t('contact.form.subject')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">topic</span>
                      </div>
                      <select className="block w-full pl-10 rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:border-[var(--accent)] focus:ring-[var(--accent)] sm:text-sm py-3" id="subject" name="subject">
                        <option disabled value="">{t('contact.form.subjectPlaceholder')}</option>
                        <option value="genel">{t('contact.form.subjectGeneral')}</option>
                        <option value="satis">{t('contact.form.subjectProduct')}</option>
                        <option value="isbirligi">{t('contact.form.subjectPartnership')}</option>
                        <option value="diger">{t('contact.form.subjectOther')}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">{t('contact.form.message')}</label>
                  <textarea className={`${inputClasses} !pl-4 resize-none`} id="message" name="message" placeholder={t('contact.form.messagePlaceholder')} rows={5} />
                </div>

                {/* Submit Button */}
                <button
                  className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white transition-all duration-200 transform active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: accent }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : t('contact.form.submit')}
                </button>

                {isSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium text-center">
                    ✓ {t('contact.successTitle')} {t('contact.successDesc')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>


    </div>
  );
};

export default ContactPage;
