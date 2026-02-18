import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/hooks/useBrand';
import { ArrowUpRight, Calendar, MapPin, Users, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

/**
 * İşler Güçler (Works/Portfolio) Page
 * Large showcase cards for MICE events and projects
 */

const projectFolders = [
    'christmas-market',
    'holifest',
    'imera-carnival',
    'gusto-weekend',
    'yildizli-konser',
    'balo-odul',
    'baby-on-the-fest',
    'incia-toplanti',
    'mining-express',
    'noroloji-toplanti',
    'campalle',
    'hyundai-aile-gunu',
];

const projectImageCounts: Record<string, number> = {
    'christmas-market': 7,
    'holifest': 5,
    'imera-carnival': 5,
    'gusto-weekend': 5,
    'yildizli-konser': 6,
    'balo-odul': 5,
    'baby-on-the-fest': 5,
    'incia-toplanti': 4,
    'mining-express': 5,
    'noroloji-toplanti': 5,
    'campalle': 5,
    'hyundai-aile-gunu': 5,
};

const getGalleryImages = (folder: string) => {
    const count = projectImageCounts[folder] || 1;
    const ext = folder === 'imera-carnival' ? ['.jpeg', '.jpeg', '.jpeg', '.jpeg', '.png'] : Array(count).fill('.jpeg');
    return Array.from({ length: count }, (_, i) => `/images/mice/projects/${folder}/${i + 1}${ext[i]}`);
};

const eventImages = projectFolders.map(f => `/images/mice/projects/${f}/1.jpeg`);

const WorksPage = () => {
    const { setBrand } = useBrand();
    const { t } = useTranslation();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [galleryIndex, setGalleryIndex] = useState(0);

    useEffect(() => {
        setBrand('mice');
    }, [setBrand]);

    const featuredWorks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => ({
        id: String(i),
        title: t(`works.event${i}.title`),
        subtitle: t(`works.event${i}.subtitle`),
        description: t(`works.event${i}.description`),
        image: eventImages[i - 1],
        date: t(`works.event${i}.date`),
        location: t(`works.event${i}.location`),
        attendees: t(`works.event${i}.attendees`),
        category: t(`works.event${i}.category`),
        featured: i <= 4,
    }));

    const selectedWork = featuredWorks.find(w => w.id === selectedId);

    return (
        <div data-brand="mice" className="bg-[#0a0a0a] text-white min-h-screen">

            {/* Featured Works - Large Showcase */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto max-w-7xl px-4">
                    {/* Featured Grid - 2 Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {featuredWorks.filter(w => w.featured).map((work, index) => (
                            <AnimatedSection key={work.id} animation="fadeInUp" delay={index * 100}>
                                <motion.article
                                    layoutId={`card-${work.id}`}
                                    onClick={() => { setGalleryIndex(0); setSelectedId(work.id); }}
                                    className="group cursor-pointer bg-[#16181b] rounded-3xl overflow-hidden hover:bg-[#1E2125] transition-colors"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-[16/10]">
                                        <motion.img
                                            layoutId={`img-${work.id}`}
                                            src={work.image}
                                            alt={work.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                    </div>

                                    {/* Content below image */}
                                    <div className="p-8">
                                        <motion.h2 layoutId={`title-${work.id}`} className="font-oswald text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-mice-primary transition-colors">
                                            {work.title}
                                        </motion.h2>
                                        <p className="text-gray-300 mb-6 line-clamp-3">{work.description}</p>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4 text-[#2DB34A]" /> {work.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-[#2DB34A]" /> {work.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-4 h-4 text-[#2DB34A]" /> {work.attendees}
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
                                    onClick={() => { setGalleryIndex(0); setSelectedId(work.id); }}
                                    className="group cursor-pointer bg-[#16181b] rounded-2xl overflow-hidden hover:bg-[#1E2125] transition-colors"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-[16/10]">
                                        <motion.img
                                            layoutId={`img-${work.id}`}
                                            src={work.image}
                                            alt={work.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                    </div>

                                    {/* Content below image */}
                                    <div className="p-6">
                                        <motion.h3 layoutId={`title-${work.id}`} className="font-oswald text-2xl font-bold text-white mt-1 mb-3 group-hover:text-mice-primary transition-colors">
                                            {work.title}
                                        </motion.h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{work.description}</p>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-[#2DB34A]" /> {work.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3 text-[#2DB34A]" /> {work.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3 h-3 text-[#2DB34A]" /> {work.attendees}
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
                <div className="container mx-auto max-w-4xl text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('works.ctaTitle')} <span className="text-mice-primary">{t('works.ctaTitleAccent')}</span> {t('works.ctaTitleSuffix')}
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            {t('works.ctaSubtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/mice/iletisim"
                                className="px-8 py-4 bg-mice-primary hover:bg-mice-primary-hover text-white font-bold rounded-xl transition-colors"
                            >
                                {t('works.ctaButton')}
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* GALLERY MODAL */}
            <AnimatePresence>
                {selectedId && selectedWork && (() => {
                    const folderIndex = parseInt(selectedId) - 1;
                    const folder = projectFolders[folderIndex];
                    const gallery = getGalleryImages(folder);
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="bg-[#16181b] w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl overflow-hidden relative shadow-2xl border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Main image viewer */}
                                <div className="relative aspect-video bg-black">
                                    <motion.img
                                        key={galleryIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        src={gallery[galleryIndex]}
                                        alt={`${selectedWork.title} - ${galleryIndex + 1}`}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Prev/Next buttons */}
                                    {gallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev > 0 ? prev - 1 : gallery.length - 1); }}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev < gallery.length - 1 ? prev + 1 : 0); }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </>
                                    )}

                                    {/* Image counter */}
                                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/60 rounded-full text-white text-xs font-medium">
                                        {galleryIndex + 1} / {gallery.length}
                                    </div>
                                </div>

                                {/* Thumbnail strip */}
                                {gallery.length > 1 && (
                                    <div className="flex gap-2 p-3 overflow-x-auto bg-[#111315]">
                                        {gallery.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setGalleryIndex(idx)}
                                                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${idx === galleryIndex ? 'border-[#2DB34A] opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                                                    }`}
                                            >
                                                <img src={img} alt="" className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Project info */}
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                                        <div className="flex-1">
                                            <span className="text-mice-primary text-sm font-bold uppercase tracking-wider mb-1 block">
                                                {selectedWork.category}
                                            </span>
                                            <h2 className="font-oswald text-2xl md:text-3xl font-bold text-white mb-3">
                                                {selectedWork.title}
                                            </h2>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-5">
                                                {selectedWork.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-6">
                                                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                                                    <Calendar className="w-3.5 h-3.5 text-[#2DB34A]" /> {selectedWork.date}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                                                    <MapPin className="w-3.5 h-3.5 text-[#2DB34A]" /> {selectedWork.location}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                                                    <Users className="w-3.5 h-3.5 text-[#2DB34A]" /> {selectedWork.attendees}
                                                </span>
                                            </div>
                                        </div>

                                        <Link
                                            to="/mice/iletisim"
                                            className="inline-flex items-center justify-center gap-2 bg-[#2DB34A] hover:bg-[#249A3D] text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm shrink-0"
                                        >
                                            {t('works.modalRequestQuote')}
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })()}
            </AnimatePresence>
        </div>
    );
};

export default WorksPage;
