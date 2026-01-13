import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BlogPost {
    id: string;
    titleKey: string;
    excerptKey: string;
    image: string;
    url: string;
}

const blogPostsConfig: BlogPost[] = [
    {
        id: 'hangover',
        titleKey: 'health.blog.posts.hangover.title',
        excerptKey: 'health.blog.posts.hangover.excerpt',
        image: '/blog/hangover.jpg',
        url: 'https://www.dailyshot.com.tr/blog/icerik/hangover-kelimesi-nereden-geliyor',
    },
    {
        id: 'hangxiety',
        titleKey: 'health.blog.posts.hangxiety.title',
        excerptKey: 'health.blog.posts.hangxiety.excerpt',
        image: '/blog/hangxiety.jpg',
        url: 'https://www.dailyshot.com.tr/blog/icerik/hangxiety',
    },
    {
        id: 'alcoholJourney',
        titleKey: 'health.blog.posts.alcoholJourney.title',
        excerptKey: 'health.blog.posts.alcoholJourney.excerpt',
        image: '/blog/alcohol-journey.jpg',
        url: 'https://www.dailyshot.com.tr/blog/icerik/alkolun-vucudumuzdaki-yolculugu',
    },
    {
        id: 'alcoholFacts',
        titleKey: 'health.blog.posts.alcoholFacts.title',
        excerptKey: 'health.blog.posts.alcoholFacts.excerpt',
        image: '/blog/alcohol-facts.jpg',
        url: 'https://www.dailyshot.com.tr/blog/icerik/alkol-ile-ilgili-eglenceli-bilgiler',
    },
];

const BlogSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-health-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
                        {t('health.blog.label')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
                        {t('health.blog.title')}
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPostsConfig.map((post) => (
                        <a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                                <img
                                    src={post.image}
                                    alt={t(post.titleKey)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Blog';
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-health-primary transition-colors">
                                    {t(post.titleKey)}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-4 mb-4">
                                    {t(post.excerptKey)}
                                </p>
                                <span className="text-health-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    {t('health.blog.readMore')} <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
