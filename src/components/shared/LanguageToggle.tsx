import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useBrand } from '@/context/BrandContext';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { brand } = useBrand();
  const currentLang = i18n.language;

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('wellworks-lang', lang);
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLanguage('tr')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          currentLang === 'tr'
            ? 'font-bold'
            : brand === 'health'
            ? 'text-muted-foreground hover:text-foreground'
            : 'text-muted-foreground hover:text-white'
        )}
        aria-label="Türkçe"
      >
        TR
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          currentLang === 'en'
            ? 'font-bold'
            : brand === 'health'
            ? 'text-muted-foreground hover:text-foreground'
            : 'text-muted-foreground hover:text-white'
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
