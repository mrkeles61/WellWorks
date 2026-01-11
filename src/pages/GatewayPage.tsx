import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, ExternalLink, CalendarCheck } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

/**
 * GatewayPage - Enhanced with Anime.js Animations
 * - Color inversion hover effect
 * - Staggered text entrance animations
 * - Magnetic button effects
 * - Smooth transitions
 */
const GatewayPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setBrand } = useBrand();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionSide, setTransitionSide] = useState<'health' | 'mice' | null>(null);

  // Refs for animations
  const healthContentRef = useRef<HTMLDivElement>(null);
  const miceContentRef = useRef<HTMLDivElement>(null);
  const healthLettersRef = useRef<HTMLHeadingElement>(null);
  const miceLettersRef = useRef<HTMLHeadingElement>(null);

  // Entrance animations on mount
  useEffect(() => {
    // Animate Health side content
    if (healthContentRef.current) {
      const elements = healthContentRef.current.querySelectorAll('.animate-item');
      animate(elements, {
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        delay: stagger(100, { start: 300 }),
        easing: 'easeOutExpo',
      });
    }

    // Animate MICE side content
    if (miceContentRef.current) {
      const elements = miceContentRef.current.querySelectorAll('.animate-item');
      animate(elements, {
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        delay: stagger(100, { start: 500 }),
        easing: 'easeOutExpo',
      });
    }

    // Letter by letter animation for titles
    if (healthLettersRef.current) {
      const letters = healthLettersRef.current.querySelectorAll('.letter');
      animate(letters, {
        opacity: [0, 1],
        translateY: [-100, 0],
        rotateX: [-90, 0],
        duration: 1200,
        delay: stagger(50, { start: 200 }),
        easing: 'easeOutElastic(1, 0.5)',
      });
    }

    if (miceLettersRef.current) {
      const letters = miceLettersRef.current.querySelectorAll('.letter');
      animate(letters, {
        opacity: [0, 1],
        translateY: [-100, 0],
        rotateX: [-90, 0],
        duration: 1200,
        delay: stagger(50, { start: 400 }),
        easing: 'easeOutElastic(1, 0.5)',
      });
    }
  }, []);

  const handleNavigate = (side: 'health' | 'mice') => {
    setIsTransitioning(true);
    setTransitionSide(side);
    setBrand(side);

    // Animate out elements before navigation
    const container = side === 'health' ? healthContentRef.current : miceContentRef.current;
    if (container) {
      const elements = container.querySelectorAll('.animate-item');
      animate(elements, {
        opacity: [1, 0],
        translateY: [0, -30],
        duration: 300,
        delay: stagger(50),
        easing: 'easeInQuad',
      });
    }

    setTimeout(() => navigate(side === 'health' ? '/health' : '/mice'), 500);
  };

  // Hover animation for buttons
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, enter: boolean) => {
    const button = e.currentTarget;
    animate(button, {
      scale: enter ? 1.05 : 1,
      duration: 300,
      easing: 'easeOutElastic(1, 0.5)',
    });
  };

  // Split text into letters for animation
  const splitText = (text: string, colorClass: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`letter inline-block ${colorClass} ${char === ' ' ? 'mr-4' : ''}`}
        style={{ opacity: 0 }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Wipe transition overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 pointer-events-none',
          transitionSide === 'health' ? 'bg-[#00A3E0]' : 'bg-[#39B54A]',
          isTransitioning ? 'animate-[wipe-in_0.5s_ease-out_forwards]' : 'scale-x-0'
        )}
        style={{ transformOrigin: transitionSide === 'health' ? 'left center' : 'right center' }}
      />

      {/* Desktop Layout - 50/50 Split */}
      <div className="hidden lg:flex h-screen">

        {/* ========== HEALTH SIDE ========== */}
        <div
          className="group relative w-1/2 flex items-center justify-center overflow-hidden cursor-pointer
                     bg-white hover:bg-[#00A3E0]
                     transition-colors duration-500 ease-in-out"
          onClick={() => handleNavigate('health')}
        >
          {/* Content */}
          <div ref={healthContentRef} className="relative z-10 text-center px-8">
            {/* WELL WORKS Typography - Letter Animation */}
            <div className="animate-item mb-4" style={{ opacity: 0 }}>
              <h1 ref={healthLettersRef} className="font-oswald font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
                {splitText('WELL', 'text-black transition-colors duration-500')}
                {splitText(' WORKS', 'text-[#00A3E0] group-hover:text-white transition-colors duration-500')}
              </h1>
            </div>

            {/* "Health" Script Text */}
            <h2 className="animate-item font-poppins italic text-3xl md:text-4xl text-black transition-colors duration-500 mb-8" style={{ opacity: 0 }}>
              Health
            </h2>

            <p className="animate-item text-gray-600 group-hover:text-white/80 mb-8 max-w-sm mx-auto transition-colors duration-500" style={{ opacity: 0 }}>
              Sağlıklı yaşam için geliştirilmiş likit gıda takviyeleri
            </p>

            <button
              className="animate-item inline-flex items-center gap-2 px-8 py-4 
                       bg-[#00A3E0] text-white group-hover:bg-white group-hover:text-[#00A3E0]
                       font-bold rounded-full transition-colors duration-500"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              Ürünleri Keşfet <ArrowRight className="w-5 h-5" />
            </button>

            <div className="animate-item mt-6" style={{ opacity: 0 }}>
              <a
                href="https://www.dailyshot.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-sm text-[#00A3E0] group-hover:text-white transition-colors duration-500 hover:underline"
              >
                Hemen Satın Al <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Animated Divider Line */}
          <div className="absolute right-0 top-0 bottom-0 w-px overflow-hidden">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-300 group-hover:via-white/30 to-transparent transition-colors duration-500" />
          </div>
        </div>

        {/* ========== MICE SIDE ========== */}
        <div
          className="group relative w-1/2 flex items-center justify-center overflow-hidden cursor-pointer
                     bg-white hover:bg-[#39B54A]
                     transition-colors duration-500 ease-in-out"
          onClick={() => handleNavigate('mice')}
        >
          {/* Content */}
          <div ref={miceContentRef} className="relative z-10 text-center px-8">
            {/* WELL WORKS Typography - Letter Animation */}
            <div className="animate-item mb-4" style={{ opacity: 0 }}>
              <h1 ref={miceLettersRef} className="font-oswald font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
                {splitText('WELL', 'text-black transition-colors duration-500')}
                {splitText(' WORKS', 'text-[#39B54A] group-hover:text-white transition-colors duration-500')}
              </h1>
            </div>

            {/* "mice" Script Text */}
            <h2 className="animate-item font-poppins italic text-3xl md:text-4xl text-black transition-colors duration-500 mb-8" style={{ opacity: 0 }}>
              mice
            </h2>

            <p className="animate-item text-gray-600 group-hover:text-white/80 mb-8 max-w-sm mx-auto transition-colors duration-500" style={{ opacity: 0 }}>
              Unutulmaz etkinlikler ve profesyonel organizasyon hizmetleri
            </p>

            <button
              className="animate-item inline-flex items-center gap-2 px-8 py-4 
                       bg-[#39B54A] text-white group-hover:bg-white group-hover:text-[#39B54A]
                       font-bold rounded-full transition-colors duration-500"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              Projelerimizi İncele <ArrowRight className="w-5 h-5" />
            </button>

            <div className="animate-item mt-6" style={{ opacity: 0 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/mice/iletisim');
                }}
                className="inline-flex items-center gap-2 text-sm text-[#39B54A] group-hover:text-white transition-colors duration-500 hover:underline"
              >
                <CalendarCheck className="w-4 h-4" /> Teklif Al
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-screen overflow-y-auto snap-mandatory snap-y">
        {/* Health Section - Mobile */}
        <section
          className="h-screen snap-start flex flex-col items-center justify-center px-6 relative bg-white"
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

        {/* MICE Section - Mobile */}
        <section
          className="h-screen snap-start flex flex-col items-center justify-center px-6 relative bg-white"
          onClick={() => handleNavigate('mice')}
        >
          <div className="text-center">
            <h1 className="font-oswald font-black text-5xl tracking-tight leading-none mb-2">
              <span className="text-black">WELL</span>
              <span className="text-[#39B54A]"> WORKS</span>
            </h1>
            <h2 className="font-poppins italic text-2xl text-black mb-4">mice</h2>
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
