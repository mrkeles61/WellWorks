import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wellworks-cookie-consent');
    if (!consent) {
      // Delay showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('wellworks-cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('wellworks-cookie-consent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50',
        'bg-white border-t border-gray-200',
        'p-4 md:p-6 shadow-lg',
        'animate-slide-up'
      )}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            🍪 {t('cookie.message')}{' '}
            <Link to="/legal/cerezler" className="text-health-primary underline hover:no-underline">
              {t('cookie.policy')}
            </Link>{' '}
            ve{' '}
            <Link to="/legal/kvkk" className="text-health-primary underline hover:no-underline">
              {t('cookie.privacy')}
            </Link>{' '}
            kabul etmiş olursunuz.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={acceptNecessary}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t('cookie.acceptNecessary')}
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-health-primary text-white rounded-lg hover:bg-health-primary-hover transition-colors"
          >
            {t('cookie.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
