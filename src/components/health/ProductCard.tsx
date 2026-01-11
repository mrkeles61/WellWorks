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
  const { i18n } = useTranslation();
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
            'bg-gray-100 rounded-3xl p-6',
            'transition-all duration-300 ease-out',
            'hover:-translate-y-1 hover:shadow-xl'
          )}
        >
          {/* Badge */}
          {product.isNew && (
            <span
              className="absolute top-4 left-4 z-10 px-3 py-1.5 text-white text-xs font-semibold rounded-full"
              style={{ backgroundColor: product.color }}
            >
              Yeni
            </span>
          )}

          {/* Product Image - Larger with product background tint */}
          <div
            className="relative mb-6 flex items-center justify-center overflow-hidden rounded-2xl"
            style={{
              aspectRatio: '4 / 3',
              backgroundColor: `${product.color}10`
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'low'}
              decoding="async"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
            />
          </div>

          {/* Product Name - Color themed */}
          <h3
            className="font-bold text-xl md:text-2xl font-poppins mb-2"
            style={{ color: product.color }}
          >
            {product.name.toUpperCase().replace(/'LI KUTU|'Lİ KUTU/gi, '').trim()}
          </h3>

          {/* Short Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Bullet Point Features - Max 3 */}
          {features && features.length > 0 && (
            <ul className="space-y-1.5 mb-6 mt-auto">
              {features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
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
              'w-full min-h-[44px] py-3 rounded-full font-semibold flex items-center justify-center gap-2',
              'border-2 transition-all duration-300'
            )}
            style={{
              backgroundColor: product.color,
              borderColor: product.color,
              color: 'white'
            }}
          >
            İNCELE
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </a>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
