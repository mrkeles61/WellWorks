import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import healthHeroImage from '@/assets/health-hero-products.jpg';
import miceHeroImage from '@/assets/mice-hero-festival.jpg';

const GatewayPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setBrand } = useBrand();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionSide, setTransitionSide] = useState<'health' | 'mice' | null>(null);

  const handleMouseMove = (e: React.MouseEvent, side: 'health' | 'mice') => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleNavigate = (side: 'health' | 'mice') => {
    setIsTransitioning(true);
    setTransitionSide(side);
    setBrand(side);
    
    setTimeout(() => {
      navigate(side === 'health' ? '/health' : '/mice');
    }, 600);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Wipe overlay for transition */}
      <div
        className={cn(
          'fixed inset-0 z-50 pointer-events-none',
          transitionSide === 'health' ? 'bg-health-primary' : 'bg-mice-primary',
          isTransitioning ? 'animate-[wipe-in_0.6s_ease-out_forwards]' : 'scale-x-0'
        )}
        style={{
          transformOrigin: transitionSide === 'health' ? 'left center' : 'right center',
        }}
      />

      {/* Desktop: Side by side */}
      <div className="hidden lg:flex h-screen">
        {/* Health Side */}
        <div
          className="gateway-health relative w-1/2 flex items-center justify-center overflow-hidden cursor-pointer group"
          onMouseMove={(e) => handleMouseMove(e, 'health')}
          onClick={() => handleNavigate('health')}
        >
          {/* Radial gradient following cursor */}
          <div
            className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, hsl(210 100% 32% / 0.2), transparent 50%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-8 max-w-lg">
            {/* Product image with parallax */}
            <div
              className="relative mb-8 transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            >
              <img
                src={healthHeroImage}
                alt="Dailyshot Products"
                className="w-full max-w-md mx-auto animate-float"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up stagger-1">
              {t('gateway.health.headline')}
            </h1>
            <p className="text-lg text-health-text-muted mb-8 opacity-0 animate-slide-up stagger-2">
              {t('gateway.health.subline')}
            </p>
            <button className="btn-health flex items-center gap-2 mx-auto opacity-0 animate-slide-up stagger-3 animate-pulse-subtle">
              {t('gateway.health.cta')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Divider line */}
          <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        </div>

        {/* MICE Side */}
        <div
          className="gateway-mice relative w-1/2 flex items-center justify-center overflow-hidden cursor-pointer group"
          onMouseMove={(e) => handleMouseMove(e, 'mice')}
          onClick={() => handleNavigate('mice')}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${miceHeroImage})` }}
          />

          {/* Neon glow following cursor */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, hsl(130 52% 47% / 0.3), transparent 40%)`,
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

          {/* Content */}
          <div className="relative z-10 text-center px-8 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text opacity-0 animate-slide-up stagger-1">
              {t('gateway.mice.headline')}
            </h1>
            <p className="text-lg text-mice-text-muted mb-8 opacity-0 animate-slide-up stagger-2">
              {t('gateway.mice.subline')}
            </p>
            <button className="btn-mice flex items-center gap-2 mx-auto opacity-0 animate-slide-up stagger-3">
              {t('gateway.mice.cta')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked with scroll snap */}
      <div className="lg:hidden h-screen overflow-y-auto snap-mandatory snap-y">
        {/* Health Section */}
        <section
          className="gateway-health h-screen snap-start flex flex-col items-center justify-center px-6 relative"
          onClick={() => handleNavigate('health')}
        >
          <img
            src={healthHeroImage}
            alt="Dailyshot Products"
            className="w-full max-w-xs mb-8 animate-float"
          />
          <h1 className="text-3xl font-bold text-center mb-4">{t('gateway.health.headline')}</h1>
          <p className="text-base text-health-text-muted text-center mb-8">{t('gateway.health.subline')}</p>
          <button className="btn-health flex items-center gap-2">
            {t('gateway.health.cta')} <ArrowRight className="w-5 h-5" />
          </button>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-health-text-muted animate-bounce-subtle">
            <span className="text-sm mb-2">{t('gateway.scrollHint')}</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </section>

        {/* MICE Section */}
        <section
          className="gateway-mice h-screen snap-start flex flex-col items-center justify-center px-6 relative"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${miceHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => handleNavigate('mice')}
        >
          <h1 className="text-3xl font-bold text-center mb-4 neon-text">{t('gateway.mice.headline')}</h1>
          <p className="text-base text-mice-text-muted text-center mb-8">{t('gateway.mice.subline')}</p>
          <button className="btn-mice flex items-center gap-2">
            {t('gateway.mice.cta')} <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default GatewayPage;
