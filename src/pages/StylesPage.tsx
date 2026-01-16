import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useBrand } from '@/hooks/useBrand';

const StylesPage = () => {
    const { setBrand } = useBrand();

    // Ensure we are in health mode
    React.useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const imageSrc = "/images/dailyshot_hero_bg.png"; // Using Dailyshot image for context

    const styles = [
        {
            id: '01',
            name: 'Cinematic Lift',
            desc: 'A classic, reliable interaction. The element gently lifts up while checking a soft shadow.',
            component: (
                <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer"
                >
                    <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                </motion.div>
            )
        },
        {
            id: '02',
            name: 'Glossy Sweep',
            desc: 'A white sheen sweeps across the image on hover, creating a premium "new" feel.',
            component: (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer group">
                    <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1s_infinite] w-[200%] h-full pointer-events-none" />
                    <style>{`
                        @keyframes shimmer {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                    `}</style>
                </div>
            )
        },
        {
            id: '03',
            name: 'Gradient Border + Gloss (Requested)',
            desc: 'Combines a gradient border reveal with a subtle gloss effect.',
            component: (
                <div className="relative w-full aspect-video rounded-2xl p-[3px] overflow-hidden cursor-pointer group bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Gradient Border Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Inner Content Component */}
                    <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white">
                        <img src={imageSrc} alt="Demo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                        {/* Gloss Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                </div>
            )
        },
        {
            id: '04',
            name: 'Neon Glow',
            desc: 'A soft, colored glow appears behind the image, simulating light emission.',
            component: (
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative w-full aspect-video rounded-2xl bg-white cursor-pointer"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                        <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            )
        },
        {
            id: '05',
            name: '3D Tilt',
            desc: 'Tracks mouse movement to tilt the card in 3D space.',
            component: (() => {
                const x = useMotionValue(0);
                const y = useMotionValue(0);
                const rotateX = useTransform(y, [-100, 100], [5, -5]);
                const rotateY = useTransform(x, [-100, 100], [-5, 5]);

                return (
                    <motion.div
                        style={{ x, y, rotateX, rotateY, z: 100, perspective: 1000 }}
                        whileHover={{ scale: 1.05 }}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            x.set(e.clientX - rect.left - rect.width / 2);
                            y.set(e.clientY - rect.top - rect.height / 2);
                        }}
                        onMouseLeave={() => {
                            x.set(0);
                            y.set(0);
                        }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer transition-shadow"
                    >
                        <img src={imageSrc} alt="Demo" className="w-full h-full object-cover pointer-events-none" />
                    </motion.div>
                );
            })()
        },
        {
            id: '06',
            name: 'Scale & Reveal',
            desc: 'Image zooms in while a dark overlay and text reveal themselves.',
            component: (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group">
                    <img src={imageSrc} alt="Demo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Discover More
                        </span>
                    </div>
                </div>
            )
        },
        {
            id: '07',
            name: 'Magnetic Float',
            desc: 'The image follows the cursor slightly, creating a "magnetic" feel.',
            component: (
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                >
                    <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                </motion.div>
            )
        },
        {
            id: '08',
            name: 'Ripple Effect',
            desc: 'Material Design-like ripple effect on click.',
            component: (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm cursor-pointer active:scale-95 transition-transform duration-100">
                    <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                    {/* Simplified ripple for demo purposes */}
                </div>
            )
        },
        {
            id: '09',
            name: 'Glass Overlay',
            desc: 'A frosted glass pane slides up on hover.',
            component: (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm cursor-pointer group">
                    <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 top-1/2 bg-white/10 backdrop-blur-md border-t border-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                        <span className="text-white font-medium drop-shadow-md">details</span>
                    </div>
                </div>
            )
        },
        {
            id: '10',
            name: 'Focus Border',
            desc: 'A clean border draws itself around the image.',
            component: (
                <div className="relative w-full aspect-video rounded-2xl p-1 overflow-hidden cursor-pointer group">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors duration-300" />
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <img src={imageSrc} alt="Demo" className="w-full h-full object-cover" />
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <header className="mb-20 text-center">
                    <span className="text-slate-500 font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
                        Design System
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
                        Interaction Designs
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Select an animation style for the Dailyshot hero image.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-16">
                    {styles.map((style) => (
                        <section key={style.id} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-[1px] bg-slate-400"></span>
                                    <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Style {style.id}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-slate-900">{style.name}</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {style.desc}
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center">
                                {style.component}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StylesPage;
