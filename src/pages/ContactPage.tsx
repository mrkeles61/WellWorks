import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useBrand } from '@/context/BrandContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ContactPage = () => {
  const { t } = useTranslation();
  const { brand, setBrand } = useBrand();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    // Form submitted successfully - data would be sent to backend
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
    {
      icon: <Clock className="w-5 h-5" />,
      title: t('contact.hours.title'),
      content: t('contact.hours.content'),
    },
  ];

  const faqs = [
    {
      question: t('contact.faq.question1'),
      answer: t('contact.faq.answer1'),
    },
    {
      question: t('contact.faq.question2'),
      answer: t('contact.faq.answer2'),
    },
    {
      question: t('contact.faq.question3'),
      answer: t('contact.faq.answer3'),
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className={cn(
                    'flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg',
                    brand === 'health'
                      ? 'bg-health-primary text-white hover:bg-health-primary-hover'
                      : 'bg-mice-primary text-white hover:bg-mice-primary-hover'
                  )}
                >
                  <Send className="w-5 h-5" />
                  {t('contact.form.submit')}
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

            {/* Map Placeholder */}
            <div
              className={cn(
                'w-full h-[280px] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer border',
                brand === 'health' ? 'border-border' : 'border-gray-700'
              )}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/28.9817,41.0473,12,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold text-sm">{t('contact.map.view')}</span>
                </div>
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
