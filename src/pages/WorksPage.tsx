import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBrand } from '@/hooks/useBrand';
import { ArrowUpRight, Calendar, MapPin, Users, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

/**
 * İşler Güçler (Works/Portfolio) Page
 * Large showcase cards for MICE events and projects
 */

// Featured works/projects data
const featuredWorks = [
    {
        id: '1',
        title: 'HoliFest İstanbul 2024',
        subtitle: 'Renk Festivali',
        description: "Hindistan'ın geleneksel Holi festivalini İstanbul'a taşıdık. 15,000+ katılımcıyla şehrin en renkli etkinliği.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAYhIK-nGMz49c4JMrT1z0kXLI7fhR9CrKsYFAQdAjkRUkBeHWM986voT0DQliTSrXHdeydatBRnLyJrltL7-WRpdzIpFk-wHdKWyCancjBLvzeioGRjPgDh-2uhcOJfCjsNMDmSpjD-8BYDDSywzjKHY_FHOV-pG0eHkZLpfGApyh_Rk3HHipKiZc2m-xT3XrhdZPfRAN5c206NulzamjFK-DMRfB6UFhKoQP5wALDMMinrqSece_S6v0P8QfATkQVxchswtiA',
        date: 'Mart 2024',
        location: 'İstanbul, Küçükçiftlik Park',
        attendees: '15,000+',
        category: 'Festival',
        featured: true,
    },
    {
        id: '2',
        title: 'Imera & Niks Carnaval',
        subtitle: 'Karnaval',
        description: 'Müzik ve eğlencenin iç içe geçtiği benzersiz bir karnaval deneyimi. Görsel şölenler ve unutulmaz performanslar.',
        image: '/images/mice/imera-carnival.png',
        date: 'Yaz 2024',
        location: 'Bodrum',
        attendees: '5,000+',
        category: 'Karnaval',
        featured: true,
    },
    {
        id: '3',
        title: 'Yıldızlı Konser Akşamları',
        subtitle: 'Konser Serisi',
        description: "Türkiye'nin en sevilen sanatçılarıyla yıldızların altında unutulmaz konserler.",
        image: '/images/mice/yildizli-konser.png',
        date: 'Yaz 2024',
        location: 'Çeşme Açıkhava',
        attendees: '10,000+',
        category: 'Konser',
    },
    {
        id: '4',
        title: 'Christmas Market Istanbul',
        subtitle: 'Kış Pazarı',
        description: 'Avrupa tarzı yılbaşı pazarı deneyimi. Butik stantlar, canlı müzik ve sıcak içeceklerle büyülü bir atmosfer.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4ncuXlL5kbcoY3syjBZySjH-voCBmDjOIFNpel4dclT_ilZiZgUBVrFmXaYyDKpdMM1uVzsFsBFBjCqDC4Z33IEtGdOXCnxHgi_D35C3IJ8QDyR1YH-meF5P0OXToF9EciSKfLjaua2LLTumOVAcFTI7JzJtBoa4H-8AhaemHNzlD74sJxDestfqPFFUsdfdj8FgsuSELg1S0M2SGwn5xwru5VSNOtfda9h1-bDEnzda7AuMq0HpQOddbof3hcGvm7H1kHJrig',
        date: 'Aralık 2023',
        location: 'İstanbul, Maçka Parkı',
        attendees: '50,000+',
        category: 'Pazar',
    },
    {
        id: '5',
        title: 'Gusto Weekend',
        subtitle: 'Gastronomi Festivali',
        description: 'Gastronomi, lezzet ve yaşam tarzını kutlayan bir hafta sonu festivali. Şef tadımları ve atölyeler.',
        image: '/images/mice/gusto-weekend.png',
        date: 'Sonbahar 2024',
        location: 'İstanbul',
        attendees: '8,000+',
        category: 'Festival',
    },
    {
        id: '6',
        title: 'Business Leisure',
        subtitle: 'VIP Deneyim',
        description: 'Profesyonel ağ kurma ile premium eğlenceyi birleştiren seçkin etkinlikler. Networking ve eğlence bir arada.',
        image: '/images/mice/business-leisure.png',
        date: 'Sürekli',
        location: 'Çeşitli Lokasyonlar',
        attendees: 'Özel Davetli',
        category: 'Networking',
    },
];

const WorksPage = () => {
    const { setBrand } = useBrand();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        setBrand('mice');
    }, [setBrand]);

    const selectedWork = featuredWorks.find(w => w.id === selectedId);

    return (
        <div data-brand="mice" className="bg-[#0a0a0a] text-white min-h-screen">
            {/* Hero Section with NEW Background Image */}
            <section
                className="relative py-24 md:py-32 px-4 border-b border-white/10 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url(/images/mice/hero-bg.png)' }}
            >
                {/* Overlay for readability over the generated background */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <AnimatedSection animation="fadeInUp">
                        <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
                            İşler<br />
                            <span className="text-mice-primary">Güçler</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl font-light">
                            12 yılda 100+ başarılı etkinlik. Her biri bir hikaye, her biri bir deneyim.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Featured Works - Large Showcase */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto max-w-7xl px-4">
                    {/* Featured Grid - 2 Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {featuredWorks.filter(w => w.featured).map((work, index) => (
                            <AnimatedSection key={work.id} animation="fadeInUp" delay={index * 100}>
                                <motion.article
                                    layoutId={`card-${work.id}`}
                                    onClick={() => setSelectedId(work.id)}
                                    className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <motion.img
                                        layoutId={`img-${work.id}`}
                                        src={work.image}
                                        alt={work.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-mice-primary text-white text-sm font-bold rounded-full">
                                            {work.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <span className="text-mice-primary text-sm font-medium mb-2 block">{work.subtitle}</span>
                                        <motion.h2 layoutId={`title-${work.id}`} className="font-oswald text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-mice-primary transition-colors">
                                            {work.title}
                                        </motion.h2>
                                        <p className="text-gray-300 mb-6 line-clamp-2">{work.description}</p>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" /> {work.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" /> {work.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-4 h-4" /> {work.attendees}
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Regular Works Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredWorks.filter(w => !w.featured).map((work, index) => (
                            <AnimatedSection key={work.id} animation="fadeInUp" delay={index * 100}>
                                <motion.article
                                    layoutId={`card-${work.id}`}
                                    onClick={() => setSelectedId(work.id)}
                                    className="group cursor-pointer bg-[#16181b] rounded-2xl overflow-hidden hover:bg-[#1E2125] transition-colors"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-[4/3] mb-0">
                                        <motion.img
                                            layoutId={`img-${work.id}`}
                                            src={work.image}
                                            alt={work.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full border border-white/20">
                                                {work.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        {/* Content */}
                                        <span className="text-mice-primary text-xs font-medium uppercase tracking-wider">{work.subtitle}</span>
                                        <motion.h3 layoutId={`title-${work.id}`} className="font-oswald text-2xl font-bold text-white mt-2 mb-3 group-hover:text-mice-primary transition-colors">
                                            {work.title}
                                        </motion.h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{work.description}</p>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {work.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3 h-3" /> {work.attendees}
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 border-t border-white/10">
                {/* ... (Kept as is) ... */}
                <div className="container mx-auto max-w-4xl text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
                            Bir Sonraki <span className="text-mice-primary">Başyapıt</span> Sizin Olsun
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Markanız için unutulmaz bir etkinlik deneyimi yaratmak mı istiyorsunuz? Hemen iletişime geçin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/mice/iletisim"
                                className="px-8 py-4 bg-mice-primary hover:bg-mice-primary-hover text-white font-bold rounded-xl transition-colors"
                            >
                                Teklif Alın
                            </Link>
                            <a
                                href="https://wa.me/905327218678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                                Hemen İletişime Geçin
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* EXPANDABLE CARD MODAL */}
            <AnimatePresence>
                {selectedId && selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="bg-[#16181b] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl overflow-hidden relative shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="h-64 md:h-full relative">
                                    <motion.img
                                        layoutId={`img-${selectedId}`}
                                        src={selectedWork.image}
                                        alt={selectedWork.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#16181b] via-transparent to-transparent md:bg-gradient-to-r" />
                                </div>

                                <div className="p-8 flex flex-col justify-center">
                                    <span className="text-mice-primary text-sm font-bold uppercase tracking-wider mb-2">
                                        {selectedWork.category}
                                    </span>
                                    <motion.h2 layoutId={`title-${selectedId}`} className="font-oswald text-2xl font-bold text-white mb-4">
                                        {selectedWork.title}
                                    </motion.h2>

                                    <motion.p layoutId={`desc-${selectedId}`} className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-4">
                                        {selectedWork.description}
                                    </motion.p>

                                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-6">
                                        <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                                            <Calendar className="w-3.5 h-3.5 text-[#2DB34A]" /> {selectedWork.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                                            <MapPin className="w-3.5 h-3.5 text-[#2DB34A]" /> {selectedWork.location}
                                        </span>
                                    </div>

                                    <Link
                                        to="/mice/iletisim"
                                        className="inline-flex items-center justify-center gap-2 bg-[#2DB34A] hover:bg-[#249A3D] text-white font-bold py-3 px-6 rounded-xl transition-colors w-full text-sm"
                                    >
                                        Teklif İste
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorksPage;
