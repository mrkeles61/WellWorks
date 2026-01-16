import { useEffect } from 'react';
import { useBrand } from '@/hooks/useBrand';
import InteractiveCenterpiece from '@/components/premium/InteractiveCenterpiece';

const ElectrovitPremiumPage = () => {
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    // This background matches the header color per user request (#00A3E0 sky blue area) 
    // but darker to let the interactive piece pop.
    // Actually user said: "theme of the page, use the blue that is in the header" -> #00A3E0.
    // But since the Centerpiece has its own gradients, we'll keep the page clean.

    return (
        <div className="bg-[#00A3E0] min-h-screen text-white selection:bg-white/30 font-inter">

            {/* Main Interactive Hero */}
            <section className="relative w-full min-h-screen flex flex-col pt-20">

                {/* Brand Message (User Request) */}
                <div className="container mx-auto px-6 pt-10 pb-4 text-center z-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins text-white drop-shadow-sm mb-4 tracking-tight">
                        Su İçemeyenler İçin Tasarlandı.
                    </h1>
                    <p className="text-blue-50 text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">
                        Günlük elektrolit ihtiyacını karşılayarak vücudun sıvı dengesini, sinir iletimi ve kas fonksiyonlarını destekler.
                    </p>
                </div>

                {/* The Interactive Component */}
                <div className="flex-grow flex items-center justify-center w-full">
                    <InteractiveCenterpiece />
                </div>

            </section>

        </div>
    );
};

export default ElectrovitPremiumPage;
