import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StoreLocatorMap from '@/components/map/StoreLocatorMap';
import AnimatedSection from '@/components/shared/AnimatedSection';

const StoreLocatorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            <main className="pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <AnimatedSection animation="fadeInUp">
                        <div className="text-center mb-8">
                            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 block">
                                En Yakın Satış Noktası
                            </span>
                            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                                Eczane ve Satış Noktaları
                            </h1>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Size en yakın Dailyshot ve Electrovit satış noktalarını harita üzerinden kolayca bulabilir,
                                tek tıkla yol tarifi alabilirsiniz.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <StoreLocatorMap />
                    </AnimatedSection>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default StoreLocatorPage;
