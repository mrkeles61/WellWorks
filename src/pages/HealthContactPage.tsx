import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/context/BrandContext';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from '@/components/shared/AnimatedSection';

const HealthContactPage = () => {
    const { t } = useTranslation();
    const { setBrand } = useBrand();
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setBrand('health');
    }, [setBrand]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div data-brand="health" className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-health-primary/10 via-white to-gray-50">
                <div className="container mx-auto px-6">
                    <AnimatedSection animation="fadeInUp" className="text-center max-w-3xl mx-auto">
                        <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            {t('nav.contact')}
                        </span>
                        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                            Bizimle <span className="text-health-primary">İletişime</span> Geçin
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Sorularınız, önerileriniz veya işbirliği talepleriniz için bize ulaşın. En kısa sürede size dönüş yapacağız.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <AnimatedSection animation="fadeInLeft">
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-8">
                                    İletişim Bilgilerimiz
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-health-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-health-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                                            <p className="text-gray-600">
                                                Emniyetevler Mahallesi Kale Sokak 2/A<br />
                                                Kağıthane/İSTANBUL
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-health-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-health-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                                            <a href="tel:+905360320838" className="text-health-primary hover:underline">
                                                +90 536 032 08 38
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-health-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-health-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                                            <a href="mailto:info@wellworksturkey.com" className="text-health-primary hover:underline">
                                                info@wellworksturkey.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                                    <h3 className="font-semibold text-gray-900 mb-3">Çalışma Saatleri</h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Pazartesi - Cuma</span>
                                            <span className="font-medium">09:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Cumartesi</span>
                                            <span className="font-medium">10:00 - 14:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pazar</span>
                                            <span className="font-medium text-red-500">Kapalı</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form */}
                        <AnimatedSection animation="fadeInRight">
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-8">
                                    Mesaj Gönderin
                                </h2>

                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mesajınız Gönderildi!</h3>
                                        <p className="text-gray-600">En kısa sürede size dönüş yapacağız.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                                                <Input
                                                    placeholder="Adınız Soyadınız"
                                                    className="border-gray-200 focus:border-health-primary focus:ring-health-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                                                <Input
                                                    type="email"
                                                    placeholder="ornek@email.com"
                                                    className="border-gray-200 focus:border-health-primary focus:ring-health-primary"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                                            <Input
                                                type="tel"
                                                placeholder="+90 5XX XXX XX XX"
                                                className="border-gray-200 focus:border-health-primary focus:ring-health-primary"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                                            <Input
                                                placeholder="Mesaj konusu"
                                                className="border-gray-200 focus:border-health-primary focus:ring-health-primary"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                                            <Textarea
                                                placeholder="Mesajınızı buraya yazın..."
                                                rows={5}
                                                className="border-gray-200 focus:border-health-primary focus:ring-health-primary resize-none"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-health-primary hover:bg-health-primary/90 text-white font-semibold py-6 rounded-xl"
                                        >
                                            <Send className="w-5 h-5 mr-2" />
                                            Mesaj Gönder
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d28.97!3d41.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQ4LjAiTiAyOMKwNTgnMTIuMCJF!5e0!3m2!1str!2str!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Well Works Turkey Location"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HealthContactPage;
