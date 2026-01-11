import { useEffect, useRef, ReactNode } from 'react';
import { animate } from 'animejs';
import { cn } from '@/lib/utils';

type AnimationType = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'scaleIn' 
  | 'slideUp';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean; // Only animate once
}

const animationConfigs: Record<AnimationType, anime.AnimeParams> = {
  fadeIn: {
    opacity: [0, 1],
    easing: 'easeOutQuad',
  },
  fadeInUp: {
    opacity: [0, 1],
    translateY: [40, 0],
    easing: 'easeOutQuad',
  },
  fadeInDown: {
    opacity: [0, 1],
    translateY: [-40, 0],
    easing: 'easeOutQuad',
  },
  fadeInLeft: {
    opacity: [0, 1],
    translateX: [-40, 0],
    easing: 'easeOutQuad',
  },
  fadeInRight: {
    opacity: [0, 1],
    translateX: [40, 0],
    easing: 'easeOutQuad',
  },
  scaleIn: {
    opacity: [0, 1],
    scale: [0.9, 1],
    easing: 'easeOutBack',
  },
  slideUp: {
    opacity: [0, 1],
    translateY: [60, 0],
    easing: 'easeOutExpo',
  },
};

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 800,
  threshold = 0.15,
  className,
  once = true,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.style.opacity = '1';
      return;
    }

    // Set initial state
    element.style.opacity = '0';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (once && hasAnimated.current) return;
            
            hasAnimated.current = true;
            
            animate(element, {
              ...animationConfigs[animation],
              duration,
              delay,
            });

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Reset for re-animation
            element.style.opacity = '0';
            hasAnimated.current = false;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, duration, threshold, once]);

  return (
    <div ref={sectionRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default AnimatedSection;
