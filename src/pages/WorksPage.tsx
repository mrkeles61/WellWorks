import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useBrand } from '@/context/BrandContext';
import { ArrowUpRight, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
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
        description: 'Hindistan\'ın geleneksel Holi festivalini İstanbul\'a taşıdık. 15,000+ katılımcıyla şehrin en renkli etkinliği.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAYhIK-nGMz49c4JMrT1z0kXLI7fhR9CrKsYFAQdAjkRUkBeHWM986voT0DQliTSrXHdeydatBRnLyJrltL7-WRpdzIpFk-wHdKWyCancjBLvzeioGRjPgDh-2uhcOJfCjsNMDmSpjD-8BYDDSywzjKHY_FHOV-pG0eHkZLpfGApyh_Rk3HHipKiZc2m-xT3XrhdZPfRAN5c206NulzamjFK-DMRfB6UFhKoQP5wALDMMinrqSece_S6v0P8QfATkQVxchswtiA',
        date: 'Mart 2024',
        location: 'İstanbul, Küçükçiftlik Park',
        attendees: '15,000+',
        category: 'Festival',
        featured: true,
    },
    {
        id: '2',
        title: 'Christmas Market Istanbul',
        subtitle: 'Kış Pazarı',
        description: 'Avrupa tarzı yılbaşı pazarı deneyimi. Butik stantlar, canlı müzik ve sıcak içeceklerle büyülü bir atmosfer.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4ncuXlL5kbcoY3syjBZySjH-voCBmDjOIFNpel4dclT_ilZiZgUBVrFmXaYyDKpdMM1uVzsFsBFBjCqDC4Z33IEtGdOXCnxHgi_D35C3IJ8QDyR1YH-meF5P0OXToF9EciSKfLjaua2LLTumOVAcFTI7JzJtBoa4H-8AhaemHNzlD74sJxDestfqPFFUsdfdj8FgsuSELg1S0M2SGwn5xwru5VSNOtfda9h1-bDEnzda7AuMq0HpQOddbof3hcGvm7H1kHJrig',
        date: 'Aralık 2023',
        location: 'İstanbul, Maçka Parkı',
        attendees: '50,000+',
        category: 'Pazar',
        featured: true,
    },
    {
        id: '3',
        title: 'TechGlobal Lansman',
        subtitle: 'Kurumsal Etkinlik',
        description: 'Türkiye\'nin en büyük teknoloji şirketinin yeni ürün lansmanı. VIP konuklar, holografik sunum ve gala yemeği.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClNOVi_xSGO70QYVZy1oFE-T90pTqaP7bzczPGxJ31MsgzolhmrSp6RQ-YAuM_JlEQREoxFAHk1xCip0hLmJpWZGT_OlrkXclPg7tfMEm1Dkwozq0Z58jEHcwrZC8IhgR8ceseHC19xJTIvZ3HckFNUgJwZXMpE50Rl7FUqu-m1_KeEkeIx7-xEtjPYWSRsysL44zUBgQIJdwJyJt5R0MRBH2YtjrR2Fop_APqr9_T2htqqFiskEq4CSJTMSOf-QjkqjEHVdJTag',
        date: 'Ekim 2023',
        location: 'İstanbul, Zorlu PSM',
        attendees: '2,500',
        category: 'Lansman',
    },
    {
        id: '4',
        title: 'Coffee Festival',
        subtitle: 'Gastronomi Festivali',
        description: 'Kahve tutkunlarının buluşma noktası. 100+ barista, atölyeler ve tadım deneyimleri.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNCxQsMAXt1YugVjgtgIe8Pzxd4S_MAz_pFrwYujsXnneEHPHfriZd59wc4QdhKkHF8KVGAlJwtsuMyDpW_N0lgK1ueJsbkTjaBupsTpgiYla9YZ2Ek9uOEIPejz2Gn0W7HCMTPzftaLbvu0TsWDBHkr5uxtHOx0MNqCjhIU3jpWcXCHAwb0Pj2luN05AMySHg6Q3VUcduQP4_nXTaUFQ13Ka4CLLjxNYUtRqQl6h6MirUGVoT03gii04bs8g5J0EOBSZq_XRPpg',
        date: 'Eylül 2023',
        location: 'İstanbul, KüçükÇiftlik',
        attendees: '25,000+',
        category: 'Festival',
    },
    {
        id: '5',
        title: 'Özel Gala Gecesi',
        subtitle: 'VIP Etkinlik',
        description: 'Seçkin davetliler için tasarlanmış şık ve unutulmaz gece. Michelin yıldızlı şef, canlı orkestra.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtzHcwz3t_Yf1CigEKQ6WO5LahhV2jXYnk50lOIHmlmHH61ZuXOOS8Ft-UsOvF9tzvXJh_L4cy_GHfznjJL6YQi9hurJryRXNrmzWgN_k-HC7cJ3YU2zyna37ZSd_Pl_akZxect71IrFmS7tvweVbJHtLaiM1lNU70t1AWPjgsEz7P1HEpmQDs9RZ-50J3Rd7rnVhWnrQiGBEBD49Boe5KnIG3Vqh_hpIWivezeBCZPG1OdBXbMb8nn8gUjDzoIfMTMbd9NTxZ5A',
        date: 'Kasım 2023',
        location: 'İstanbul, Four Seasons',
        attendees: '350',
        category: 'Gala',
    },
    {
        id: '6',
        title: 'Team Building Kapadokya',
        subtitle: 'Şirket Etkinliği',
        description: 'Fortune 500 şirketi için tasarlanmış 3 günlük ekip deneyimi. Balon turu, ATV safari ve gala.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPy3yey5lMkiNfhoojJqF_u6ySRPRTC_bdciIlQ-cwqyc_hfAF1twz0sjuGIqMHeP8xf2OggslMXKIZkIMMnKKpw7yAJA3GqZi0qVd_HwfU4mx9HG4q540TXDAr4zP-4CWbhAhGdctdNeOeDafTw5BUZx2U7EUj5FgDxfwYpLukpxI16QKEtzCufF6g1bHsnMeh1NTSDSLOPqVRZJqp6Kx2o23P2yWNaQoakoPFmnDGU7E87fPAQ6yUOM1SzRgfMMDhsVVYhtYvA',
        date: 'Mayıs 2023',
        location: 'Kapadokya, Ürgüp',
        attendees: '200',
        category: 'Team Building',
    },
];

const WorksPage = () => {
    const { setBrand } = useBrand();

    useEffect(() => {
        setBrand('mice');
    }, [setBrand]);

    return (
        <div data-brand="mice" className="bg-[#0a0a0a] text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 border-b border-white/10">
                <div className="container mx-auto max-w-7xl">
                    <AnimatedSection animation="fadeInUp">
                        <span className="text-mice-primary text-sm font-bold uppercase tracking-widest mb-4 block">
                            Portfolio
                        </span>
                        <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
                            İşler<br />
                            <span className="text-mice-primary">Güçler</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl">
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
                                <article className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                                    {/* Background Image */}
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        loading={index < 2 ? 'eager' : 'lazy'}
                                        fetchPriority={index < 2 ? 'high' : 'low'}
                                        decoding="async"
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
                                        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-mice-primary transition-colors">
                                            {work.title}
                                        </h2>
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

                                    {/* Hover Arrow */}
                                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                        <ArrowUpRight className="w-6 h-6 text-black" />
                                    </div>
                                </article>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Regular Works Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredWorks.filter(w => !w.featured).map((work, index) => (
                            <AnimatedSection key={work.id} animation="fadeInUp" delay={index * 100}>
                                <article className="group cursor-pointer">
                                    {/* Image */}
                                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                            loading="lazy"
                                            decoding="async"
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

                                    {/* Content */}
                                    <span className="text-mice-primary text-xs font-medium uppercase tracking-wider">{work.subtitle}</span>
                                    <h3 className="font-oswald text-2xl font-bold text-white mt-2 mb-3 group-hover:text-mice-primary transition-colors">
                                        {work.title}
                                    </h3>
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
                                </article>
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
                                href="tel:+902121234567"
                                className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Hemen Arayın
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default WorksPage;
