import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Droplets, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import Assets
import electrovitHeroBottle from '/images/electrovit_hero_bottle.png';
// Import side product images (using the ones from products.ts for accuracy)
import watermelonImg from '@/assets/products/elct2.jpg';
import orangeImg from '@/assets/products/prtk5.jpg';

interface InteractiveCenterpieceProps {
    onFlavorChange?: (flavor: 'orange' | 'watermelon') => void;
}

type Flavor = 'orange' | 'watermelon';

const FLAVORS = {
    orange: {
        id: 'orange',
        name: 'Portakal',
        menuTitle: 'Electrovit Portakal',
        color: '#F58220',
        sideImage: orangeImg,
        heroImage: electrovitHeroBottle,
        filter: 'none',
        accent: 'bg-orange-500',
        text: 'text-orange-500'
    },
    watermelon: {
        id: 'watermelon',
        name: 'Karpuz',
        menuTitle: 'Electrovit Karpuz',
        color: '#EF4444',
        sideImage: watermelonImg,
        heroImage: electrovitHeroBottle,
        filter: 'hue-rotate(-40deg) saturate(1.2) brightness(0.9)', // Simulated red
        accent: 'bg-red-500',
        text: 'text-red-500'
    }
};

const HOTSPOTS = [
    { id: 1, x: 35, y: 30, label: 'Potasyum (K+)', icon: Zap, desc: 'Kas fonksiyonlarını düzenler.' },
    { id: 2, x: 65, y: 50, label: 'Magnezyum (Mg++)', icon: Activity, desc: 'Yorgunluğu azaltır.' },
    { id: 3, x: 40, y: 70, label: 'Sodyum (Na+)', icon: Droplets, desc: 'Sıvı dengesini korur.' },
];

const InteractiveCenterpiece = ({ onFlavorChange }: InteractiveCenterpieceProps) => {
    const [activeFlavor, setActiveFlavor] = useState<Flavor>('orange');
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    const handleFlavorChange = (flavor: Flavor) => {
        setActiveFlavor(flavor);
        setActiveHotspot(null);
        if (onFlavorChange) onFlavorChange(flavor);
    };

    const currentTheme = FLAVORS[activeFlavor];

    return (
        <div className="relative w-full max-w-7xl mx-auto h-[700px] flex items-center justify-between px-4 lg:px-10 font-poppins">

            {/* LEFT: Watermelon Selector */}
            <motion.div
                className={cn(
                    "hidden lg:flex flex-col items-center gap-4 cursor-pointer transition-all duration-300 group",
                    activeFlavor === 'watermelon' ? "scale-110 opacity-100" : "scale-90 opacity-60 hover:opacity-100 hover:scale-100"
                )}
                onClick={() => handleFlavorChange('watermelon')}
                whileHover={{ x: 10 }}
            >
                <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-xl border-4 border-transparent group-hover:border-red-400/50 overflow-hidden">
                    <img src={FLAVORS.watermelon.sideImage} alt="Watermelon" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="text-center">
                    <h3 className="text-white font-bold text-lg">Electrovit Karpuz</h3>
                    <span className={cn("text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white group-hover:bg-red-500 transition-colors", activeFlavor === 'watermelon' ? "bg-red-500" : "")}>
                        Karpuz Aromalı
                    </span>
                </div>
            </motion.div>

            {/* CENTER: Hero Bottle */}
            <div className="relative flex-1 h-full flex items-center justify-center">
                {/* Background Glow */}
                <div className={cn("absolute inset-0 bg-gradient-radial from-white/20 to-transparent blur-3xl transition-all duration-1000", activeFlavor === 'orange' ? "text-orange-500" : "text-red-500")} />

                <div className="relative w-[280px] md:w-[320px] lg:w-[380px] z-10 transition-all duration-500 ease-in-out">
                    <motion.img
                        key={activeFlavor}
                        src={currentTheme.heroImage}
                        alt="Electrovit Hero"
                        initial={{ opacity: 0.8, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-auto drop-shadow-2xl"
                        style={{ filter: currentTheme.filter }}
                    />

                    {/* Hotspots */}
                    <div className="absolute inset-0 z-20">
                        {HOTSPOTS.map((hotspot) => (
                            <div
                                key={hotspot.id}
                                className="absolute"
                                style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                            >
                                <button
                                    onMouseEnter={() => setActiveHotspot(hotspot.id)}
                                    onMouseLeave={() => setActiveHotspot(null)}
                                    className="relative group/hotspot focus:outline-none"
                                >
                                    <span className="flex h-6 w-6 relative">
                                        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", currentTheme.accent)}></span>
                                        <span className={cn("relative inline-flex rounded-full h-6 w-6 border-2 border-white bg-white/20 backdrop-blur-sm", currentTheme.accent)}></span>
                                    </span>

                                    {/* Tooltip */}
                                    <AnimatePresence>
                                        {activeHotspot === hotspot.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                                className="absolute left-1/2 bottom-full mb-4 -translate-x-1/2 w-48 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl text-left pointer-events-none z-50 origin-bottom"
                                            >
                                                <div className={cn("flex items-center gap-2 mb-1", currentTheme.text)}>
                                                    <hotspot.icon className="w-4 h-4" />
                                                    <span className="font-bold text-xs uppercase">{hotspot.label}</span>
                                                </div>
                                                <p className="text-slate-600 text-[11px] leading-tight">
                                                    {hotspot.desc}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT: Orange Selector */}
            <motion.div
                className={cn(
                    "hidden lg:flex flex-col items-center gap-4 cursor-pointer transition-all duration-300 group",
                    activeFlavor === 'orange' ? "scale-110 opacity-100" : "scale-90 opacity-60 hover:opacity-100 hover:scale-100"
                )}
                onClick={() => handleFlavorChange('orange')}
                whileHover={{ x: -10 }}
            >
                <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-xl border-4 border-transparent group-hover:border-orange-400/50 overflow-hidden">
                    <img src={FLAVORS.orange.sideImage} alt="Orange" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="text-center">
                    <h3 className="text-white font-bold text-lg">Electrovit Portakal</h3>
                    <span className={cn("text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white group-hover:bg-orange-500 transition-colors", activeFlavor === 'orange' ? "bg-orange-500" : "")}>
                        Portakal Aromalı
                    </span>
                </div>
            </motion.div>

            {/* Mobile Selector (If Layout Collapses) */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 flex justify-center gap-4 py-6">
                <button onClick={() => handleFlavorChange('watermelon')} className={cn("px-4 py-2 rounded-full text-xs font-bold", activeFlavor === 'watermelon' ? "bg-red-500 text-white" : "bg-white/10 text-white")}>Karpuz</button>
                <button onClick={() => handleFlavorChange('orange')} className={cn("px-4 py-2 rounded-full text-xs font-bold", activeFlavor === 'orange' ? "bg-orange-500 text-white" : "bg-white/10 text-white")}>Portakal</button>
            </div>

        </div>
    );
};

export default InteractiveCenterpiece;
