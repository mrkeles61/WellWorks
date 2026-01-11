import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = ''
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCount();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuad = (t: number) => t * (2 - t);
            const easedProgress = easeOutQuad(progress);

            const currentValue = Math.floor(startValue + (end - startValue) * easedProgress);
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <span ref={counterRef} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default AnimatedCounter;
