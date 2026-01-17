import { useBrand } from '@/hooks/useBrand';
import { useEffect } from 'react';

const fonts = [
    // Editorial & Luxury
    { name: 'Playfair Display', family: '"Playfair Display", serif', category: 'Editorial & Luxury' },
    { name: 'Cormorant Garamond', family: '"Cormorant Garamond", serif', category: 'Editorial & Luxury' },
    { name: 'Bodoni Moda', family: '"Bodoni Moda", serif', category: 'Editorial & Luxury' },
    { name: 'Cinzel', family: '"Cinzel", serif', category: 'Editorial & Luxury' },
    { name: 'Prata', family: '"Prata", serif', category: 'Editorial & Luxury' },
    { name: 'Marcellus', family: '"Marcellus", serif', category: 'Editorial & Luxury' },
    { name: 'Tenor Sans', family: '"Tenor Sans", sans-serif', category: 'Editorial & Luxury' },

    // Modern Minimalist
    { name: 'Montserrat', family: '"Montserrat", sans-serif', category: 'Modern Minimalist' },
    { name: 'Syne', family: '"Syne", sans-serif', category: 'Modern Minimalist' },
    { name: 'Outfit', family: '"Outfit", sans-serif', category: 'Modern Minimalist' },
    { name: 'Manrope', family: '"Manrope", sans-serif', category: 'Modern Minimalist' },
    { name: 'Space Grotesk', family: '"Space Grotesk", sans-serif', category: 'Modern Minimalist' },

    // Organic & Humanist
    { name: 'Nunito', family: '"Nunito", sans-serif', category: 'Organic & Humanist' },
    { name: 'Quicksand', family: '"Quicksand", sans-serif', category: 'Organic & Humanist' },
    { name: 'Lora', family: '"Lora", serif', category: 'Organic & Humanist' },
];

const FontDemoPage = () => {
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Premium Font Exploration</h1>
                    <p className="text-slate-600">Reviewing options for the "WellWorks Health" brand identity.</p>
                </div>

                <div className="space-y-16">
                    {['Editorial & Luxury', 'Modern Minimalist', 'Organic & Humanist'].map((cat) => (
                        <section key={cat}>
                            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-8 border-b pb-2">{cat}</h2>
                            <div className="grid gap-8">
                                {fonts.filter(f => f.category === cat).map((font) => (
                                    <div key={font.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                            <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded inline-block w-fit">
                                                {font.name}
                                            </span>
                                            <span className="text-xs text-slate-400">
                                                font-family: {font.family}
                                            </span>
                                        </div>

                                        {/* Main Brand Header */}
                                        <div style={{ fontFamily: font.family }} className="mb-6">
                                            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                                                WellWorks <span className="text-[#00AEEF]">Health</span>
                                            </h3>
                                        </div>

                                        {/* Headline Sample */}
                                        <div style={{ fontFamily: font.family }} className="mb-4">
                                            <p className="text-2xl text-slate-800 font-medium">
                                                Reimagining the future of corporate wellness.
                                            </p>
                                        </div>

                                        {/* Body Sample (Inter default vs Font) */}
                                        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Inter - Default)
                                            </p>
                                            <p style={{ fontFamily: font.family }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ({font.name})
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FontDemoPage;
