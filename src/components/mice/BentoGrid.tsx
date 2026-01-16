import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface BentoEvent {
    id?: string;
    title: string;
    subtitle: string;
    date?: string;
    location?: string;
    image: string;
    video?: string;
    featured?: boolean;
    viewingCount?: number;
    upcoming?: boolean;
}

interface BentoCardProps {
    event: BentoEvent;
    className?: string;
}

import { Link } from 'react-router-dom';

// ... (imports)

const BentoCard = ({ event, className }: BentoCardProps) => {
    const { t } = useTranslation();

    return (
        <Link
            to="/mice/etkinlikler"
            className={cn(
                'group flex flex-col gap-4 cursor-pointer',
                className
            )}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900 border border-white/10">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Scarcity indicator */}
                {event.upcoming && event.viewingCount && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-xs text-white font-medium">
                            {event.viewingCount} {t('mice.bentoGrid.viewing')}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Below Image */}
            <div className="text-center px-2">
                <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-mice-primary transition-colors">
                    {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.subtitle}</p>

                {/* View Details Button */}
                <div className="inline-flex items-center gap-2 text-mice-primary text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {t('mice.bentoGrid.viewDetails')}
                    <ExternalLink className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
};

interface BentoGridProps {
    items: BentoEvent[];
}

const BentoGrid = ({ items }: BentoGridProps) => {
    const { t } = useTranslation();

    // Safety check if items is undefined
    if (!items || items.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-black">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
                        {t('mice.bentoGrid.title')}
                    </h2>
                    <p className="text-mice-text-muted max-w-2xl mx-auto">
                        {t('mice.bentoGrid.subtitle')}
                    </p>
                </div>

                {/* Bento Grid Layout - Dynamic Mapping */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                    {items.map((item, index) => (
                        <BentoCard
                            key={index}
                            event={item}
                            className="lg:col-span-1"
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-4 border border-mice-primary text-mice-primary rounded-full font-medium hover:bg-mice-primary hover:text-white transition-all duration-300">
                        {t('mice.bentoGrid.viewAll')}
                    </button>
                </div>
            </div>

            {/* Ken Burns animation keyframes - added via style tag */}
            <style>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-2%, -2%);
          }
        }
      `}</style>
        </section>
    );
};

export default BentoGrid;
