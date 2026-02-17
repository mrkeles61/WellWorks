import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import LanguageToggle from '@/components/shared/LanguageToggle';
import SearchModal from '@/components/shared/SearchModal';

import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useTranslation();
  const { brand, setBrand } = useBrand();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);

  // Check if we're on gateway page
  const isGateway = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show header on gateway
  if (isGateway) return null;

  interface NavLinkItem {
    href: string;
    label: string;
    external?: boolean;
  }

  // Health nav: Anasayfa | Hakkımızda | Markalarımız▾ | Satış Noktaları | Kariyer | İletişim
  const healthSimpleLinks: NavLinkItem[] = [
    { href: '/health', label: t('nav.home') },
    { href: '/health/hakkimizda', label: t('health.aboutUs.pageTitle') },
  ];

  const healthTrailingLinks: NavLinkItem[] = [
    { href: '/kalite', label: t('nav.quality') },
    { href: '/kariyer', label: t('nav.career') },
    { href: '/health/iletisim', label: t('nav.contact') },
  ];

  const brandsDropdownItems: NavLinkItem[] = [
    { href: '/health/electrovit-nedir', label: 'Electrovit' },
    { href: '/dailyshot-nedir', label: 'Dailyshot' },
    { href: '/health/exoshine', label: 'Exoshine' },
  ];

  const miceLinks: NavLinkItem[] = [
    { href: '/mice', label: t('nav.home') },
    { href: '/mice/hakkimizda', label: t('mice.aboutUs.pageTitle') },
    { href: '/mice/isler-gucler', label: t('nav.events') },
    { href: '/mice/iletisim', label: t('nav.contact') },
  ];

  const renderNavLink = (link: NavLinkItem) => {
    if (link.external) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            brand === 'health' ? 'text-foreground' : 'text-white'
          )}
        >
          {link.label} ↗
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          location.pathname === link.href
            ? 'text-primary'
            : brand === 'health'
              ? 'text-foreground'
              : 'text-white'
        )}
      >
        {link.label}
      </Link>
    );
  };

  const renderMobileLink = (link: NavLinkItem) => {
    if (link.external) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-3 text-lg font-medium border-b border-border"
        >
          {link.label} ↗
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'block py-3 text-lg font-medium border-b border-border',
          location.pathname === link.href && 'text-primary'
        )}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 z-50 h-[72px] transition-all duration-500 top-0',
          isScrolled
            ? brand === 'health'
              ? 'bg-slate-900/95 backdrop-blur-md shadow-md'
              : 'bg-black/95 backdrop-blur-md shadow-md'
            : brand === 'health'
              ? 'bg-slate-900'
              : 'bg-black'
        )}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Logo + Brand Switcher */}
          <div className="flex items-center gap-1">
            <Link to={brand === 'health' ? '/health' : '/mice'} className="text-xl font-bold font-montserrat">
              <span className="text-white uppercase tracking-wide font-extrabold">Well Works</span>
            </Link>
            <div className="flex items-baseline gap-1 ml-1.5 relative group/toggle">
              <div className="absolute -inset-x-2 -inset-y-1 rounded-full bg-white/[0.06] border border-white/[0.08]" />
              <button
                onClick={() => { if (brand !== 'health') { setBrand('health'); navigate('/health'); } }}
                className={cn(
                  'relative text-2xl font-semibold transition-all duration-300 cursor-pointer',
                  brand === 'health' ? 'opacity-100 text-health-primary' : 'opacity-35 text-gray-400 hover:opacity-60'
                )}
                style={{ fontFamily: "'Holiday', cursive", textTransform: 'none' }}
              >
                Health
              </button>
              <span className="relative text-gray-500 text-lg font-light mx-0.5 select-none">/</span>
              <button
                onClick={() => { if (brand !== 'mice') { setBrand('mice'); navigate('/mice'); } }}
                className={cn(
                  'relative text-2xl font-semibold transition-all duration-300 cursor-pointer',
                  brand === 'mice' ? 'opacity-100 text-mice-primary' : 'opacity-35 text-gray-400 hover:opacity-60'
                )}
                style={{ fontFamily: "'MilkyMatcha', cursive", textTransform: 'none' }}
              >
                mice
              </button>
              {/* Tooltip hint */}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover/toggle:opacity-100 transition-opacity whitespace-nowrap pointer-events-none select-none">
                {brand === 'health' ? '← MICE tarafına geç' : 'Health tarafına geç →'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {brand === 'health' ? (
              <>
                {healthSimpleLinks.map(renderNavLink)}

                {/* Markalarımız Dropdown */}
                <div className="relative group">
                  <button
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1',
                      brandsDropdownItems.some(b => location.pathname === b.href)
                        ? 'text-primary'
                        : 'text-foreground'
                    )}
                  >
                    {t('nav.brands')}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl py-2 min-w-[180px]">
                      {brandsDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            'block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-700/50 hover:text-health-primary',
                            location.pathname === item.href ? 'text-health-primary' : 'text-white'
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Satış Noktaları */}
                <Link
                  to="/health/satis-noktalari"
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    location.pathname === '/health/satis-noktalari' ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {t('nav.salesPoints')}
                </Link>

                {healthTrailingLinks.map(renderNavLink)}
              </>
            ) : (
              miceLinks.map(renderNavLink)
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t('nav.menu')}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />



      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 right-0 w-80 h-full transition-transform duration-300',
            brand === 'health' ? 'bg-slate-900' : 'bg-black',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="p-6">
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t('nav.close')}
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="mt-12 space-y-0">
              {brand === 'health' ? (
                <>
                  {healthSimpleLinks.map(renderMobileLink)}

                  {/* Markalarımız Accordion */}
                  <div className="border-b border-border">
                    <button
                      onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                      className="flex items-center justify-between w-full py-3 text-lg font-medium"
                    >
                      {t('nav.brands')}
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        mobileBrandsOpen && 'rotate-180'
                      )} />
                    </button>
                    <div className={cn(
                      'overflow-hidden transition-all duration-200',
                      mobileBrandsOpen ? 'max-h-40 pb-2' : 'max-h-0'
                    )}>
                      {brandsDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block py-2 pl-4 text-base text-slate-300 hover:text-health-primary transition-colors',
                            location.pathname === item.href && 'text-health-primary'
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Satış Noktaları */}
                  <Link
                    to="/health/satis-noktalari"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left py-3 text-lg font-medium border-b border-border"
                  >
                    {t('nav.salesPoints')}
                  </Link>

                  {healthTrailingLinks.map(renderMobileLink)}
                </>
              ) : (
                miceLinks.map(renderMobileLink)
              )}
            </nav>

            <div className="mt-8 space-y-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 font-medium">Ayarlar</p>
                <div className="flex items-center justify-between">
                  <span>Dil</span>
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
