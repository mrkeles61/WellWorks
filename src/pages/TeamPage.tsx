import { useTranslation } from 'react-i18next';
import { Linkedin, Instagram } from 'lucide-react';
import { team } from '@/data/team';
import { useBrand } from '@/context/BrandContext';
import { cn } from '@/lib/utils';
import miceHeroImage from '@/assets/mice-hero-festival.jpg';

const TeamPage = () => {
  const { t } = useTranslation();
  const { brand } = useBrand();

  return (
    <div className={cn('min-h-screen py-16 lg:py-24', brand === 'mice' ? 'bg-mice-bg' : 'bg-background')}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={cn(
              'text-4xl md:text-5xl font-bold mb-4',
              brand === 'mice' ? 'font-oswald text-white' : 'font-poppins'
            )}
          >
            {t('team.title')}
          </h1>
          <p className="text-muted-foreground text-lg">{t('team.subtitle')}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, index) => (
            <article
              key={member.id}
              className={cn(
                'group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer',
                'opacity-0 animate-scale-in'
              )}
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
            >
              {/* Photo */}
              <img
                src={miceHeroImage}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent',
                  'opacity-60 group-hover:opacity-100 transition-opacity duration-300'
                )}
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.title}</p>

                {/* Social Links */}
                <div className="flex gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-white hover:text-mice-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-white hover:text-mice-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
