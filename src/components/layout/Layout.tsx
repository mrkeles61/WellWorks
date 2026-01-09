import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import CookieConsent from '@/components/shared/CookieConsent';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isGateway = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={isGateway ? '' : 'pt-[72px] flex-1'}>{children}</main>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
