import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Button } from '@/components/ui/button';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

/**
 * GatewayPage - 50/50 Split with Header & Footer
 * - Color inversion hover effect
 * - Global header and footer
 * - anime.js entrance animations
 */
const GatewayPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setBrand } = useBrand();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionSide, setTransitionSide] = useState<'health' | 'mice' | null>(null);

  const healthContentRef = useRef<HTMLDivElement>(null);
  const miceContentRef = useRef<HTMLDivElement>(null);

  // Entrance animations
  useEffect(() => {
    [healthContentRef.current, miceContentRef.current].forEach((container, index) => {
      if (container) {
        const items = container.querySelectorAll('.animate-item');
        animate(items, {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 800,
          delay: stagger(100, { start: 300 + index * 200 }),
          easing: 'easeOutExpo',
        });
      }
    });
  }, []);

  const handleNavigate = (side: 'health' | 'mice') => {
    setIsTransitioning(true);
    setTransitionSide(side);
    setBrand(side);
    setTimeout(() => navigate(side === 'health' ? '/health' : '/mice'), 500);
  };

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/dailyshottr/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/905360320838?text=Merhaba,%20bilgi%20almak%20istiyorum', label: 'WhatsApp' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Wipe transition overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 pointer-events-none',
          transitionSide === 'health' ? 'bg-[#00A3E0]' : 'bg-[#39B54A]',
          isTransitioning ? 'animate-[wipe-in_0.5s_ease-out_forwards]' : 'scale-x-0'
        )}
        style={{ transformOrigin: transitionSide === 'health' ? 'left center' : 'right center' }}
      />

      {/* Global Header - Black */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-oswald font-bold text-xl tracking-wider text-white">
            WELLWORKS TURKEY
          </span>
          <div className="flex items-center gap-5">
            <span className="text-white/50 text-sm hidden sm:block">Bizi Takip Edin</span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Desktop Layout - 50/50 Split */}
      <div className="hidden lg:flex flex-1 pt-16">

        {/* ========== HEALTH SIDE ========== */}
        <div
          className="group relative w-1/2 flex flex-col items-center justify-center overflow-hidden cursor-pointer
                     bg-white hover:bg-[#00A3E0]
                     transition-colors duration-500 ease-in-out"
          onClick={() => handleNavigate('health')}
        >
          <div ref={healthContentRef} className="relative z-10 text-center px-8">
            <div className="animate-item mb-4" style={{ opacity: 0 }}>
              <h1 className="font-oswald font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
                <span className="text-black transition-colors duration-500">WELL</span>
                <span className="text-[#00A3E0] group-hover:text-white transition-colors duration-500"> WORKS</span>
              </h1>
            </div>

            <h2 className="animate-item font-poppins italic text-3xl md:text-4xl text-black transition-colors duration-500 mb-8" style={{ opacity: 0 }}>
              Health
            </h2>

            <p className="animate-item text-gray-600 group-hover:text-white/80 mb-8 max-w-sm mx-auto transition-colors duration-500" style={{ opacity: 0 }}>
              Sağlıklı yaşam için geliştirilmiş likit gıda takviyeleri
            </p>

            <Button
              className="animate-item px-8 py-4 h-auto
                       bg-[#00A3E0] text-white group-hover:bg-white group-hover:text-[#00A3E0]
                       font-bold rounded-full transition-colors duration-500"
              style={{ opacity: 0 }}
            >
              Ürünleri Keşfet <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>



          {/* Divider */}
          <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-300 group-hover:via-white/30 to-transparent transition-colors duration-500" />
        </div>

        {/* ========== MICE SIDE ========== */}
        <div
          className="group relative w-1/2 flex flex-col items-center justify-center overflow-hidden cursor-pointer
                     bg-white hover:bg-[#39B54A]
                     transition-colors duration-500 ease-in-out"
          onClick={() => handleNavigate('mice')}
        >
          <div ref={miceContentRef} className="relative z-10 text-center px-8">
            <div className="animate-item mb-4" style={{ opacity: 0 }}>
              <h1 className="font-oswald font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
                <span className="text-black transition-colors duration-500">WELL</span>
                <span className="text-[#39B54A] group-hover:text-white transition-colors duration-500"> WORKS</span>
              </h1>
            </div>

            <h2 className="animate-item font-poppins italic text-3xl md:text-4xl text-black transition-colors duration-500 mb-8" style={{ opacity: 0 }}>
              M.I.C.E
            </h2>

            <p className="animate-item text-gray-600 group-hover:text-white/80 mb-8 max-w-sm mx-auto transition-colors duration-500" style={{ opacity: 0 }}>
              Unutulmaz etkinlikler ve profesyonel organizasyon hizmetleri
            </p>

            <Button
              className="animate-item px-8 py-4 h-auto
                       bg-[#39B54A] text-white group-hover:bg-white group-hover:text-[#39B54A]
                       font-bold rounded-full transition-colors duration-500"
              style={{ opacity: 0 }}
            >
              Projelerimizi İncele <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>


        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex-1 pt-16 overflow-y-auto snap-mandatory snap-y">
        <section
          className="h-[calc(100vh-4rem)] snap-start flex flex-col items-center justify-center px-6 relative bg-white"
          onClick={() => handleNavigate('health')}
        >
          <div className="text-center">
            <h1 className="font-oswald font-black text-5xl tracking-tight leading-none mb-2">
              <span className="text-black">WELL</span>
              <span className="text-[#00A3E0]"> WORKS</span>
            </h1>
            <h2 className="font-poppins italic text-2xl text-black mb-4">Health</h2>
            <p className="text-gray-600 text-center mb-6 max-w-xs">
              Sağlıklı yaşam için geliştirilmiş likit gıda takviyeleri
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3E0] text-white font-bold rounded-full">
              Keşfet <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
            <span className="text-sm mb-2">{t('gateway.scrollHint')}</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </section>

        <section
          className="h-[calc(100vh-4rem)] snap-start flex flex-col items-center justify-center px-6 relative bg-white"
          onClick={() => handleNavigate('mice')}
        >
          <div className="text-center">
            <h1 className="font-oswald font-black text-5xl tracking-tight leading-none mb-2">
              <span className="text-black">WELL</span>
              <span className="text-[#39B54A]"> WORKS</span>
            </h1>
            <h2 className="font-poppins italic text-2xl text-black mb-4">M.I.C.E</h2>
            <p className="text-gray-600 text-center mb-6 max-w-xs">
              Unutulmaz etkinlikler ve profesyonel organizasyon hizmetleri
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#39B54A] text-white font-bold rounded-full">
              Keşfet <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GatewayPage;
