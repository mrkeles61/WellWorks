import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace with your actual IDs
const EMAILJS_SERVICE_ID = 'service_wellworks';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // User needs to replace this

const ContactPage = () => {
  const { t } = useTranslation();
  const { brand, setBrand } = useBrand();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  // Determine brand from URL path
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/mice')) {
      setBrand('mice');
    } else {
      setBrand('health');
    }
  }, [setBrand]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'pazarlama@wellworksturkey.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t('contact.address.title'),
      content: t('contact.address.content'),
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: t('contact.phone.title'),
      content: t('contact.phone.content'),
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: t('contact.email.title'),
      content: t('contact.email.content'),
    },

  ];

  const faqKey = brand === 'mice' ? 'mice.faq' : 'contact.faq';
  const faqs = [
    {
      question: t(`${faqKey}.question1`),
      answer: t(`${faqKey}.answer1`),
    },
    {
      question: t(`${faqKey}.question2`),
      answer: t(`${faqKey}.answer2`),
    },
    {
      question: t(`${faqKey}.question3`),
      answer: t(`${faqKey}.answer3`),
    },
  ];

  return (
    <div
      className={cn(
        'min-h-screen pt-24 pb-16',
        brand === 'health' ? 'bg-background text-foreground' : 'bg-mice-bg text-mice-text'
      )}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h1
            className={cn(
              'text-4xl md:text-5xl font-black mb-4',
              brand === 'health' ? 'font-poppins text-health-primary' : 'font-oswald text-mice-primary'
            )}
          >
            {t('contact.title')}
          </h1>
          <p
            className={cn(
              'text-lg max-w-2xl mx-auto',
              brand === 'health' ? 'text-muted-foreground' : 'text-gray-400'
            )}
          >
            {t('contact.subtitle')}
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Contact Form */}
          <AnimatedSection animation="fadeInLeft" className="lg:col-span-7">
            <div
              className={cn(
                'p-6 sm:p-8 rounded-2xl shadow-lg border',
                brand === 'health'
                  ? 'bg-white border-border'
                  : 'bg-gray-800 border-gray-700'
              )}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col">
                    <span className="text-sm font-semibold mb-2">
                      {t('contact.form.fullName')}
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={cn(
                        'px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all',
                        brand === 'health'
                          ? 'bg-background border-border focus:ring-health-primary'
                          : 'bg-gray-900 border-gray-600 text-white focus:ring-mice-primary'
                      )}
                      placeholder={t('contact.form.fullNamePlaceholder')}
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm font-semibold mb-2">
                      {t('contact.form.email')}
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        'px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all',
                        brand === 'health'
                          ? 'bg-background border-border focus:ring-health-primary'
                          : 'bg-gray-900 border-gray-600 text-white focus:ring-mice-primary'
                      )}
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </label>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col">
                    <span className="text-sm font-semibold mb-2">
                      {t('contact.form.phone')}
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={cn(
                        'px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all',
                        brand === 'health'
                          ? 'bg-background border-border focus:ring-health-primary'
                          : 'bg-gray-900 border-gray-600 text-white focus:ring-mice-primary'
                      )}
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm font-semibold mb-2">
                      {t('contact.form.subject')}
                    </span>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={cn(
                        'px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all cursor-pointer',
                        brand === 'health'
                          ? 'bg-background border-border focus:ring-health-primary'
                          : 'bg-gray-900 border-gray-600 text-white focus:ring-mice-primary'
                      )}
                    >
                      <option value="general">{t('contact.form.subjectGeneral')}</option>
                      <option value="product">{t('contact.form.subjectProduct')}</option>
                      <option value="event">{t('contact.form.subjectEvent')}</option>
                      <option value="partnership">{t('contact.form.subjectPartnership')}</option>
                    </select>
                  </label>
                </div>

                {/* Message */}
                <label className="flex flex-col">
                  <span className="text-sm font-semibold mb-2">
                    {t('contact.form.message')}
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={cn(
                      'px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none',
                      brand === 'health'
                        ? 'bg-background border-border focus:ring-health-primary'
                        : 'bg-gray-900 border-gray-600 text-white focus:ring-mice-primary'
                    )}
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  />
                </label>

                {/* Error Message */}
                {errorMessage && (
                  <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Success Message */}
                {isSuccess && (
                  <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl text-sm flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Mesajınız başarıyla gönderildi!
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed',
                    brand === 'health'
                      ? 'bg-health-primary text-white hover:bg-health-primary-hover'
                      : 'bg-mice-primary text-white hover:bg-mice-primary-hover'
                  )}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info Sidebar */}
          <AnimatedSection animation="fadeInRight" delay={100} className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact Information Card */}
            <div
              className={cn(
                'p-6 sm:p-8 rounded-2xl shadow-lg border',
                brand === 'health'
                  ? 'bg-white border-border'
                  : 'bg-gray-800 border-gray-700'
              )}
            >
              <h3 className="text-xl font-bold mb-6">{t('contact.info.title')}</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={cn(
                        'p-2.5 rounded-full border',
                        brand === 'health'
                          ? 'bg-health-primary/10 text-health-primary border-health-primary/20'
                          : 'bg-mice-primary/10 text-mice-primary border-mice-primary/20'
                      )}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                      <p
                        className={cn(
                          'text-sm whitespace-pre-line',
                          brand === 'health' ? 'text-muted-foreground' : 'text-gray-400'
                        )}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </AnimatedSection>
        </div>

        {/* FAQ Section */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
            {t('contact.faq.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  'p-6 rounded-2xl border shadow-lg transition-all hover:shadow-xl',
                  brand === 'health'
                    ? 'bg-white border-border hover:border-health-primary/50'
                    : 'bg-gray-800 border-gray-700 hover:border-mice-primary/50'
                )}
              >
                <h4 className="font-bold text-base mb-3">{faq.question}</h4>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    brand === 'health' ? 'text-muted-foreground' : 'text-gray-400'
                  )}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
