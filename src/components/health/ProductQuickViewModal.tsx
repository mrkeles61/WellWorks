import { useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, Star, Sparkles } from 'lucide-react';
import { animate } from 'animejs';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';

interface ProductQuickViewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductQuickViewModal = ({ product, isOpen, onClose }: ProductQuickViewModalProps) => {
    const { t } = useTranslation();
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Animate modal open
    useEffect(() => {
        if (isOpen && modalRef.current && overlayRef.current) {
            // Overlay fade in
            animate(overlayRef.current, {
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuad',
            });

            // Modal scale up
            animate(modalRef.current, {
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutBack',
            });

            // Float animation for product image
            if (imageRef.current) {
                animate(imageRef.current, {
                    translateY: [0, -10, 0],
                    duration: 3000,
                    easing: 'easeInOutSine',
                    loop: true,
                });
            }
        }
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (modalRef.current && overlayRef.current) {
            animate(modalRef.current, {
                scale: [1, 0.9],
                opacity: [1, 0],
                duration: 200,
                easing: 'easeInQuad',
            });
            animate(overlayRef.current, {
                opacity: [1, 0],
                duration: 200,
                easing: 'easeInQuad',
                complete: onClose,
            });
        } else {
            onClose();
        }
    }, [onClose]);

    if (!isOpen || !product) return null;

    const productUrl = `https://www.dailyshot.com.tr/urun/${product.slug}`;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Kapat"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Product Image with floating effect */}
                <div
                    className="relative h-64 flex items-center justify-center overflow-hidden rounded-t-2xl"
                    style={{
                        background: `linear-gradient(135deg, ${product.color}15 0%, ${product.color}05 100%)`,
                    }}
                >
                    <img
                        ref={imageRef}
                        src={product.image}
                        alt={product.name}
                        className="w-48 h-48 object-contain drop-shadow-lg"
                    />

                    {/* New badge */}
                    {product.isNew && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-health-primary text-white text-xs font-medium rounded-full">
                            {t('health.products.new')}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Category Tag */}
                    <span
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                        style={{
                            backgroundColor: `${product.color}20`,
                            color: product.color,
                        }}
                    >
                        {product.tagline}
                    </span>

                    {/* Title & Price */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <h2 className="text-2xl font-bold font-poppins">{product.name}</h2>
                        <span
                            className="text-2xl font-bold whitespace-nowrap"
                            style={{ color: product.color }}
                        >
                            {product.price} ₺
                        </span>
                    </div>

                    {/* Rating */}
                    {product.reviews > 0 && (
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                            "w-4 h-4",
                                            i < Math.floor(product.rating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                        )}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                ({product.reviews} değerlendirme)
                            </span>
                        </div>
                    )}

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">{product.shortDescription}</p>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                        <div className="space-y-2 mb-6">
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                                Özellikler
                            </h3>
                            {product.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-sm">
                                    <Sparkles className="w-4 h-4" style={{ color: product.color }} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTA Button */}
                    <a
                        href={productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2",
                            "text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                        )}
                        style={{ backgroundColor: product.color }}
                    >
                        Satın Al
                        <ExternalLink className="w-5 h-5" />
                    </a>

                    <p className="text-xs text-center text-muted-foreground mt-3">
                        dailyshot.com.tr'de güvenli ödeme ile satın alın
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductQuickViewModal;
