import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  Headphones,
  RefreshCw,
} from 'lucide-react';
import { useBrand } from '@/context/BrandContext';

const Footer = () => {
  const { t } = useTranslation();
  const { brand } = useBrand();
  const location = useLocation();

  // Don't show footer on gateway
  if (location.pathname === '/') return null;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <div className="text-2xl font-bold mb-4 font-oswald tracking-wide">
              WELL WORKS <span className="text-mice-primary">TURKEY</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t('footer.description')}</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/wellworksturkey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/wellworksturkey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/wellworksturkey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Health Links */}
          <div>
            <h4 className="font-semibold mb-4 text-health-primary">{t('footer.healthLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/health/urunler" className="hover:text-white transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/health/hakkinda" className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <a
                  href="https://dailyshot.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('footer.onlineShop')} ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: MICE Links */}
          <div>
            <h4 className="font-semibold mb-4 text-mice-primary">{t('footer.miceLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/mice/etkinlikler" className="hover:text-white transition-colors">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/mice/iletisim" className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Fulya, Ortaklar Cd. No.14 K.3 D.5, 34360 Şişli/İstanbul</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+902122164752" className="hover:text-white transition-colors">
                  0 (212) 216 47 52
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@wellworksturkey.com" className="hover:text-white transition-colors">
                  info@wellworksturkey.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('footer.hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-gray-800">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span>256-bit SSL Güvenlik</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Truck className="w-5 h-5 text-blue-500" />
            <span>250 TL Üzeri Ücretsiz Kargo</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Headphones className="w-5 h-5 text-purple-500" />
            <span>7/24 WhatsApp Destek</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <RefreshCw className="w-5 h-5 text-orange-500" />
            <span>14 Gün İade Garantisi</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/legal/kvkk" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/legal/cerezler" className="hover:text-white transition-colors">
              {t('footer.cookies')}
            </Link>
            <Link to="/legal/kosullar" className="hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
