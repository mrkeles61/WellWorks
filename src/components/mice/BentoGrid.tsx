import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoEvent {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    location: string;
    image: string;
    video?: string;
    featured?: boolean;
    viewingCount?: number;
    upcoming?: boolean;
}

// Sample events data
const events: BentoEvent[] = [
    {
        id: '1',
        title: 'Yılbaşı Festivali',
        subtitle: 'Kış büyüsünü yaşayın',
        date: '31 Aralık 2025',
        location: 'İstanbul, Zorlu PSM',
        image: '/placeholder-event-1.jpg',
        featured: true,
        upcoming: true,
        viewingCount: 47,
    },
    {
        id: '2',
        title: 'Kurumsal Lansman',
        subtitle: 'Markanızı tanıtın',
        date: '15 Ocak 2026',
        location: 'Ankara, Congresium',
        image: '/placeholder-event-2.jpg',
    },
    {
        id: '3',
        title: 'Gala Gecesi',
        subtitle: 'Şıklığın zirvesi',
        date: '20 Şubat 2026',
        location: 'İzmir, Swissôtel',
        image: '/placeholder-event-3.jpg',
        upcoming: true,
        viewingCount: 23,
    },
    {
        id: '4',
        title: 'Konferans',
        subtitle: 'Global perspektifler',
        date: '10 Mart 2026',
        location: 'Antalya, Regnum',
        image: '/placeholder-event-4.jpg',
    },
    {
        id: '5',
        title: 'Team Building',
        subtitle: 'Ekip ruhu güçlendirin',
        date: '25 Mart 2026',
        location: 'Kapadokya',
        image: '/placeholder-event-5.jpg',
    },
];

interface BentoCardProps {
    event: BentoEvent;
    className?: string;
}

const BentoCard = ({ event, className }: BentoCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={cn(
                'relative overflow-hidden rounded-2xl cursor-pointer group',
                'border border-white/10',
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background with Ken Burns Effect */}
            <div
                className={cn(
                    'absolute inset-0 bg-cover bg-center transition-all duration-700',
                    isHovered ? 'grayscale-0 scale-110' : 'grayscale scale-100'
                )}
                style={{
                    backgroundImage: `url(${event.image})`,
                    animation: !isHovered ? 'kenBurns 20s ease-in-out infinite alternate' : 'none',
                }}
            />

            {/* Dark overlay */}
            <div className={cn(
                'absolute inset-0 transition-opacity duration-500',
                isHovered ? 'bg-black/40' : 'bg-black/60'
            )} />

            {/* Scarcity indicator for upcoming events */}
            {event.upcoming && event.viewingCount && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                    <span className="text-xs text-white font-medium">
                        {event.viewingCount} kişi şu an inceliyor
                    </span>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className={cn(
                        'font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-2',
                        'transition-all duration-300',
                        isHovered && 'text-mice-primary'
                    )}>
                        {event.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{event.subtitle}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" strokeWidth={1.5} />
                            {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" strokeWidth={1.5} />
                            {event.location}
                        </span>
                    </div>

                    {/* CTA on hover */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                    >
                        <button className="px-6 py-2 bg-mice-primary text-white rounded-full font-medium text-sm flex items-center gap-2 hover:bg-mice-primary-hover transition-colors">
                            Detayları Gör
                            <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    return (
        <section className="py-16 md:py-24 bg-black">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
                        Etkinliklerimiz
                    </h2>
                    <p className="text-mice-text-muted max-w-2xl mx-auto">
                        Dünya standartlarında organizasyonlar ile markanızı unutulmaz anlarla buluşturuyoruz
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
                    {/* Featured large card */}
                    <BentoCard
                        event={events[0]}
                        className="md:col-span-2 md:row-span-2"
                    />

                    {/* Regular cards */}
                    <BentoCard event={events[1]} />
                    <BentoCard event={events[2]} />
                    <BentoCard event={events[3]} />
                    <BentoCard event={events[4]} />
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <button className="px-8 py-4 border border-mice-primary text-mice-primary rounded-full font-medium hover:bg-mice-primary hover:text-white transition-all duration-300">
                        Tüm Etkinlikleri Görüntüle
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
