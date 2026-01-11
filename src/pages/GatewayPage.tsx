import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ExternalLink, CalendarCheck } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

/**
 * GatewayPage - Card-Based Layout
 * - Two floating white cards on gradient background
 * - Larger cards with more content
 * - Header and footer visible
 */
const GatewayPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setBrand } = useBrand();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionSide, setTransitionSide] = useState<'health' | 'mice' | null>(null);

  const healthCardRef = useRef<HTMLDivElement>(null);
  const miceCardRef = useRef<HTMLDivElement>(null);

  // Entrance animations
  useEffect(() => {
    // Animate cards
    const cards = [healthCardRef.current, miceCardRef.current].filter(Boolean);
    animate(cards, {
      opacity: [0, 1],
      translateY: [60, 0],
      scale: [0.9, 1],
      duration: 800,
      delay: stagger(150, { start: 200 }),
      easing: 'easeOutExpo',
    });

    // Animate card contents
    cards.forEach((card, index) => {
      if (card) {
        const items = card.querySelectorAll('.animate-item');
        animate(items, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 600,
          delay: stagger(80, { start: 400 + index * 150 }),
          easing: 'easeOutQuad',
        });
      }
    });
  }, []);

  const handleNavigate = (side: 'health' | 'mice') => {
    setIsTransitioning(true);
    setTransitionSide(side);
    setBrand(side);

    const card = side === 'health' ? healthCardRef.current : miceCardRef.current;
    if (card) {
      animate(card, {
        scale: [1, 1.02, 0.95],
        opacity: [1, 1, 0],
        duration: 400,
        easing: 'easeInQuad',
      });
    }

    setTimeout(() => navigate(side === 'health' ? '/health' : '/mice'), 450);
  };

  const handleCardHover = (card: HTMLDivElement | null, enter: boolean) => {
    if (card) {
      animate(card, {
        scale: enter ? 1.02 : 1,
        translateY: enter ? -8 : 0,
        duration: 300,
        easing: 'easeOutQuad',
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100">
      {/* Wipe transition overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 pointer-events-none',
          transitionSide === 'health' ? 'bg-[#00A3E0]' : 'bg-[#39B54A]',
          isTransitioning ? 'animate-[wipe-in_0.5s_ease-out_forwards]' : 'scale-x-0'
        )}
        style={{ transformOrigin: transitionSide === 'health' ? 'left center' : 'right center' }}
      />

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center py-20 px-4 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* ========== HEALTH CARD ========== */}
            <div
              ref={healthCardRef}
              className="group bg-white rounded-3xl shadow-xl p-8 lg:p-12 cursor-pointer
                       hover:shadow-2xl transition-shadow duration-300"
              style={{ opacity: 0 }}
              onClick={() => handleNavigate('health')}
              onMouseEnter={() => handleCardHover(healthCardRef.current, true)}
              onMouseLeave={() => handleCardHover(healthCardRef.current, false)}
            >
              {/* Typography */}
              <div className="animate-item mb-6" style={{ opacity: 0 }}>
                <h1 className="font-oswald font-black text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-none">
                  <span className="text-gray-900">WELL</span>
                  <span className="text-[#00A3E0]"> WORKS</span>
                </h1>
                <h2 className="font-poppins italic text-2xl lg:text-3xl text-gray-800 mt-2">
                  Health
                </h2>
              </div>

              {/* Description */}
              <p className="animate-item text-gray-600 text-lg mb-8 max-w-md leading-relaxed" style={{ opacity: 0 }}>
                Sağlıklı yaşam için geliştirilmiş likit gıda takviyeleri ile kendinizi yeniden keşfedin.
              </p>

              {/* Primary CTA */}
              <button
                className="animate-item w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 
                         bg-[#00A3E0] text-white font-bold rounded-full 
                         hover:bg-[#0091C7] transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                Ürünleri Keşfet <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary Link */}
              <div className="animate-item mt-6" style={{ opacity: 0 }}>
                <a
                  href="https://www.dailyshot.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-[#00A3E0] hover:text-[#0091C7] font-medium transition-colors"
                >
                  Hemen Satın Al <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ========== MICE CARD ========== */}
            <div
              ref={miceCardRef}
              className="group bg-white rounded-3xl shadow-xl p-8 lg:p-12 cursor-pointer
                       hover:shadow-2xl transition-shadow duration-300"
              style={{ opacity: 0 }}
              onClick={() => handleNavigate('mice')}
              onMouseEnter={() => handleCardHover(miceCardRef.current, true)}
              onMouseLeave={() => handleCardHover(miceCardRef.current, false)}
            >
              {/* Typography */}
              <div className="animate-item mb-6" style={{ opacity: 0 }}>
                <h1 className="font-oswald font-black text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-none">
                  <span className="text-gray-900">WELL</span>
                  <span className="text-[#39B54A]"> WORKS</span>
                </h1>
                <h2 className="font-poppins italic text-2xl lg:text-3xl text-gray-800 mt-2">
                  mice
                </h2>
              </div>

              {/* Description */}
              <p className="animate-item text-gray-600 text-lg mb-8 max-w-md leading-relaxed" style={{ opacity: 0 }}>
                Unutulmaz etkinlikler ve profesyonel organizasyon hizmetleri ile markanızı geleceğe taşıyın.
              </p>

              {/* Primary CTA */}
              <button
                className="animate-item w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 
                         bg-[#39B54A] text-white font-bold rounded-full 
                         hover:bg-[#2E9A3D] transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                Projelerimizi İncele <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary Link */}
              <div className="animate-item mt-6" style={{ opacity: 0 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/mice/iletisim');
                  }}
                  className="inline-flex items-center gap-2 text-[#39B54A] hover:text-[#2E9A3D] font-medium transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" /> Teklif Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2024 WELL WORKS GROUP. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-gray-900 transition-colors">TERMS OF USE</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GatewayPage;
