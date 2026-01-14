import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/components/ui/skeleton';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const productUrl = `https://www.dailyshot.com.tr/urun/${product.slug}`;

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
            'bg-gray-100 rounded-[2rem] p-8',
            'transition-all duration-300 ease-out',
            'hover:-translate-y-2 hover:shadow-2xl'
          )}
        >
          {/* Product Image - Expanded to fill available space */}
          <div className="relative mb-6 flex-grow flex items-center justify-center overflow-hidden min-h-[200px]">
            {!isLoaded && (
              <Skeleton className="absolute inset-0 rounded-xl bg-gray-200" />
            )}
            <img
              src={product.image}
              alt={product.name}
              loading={priority ? 'eager' : 'lazy'}
              onLoad={() => setIsLoaded(true)}
              className={cn(
                "w-full h-full object-contain object-top p-4 transition-all duration-700 group-hover:scale-110 drop-shadow-xl",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          {/* Product Name - Color themed */}
          <h3
            className="font-bold text-2xl md:text-3xl font-poppins mb-6 leading-tight text-center"
            style={{ color: product.color }}
          >
            {(() => {
              const upperName = product.name.toUpperCase();
              if (upperName.includes('ELECTROVIT')) {
                return upperName.replace(/\s\d+['']?[Ll][IiİuÜe].*/, '').trim();
              }
              return product.name;
            })()}
          </h3>

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
