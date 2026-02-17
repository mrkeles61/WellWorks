import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Briefcase, Send, Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';
import emailjs from '@emailjs/browser';

// Same EmailJS config as contact page
const EMAILJS_SERVICE_ID = 'service_u7o0qbs';
const EMAILJS_TEMPLATE_ID = 'template_2c609lm';
const EMAILJS_PUBLIC_KEY = '0dp1lH8wFweRYDlq1';

const RATE_LIMIT_KEY = 'career_last_submit';
const RATE_LIMIT_MS = 60000;

const KariyerPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (honeypot) return;

        const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
        if (lastSubmit && Date.now() - parseInt(lastSubmit) < RATE_LIMIT_MS) {
            setErrorMessage('Lütfen 1 dakika bekleyin.');
            return;
        }

        if (!formData.fullName || !formData.email) {
            setErrorMessage('Lütfen gerekli alanları doldurun.');
            return;
        }

        setIsLoading(true);
        setErrorMessage('');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.fullName,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: `[KARİYER CV BAŞVURUSU]\n\n${formData.message}`,
                    to_email: 'pazarlama@wellworksturkey.com',
                },
                EMAILJS_PUBLIC_KEY
            );

            localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
            setIsSuccess(true);
            setFormData({ fullName: '', email: '', phone: '', message: '' });
        } catch {
            setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <Briefcase className="w-16 h-16 mx-auto mb-6 text-health-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                            {t('career.pageTitle')}
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            {t('career.heroDesc')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold font-poppins mb-6">
                            {t('career.openPositions')}
                        </h2>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
                            <Briefcase className="w-12 h-12 mx-auto mb-4 text-slate-500" />
                            <p className="text-lg font-medium text-slate-300 mb-2">
                                {t('career.noPositions')}
                            </p>
                            <p className="text-sm text-slate-400">
                                {t('career.noPositionsDesc')}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CV Form */}
            <section className="py-16 px-4 bg-slate-800/30">
                <div className="container max-w-2xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold font-poppins mb-3">
                            {t('career.sendCv')}
                        </h2>
                        <p className="text-slate-300 mb-8">
                            {t('career.sendCvDesc')}
                        </p>

                        {isSuccess ? (
                            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
                                <p className="text-lg font-medium text-green-300">
                                    {t('career.form.success')}
                                </p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                {/* Honeypot */}
                                <input
                                    type="text"
                                    name="_honey"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            {t('career.form.fullName')} *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                            placeholder={t('career.form.fullNamePlaceholder')}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-health-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            {t('career.form.email')} *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            placeholder={t('career.form.emailPlaceholder')}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-health-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                        {t('career.form.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                        placeholder={t('career.form.phonePlaceholder')}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-health-primary focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                        {t('career.form.message')}
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                        placeholder={t('career.form.messagePlaceholder')}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-health-primary focus:border-transparent transition-all resize-none"
                                    />
                                </div>

                                {errorMessage && (
                                    <p className="text-sm text-red-400">{errorMessage}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={cn(
                                        'w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300',
                                        'bg-health-primary hover:bg-health-primary-hover',
                                        isLoading && 'opacity-70 cursor-not-allowed'
                                    )}
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5" />
                                    )}
                                    {t('career.form.submit')}
                                </button>
                            </form>
                        )}
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default KariyerPage;
