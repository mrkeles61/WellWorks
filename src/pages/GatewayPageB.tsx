import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Droplets, Calendar } from 'lucide-react';

const GatewayPageB = () => {
    const navigate = useNavigate();
    const [hoveredSide, setHoveredSide] = useState<'health' | 'mice' | null>(null);

    // Dynamic classes based on hover state
    const healthWidth = hoveredSide === 'health' ? '60%' : hoveredSide === 'mice' ? '40%' : '50%';
    const miceWidth = hoveredSide === 'mice' ? '60%' : hoveredSide === 'health' ? '40%' : '50%';

    return (
        <div className="relative h-screen w-full flex bg-black overflow-hidden font-poppins text-white">

            {/* HEALTH SIDE */}
            <motion.div
                animate={{ width: healthWidth }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth exponential ease
                className="relative h-full overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredSide('health')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => navigate('/health')}
            >
                {/* Background "Video" (Simulated with persistent slow zoom) */}
                <motion.div
                    className="absolute inset-0 bg-[#00AEEF]"
                    initial={{ scale: 1 }}
                    animate={{
                        scale: hoveredSide === 'health' ? 1.1 : 1,
                        filter: hoveredSide === 'mice' ? 'grayscale(100%) brightness(0.3) blur(4px)' : 'grayscale(20%) brightness(0.8) blur(0px)'
                    }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Placeholder Gradient/Pattern representing "Liquid" */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-900 opacity-80" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />

                    {/* "Cinematic" panning effect */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ y: ['-5%', '0%'] }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
                    >
                        {/* Optional: Add bubbles or particles here */}
                    </motion.div>
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-10 text-center">
                    <motion.div
                        animate={{
                            y: hoveredSide === 'health' ? 0 : 20,
                            opacity: hoveredSide === 'health' ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/30 text-white backdrop-blur-sm shadow-2xl">
                            <Droplets className="w-10 h-10" />
                        </div>

                        <h2 className="text-xl tracking-[0.3em] font-light uppercase mb-2">Well Works</h2>
                        <h1 className="text-7xl font-black mb-4 tracking-tighter shadow-black drop-shadow-lg">HEALTH</h1>

                        <AnimatePresence>
                            {hoveredSide === 'health' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="max-w-md mx-auto text-lg mb-8 font-light text-blue-50">
                                        Revolutionary liquid supplements for a optimized life. experience the power of bioavailability.
                                    </p>
                                    <button className="bg-white text-[#00AEEF] px-8 py-4 rounded-none uppercase font-bold tracking-widest hover:bg-blue-50 transition-colors flex items-center gap-4 mx-auto">
                                        Explore Products <ArrowRight size={20} />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>

            {/* SEPARATOR LINE */}
            <div className="w-[1px] h-full bg-white/20 z-20" />

            {/* MICE SIDE */}
            <motion.div
                animate={{ width: miceWidth }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredSide('mice')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => navigate('/mice')}
            >
                {/* Background "Video" */}
                <motion.div
                    className="absolute inset-0 bg-[#1a1a1a]"
                    initial={{ scale: 1 }}
                    animate={{
                        scale: hoveredSide === 'mice' ? 1.1 : 1,
                        filter: hoveredSide === 'health' ? 'grayscale(100%) brightness(0.3) blur(4px)' : 'grayscale(20%) brightness(0.8) blur(0px)'
                    }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Image or Dark Gradient */}
                    <img src="/images/mice/hero.png" alt="MICE Events" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-10 text-center">
                    <motion.div
                        animate={{
                            y: hoveredSide === 'mice' ? 0 : 20,
                            opacity: hoveredSide === 'mice' ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/30 text-white backdrop-blur-sm shadow-2xl">
                            <Calendar className="w-10 h-10" />
                        </div>

                        <h2 className="text-xl tracking-[0.3em] font-light uppercase mb-2">Well Works</h2>
                        <h1 className="text-7xl font-black mb-4 tracking-tighter shadow-black drop-shadow-lg">MICE</h1>

                        <AnimatePresence>
                            {hoveredSide === 'mice' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="max-w-md mx-auto text-lg mb-8 font-light text-gray-300">
                                        Legendary events, festivals, and corporate organizations. Creating unforgettable moments since 2012.
                                    </p>
                                    <button className="bg-white text-black px-8 py-4 rounded-none uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-4 mx-auto">
                                        Discover Events <ArrowRight size={20} />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>

            {/* CENTRAL BRANDING (Optional, fades out on hover) */}
            <motion.div
                className="absolute top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none mix-blend-difference"
                animate={{ opacity: hoveredSide ? 0 : 1 }}
            >
                <div className="text-center">
                    <span className="block text-xs uppercase tracking-[0.5em] text-white/70 mb-2">Welcome to</span>
                    <span className="text-2xl font-bold text-white tracking-widest border-b border-white pb-1">WELL WORKS</span>
                </div>
            </motion.div>

        </div>
    );
};

export default GatewayPageB;
