import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Droplets, Calendar, ArrowRight } from 'lucide-react';
import { anime } from 'animejs';

const GatewayPageA = () => {
    const navigate = useNavigate();
    const mouseX = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Map mouse position to wave distortion/position
    // 0 -> Far Left (MICE expanded), 100 -> Far Right (Health expanded)
    // Default is 50 (Center)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        mouseX.set(percentage);
    };

    const handleMouseLeave = () => {
        mouseX.set(50); // Reset to center
    };

    // Calculate widths based on spring physics
    const leftWidth = useTransform(springX, (val) => `${val}%`);
    const rightWidth = useTransform(springX, (val) => `${100 - val}%`);

    // Opacity transitions for text
    const leftOpacity = useTransform(springX, [20, 50, 80], [1, 0.8, 0.4]);
    const rightOpacity = useTransform(springX, [20, 50, 80], [0.4, 0.8, 1]);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-screen w-full overflow-hidden flex bg-black cursor-none"
        >
            {/* Custom Cursor can be added here globally or just rely on CSS */}

            {/* HEALTH SIDE (LEFT) */}
            <motion.div
                style={{ width: leftWidth }}
                className="relative h-full bg-[#00AEEF] overflow-hidden flex items-center justify-center group"
                onClick={() => navigate('/health')}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                {/* Dynamic Content */}
                <motion.div
                    style={{ opacity: leftOpacity }}
                    className="relative z-10 text-center text-white"
                >
                    <div className="bg-white/20 p-6 rounded-full inline-block backdrop-blur-md mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Droplets className="w-16 h-16" />
                    </div>
                    <h1 className="text-6xl font-black mb-4 tracking-tighter">HEALTH</h1>
                    <p className="text-xl font-light opacity-90 max-w-sm mx-auto">Next Gen Liquid Supplements</p>

                    <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center text-sm font-bold tracking-widest uppercase border border-white/40 px-6 py-3 rounded-full hover:bg-white hover:text-[#00AEEF] transition-colors">
                            Enter World <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* SEPARATOR (The Wave) */}
            {/* Visual trick: The sides are just rects sharing space. 
            For a true wave, we might need an SVG overlay centered on the division line.
            Let's add a "Divider" visual that moves with the split. */}
            <motion.div
                style={{ left: leftWidth }}
                className="absolute top-0 bottom-0 w-1 bg-white/50 z-20 pointer-events-none shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
                {/* Optional: Add a 'handle' or graphic on the line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black/20 shadow-xl">
                    <ArrowRight className="w-5 h-5" />
                </div>
            </motion.div>

            {/* MICE SIDE (RIGHT) */}
            <motion.div
                style={{ width: rightWidth }}
                className="relative h-full bg-[#1a1a1a] overflow-hidden flex items-center justify-center group"
                onClick={() => navigate('/mice')}
            >
                {/* Hero Image Background */}
                <div className="absolute inset-0 opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700">
                    <img src="/images/mice/hero.png" alt="MICE" className="w-full h-full object-cover" />
                </div>

                {/* Dynamic Content */}
                <motion.div
                    style={{ opacity: rightOpacity }}
                    className="relative z-10 text-center text-white"
                >
                    <div className="bg-white/10 p-6 rounded-full inline-block backdrop-blur-md mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <Calendar className="w-16 h-16" />
                    </div>
                    <h1 className="text-6xl font-black mb-4 tracking-tighter">MICE</h1>
                    <p className="text-xl font-light opacity-90 max-w-sm mx-auto">Events & Organization</p>

                    <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center text-sm font-bold tracking-widest uppercase border border-white/40 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                            Enter World <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default GatewayPageA;
