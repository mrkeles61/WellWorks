import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Heart, Lightbulb, Users, Briefcase, Upload, X, FileText, Loader2 } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_f2y3p0i';
const EMAILJS_TEMPLATE_ID = 'template_pplhxbq';
const EMAILJS_PUBLIC_KEY = '8hR_14ZoUWEHPY5wp';

const KariyerPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();
    const formRef = useRef<HTMLFormElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const values = [
        { icon: Heart, titleKey: 'career.value1Title', descKey: 'career.value1Desc', accent: '#ef4444' },
        { icon: Lightbulb, titleKey: 'career.value2Title', descKey: 'career.value2Desc', accent: '#f59e0b' },
        { icon: Users, titleKey: 'career.value3Title', descKey: 'career.value3Desc', accent: '#00A3E0' },
    ];

    const steps = [
        { num: 1, titleKey: 'career.step1', descKey: 'career.step1Desc' },
        { num: 2, titleKey: 'career.step2', descKey: 'career.step2Desc' },
        { num: 3, titleKey: 'career.step3', descKey: 'career.step3Desc' },
        { num: 4, titleKey: 'career.step4', descKey: 'career.step4Desc' },
    ];

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const f = e.dataTransfer.files[0];
        if (f?.type === 'application/pdf' && f.size <= 5 * 1024 * 1024) setFile(f);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f?.type === 'application/pdf' && f.size <= 5 * 1024 * 1024) setFile(f);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        const honeypot = (formRef.current.querySelector('[name="website"]') as HTMLInputElement)?.value;
        if (honeypot) return;
        setIsSubmitting(true);
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
            setIsSuccess(true);
            formRef.current.reset();
            setFile(null);
            setTimeout(() => setIsSuccess(false), 4000);
        } catch {
            // silent
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <section className="pt-32 pb-20 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00A3E0]/20 bg-[#00A3E0]/5 text-[#00A3E0] text-sm font-medium mb-6">
                            <Briefcase className="w-4 h-4" />
                            {t('career.pageTitle')}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-5">
                            {t('career.pageTitle')}
                        </h1>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
                            {t('career.heroDesc')}
                        </p>
                        <a
                            href="#cv-form"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#00A3E0] text-white rounded-full font-semibold hover:bg-[#0090c7] transition-colors"
                        >
                            {t('career.sendCv')}
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* Culture Values */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container max-w-5xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 text-center mb-12">
                            Kültür & Değerlerimiz
                        </h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v) => {
                            const Icon = v.icon;
                            return (
                                <AnimatedSection key={v.titleKey}>
                                    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center h-full hover:shadow-lg hover:border-transparent transition-all duration-300">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                                            style={{ backgroundColor: `${v.accent}10` }}
                                        >
                                            <Icon className="w-7 h-7" style={{ color: v.accent }} />
                                        </div>
                                        <h3 className="text-lg font-bold font-poppins text-slate-900 mb-3">{t(v.titleKey)}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t(v.descKey)}</p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Hiring Timeline */}
            <section className="py-20 px-4">
                <div className="container max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 text-center mb-12">
                            İşe Alım Sürecimiz
                        </h2>
                    </AnimatedSection>

                    {/* Desktop Timeline */}
                    <div className="hidden md:flex items-start justify-between relative">
                        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
                        {steps.map((step) => (
                            <AnimatedSection key={step.num}>
                                <div className="relative flex flex-col items-center text-center w-40">
                                    <div className="w-12 h-12 rounded-full bg-[#00A3E0] text-white flex items-center justify-center font-bold text-lg relative z-10">
                                        {step.num}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mt-4 mb-1 text-sm">{t(step.titleKey)}</h3>
                                    <p className="text-gray-500 text-xs">{t(step.descKey)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-6">
                        {steps.map((step) => (
                            <AnimatedSection key={step.num}>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#00A3E0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{t(step.titleKey)}</h3>
                                        <p className="text-gray-500 text-sm">{t(step.descKey)}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold font-poppins text-slate-900 mb-6">{t('career.openPositions')}</h2>
                        <div className="bg-white border border-gray-200 rounded-2xl p-10">
                            <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p className="text-gray-500 font-medium mb-1">{t('career.noPositions')}</p>
                            <p className="text-gray-400 text-sm">{t('career.noPositionsDesc')}</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CV Form */}
            <section id="cv-form" className="py-20 px-4">
                <div className="container max-w-2xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold font-poppins text-slate-900 text-center mb-3">{t('career.sendCv')}</h2>
                        <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">{t('career.sendCvDesc')}</p>

                        <form ref={formRef} onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-5">
                            {/* Honeypot */}
                            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('career.form.fullName')}</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder={t('career.form.fullNamePlaceholder')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/40 focus:border-[#00A3E0] transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('career.form.email')}</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder={t('career.form.emailPlaceholder')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/40 focus:border-[#00A3E0] transition"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('career.form.phone')}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t('career.form.phonePlaceholder')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/40 focus:border-[#00A3E0] transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('career.form.message')}</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder={t('career.form.messagePlaceholder')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/40 focus:border-[#00A3E0] transition resize-none"
                                />
                            </div>

                            {/* File Upload */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">CV (PDF, max 5MB)</label>
                                <div
                                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                    onDragLeave={() => setIsDragging(false)}
                                    onDrop={handleDrop}
                                    className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${isDragging ? 'border-[#00A3E0] bg-[#00A3E0]/5' : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                    onClick={() => document.getElementById('cv-file')?.click()}
                                >
                                    <input
                                        id="cv-file"
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    {file ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <FileText className="w-5 h-5 text-[#00A3E0]" />
                                            <span className="text-sm text-slate-700">{file.name}</span>
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                                className="p-1 rounded-full hover:bg-gray-100"
                                            >
                                                <X className="w-4 h-4 text-gray-400" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-gray-400">
                                            <Upload className="w-8 h-8 mx-auto mb-2" />
                                            <p className="text-sm">PDF dosyanızı sürükleyin veya tıklayın</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 bg-[#00A3E0] text-white font-semibold rounded-xl hover:bg-[#0090c7] disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    t('career.form.submit')
                                )}
                            </button>

                            {isSuccess && (
                                <p className="text-center text-green-600 font-medium text-sm">
                                    ✓ {t('career.form.success')}
                                </p>
                            )}
                        </form>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default KariyerPage;
