import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Heart, Lightbulb, Users, Briefcase, Upload, X, FileText, Loader2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    const [kvkkAccepted, setKvkkAccepted] = useState(false);

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const values = [
        { icon: Heart, titleKey: 'career.value1Title', descKey: 'career.value1Desc', accent: '#00A3E0' },
        { icon: Lightbulb, titleKey: 'career.value2Title', descKey: 'career.value2Desc', accent: '#f59e0b' },
    ];

    const stats = [
        { valueKey: 'career.stat1Value', labelKey: 'career.stat1Label' },
        { valueKey: 'career.stat2Value', labelKey: 'career.stat2Label' },
        { valueKey: 'career.stat3Value', labelKey: 'career.stat3Label' },
    ];

    const steps = [
        { num: 1, titleKey: 'career.step1', descKey: 'career.step1Desc', icon: '📋' },
        { num: 2, titleKey: 'career.step2', descKey: 'career.step2Desc', icon: '🤝' },
        { num: 3, titleKey: 'career.step3', descKey: 'career.step3Desc', icon: '🎯' },
        { num: 4, titleKey: 'career.step4', descKey: 'career.step4Desc', icon: '🏆' },
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
        if (!formRef.current || !kvkkAccepted) return;
        const honeypot = (formRef.current.querySelector('[name="website"]') as HTMLInputElement)?.value;
        if (honeypot) return;
        setIsSubmitting(true);
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
            setIsSuccess(true);
            formRef.current.reset();
            setFile(null);
            setKvkkAccepted(false);
            setTimeout(() => setIsSuccess(false), 4000);
        } catch {
            // silent
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* ═══════════════════════════════════════════
                SECTION 1: HERO BANNER
            ═══════════════════════════════════════════ */}
            <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 px-4 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0]/5 via-white to-[#00A3E0]/10" />
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#00A3E0]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#00A3E0]/8 rounded-full blur-2xl" />

                <div className="container max-w-5xl mx-auto text-center relative z-10">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00A3E0]/20 bg-[#00A3E0]/5 text-[#00A3E0] text-sm font-medium mb-6">
                            <Briefcase className="w-4 h-4" />
                            {t('career.pageTitle')}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-4 leading-tight">
                            {t('career.heroTitle')}<br />
                            <span className="text-[#00A3E0]">{t('career.heroTitleAccent')}</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
                            {t('career.heroDesc')}
                        </p>
                        <a
                            href="#application-form"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00A3E0] text-white rounded-full font-semibold hover:bg-[#0090c7] transition-all hover:shadow-lg hover:shadow-[#00A3E0]/25 hover:-translate-y-0.5"
                        >
                            {t('career.heroButton')}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 2: INTRO
            ═══════════════════════════════════════════ */}
            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-[#00A3E0]" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 mb-3">
                                    {t('career.introTitle')}
                                </h2>
                                <p className="text-gray-500 leading-relaxed">
                                    {t('career.introText')}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 3: CTA + VISUAL (side-by-side)
            ═══════════════════════════════════════════ */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Text side */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 mb-4">
                                    {t('career.ctaTitle')}
                                </h2>
                                <p className="text-gray-500 mb-6 leading-relaxed">
                                    {t('career.ctaText')}
                                </p>
                                <a
                                    href="#application-form"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3E0] text-white rounded-xl font-semibold hover:bg-[#0090c7] transition-all hover:shadow-lg"
                                >
                                    {t('career.ctaButton')}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                            {/* Visual side — geometric pattern */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#00A3E0] to-[#0077b6]">
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white/40 rounded-2xl rotate-12" />
                                    <div className="absolute bottom-12 right-12 w-32 h-32 border-2 border-white/30 rounded-full" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-xl rotate-45" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                        <p className="text-xl font-bold font-poppins">WellWorks Turkey</p>
                                        <p className="text-sm opacity-70 mt-1">{t('career.pageTitle')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 4: VALUES (zigzag layout)
            ═══════════════════════════════════════════ */}
            <section className="py-20 px-4">
                <div className="container max-w-5xl mx-auto space-y-20">
                    {values.map((v, idx) => {
                        const Icon = v.icon;
                        const isReversed = idx % 2 !== 0;
                        return (
                            <AnimatedSection key={v.titleKey}>
                                <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'direction-rtl' : ''}`}>
                                    {/* Visual Block */}
                                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${isReversed ? 'md:order-2' : ''}`}
                                        style={{ background: `linear-gradient(135deg, ${v.accent}15, ${v.accent}30)` }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-3xl flex items-center justify-center"
                                                style={{ backgroundColor: `${v.accent}20` }}>
                                                <Icon className="w-12 h-12" style={{ color: v.accent }} />
                                            </div>
                                        </div>
                                        {/* Decorative circles */}
                                        <div className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20"
                                            style={{ backgroundColor: v.accent }} />
                                        <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full opacity-15"
                                            style={{ backgroundColor: v.accent }} />
                                    </div>
                                    {/* Text Block */}
                                    <div className={isReversed ? 'md:order-1' : ''}>
                                        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 mb-4">
                                            {t(v.titleKey)}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-lg">
                                            {t(v.descKey)}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 5: STATS ("Ekibimiz, Gücümüz")
            ═══════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="container max-w-5xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-12">
                            {t('career.statsTitle')}
                        </h2>
                        <div className="grid grid-cols-3 gap-6 md:gap-12">
                            {stats.map((s) => (
                                <div key={s.labelKey} className="text-center">
                                    <p className="text-4xl md:text-5xl font-bold text-[#00A3E0] mb-2">
                                        {t(s.valueKey)}
                                    </p>
                                    <p className="text-sm md:text-base text-gray-400 font-medium">
                                        {t(s.labelKey)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 6: RECRUITMENT PROCESS (timeline)
            ═══════════════════════════════════════════ */}
            <section className="py-20 px-4">
                <div className="container max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 text-center mb-14">
                            {t('career.processTitle')}
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const isReversed = idx % 2 !== 0;
                            return (
                                <AnimatedSection key={step.num}>
                                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Step visual */}
                                        <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center text-3xl relative">
                                            {step.icon}
                                            <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#00A3E0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                {step.num}
                                            </div>
                                        </div>
                                        {/* Step text */}
                                        <div className={`flex-1 ${isReversed ? 'md:text-right' : ''}`}>
                                            <h3 className="text-lg font-bold font-poppins text-slate-900 mb-1">
                                                {t(step.titleKey)}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {t(step.descKey)}
                                            </p>
                                        </div>
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className="hidden md:flex justify-center my-4">
                                            <div className="w-px h-8 bg-gray-200" />
                                        </div>
                                    )}
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 7: APPLICATION FORM
            ═══════════════════════════════════════════ */}
            <section id="application-form" className="py-20 px-4 bg-gray-50">
                <div className="container max-w-2xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 text-center mb-2">
                            {t('career.formTitle')}
                        </h2>
                        <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
                            {t('career.formDesc')}
                        </p>

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

                            {/* Area of Interest */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('career.form.area')}</label>
                                <select
                                    name="area"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/40 focus:border-[#00A3E0] transition"
                                >
                                    <option value="">{t('career.form.areaPlaceholder')}</option>
                                    <option value="health">{t('career.form.areaHealth')}</option>
                                    <option value="mice">{t('career.form.areaMice')}</option>
                                    <option value="marketing">{t('career.form.areaMarketing')}</option>
                                    <option value="other">{t('career.form.areaOther')}</option>
                                </select>
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
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('career.form.cv')}</label>
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
                                            <p className="text-sm">{t('career.form.cvDrag')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* KVKK Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="kvkk"
                                    checked={kvkkAccepted}
                                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#00A3E0] focus:ring-[#00A3E0]/40"
                                />
                                <label htmlFor="kvkk" className="text-sm text-gray-500 cursor-pointer">
                                    {t('career.form.kvkk')}
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting || !kvkkAccepted}
                                className="w-full py-3.5 bg-[#00A3E0] text-white font-semibold rounded-xl hover:bg-[#0090c7] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        {t('career.form.submit')}
                                    </>
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
