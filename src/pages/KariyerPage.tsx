import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { Upload, X, FileText, Loader2, CheckCircle2 } from 'lucide-react';
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

    const inputClasses = 'w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#00a5e0] focus:border-transparent outline-none transition-all';

    return (
        <div className="bg-[#f5f8f8] text-slate-900 font-display antialiased overflow-x-hidden min-h-screen">
            {/* Section 1: Hero Banner — from Stitch */}
            <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#003366] text-white overflow-hidden py-32 lg:py-40">
                {/* Soft radial glow */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00a5e0]/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00a5e0]/6 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                            {t('career.heroTitle')}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-slate-200 max-w-2xl mx-auto">
                            {t('career.heroDesc')} <span className="font-semibold text-[#00a5e0]">{t('career.heroTitleAccent')}</span>
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Section 2: Introduction — from Stitch */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <div className="size-16 mx-auto mb-8 text-[#00a5e0] bg-[#00a5e0]/10 rounded-2xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-4xl">diversity_2</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            {t('career.introTitle')}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('career.introText')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Section 3: CTA & Image — from Stitch */}
            <section className="py-20 bg-[#f5f8f8]">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="space-y-8 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                {t('career.ctaTitle')} <br /><span className="text-[#00a5e0]">{t('career.heroTitleAccent')}</span>
                            </h2>
                            <p className="text-slate-600 text-lg">
                                {t('career.ctaText')}
                            </p>
                            <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#00a5e0] hover:bg-[#008ec0] text-white text-base font-bold transition-all shadow-lg shadow-[#00a5e0]/30 group" href="#basvuru-formu">
                                {t('career.ctaButton')}
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </AnimatedSection>
                    <div className="order-1 lg:order-2">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                            <img alt="Diverse team collaborating in a modern bright office environment" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu_UUrrt6QBPHfDAlpqkBoABh2sWb_Nitv3D4EZGI9ImkboKqeHFQtGGOyhzt712UBvhn1nReTJcLZFUjh9K2R5Rg_JRQmEMOSaM4UZg1vLYxtVnqKcVOtlGi-e311qdNJxZ2KlIAmi5de3fdD7w9Xg6Y2XVS_xeg1cHXtlLqIgj5h359wKEuWj6ZY81rgHWFXC62j5FIxPw6dMmCQfzyvt6u_TMpB3DmNKqh_QWnrCrpcxg1opmariJHrxFwGkriifN3rZTg6hAk" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Values (Zigzag) — from Stitch */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 space-y-24">
                    <AnimatedSection>
                        {/* Zigzag Block A: Image Left, Text Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                <img alt="Two colleagues shaking hands and smiling in a professional setting" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHitM2VN46irTEuODr-tmNOKa7XteB0KKg0YFwnf9IQAiuX_84nqZ1hcPSz4PR0ty8zF5qk-5jvlVIZDqolF1p7E1-BnA8jXhB7RVew7J8C9RBpC9sbFMlZpkQ1vQBgJXz21Ola5--TsszzHDtAyVzPpWWjTyI0U7UzUy2bAe0kTunQ2pm6GwIFj9DCPU4JP0y70bTQQtQowgIrhvgZEuqbmBWQ8eQzshEOog2roOWtAc7hJniu-u0pomxk5JD6xN3js0AW_DAd_o" />
                            </div>
                            <div className="space-y-6 lg:pl-10">
                                <div className="size-12 rounded-lg bg-[#00a5e0]/10 flex items-center justify-center text-[#00a5e0] mb-4">
                                    <span className="material-symbols-outlined text-2xl">handshake</span>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900">{t('career.value1Title')}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    {t('career.value1Desc')}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        {/* Zigzag Block B: Text Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 order-2 lg:order-1 lg:pr-10">
                                <div className="size-12 rounded-lg bg-[#00a5e0]/10 flex items-center justify-center text-[#00a5e0] mb-4">
                                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900">{t('career.value2Title')}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    {t('career.value2Desc')}
                                </p>
                            </div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
                                <img alt="Young professional presenting ideas on a whiteboard during a workshop" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDesgxWQW3Pyv2iKKITj1xTvkSz0qbYeS275q6k1nW9iTawOEVOLX1TL4EGeXH292aRiAKqx5_--TMjXZhaOx2ejFFikJfr9u-qJa0BxkU_S3mp7MHzX9u_jessSzMa2B5JpypeOCMaQ0149Rxz_IJwJvUggH1jtBm526VKKQDUYtf8u5m_ycFbO9_y-CgES4Exsk97Zdg13WkaV2c-WEg-AkxNVHkX4AYqIsZ6SeqtMaDTYUuZe0mFVscH6fuElC-lD-jsM49SeXQ" />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>





            {/* Section 7: Application Form — from Stitch */}
            <section className="py-24 bg-[#f5f8f8]" id="basvuru-formu">
                <div className="max-w-3xl mx-auto px-4">
                    <AnimatedSection>
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('career.formTitle')}</h2>
                                    <p className="text-slate-600">{t('career.formDesc')}</p>
                                </div>
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    {/* Honeypot */}
                                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="fullname">{t('career.form.fullName')}</label>
                                            <input className={inputClasses} id="fullname" name="from_name" placeholder={t('career.form.fullNamePlaceholder')} type="text" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="email">{t('career.form.email')}</label>
                                            <input className={inputClasses} id="email" name="from_email" placeholder={t('career.form.emailPlaceholder')} type="email" required />
                                        </div>
                                    </div>

                                    {/* Phone & Department */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="phone">{t('career.form.phone')}</label>
                                            <input className={inputClasses} id="phone" name="phone" placeholder={t('career.form.phonePlaceholder')} type="tel" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700" htmlFor="department">{t('career.form.area')}</label>
                                            <div className="relative">
                                                <select className={`${inputClasses} appearance-none`} id="department" name="area">
                                                    <option value="">{t('career.form.areaPlaceholder')}</option>
                                                    <option value="health">{t('career.form.areaHealth')}</option>
                                                    <option value="mice">{t('career.form.areaMice')}</option>
                                                    <option value="marketing">{t('career.form.areaMarketing')}</option>
                                                    <option value="other">{t('career.form.areaOther')}</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                                                    <span className="material-symbols-outlined">expand_more</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* File Upload — from Stitch */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">{t('career.form.cv')}</label>
                                        <div
                                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                            onDragLeave={() => setIsDragging(false)}
                                            onDrop={handleDrop}
                                            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer group ${isDragging ? 'border-[#00a5e0] bg-[#00a5e0]/5' : 'border-slate-300 hover:bg-slate-50'}`}
                                            onClick={() => document.getElementById('cv-file')?.click()}
                                        >
                                            <input id="cv-file" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
                                            {file ? (
                                                <div className="flex items-center justify-center gap-3">
                                                    <FileText className="w-5 h-5 text-[#00a5e0]" />
                                                    <span className="text-sm font-medium text-slate-700">{file.name}</span>
                                                    <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null); }} className="p-1 rounded-full hover:bg-gray-100">
                                                        <X className="w-4 h-4 text-gray-400" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-[#00a5e0] group-hover:scale-110 transition-transform">
                                                        <Upload className="w-5 h-5" />
                                                    </div>
                                                    <p className="text-sm font-medium text-slate-700">{t('career.form.cvDrag')}</p>
                                                    <p className="text-xs text-slate-500">PDF (Maks. 5MB)</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700" htmlFor="message">{t('career.form.message')}</label>
                                        <textarea className={`${inputClasses} resize-none`} id="message" name="message" placeholder={t('career.form.messagePlaceholder')} rows={4} />
                                    </div>

                                    {/* KVKK Checkbox — from Stitch */}
                                    <div className="flex items-start gap-3 pt-2">
                                        <div className="flex items-center h-5">
                                            <input className="w-4 h-4 rounded border-slate-300 text-[#00a5e0] focus:ring-[#00a5e0]" id="kvkk" type="checkbox" checked={kvkkAccepted} onChange={(e) => setKvkkAccepted(e.target.checked)} />
                                        </div>
                                        <label className="text-xs text-slate-500" htmlFor="kvkk">
                                            {t('career.form.kvkk')}
                                        </label>
                                    </div>

                                    {/* Submit Button — from Stitch */}
                                    <div className="pt-4">
                                        <button
                                            className="w-full py-4 px-6 rounded-xl bg-[#00a5e0] hover:bg-[#008ec0] text-white font-bold text-lg shadow-lg shadow-[#00a5e0]/30 hover:shadow-[#00a5e0]/50 transition-all transform active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            type="submit"
                                            disabled={isSubmitting || !kvkkAccepted}
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
                                    </div>

                                    {isSuccess && (
                                        <div className="p-4 bg-green-50 border border-green-200 text-green-600 rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            {t('career.form.success')}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default KariyerPage;
