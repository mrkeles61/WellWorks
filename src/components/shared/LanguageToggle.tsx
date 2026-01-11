import { useTranslation } from 'react-i18next';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const handleToggle = (checked: boolean) => {
    const lang = checked ? 'en' : 'tr';
    i18n.changeLanguage(lang);
    localStorage.setItem('wellworks-lang', lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Label
        htmlFor="language-toggle"
        className={`text-xs font-medium cursor-pointer transition-colors ${!isEnglish ? 'text-foreground' : 'text-muted-foreground'}`}
      >
        TR
      </Label>
      <Switch
        id="language-toggle"
        checked={isEnglish}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted"
      />
      <Label
        htmlFor="language-toggle"
        className={`text-xs font-medium cursor-pointer transition-colors ${isEnglish ? 'text-foreground' : 'text-muted-foreground'}`}
      >
        EN
      </Label>
    </div>
  );
};

export default LanguageToggle;
