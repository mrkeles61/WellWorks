import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';
import { memo } from 'react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * ProductCard - Clinical Luxury Design
 * Audit-compliant: 
 * - White background with subtle blue border
 * - Min 44px button height for touch
 * - No excessive icons (max: Sparkles x3)
 * - Uses transform/opacity only
 * - Memoized to prevent grid re-renders
 */
const ProductCard = memo(({ product, priority = false }: ProductCardProps) => {
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
            'glass-card relative overflow-hidden h-full flex flex-col',
            'transition-transform duration-300 ease-out',
            'hover:-translate-y-1'
          )}
        >
          {/* Badge */}
          {product.isNew && (
            <span className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#00A3E0] text-white text-xs font-semibold rounded-full">
              Yeni
            </span>
          )}

          {/* Product Image - Fixed Aspect Ratio */}
          <div
            className="relative mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-slate-50"
            style={{ aspectRatio: '1 / 1' }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'low'}
              decoding="async"
              className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-gray-900 font-poppins">{product.name}</h3>
            <p className="text-sm font-medium text-[#00A3E0]">
              {product.tagline}
            </p>
          </div>

          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

          {/* Features - Max 3 icons */}
          {product.featuresTr && (
            <div className="space-y-2 mb-6 mt-auto">
              {product.featuresTr.slice(0, 3).map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                  <Sparkles className="w-4 h-4 flex-shrink-0 text-[#00A3E0]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button - Min 44px height for touch compliance */}
          <div
            className={cn(
              'w-full min-h-[44px] py-3 rounded-xl font-semibold flex items-center justify-center gap-2',
              'bg-[#00A3E0] text-white',
              'transition-all duration-300',
              'group-hover:bg-[#0091C7] group-hover:shadow-lg'
            )}
          >
            Satın Al
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </a>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
