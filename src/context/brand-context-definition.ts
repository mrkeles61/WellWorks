import { createContext } from 'react';

export type Brand = 'health' | 'mice';

export interface BrandContextType {
    brand: Brand;
    setBrand: (brand: Brand) => void;
    toggleBrand: () => void;
}

export const BrandContext = createContext<BrandContextType | undefined>(undefined);
