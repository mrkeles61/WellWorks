import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Custom hook for smooth scrolling with Lenis
 * Provides buttery smooth scroll physics for the gateway experience
 */
export function useLenis() {
    useEffect(() => {
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false, // Disable on touch for better mobile performance
            touchMultiplier: 2,
        });

        // Animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);
}
