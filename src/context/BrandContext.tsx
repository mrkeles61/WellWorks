import React, { useState, useEffect, ReactNode } from 'react';
import { Brand, BrandContext } from './brand-context-definition';

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
