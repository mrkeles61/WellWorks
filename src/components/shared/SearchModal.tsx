import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBrand } from '@/context/BrandContext';
import { products } from '@/data/products';
import { events } from '@/data/events';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const { t } = useTranslation();
  const { brand } = useBrand();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Filter results based on query
  const filteredProducts = query.length > 1
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredEvents = query.length > 1
    ? events.filter(e => 
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const hasResults = filteredProducts.length > 0 || filteredEvents.length > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative flex flex-col items-center pt-20 px-4">
        <div className={cn(
          "w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden",
          brand === 'health' ? 'bg-white' : 'bg-gray-900'
        )}>
          {/* Search Input */}
          <div className="relative">
            <Search className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5",
              brand === 'health' ? 'text-gray-400' : 'text-gray-500'
            )} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('search.placeholder')}
              className={cn(
                "w-full pl-12 pr-12 py-4 text-lg outline-none",
                brand === 'health' 
                  ? 'bg-white text-gray-900 placeholder:text-gray-400' 
                  : 'bg-gray-900 text-white placeholder:text-gray-500'
              )}
            />
            <button
              onClick={onClose}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors",
                brand === 'health' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
              )}
              aria-label={t('search.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          <div className={cn(
            "max-h-[60vh] overflow-y-auto border-t",
            brand === 'health' ? 'border-gray-100' : 'border-gray-800'
          )}>
            {query.length > 1 && !hasResults && (
              <div className={cn(
                "p-8 text-center",
                brand === 'health' ? 'text-gray-500' : 'text-gray-400'
              )}>
                {t('search.noResults')}
              </div>
            )}

            {/* Products Results */}
            {filteredProducts.length > 0 && (
              <div className="p-4">
                <h3 className={cn(
                  "text-xs font-semibold uppercase tracking-wider mb-3",
                  brand === 'health' ? 'text-gray-500' : 'text-gray-400'
                )}>
                  {t('nav.products')}
                </h3>
                <div className="space-y-2">
                  {filteredProducts.slice(0, 5).map(product => (
                    <Link
                      key={product.id}
                      to={`/health/urunler`}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg transition-colors",
                        brand === 'health' 
                          ? 'hover:bg-gray-50' 
                          : 'hover:bg-gray-800'
                      )}
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: product.color + '20' }}
                      />
                      <div>
                        <div className={cn(
                          "font-medium",
                          brand === 'health' ? 'text-gray-900' : 'text-white'
                        )}>
                          {product.name}
                        </div>
                        <div className={cn(
                          "text-sm",
                          brand === 'health' ? 'text-gray-500' : 'text-gray-400'
                        )}>
                          {product.price} TL
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Events Results */}
            {filteredEvents.length > 0 && (
              <div className={cn(
                "p-4 border-t",
                brand === 'health' ? 'border-gray-100' : 'border-gray-800'
              )}>
                <h3 className={cn(
                  "text-xs font-semibold uppercase tracking-wider mb-3",
                  brand === 'health' ? 'text-gray-500' : 'text-gray-400'
                )}>
                  {t('nav.events')}
                </h3>
                <div className="space-y-2">
                  {filteredEvents.slice(0, 5).map(event => (
                    <Link
                      key={event.id}
                      to={`/mice/etkinlikler`}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg transition-colors",
                        brand === 'health' 
                          ? 'hover:bg-gray-50' 
                          : 'hover:bg-gray-800'
                      )}
                    >
                      <div className="w-10 h-10 rounded-lg bg-mice-primary/20 flex-shrink-0" />
                      <div className={cn(
                        "font-medium",
                        brand === 'health' ? 'text-gray-900' : 'text-white'
                      )}>
                        {event.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches - shown when no query */}
            {query.length < 2 && (
              <div className="p-4">
                <h3 className={cn(
                  "text-xs font-semibold uppercase tracking-wider mb-3",
                  brand === 'health' ? 'text-gray-500' : 'text-gray-400'
                )}>
                  {t('search.popular')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Energyshot', 'Hangovershot', 'HoliFest', 'Relaxshot'].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm transition-colors",
                        brand === 'health' 
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      )}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
