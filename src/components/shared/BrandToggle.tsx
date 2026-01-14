import { Heart, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBrand } from '@/hooks/useBrand';
import { cn } from '@/lib/utils';

const BrandToggle = () => {
  const { brand, setBrand } = useBrand();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrandSwitch = (newBrand: 'health' | 'mice') => {
    if (newBrand === brand) return;

    setBrand(newBrand);

    // Navigate to the home page of the selected brand
    if (newBrand === 'health') {
      navigate('/health');
    } else {
      navigate('/mice');
    }
  };

  return (
    <div
      className={cn(
        'relative flex items-center w-44 h-10 rounded-full p-1 transition-colors duration-300',
        brand === 'health' ? 'bg-secondary' : 'bg-secondary'
      )}
      role="switch"
      aria-checked={brand === 'mice'}
      aria-label="Marka seçimi"
    >
      {/* Sliding pill */}
      <div
        className={cn(
          'absolute w-20 h-8 rounded-full transition-all duration-300 ease-out',
          brand === 'health'
            ? 'left-1 bg-health-primary'
            : 'left-[calc(100%-5.25rem)] bg-mice-primary'
        )}
      />

      {/* Health Option */}
      <button
        onClick={() => handleBrandSwitch('health')}
        className={cn(
          'relative z-10 flex items-center justify-center gap-1.5 w-20 h-8 text-sm font-medium transition-colors',
          brand === 'health' ? 'text-white' : 'text-muted-foreground'
        )}
      >
        <Heart className="w-4 h-4" />
        <span>Health</span>
      </button>

      {/* MICE Option */}
      <button
        onClick={() => handleBrandSwitch('mice')}
        className={cn(
          'relative z-10 flex items-center justify-center gap-1.5 w-20 h-8 text-sm font-medium transition-colors',
          brand === 'mice' ? 'text-white' : 'text-muted-foreground'
        )}
      >
        <Calendar className="w-4 h-4" />
        <span>MICE</span>
      </button>
    </div>
  );
};

export default BrandToggle;

