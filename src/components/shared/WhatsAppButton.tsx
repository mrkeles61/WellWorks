import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  
  return (
    <a
      href="https://wa.me/905360320838?text=Merhaba,%20bilgi%20almak%20istiyorum"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {t('whatsapp.tooltip')}
      </span>
    </a>
  );
};

export default WhatsAppButton;
