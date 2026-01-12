import { ArrowRight, Zap, Shield, Droplets, Heart } from 'lucide-react';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';

const StylesPage = () => {
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    return (
        <div data-brand="health" className="bg-gray-100 min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-12 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                        Background Style Options
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        4 farklı arka plan stili örneği. Hangisini beğendiğinizi söyleyin!
                    </p>
                </div>
            </section>

            {/* ===== OPTION 1: Gradient Blob Backgrounds ===== */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                {/* Gradient blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-health-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-200/20 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />

                <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '80%' }}>
                    <div className="text-center mb-8">
                        <span className="bg-health-primary/10 text-health-primary px-4 py-2 rounded-full text-sm font-bold uppercase">
                            Option 1
                        </span>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection animation="fadeInUp" className="space-y-6">
                            <span className="text-health-primary text-sm font-semibold uppercase tracking-widest">
                                Gradient Blob Backgrounds
                            </span>
                            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                                Yumuşak Gradyan <span className="text-health-primary">Dalgaları</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Semi-transparent renkli blob'lar blur efektiyle arka planda. Modern, minimal ve dikkat dağıtmayan bir görünüm sağlar.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Zap className="w-5 h-5 text-health-primary" />
                                    <span>Soft, modern görünüm</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Shield className="w-5 h-5 text-health-primary" />
                                    <span>Metin okunabilirliğini bozmaz</span>
                                </li>
                            </ul>
                            <Button asChild variant="outline" size="lg" className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white rounded-full px-8">
                                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                    Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </AnimatedSection>

                        <div className="relative">
                            <img
                                src="/images/dailyshot_lifestyle.png"
                                alt="Demo"
                                className="w-full rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OPTION 2: Pattern Backgrounds ===== */}
            <section
                className="py-20 lg:py-32 relative overflow-hidden"
                style={{
                    backgroundColor: '#f8fafc',
                    backgroundImage: 'radial-gradient(circle, #00A3E0 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            >
                <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '80%' }}>
                    <div className="text-center mb-8">
                        <span className="bg-health-primary/10 text-health-primary px-4 py-2 rounded-full text-sm font-bold uppercase">
                            Option 2
                        </span>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/images/electrovit_sports.png"
                                alt="Demo"
                                className="w-full rounded-3xl shadow-2xl"
                            />
                        </div>

                        <AnimatedSection animation="fadeInUp" className="space-y-6 order-1 lg:order-2">
                            <span className="text-health-primary text-sm font-semibold uppercase tracking-widest">
                                Subtle Pattern Backgrounds
                            </span>
                            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                                Nokta <span className="text-health-primary">Deseni</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Tekrarlayan SVG pattern'ler (noktalar, grid, dalgalar) düşük opaklıkla. Sayfaya derinlik katar.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Droplets className="w-5 h-5 text-health-primary" />
                                    <span>Texture ve derinlik ekler</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Heart className="w-5 h-5 text-health-primary" />
                                    <span>Hafif ve şık görünüm</span>
                                </li>
                            </ul>
                            <Button asChild variant="outline" size="lg" className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white rounded-full px-8">
                                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                    Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ===== OPTION 3: Full Background Image with Overlay ===== */}
            <section
                className="py-20 lg:py-32 relative overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/dailyshot_lifestyle.png)',
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-health-primary/95 via-health-primary/85 to-health-primary/70" />

                <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '80%' }}>
                    <div className="text-center mb-8">
                        <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold uppercase backdrop-blur-sm">
                            Option 3
                        </span>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection animation="fadeInUp" className="space-y-6 text-white">
                            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
                                Full Background Image + Overlay
                            </span>
                            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                                Görsel Arka Plan ile <span className="text-white/90">Renk Katmanı</span>
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Lifestyle görseli arka planda, üzerinde marka renkli gradient overlay. Dramatik ve etkileyici görünüm.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/90">
                                    <Zap className="w-5 h-5" />
                                    <span>Güçlü görsel etki</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/90">
                                    <Shield className="w-5 h-5" />
                                    <span>Marka kimliğini ön plana çıkarır</span>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="bg-white text-health-primary hover:bg-gray-100 rounded-full px-8">
                                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                    Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </AnimatedSection>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <img
                                    src="/images/electrovit_sports.png"
                                    alt="Demo"
                                    className="w-full rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OPTION 4: Split Background Colors ===== */}
            <section className="py-0 lg:py-0 overflow-hidden">
                <div className="text-center py-8 bg-gray-100">
                    <span className="bg-[#FF9800]/10 text-[#FF9800] px-4 py-2 rounded-full text-sm font-bold uppercase">
                        Option 4
                    </span>
                </div>
                <div className="grid lg:grid-cols-2 min-h-[600px]">
                    {/* Left: Solid Color with Text */}
                    <div className="bg-[#FF9800] p-12 lg:p-20 flex items-center">
                        <AnimatedSection animation="fadeInUp" className="space-y-6 text-white max-w-lg">
                            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
                                Split Background Colors
                            </span>
                            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                                İki Tonlu <span className="text-white/90">Bölünmüş</span> Tasarım
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Yarısı solid renk (metin için), yarısı görsel. Bold, modern ve dikkat çekici bir layout.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/90">
                                    <Droplets className="w-5 h-5" />
                                    <span>Bold ve dikkat çekici</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/90">
                                    <Heart className="w-5 h-5" />
                                    <span>İçerik ve görsel net ayrılır</span>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="bg-white text-[#FF9800] hover:bg-gray-100 rounded-full px-8">
                                <a href="https://dailyshot.com.tr" target="_blank" rel="noopener noreferrer">
                                    Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </AnimatedSection>
                    </div>

                    {/* Right: Full Image */}
                    <div
                        className="bg-cover bg-center min-h-[400px] lg:min-h-full"
                        style={{ backgroundImage: 'url(/images/electrovit_sports.png)' }}
                    />
                </div>
            </section>

            {/* Summary */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                        Hangi Stili Tercih Ediyorsunuz?
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Yukarıdaki 4 seçenekten birini veya kombinasyonlarını kullanabiliriz. Tercihinizi belirtin!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-health-primary/20 text-health-primary px-6 py-3 rounded-full font-semibold">1. Gradient Blobs</span>
                        <span className="bg-health-primary/20 text-health-primary px-6 py-3 rounded-full font-semibold">2. Pattern</span>
                        <span className="bg-health-primary/20 text-health-primary px-6 py-3 rounded-full font-semibold">3. Image + Overlay</span>
                        <span className="bg-[#FF9800]/20 text-[#FF9800] px-6 py-3 rounded-full font-semibold">4. Split</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StylesPage;
