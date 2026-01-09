import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { Event } from '@/data/events';
import miceHeroImage from '@/assets/mice-hero-festival.jpg';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const { t } = useTranslation();

  const getSizeClasses = (size: Event['size']) => {
    switch (size) {
      case 'large':
        return 'lg:col-span-8 lg:row-span-2';
      case 'tall':
        return 'lg:col-span-4 lg:row-span-2';
      case 'wide':
        return 'lg:col-span-8 lg:row-span-1';
      case 'small':
      default:
        return 'lg:col-span-4 lg:row-span-1';
    }
  };

  return (
    <Link
      to={`/mice/etkinlik/${event.slug}`}
      className={cn(
        'group relative overflow-hidden rounded-2xl cursor-pointer',
        getSizeClasses(event.size),
        'opacity-0 animate-scale-in'
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Background Image */}
      <img
        src={miceHeroImage}
        alt={event.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-mice-primary/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-oswald tracking-wide">
          {event.name}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {event.description}
        </p>
        <span className="inline-flex items-center gap-2 mt-3 text-mice-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
          {t('mice.events.viewDetails')} <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
