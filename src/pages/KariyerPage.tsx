import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useBrand } from '@/hooks/useBrand';
import {
    Briefcase, Send, Loader2, CheckCircle, Upload,
    Handshake, Users, Sparkles, FileText, X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_u7o0qbs';
const EMAILJS_TEMPLATE_ID = 'template_2c609lm';
const EMAILJS_PUBLIC_KEY = '0dp1lH8wFweRYDlq1';
const RATE_LIMIT_KEY = 'career_last_submit';
const RATE_LIMIT_MS = 60000;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const cultureValues = [
    {
        titleKey: 'career.value1Title',
        descKey: 'career.value1Desc',
        icon: Handshake,
    },
    {
        titleKey: 'career.value2Title',
        descKey: 'career.value2Desc',
        icon: Sparkles,
    },
    {
        titleKey: 'career.value3Title',
        descKey: 'career.value3Desc',
        icon: Users,
    },
];

const hiringSteps = [
    { titleKey: 'career.step1', descKey: 'career.step1Desc' },
    { titleKey: 'career.step2', descKey: 'career.step2Desc' },
    { titleKey: 'career.step3', descKey: 'career.step3Desc' },
    { titleKey: 'career.step4', descKey: 'career.step4Desc' },
];

const KariyerPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();
    const formRef = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const handleFileChange = useCallback((file: File | null) => {
        if (!file) return;
        if (file.type !== 'application/pdf') {
            setErrorMessage('Sadece PDF dosyaları kabul edilmektedir.');
            return;
        }
        if (file.size > MAX_FILE_SIZE) {
            setErrorMessage('Dosya boyutu 5MB\'dan küçük olmalıdır.');
            return;
        }
        setErrorMessage('');
        setCvFile(file);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files?.[0];
        handleFileChange(file);
    }, [handleFileChange]);

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
            const cvInfo = cvFile ? `\n\nEklenen CV: ${cvFile.name} (${(cvFile.size / 1024).toFixed(1)} KB)` : '\n\nCV eklenmedi.';

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.fullName,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: `[KARİYER BAŞVURUSU]\n\n${formData.message}${cvInfo}`,
                    to_email: 'pazarlama@wellworksturkey.com',
                },
                EMAILJS_PUBLIC_KEY
            );

            localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
            setIsSuccess(true);
            setFormData({ fullName: '', email: '', phone: '', message: '' });
            setCvFile(null);
        } catch {
            setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    const scrollToForm = () => {
        document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-health-primary/5 via-transparent to-transparent pointer-events-none" />

                <div className="container max-w-4xl mx-auto text-center relative">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4">
                            {t('career.pageTitle')}
                        </h1>
                        <div className="w-24 h-1.5 bg-health-primary mx-auto rounded-full mb-6" />
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            {t('career.heroDesc')}
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-health-primary hover:bg-health-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-health-primary/25"
                        >
                            <Send className="w-5 h-5" />
                            Başvur
                        </button>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════ CULTURE VALUES ═══════════ */}
            <section className="py-20 px-4 bg-slate-950/50">
                <div className="container max-w-5xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold font-poppins text-center mb-12">
                            Neden WellWorks?
                        </h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {cultureValues.map((value) => {
                            const Icon = value.icon;
                            return (
                                <AnimatedSection key={value.titleKey}>
                                    <div className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full text-center hover:border-health-primary/40 transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-14 h-14 rounded-2xl bg-health-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-health-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold font-poppins mb-3">
                                            {t(value.titleKey)}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {t(value.descKey)}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════ HIRING PROCESS TIMELINE ═══════════ */}
            <section className="py-20 px-4">
                <div className="container max-w-5xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold font-poppins text-center mb-16">
                            İşe Alım Sürecimiz
                        </h2>
                    </AnimatedSection>

                    {/* Desktop timeline */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Connecting line */}
                            <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-700" />
                            <div className="absolute top-8 left-0 h-0.5 bg-health-primary" style={{ width: '100%' }} />

                            <div className="grid grid-cols-4 gap-6 relative">
                                {hiringSteps.map((step, idx) => (
                                    <AnimatedSection key={step.titleKey}>
                                        <div className="flex flex-col items-center text-center">
                                            {/* Number badge */}
                                            <div className="w-16 h-16 rounded-full bg-health-primary flex items-center justify-center text-white font-bold text-xl mb-5 shadow-lg shadow-health-primary/30 relative z-10">
                                                {idx + 1}
                                            </div>
                                            <h3 className="font-bold font-poppins mb-2">{t(step.titleKey)}</h3>
                                            <p className="text-slate-400 text-sm">{t(step.descKey)}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile timeline */}
                    <div className="md:hidden space-y-6">
                        {hiringSteps.map((step, idx) => (
                            <AnimatedSection key={step.titleKey}>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-health-primary flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-health-primary/30">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-bold font-poppins mb-1">{t(step.titleKey)}</h3>
                                        <p className="text-slate-400 text-sm">{t(step.descKey)}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ OPEN POSITIONS ═══════════ */}
            <section className="py-20 px-4 bg-slate-950/50">
                <div className="container max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold font-poppins text-center mb-8">
                            {t('career.openPositions')}
                        </h2>
                        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center">
                            <Briefcase className="w-14 h-14 mx-auto mb-5 text-slate-500" />
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

            {/* ═══════════ CV FORM ═══════════ */}
            <section id="career-form" className="py-20 px-4">
                <div className="container max-w-2xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold font-poppins text-center mb-3">
                            {t('career.sendCv')}
                        </h2>
                        <p className="text-slate-400 text-center mb-10 max-w-lg mx-auto">
                            {t('career.sendCvDesc')}
                        </p>

                        {isSuccess ? (
                            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
                                <CheckCircle className="w-14 h-14 mx-auto mb-5 text-green-400" />
                                <p className="text-lg font-medium text-green-300 mb-2">
                                    {t('career.form.success')}
                                </p>
                                <p className="text-sm text-green-400/70">
                                    En kısa sürede size dönüş yapacağız.
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

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                        CV Yükle (PDF)
                                    </label>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                                        onDragLeave={() => setIsDragOver(false)}
                                        onDrop={handleDrop}
                                        className={cn(
                                            'relative flex flex-col items-center justify-center gap-3 p-8 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300',
                                            isDragOver
                                                ? 'border-health-primary bg-health-primary/10'
                                                : cvFile
                                                    ? 'border-green-500/50 bg-green-500/5'
                                                    : 'border-slate-600 bg-slate-800/50 hover:border-health-primary/50 hover:bg-slate-800'
                                        )}
                                    >
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf"
                                            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                                            className="hidden"
                                        />

                                        {cvFile ? (
                                            <>
                                                <FileText className="w-10 h-10 text-green-400" />
                                                <div className="text-center">
                                                    <p className="text-sm font-medium text-green-300">{cvFile.name}</p>
                                                    <p className="text-xs text-slate-400 mt-1">
                                                        {(cvFile.size / 1024).toFixed(1)} KB
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCvFile(null);
                                                        if (fileInputRef.current) fileInputRef.current.value = '';
                                                    }}
                                                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-700 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="w-10 h-10 text-slate-500" />
                                                <div className="text-center">
                                                    <p className="text-sm text-slate-300">
                                                        CV'nizi sürükleyip bırakın veya <span className="text-health-primary font-medium">dosya seçin</span>
                                                    </p>
                                                    <p className="text-xs text-slate-500 mt-1">
                                                        Yalnızca PDF, maksimum 5MB
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {errorMessage && (
                                    <p className="text-sm text-red-400">{errorMessage}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={cn(
                                        'w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300',
                                        'bg-health-primary hover:bg-health-primary/90 hover:shadow-lg hover:shadow-health-primary/25',
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
