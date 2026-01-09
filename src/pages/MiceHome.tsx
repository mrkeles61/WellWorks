import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { events } from '@/data/events';
import EventCard from '@/components/mice/EventCard';
import miceHeroImage from '@/assets/mice-hero-festival.jpg';

const MiceHome = () => {
  const { t } = useTranslation();
  const { setBrand } = useBrand();

  useEffect(() => {
    setBrand('mice');
  }, [setBrand]);

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500K+', label: t('mice.hero.stats.attendees') },
    { icon: <Calendar className="w-6 h-6" />, value: '100+', label: t('mice.hero.stats.events') },
    { icon: <Award className="w-6 h-6" />, value: '12', label: t('mice.hero.stats.experience') },
  ];

  return (
    <div data-brand="mice" className="bg-background">
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${miceHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-oswald text-white mb-6 opacity-0 animate-slide-up">
            {t('mice.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto opacity-0 animate-slide-up stagger-1">
            {t('mice.hero.subtitle')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10 opacity-0 animate-slide-up stagger-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 text-mice-primary mb-2">
                  {stat.icon}
                  <span className="text-3xl md:text-4xl font-bold font-oswald">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/mice/etkinlikler"
            className="btn-mice inline-flex items-center gap-2 opacity-0 animate-slide-up stagger-3"
          >
            {t('mice.hero.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-[bounce_1.5s_infinite]" />
          </div>
        </div>
      </section>

      {/* Events Bento Grid */}
      <section className="py-16 lg:py-24 bg-mice-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-oswald text-white mb-4">
              {t('mice.events.title')}
            </h2>
            <p className="text-gray-400">{t('mice.events.subtitle')}</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[250px] gap-4">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiceHome;
