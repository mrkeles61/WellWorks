import { useContext } from 'react';
import { BrandContext } from '../context/brand-context-definition';

export const useBrand = () => {
    const context = useContext(BrandContext);
    if (context === undefined) {
        throw new Error('useBrand must be used within a BrandProvider');
    }
    return context;
};
