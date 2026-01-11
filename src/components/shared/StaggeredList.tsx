import { useEffect, useRef, ReactNode, Children, cloneElement, isValidElement } from 'react';
import { animate, stagger } from 'animejs';
import { cn } from '@/lib/utils';

interface StaggeredListProps {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  itemClassName?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
}

const StaggeredList = ({
  children,
  staggerDelay = 100,
  duration = 600,
  threshold = 0.1,
  className,
  itemClassName,
  animation = 'fadeInUp',
}: StaggeredListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animationConfigs = {
    fadeInUp: {
      opacity: [0, 1],
      translateY: [30, 0],
    },
    fadeInLeft: {
      opacity: [0, 1],
      translateX: [-30, 0],
    },
    fadeInRight: {
      opacity: [0, 1],
      translateX: [30, 0],
    },
    scaleIn: {
      opacity: [0, 1],
      scale: [0.8, 1],
    },
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const items = container.querySelectorAll('.stagger-item');
      items.forEach((item) => {
        (item as HTMLElement).style.opacity = '1';
      });
      return;
    }

    // Set initial state for all items
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item) => {
      (item as HTMLElement).style.opacity = '0';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate(container.querySelectorAll('.stagger-item'), {
              ...animationConfigs[animation],
              duration,
              delay: stagger(staggerDelay),
              easing: 'easeOutQuad',
            });

            observer.unobserve(container);
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [animation, duration, staggerDelay, threshold]);

  // Wrap each child with the stagger-item class
  const wrappedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...child.props,
        className: cn(child.props.className, 'stagger-item', itemClassName),
      });
    }
    return child;
  });

  return (
    <div ref={containerRef} className={cn(className)}>
      {wrappedChildren}
    </div>
  );
};

export default StaggeredList;
