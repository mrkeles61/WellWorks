import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * ProductCard - Large cards with product-colored text and bullet point features
 * - Bigger card size with rounded corners
 * - Product color themed text
 * - Bullet point descriptions (max 3)
 * - Min 44px button height for touch compliance
 */
const ProductCard = memo(({ product, priority = false }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const productUrl = `https://www.dailyshot.com.tr/urun/${product.slug}`;
  const features = i18n.language === 'tr' ? product.featuresTr : product.features;

  return (
    <article className="group relative h-full">
      <a
        href={productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div
          className={cn(
            'relative overflow-hidden h-full flex flex-col',
            'bg-gray-100 rounded-[2rem] p-8', // Increased padding and rounding
            'transition-all duration-300 ease-out',
            'hover:-translate-y-2 hover:shadow-2xl'
          )}
        >
          {/* Badge */}
          {product.isNew && (
            <span
              className="absolute top-6 left-6 z-10 px-4 py-2 text-white text-sm font-bold rounded-full shadow-md"
              style={{ backgroundColor: product.color }}
            >
              {t('health.products.new').toUpperCase()}
            </span>
          )}

          {/* Product Image - Larger and perfectly fitted */}
          <div
            className="relative mb-8 flex items-center justify-center overflow-hidden rounded-3xl"
            style={{
              aspectRatio: '1 / 1', // Square aspect ratio for better product fit
              backgroundColor: 'white' // White bg for clean product look
            }}
          >
            {/* Soft tint overlay behind image */}
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundColor: product.color }}
            />

            <img
              src={product.image}
              alt={product.name}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
            />
          </div>

          {/* Product Name - Color themed */}
          <h3
            className="font-bold text-2xl md:text-3xl font-poppins mb-3 leading-tight"
            style={{ color: product.color }}
          >
            {(() => {
              const upperName = product.name.toUpperCase();
              if (upperName.includes('ELECTROVIT')) {
                // Remove the count part (e.g. " 8'LI")
                return upperName.replace(/\s\d+['']?[Ll][IiİuÜe].*/, '').trim();
              }
              // For all Dailyshot products (Energyshot, etc.) just take the first word
              return upperName.split(' ')[0];
            })()}
          </h3>

          {/* Short Description */}
          <p className="text-gray-600 text-base mb-6 leading-relaxed font-medium">
            {product.shortDescription}
          </p>

          {/* Bullet Point Features - Max 3 */}
          {features && features.length > 0 && (
            <ul className="space-y-2.5 mb-8 mt-auto">
              {features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm md:text-base text-gray-700 font-medium">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: product.color }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button - Product colored */}
          <div
            className={cn(
              'w-full min-h-[56px] py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2',
              'transition-all duration-300 shadow-md transform group-hover:scale-[1.02]'
            )}
            style={{
              backgroundColor: product.color,
              color: 'white'
            }}
          >
            {t('health.products.discover').toUpperCase()}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </a>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
