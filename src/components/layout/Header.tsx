import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import BrandToggle from '@/components/shared/BrandToggle';
import LanguageToggle from '@/components/shared/LanguageToggle';
import SearchModal from '@/components/shared/SearchModal';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useTranslation();
  const { brand } = useBrand();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const healthLinks: NavLinkItem[] = [
    { href: '/health', label: t('nav.home') },
    { href: '/health/hakkimizda', label: t('health.aboutUs.pageTitle') },
    { href: '/dailyshot-nedir', label: 'Dailyshot Nedir?' },
    { href: '/health/electrovit-nedir', label: 'Electrovit Nedir?' },
  ];

  const miceLinks: NavLinkItem[] = [
    { href: '/mice', label: t('nav.home') },
    { href: '/mice/hakkimizda', label: t('mice.aboutUs.pageTitle') },
    { href: '/mice/isler-gucler', label: t('nav.events') },
    { href: '/mice/iletisim', label: t('nav.contact') },
  ];

  const links = brand === 'health' ? healthLinks : miceLinks;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500',
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
          <Link to={brand === 'health' ? '/health' : '/mice'} className="flex items-center gap-2">
            <div
              className={cn(
                'text-xl font-bold transition-colors',
                brand === 'health' ? 'font-poppins text-health-primary' : 'font-poppins text-mice-primary'
              )}
            >
              {brand === 'health' ? (
                <span className="flex gap-2">
                  <span className="text-white">WellWorks</span>
                  <span className="text-health-primary">Health</span>
                </span>
              ) : (
                <span className="flex gap-2">
                  <span className="text-white">WellWorks</span>
                  <span className="text-mice-primary">MICE</span>
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) =>
              link.external ? (
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
              ) : (
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
              )
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <BrandToggle />
            <LanguageToggle />

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

            <nav className="mt-12 space-y-4">
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-lg font-medium border-b border-border"
                  >
                    {link.label} ↗
                  </a>
                ) : (
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
                )
              )}
            </nav>

            <div className="mt-8">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
