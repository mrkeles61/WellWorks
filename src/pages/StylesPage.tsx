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

    const imageSrc = "/images/two_brands_vision.png"; // Using the new image

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-poppins text-gray-900 mb-4">
                        Animation Styles (V3 - Extreme)
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Evaluating high-impact, clearly visible animation techniques.
                    </p>
                </header>

                <div className="space-y-24">
                    {/* 1. Levitation (Retained) */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block">Option 1</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">The "Levitation" Float</h2>
                            <p className="text-gray-600 mb-6">
                                A gentle, continuous up-and-down motion.
                            </p>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800 font-mono">
                                {`animate={{ y: [0, -15, 0] }}`}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px]">
                            <motion.img
                                src={imageSrc}
                                alt="Levitation Demo"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </section>

                    {/* ... (Other retained options moved to bottom or kept) ... */}
                    {/* Let's prioritize the NEW EXTREME ones first for the user to see immediately */}

                    {/* NEW 1. Cyber Glitch */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 bg-gray-900 p-8 rounded-3xl shadow-xl flex items-center justify-center min-h-[400px] overflow-hidden">
                            <motion.img
                                src={imageSrc}
                                alt="Cyber Glitch Demo"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                                animate={{
                                    x: [0, -5, 5, -5, 5, 0],
                                    skewX: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Extreme 1</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Cyber Glitch</h2>
                            <p className="text-gray-600 mb-6">
                                Aggressive, rapid displacement and skewing. Impossible to miss.
                            </p>
                            <div className="p-4 bg-red-50 rounded-lg border border-red-100 text-sm text-red-800 font-mono">
                                {`animate={{ x: [-5, 5], skewX: [5, -5] }}`}
                            </div>
                        </div>
                    </section>

                    {/* NEW 2. Heartbeat Shock */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-2 block">Extreme 2</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Heartbeat Shock</h2>
                            <p className="text-gray-600 mb-6">
                                A violent, thumping scale effect. Like a strong heartbeat or bass kick.
                            </p>
                            <div className="p-4 bg-pink-50 rounded-lg border border-pink-100 text-sm text-pink-800 font-mono">
                                {`animate={{ scale: [1, 1.2, 0.9, 1] }}`}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px]">
                            <motion.img
                                src={imageSrc}
                                alt="Heartbeat Demo"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                                animate={{ scale: [1, 1.15, 0.95, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                            />
                        </div>
                    </section>

                    {/* NEW 3. Neon Strobe */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 bg-black p-8 rounded-3xl shadow-xl flex items-center justify-center min-h-[400px]">
                            <motion.img
                                src={imageSrc}
                                alt="Neon Strobe Demo"
                                className="w-full max-w-md object-contain"
                                animate={{
                                    opacity: [1, 0.4, 1, 0.4, 1],
                                    filter: ["brightness(1)", "brightness(2)", "brightness(1)"]
                                }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.5 }}
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2 block">Extreme 3</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Neon Strobe</h2>
                            <p className="text-gray-600 mb-6">
                                Rapid flickering of brightness and opacity. High energy (Warning: Flashing lights).
                            </p>
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800 font-mono">
                                {`animate={{ opacity: [1, 0.4], filter: "brightness(2)" }}`}
                            </div>
                        </div>
                    </section>

                    {/* NEW 4. 3D Spin */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-2 block">Extreme 4</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">3D Spin</h2>
                            <p className="text-gray-600 mb-6">
                                A continuous 360-degree rotation. Shows the product "floating" in 3D space.
                            </p>
                            <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-100 text-sm text-cyan-800 font-mono">
                                {`animate={{ rotateY: 360 }}`}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px]" style={{ perspective: 1000 }}>
                            <motion.img
                                src={imageSrc}
                                alt="3D Spin Demo"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                                animate={{ rotateY: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </section>

                    {/* NEW 5. Rainbow Shift */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px]">
                            <motion.img
                                src={imageSrc}
                                alt="Rainbow Shift Demo"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                                animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-2 block">Extreme 5</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Rainbow Shift</h2>
                            <p className="text-gray-600 mb-6">
                                Cycles through the entire color spectrum rapidly. Very psychedelic.
                            </p>
                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 text-sm text-purple-800 font-mono">
                                {`animate={{ filter: "hue-rotate(360deg)" }}`}
                            </div>
                        </div>
                    </section>

                    {/* Retained: Glossy Sheen */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px] overflow-hidden relative group">
                            <div className="relative w-full max-w-md">
                                <img
                                    src={imageSrc}
                                    alt="Glossy Sheen Demo"
                                    className="w-full object-contain drop-shadow-2xl relative z-10"
                                />
                                <motion.div
                                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
                                    initial={{ x: '-150%' }}
                                    animate={{ x: '250%' }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                        <div>
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">Standard</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Glossy Sheen Sweep</h2>
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 text-sm text-orange-800 font-mono">
                                {`animate={{ x: '250%' }}`}
                            </div>
                        </div>
                    </section>

                    {/* Retained: Pulse & Glow */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-2 block">Standard</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Pulse & Glow</h2>
                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 text-sm text-purple-800 font-mono">
                                {`animate={{ drop-shadow(...) }}`}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px]">
                            <motion.img
                                src={imageSrc}
                                alt="Pulse Demo"
                                className="w-full max-w-md object-contain"
                                animate={{
                                    filter: [
                                        "drop-shadow(0 10px 15px rgba(59, 130, 246, 0.2))",
                                        "drop-shadow(0 20px 30px rgba(59, 130, 246, 0.5))",
                                        "drop-shadow(0 10px 15px rgba(59, 130, 246, 0.2))"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </section>

                    {/* Retained: Spotlight Scan */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl flex items-center justify-center min-h-[400px]">
                            <motion.div
                                className="relative w-full max-w-md"
                                animate={{
                                    maskImage: [
                                        "radial-gradient(circle at 0% 50%, black 20%, transparent 70%)",
                                        "radial-gradient(circle at 100% 50%, black 20%, transparent 70%)",
                                        "radial-gradient(circle at 0% 50%, black 20%, transparent 70%)"
                                    ]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                style={{ webkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)" }}
                            >
                                <img
                                    src={imageSrc}
                                    alt="Spotlight Demo"
                                    className="w-full object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>
                        <div>
                            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2 block">Standard</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Spotlight Scan</h2>
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800 font-mono">
                                Mask Image Animation
                            </div>
                        </div>
                    </section>

                </div>

                <div className="mt-20 text-center">
                    <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-black rounded-full px-8">
                        <a href="/">Back to Home</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StylesPage;
