import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Brand = 'health' | 'mice';

interface BrandContextType {
  brand: Brand;
  setBrand: (brand: Brand) => void;
  toggleBrand: () => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider = ({ children }: { children: ReactNode }) => {
  const [brand, setBrandState] = useState<Brand>('health');

  useEffect(() => {
    const stored = localStorage.getItem('wellworks-brand') as Brand;
    if (stored === 'health' || stored === 'mice') {
      setBrandState(stored);
    }
  }, []);

  const setBrand = (newBrand: Brand) => {
    setBrandState(newBrand);
    localStorage.setItem('wellworks-brand', newBrand);
    document.documentElement.setAttribute('data-brand', newBrand);
  };

  const toggleBrand = () => {
    setBrand(brand === 'health' ? 'mice' : 'health');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand);
  }, [brand]);

  return (
    <BrandContext.Provider value={{ brand, setBrand, toggleBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
