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

const BentoCard = ({ event, className, onClick }: BentoCardProps & { onClick: () => void }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            layoutId={`card-${event.id}`}
            onClick={onClick}
            className={cn(
                'group flex flex-col gap-4 cursor-pointer relative',
                className
            )}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900 border border-white/10">
                <motion.img
                    layoutId={`img-${event.id}`}
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
                <motion.h3 layoutId={`title-${event.id}`} className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-mice-primary transition-colors">
                    {event.title}
                </motion.h3>
                <motion.p layoutId={`desc-${event.id}`} className="text-gray-400 text-sm mb-4 line-clamp-2">{event.subtitle}</motion.p>

                {/* View Details Button */}
                <div className="inline-flex items-center gap-2 text-mice-primary text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {t('mice.bentoGrid.viewDetails')}
                </div>
            </div>
        </motion.div>
    );
};

interface BentoGridProps {
    items: BentoEvent[];
}

import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const BentoGrid = ({ items }: BentoGridProps) => {
    const { t } = useTranslation();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Safety check if items is undefined
    if (!items || items.length === 0) return null;

    const selectedEvent = items.find(item => item.id === selectedId);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedId && selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="bg-[#16181b] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl overflow-hidden relative shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="h-64 md:h-full relative">
                                    <motion.img
                                        layoutId={`img-${selectedId}`}
                                        src={selectedEvent.image}
                                        alt={selectedEvent.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#16181b] via-transparent to-transparent md:bg-gradient-to-r" />
                                </div>

                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <span className="text-mice-primary text-sm font-bold uppercase tracking-wider mb-2">
                                        {selectedEvent.subtitle}
                                    </span>
                                    <motion.h2 layoutId={`title-${selectedId}`} className="font-oswald text-3xl md:text-4xl font-bold text-white mb-6">
                                        {selectedEvent.title}
                                    </motion.h2>

                                    <motion.p layoutId={`desc-${selectedId}`} className="text-gray-300 mb-8 leading-relaxed">
                                        {selectedEvent.subtitle} {selectedEvent.subtitle} {/* Duplicating for mock length as description might be short */}
                                    </motion.p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                                        {selectedEvent.date && (
                                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                                <Calendar className="w-4 h-4 text-[#2DB34A]" /> {selectedEvent.date}
                                            </span>
                                        )}
                                        {selectedEvent.location && (
                                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                                <MapPin className="w-4 h-4 text-[#2DB34A]" /> {selectedEvent.location}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        to="/mice/iletisim"
                                        className="inline-flex items-center justify-center gap-2 bg-[#2DB34A] hover:bg-[#249A3D] text-white font-bold py-3 px-8 rounded-xl transition-colors w-max"
                                    >
                                        Teklif İste
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
                        {t('mice.bentoGrid.title')}
                    </h2>
                    <p className="text-mice-text-muted max-w-2xl mx-auto">
                        {t('mice.bentoGrid.subtitle')}
                    </p>
                </div>

                {/* Bento Grid Layout - Dynamic Mapping -- RESIZED ROWS to 290px (+30%) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[290px]">
                    {items.map((item, index) => (
                        <BentoCard
                            key={index}
                            event={item}
                            onClick={() => setSelectedId(item.id || `event-${index}`)}
                            className="lg:col-span-1"
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/mice/isler-gucler" className="inline-block px-8 py-4 border border-mice-primary text-mice-primary rounded-full font-medium hover:bg-mice-primary hover:text-white transition-all duration-300">
                        {t('mice.bentoGrid.viewAll')}
                    </Link>
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
