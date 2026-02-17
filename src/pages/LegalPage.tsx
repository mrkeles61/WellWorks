import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { useBrand } from '@/hooks/useBrand';
import { FileText, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

interface LegalSection {
  id: string;
  titleKey: string;
  contentKey: string;
}

const legalSections: Record<string, LegalSection[]> = {
  kvkk: [
    { id: 'veri-sorumlusu', titleKey: 'legal.kvkk.s1Title', contentKey: 'legal.kvkk.s1Content' },
    { id: 'verilerin-islenmesi', titleKey: 'legal.kvkk.s2Title', contentKey: 'legal.kvkk.s2Content' },
    { id: 'veri-aktarimi', titleKey: 'legal.kvkk.s3Title', contentKey: 'legal.kvkk.s3Content' },
    { id: 'haklariniz', titleKey: 'legal.kvkk.s4Title', contentKey: 'legal.kvkk.s4Content' },
    { id: 'iletisim', titleKey: 'legal.kvkk.s5Title', contentKey: 'legal.kvkk.s5Content' },
  ],
  cerezler: [
    { id: 'cerez-nedir', titleKey: 'legal.cookies.s1Title', contentKey: 'legal.cookies.s1Content' },
    { id: 'cerez-turleri', titleKey: 'legal.cookies.s2Title', contentKey: 'legal.cookies.s2Content' },
    { id: 'cerez-yonetimi', titleKey: 'legal.cookies.s3Title', contentKey: 'legal.cookies.s3Content' },
  ],
  kosullar: [
    { id: 'genel-kosullar', titleKey: 'legal.terms.s1Title', contentKey: 'legal.terms.s1Content' },
    { id: 'kullanim-sartlari', titleKey: 'legal.terms.s2Title', contentKey: 'legal.terms.s2Content' },
    { id: 'sorumluluk', titleKey: 'legal.terms.s3Title', contentKey: 'legal.terms.s3Content' },
  ],
};

const otherPages = [
  { type: 'kvkk', labelKey: 'footer.privacyPolicy', path: '/legal/kvkk' },
  { type: 'cerezler', labelKey: 'footer.cookies', path: '/legal/cerezler' },
  { type: 'kosullar', labelKey: 'footer.terms', path: '/legal/kosullar' },
];

const LegalPage = () => {
  const { t } = useTranslation();
  const { brand } = useBrand();
  const { type } = useParams<{ type: string }>();
  const [activeSection, setActiveSection] = useState<string>('');

  const accentColor = brand === 'mice' ? '#9333ea' : '#00A3E0';
  const accentBg = brand === 'mice' ? 'bg-mice-primary/10' : 'bg-[#00A3E0]/10';
  const accentText = brand === 'mice' ? 'text-mice-primary' : 'text-[#00A3E0]';
  const homePath = brand === 'mice' ? '/mice' : '/health';


  useEffect(() => {
    const sections = legalSections[type || ''] || [];
    if (sections.length > 0) setActiveSection(sections[0].id);
  }, [type]);

  const getTitleKey = () => {
    switch (type) {
      case 'kvkk': return 'legal.kvkk.title';
      case 'cerezler': return 'legal.cookies.title';
      case 'kosullar': return 'legal.terms.title';
      default: return 'legal.title';
    }
  };

  const getContentKey = () => {
    switch (type) {
      case 'kvkk': return 'legal.kvkk.content';
      case 'cerezler': return 'legal.cookies.content';
      case 'kosullar': return 'legal.terms.content';
      default: return 'legal.content';
    }
  };

  const sections = legalSections[type || ''] || [];
  const hasSections = sections.length > 0;

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-4 bg-white border-b border-gray-100">
        <div className="container max-w-5xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-gray-400">
            <Link to={homePath} className={`hover:${accentText} transition-colors`}>
              {t('nav.home')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-600 font-medium">{t(getTitleKey())}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-8 px-4 bg-white">
        <div className="container max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${accentBg} mb-5`}>
              <FileText className={`w-7 h-7 ${accentText}`} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-3">
              {t(getTitleKey())}
            </h1>
            <p className="text-gray-500 text-sm">
              {t('legal.lastUpdated')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4">
        <div className="container max-w-5xl mx-auto">
          {hasSections ? (
            <div className="grid lg:grid-cols-[240px_1fr] gap-8">
              {/* Sidebar TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {t('legal.toc')}
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === s.id
                          ? `${accentBg} ${accentText} font-medium`
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                      >
                        {idx + 1}. {t(s.titleKey)}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
                <div className="space-y-10">
                  {sections.map((s, idx) => (
                    <AnimatedSection key={s.id}>
                      <div id={s.id} className="scroll-mt-32">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-baseline gap-3">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${accentBg} ${accentText} text-sm font-bold flex-shrink-0`}>
                            {idx + 1}
                          </span>
                          {t(s.titleKey)}
                        </h2>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line pl-10">
                          {t(s.contentKey)}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Fallback: original simple layout */
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t(getContentKey())}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Legal Pages */}
      <section className="pb-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {otherPages
              .filter((p) => p.type !== type)
              .map((p) => (
                <Link
                  key={p.type}
                  to={p.path}
                  className={`px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-current hover:${accentText} transition-all hover:shadow-sm`}
                >
                  {t(p.labelKey)}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
