import { useTranslation } from 'react-i18next';
import { Eye, Scale, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="group relative">
      <div
        className={cn(
          'glass-card relative overflow-hidden',
          'hover:shadow-glow-health'
        )}
      >
        {/* Badge */}
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-health-primary text-white text-xs font-medium rounded-full">
            {t('health.products.new')}
          </span>
        )}

        {/* Product Image */}
        <div className="relative h-64 mb-4 flex items-center justify-center overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 opacity-10 rounded-xl"
            style={{
              background: `radial-gradient(circle, ${product.color}40 0%, transparent 70%)`,
            }}
          />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <h3 className="font-semibold text-lg mb-1 font-poppins">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{product.shortDescription}</p>

        {/* Features tags */}
        {product.features && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="text-xs px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Price & Actions */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-health-primary">{product.price} TL</span>

          <div className="flex gap-2">
            <button
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label={t('health.products.compare')}
            >
              <Scale className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label={t('health.products.quickView')}
            >
              <Eye className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Buy Button */}
        <a
          href={`https://dailyshot.com.tr/${product.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2',
            'bg-health-primary text-white',
            'hover:bg-health-primary-hover transition-colors'
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          {t('health.products.buyNow')}
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
