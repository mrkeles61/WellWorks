import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { useBrand } from '@/context/BrandContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { t } = useTranslation();
  const { brand } = useBrand();
  const location = useLocation();

  // Don't show footer on gateway
  if (location.pathname === '/') return null;

  const brandColor = brand === 'health' ? 'text-health-primary' : 'text-mice-primary';
  const brandHover = brand === 'health' ? 'hover:text-health-primary' : 'hover:text-mice-primary';

  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 border-t border-gray-200">
      <div className="container">
        {/* Main Footer Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1: Kurumsal / Navigation */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer.corporate')}</h4>
            <ul className="space-y-2 text-sm">
              {brand === 'health' ? (
                <>
                  <li>
                    <Link to="/health" className={cn('transition-colors', brandHover)}>
                      {t('nav.home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/health/hakkimizda" className={cn('transition-colors', brandHover)}>
                      {t('health.aboutUs.pageTitle')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/dailyshot-nedir" className={cn('transition-colors', brandHover)}>
                      Dailyshot Nedir?
                    </Link>
                  </li>
                  <li>
                    <Link to="/health/iletisim" className={cn('transition-colors', brandHover)}>
                      {t('footer.contactLink')}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/mice" className={cn('transition-colors', brandHover)}>
                      {t('nav.home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/mice/hakkimizda" className={cn('transition-colors', brandHover)}>
                      {t('mice.aboutUs.pageTitle')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/mice/isler-gucler" className={cn('transition-colors', brandHover)}>
                      {t('nav.events')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/mice/iletisim" className={cn('transition-colors', brandHover)}>
                      {t('footer.contactLink')}
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/legal/kvkk" className={cn('transition-colors', brandHover)}>
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Sosyal Medya */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer.socialMedia')}</h4>
            <ul className="space-y-3 text-sm">
              {brand === 'health' ? (
                <>
                  <li>
                    <a
                      href="https://www.instagram.com/dailyshottr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#E1306C] transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#E1306C]" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@Dailyshotturkiye"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#FF0000] transition-colors"
                    >
                      <Youtube className="w-5 h-5 text-[#FF0000]" />
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/well-works-health/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                      Well Works Health
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a
                      href="https://www.instagram.com/wellworksmice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#E1306C] transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#E1306C]" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/905360320838?text=Merhaba,%20bilgi%20almak%20istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                    >
                      {/* Using Phone icon for WhatsApp representatively if no custom icon, or I can import FaWhatsapp if available. 
                          The file imports lucide icons. I'll use MessageCircle or keep it simple. 
                          Wait, GatewayPage used FaWhatsapp from react-icons/fa. I should check if I can use that here. 
                          Footer.tsx currently imports lucide-react icons. 
                          I'll stick to Lucide 'MessageCircle' or 'Phone' for consistency unless I add the import. 
                          To be safe/consistent with existing imports, I'll use Phone or similar, OR add the import. 
                          Let's add FaWhatsapp import to be explicit since user asked for "properly routed like in the icons...".
                       */}
                      <Phone className="w-5 h-5 text-[#25D366]" />
                      WhatsApp
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Adres & İletişim */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer.addressContact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className={cn('w-4 h-4 mt-0.5 flex-shrink-0', brandColor)} />
                <span>Emniyetevler Mahallesi Kale Sokak 2/A Kağıthane/İSTANBUL</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className={cn('w-4 h-4 flex-shrink-0', brandColor)} />
                <a href="tel:+905360320838" className={cn('transition-colors', brandHover)}>
                  +90 536 032 08 38
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className={cn('w-4 h-4 flex-shrink-0', brandColor)} />
                <a href="mailto:info@wellworksturkey.com" className={cn('transition-colors', brandHover)}>
                  info@wellworksturkey.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-300 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Well Works Turkey. {t('footer.rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/legal/kvkk" className="hover:text-gray-900 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/legal/cerezler" className="hover:text-gray-900 transition-colors">
              {t('footer.cookies')}
            </Link>
            <Link to="/legal/kosullar" className="hover:text-gray-900 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
