import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import BrandToggle from '@/components/shared/BrandToggle';
import LanguageToggle from '@/components/shared/LanguageToggle';
import SearchModal from '@/components/shared/SearchModal';
import SalesPointsModal from '@/components/shared/SalesPointsModal';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useTranslation();
  const { brand } = useBrand();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [salesModalOpen, setSalesModalOpen] = useState(false);
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
    { href: '/kariyer', label: t('nav.career') },
    { href: '/health/iletisim', label: t('nav.contact') },
  ];

  const brandsDropdownItems: NavLinkItem[] = [
    { href: '/health/electrovit-nedir', label: 'Electrovit' },
    { href: '/dailyshot-nedir', label: 'Dailyshot' },
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
          {/* Logo */}
          <Link to={brand === 'health' ? '/health' : '/mice'} className="flex items-center gap-1">
            <div className="text-xl font-bold font-montserrat">
              {brand === 'health' ? (
                <span className="flex items-baseline gap-1.5">
                  <span className="text-white uppercase tracking-wide font-extrabold">Well Works</span>
                  <span className="font-dancing text-health-primary text-2xl font-semibold">Health</span>
                </span>
              ) : (
                <span className="flex items-baseline gap-1.5">
                  <span className="text-white uppercase tracking-wide font-extrabold">Well Works</span>
                  <span className="font-dancing text-mice-primary text-2xl font-semibold lowercase">mice</span>
                </span>
              )}
            </div>
          </Link>

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
                <button
                  onClick={() => setSalesModalOpen(true)}
                  className="text-sm font-medium transition-colors hover:text-primary text-foreground"
                >
                  {t('nav.salesPoints')}
                </button>

                {healthTrailingLinks.map(renderNavLink)}
              </>
            ) : (
              miceLinks.map(renderNavLink)
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <BrandToggle />
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

      {/* Sales Points Modal */}
      <SalesPointsModal open={salesModalOpen} onOpenChange={setSalesModalOpen} />

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
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setSalesModalOpen(true);
                    }}
                    className="block w-full text-left py-3 text-lg font-medium border-b border-border"
                  >
                    {t('nav.salesPoints')}
                  </button>

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
                <div className="flex items-center justify-between">
                  <span>Mod Değiştir</span>
                  <BrandToggle />
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
