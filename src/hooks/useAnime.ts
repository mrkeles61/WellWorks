import { useEffect, useRef, useCallback } from 'react';
import { animate, stagger, createTimeline, type Animation } from 'animejs';

// Custom hook for Anime.js animations in React
export function useAnime<T extends HTMLElement = HTMLElement>() {
  const elementRef = useRef<T>(null);
  const animationRef = useRef<Animation | null>(null);

  const runAnimation = useCallback((params: Parameters<typeof animate>[1]) => {
    if (elementRef.current) {
      animationRef.current = animate(elementRef.current, params);
    }
    return animationRef.current;
  }, []);

  const pause = useCallback(() => {
    animationRef.current?.pause();
  }, []);

  const play = useCallback(() => {
    animationRef.current?.play();
  }, []);

  const restart = useCallback(() => {
    animationRef.current?.restart();
  }, []);

  const reverse = useCallback(() => {
    animationRef.current?.reverse();
  }, []);

  useEffect(() => {
    return () => {
      animationRef.current?.pause();
    };
  }, []);

  return { ref: elementRef, animate: runAnimation, pause, play, restart, reverse, animation: animationRef };
}

// Hook for scroll-triggered animations
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  animationParams: Parameters<typeof animate>[1],
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const elementRef = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(element, animationParams);
          }
        });
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationParams, options]);

  return elementRef;
}

// Hook for staggered animations on multiple elements
export function useStaggerAnimation(
  selector: string,
  animationParams: Parameters<typeof animate>[1],
  staggerDelay: number = 100
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    animate(selector, {
      ...animationParams,
      delay: stagger(staggerDelay),
    });
  }, [selector, animationParams, staggerDelay]);
}

// Predefined animation presets
export const animePresets = {
  fadeIn: {
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutQuad',
  },
  fadeInUp: {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutQuad',
  },
  fadeInDown: {
    opacity: [0, 1],
    translateY: [-30, 0],
    duration: 800,
    easing: 'easeOutQuad',
  },
  fadeInLeft: {
    opacity: [0, 1],
    translateX: [-30, 0],
    duration: 800,
    easing: 'easeOutQuad',
  },
  fadeInRight: {
    opacity: [0, 1],
    translateX: [30, 0],
    duration: 800,
    easing: 'easeOutQuad',
  },
  scaleIn: {
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 600,
    easing: 'easeOutBack',
  },
  bounceIn: {
    opacity: [0, 1],
    scale: [0.3, 1],
    duration: 800,
    easing: 'easeOutElastic(1, .5)',
  },
  slideUp: {
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutExpo',
  },
  pulse: {
    scale: [1, 1.05, 1],
    duration: 600,
    easing: 'easeInOutQuad',
  },
  shake: {
    translateX: [0, -10, 10, -10, 10, 0],
    duration: 500,
    easing: 'easeInOutQuad',
  },
  float: {
    translateY: [0, -10, 0],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
  },
  glow: {
    boxShadow: [
      '0 0 0px rgba(0, 85, 164, 0)',
      '0 0 20px rgba(0, 85, 164, 0.5)',
      '0 0 0px rgba(0, 85, 164, 0)',
    ],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
  },
};

// Utility function to animate elements by selector
export function animateElements(
  selector: string,
  params: Parameters<typeof animate>[1]
): Animation {
  return animate(selector, params);
}

// Re-export for convenience
export { animate, stagger, createTimeline };
