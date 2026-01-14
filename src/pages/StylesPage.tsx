import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/hooks/useBrand';

const StylesPage = () => {
    const { setBrand } = useBrand();

    // Ensure we are in health mode
    React.useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const imageSrc = "/images/two_brands_vision.png";

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <header className="mb-20 text-center">
                    <span className="text-slate-500 font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
                        Design System
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
                        Professional Micro-Interactions
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Subtle, refined animations designed to enhance perceived quality without distracting the user.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-24">

                    {/* 1. Cinematic Lift */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-slate-400"></span>
                                <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Style 01</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">Cinematic Lift</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A classic, reliable interaction. The element gently lifts up while checking a soft shadow,
                                creating a sense of physical layering and weightlessness.
                            </p>
                            <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <code className="text-xs text-slate-500 font-mono block">
                                    y: -8,<br />
                                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                                </code>
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center min-h-[400px]">
                            <motion.div
                                className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img src={imageSrc} alt="Lift" className="w-full max-w-[240px] object-contain" />
                            </motion.div>
                        </div>
                    </section>

                    {/* 2. Soft Focus & Scale */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-slate-100 p-12 rounded-2xl flex items-center justify-center min-h-[400px]">
                            <motion.div
                                className="cursor-pointer"
                                whileHover={{
                                    scale: 1.05,
                                    filter: "brightness(1.05) saturate(1.1)"
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <img src={imageSrc} alt="Focus" className="w-full max-w-[300px] object-contain drop-shadow-xl" />
                            </motion.div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-slate-400"></span>
                                <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Style 02</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">Soft Focus</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Mimics the behavior of a camera lens or eye focusing on an object.
                                A slight scale increase combined with enhanced brightness and saturation.
                            </p>
                            <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <code className="text-xs text-slate-500 font-mono block">
                                    scale: 1.05,<br />
                                    filter: "saturate(1.1)"
                                </code>
                            </div>
                        </div>
                    </section>

                    {/* 3. Modern Glass Card */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-slate-400"></span>
                                <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Style 03</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">Frosted Glass</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Uses backdrop-blur and border transparency adjustments to create a premium,
                                heavy glass feel. Perfect for high-end product showcases.
                            </p>
                            <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <code className="text-xs text-slate-500 font-mono block">
                                    backdropFilter: "blur(12px)",<br />
                                    borderColor: "rgba(255,255,255,0.8)"
                                </code>
                            </div>
                        </div>
                        <div className="bg-slate-900/5 p-12 rounded-2xl flex items-center justify-center min-h-[400px] relative overflow-hidden">
                            {/* Colorful backing blob */}
                            <div className="absolute w-64 h-64 bg-blue-400/30 rounded-full blur-3xl -top-10 -right-10" />
                            <div className="absolute w-64 h-64 bg-purple-400/30 rounded-full blur-3xl -bottom-10 -left-10" />

                            <motion.div
                                className="relative bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-lg overflow-hidden"
                                whileHover={{
                                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                                    borderColor: "rgba(255, 255, 255, 1)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                                <img src={imageSrc} alt="Glass" className="relative w-full max-w-[200px] object-contain" />
                            </motion.div>
                        </div>
                    </section>

                    {/* 4. Border Flow */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-white p-12 rounded-2xl border border-slate-100 flex items-center justify-center min-h-[400px]">
                            <motion.div
                                className="relative p-[2px] rounded-2xl overflow-hidden"
                                whileHover="hover"
                                initial="initial"
                            >
                                {/* Moving gradient border */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                                    variants={{
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1, rotate: 180 }
                                    }}
                                    transition={{ opacity: { duration: 0.2 }, rotate: { duration: 2, repeat: Infinity, ease: "linear" } }}
                                    style={{ scale: 1.5 }} // Ensure it covers the box while rotating
                                />
                                <div className="relative bg-white rounded-2xl p-6 h-full w-full">
                                    <img src={imageSrc} alt="Border" className="w-full max-w-[220px] object-contain" />
                                </div>
                            </motion.div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-slate-400"></span>
                                <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Style 04</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">Gradient Border</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A modern technique where the border itself animates.
                                Draws attention to the container shape without altering the content.
                            </p>
                        </div>
                    </section>

                    {/* 5. Perspective Tilt */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-slate-400"></span>
                                <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Style 05</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">3D Pitch</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A very subtle 3D rotation on the X and Y axis.
                                Creates a tangible feeling of depth and premium interactivity.
                            </p>
                            <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <code className="text-xs text-slate-500 font-mono block">
                                    rotateX: 5,<br />
                                    rotateY: -5,<br />
                                    perspective: 1000
                                </code>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-2xl flex items-center justify-center min-h-[400px]" style={{ perspective: 1000 }}>
                            <motion.div
                                whileHover={{
                                    rotateX: 5,
                                    rotateY: -5,
                                    scale: 1.05,
                                    boxShadow: "20px 20px 60px -10px rgba(0,0,0,0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                            >
                                <img src={imageSrc} alt="Tilt" className="w-full max-w-[240px] object-contain transform -translate-z-10" />
                            </motion.div>
                        </div>
                    </section>
                </div>

                <div className="mt-32 text-center">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-slate-300 text-slate-600 hover:bg-slate-100">
                        <a href="/">Back to Home</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StylesPage;
