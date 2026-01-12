import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StoreLocatorMap from '@/components/map/StoreLocatorMap';
import AnimatedSection from '@/components/shared/AnimatedSection';

const StoreLocatorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp">
                        <div className="text-center mb-12">
                            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4 block">
                                En Yakın Satış Noktası
                            </span>
                            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                                Eczane ve Satış Noktaları
                            </h1>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Size en yakın Dailyshot ve Electrovit satış noktalarını harita üzerinden kolayca bulabilir,
                                tek tıkla yol tarifi alabilirsiniz.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <StoreLocatorMap />
                    </AnimatedSection>

                    {/* Additional Info / List View can be added here later */}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default StoreLocatorPage;
