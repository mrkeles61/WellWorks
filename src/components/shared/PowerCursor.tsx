import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCustomCursor } from '@/hooks/useCustomCursor';

/**
 * Power Cursor - Contextual morphing cursor
 * Changes appearance based on hovered section (Health vs MICE)
 */
export default function PowerCursor() {
    const { cursorState, updateCursorState } = useCustomCursor();
    const cursorRef = useRef<HTMLDivElement>(null);

    // Smooth spring physics for cursor movement
    const cursorX = useSpring(cursorState.position.x, {
        stiffness: 500,
        damping: 28,
    });

    const cursorY = useSpring(cursorState.position.y, {
        stiffness: 500,
        damping: 28,
    });

    // Handle hover state changes
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const cursorElement = target.closest('[data-cursor]') as HTMLElement;
            updateCursorState(cursorElement);
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const cursorElement = target.closest('[data-cursor]');
            if (!cursorElement) {
                updateCursorState(null);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [updateCursorState]);

    // Magnetic snap to buttons
    const magneticOffset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (cursorState.isHoveringButton && cursorState.targetElement) {
            const rect = cursorState.targetElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            magneticOffset.current = {
                x: centerX - cursorState.position.x,
                y: centerY - cursorState.position.y,
            };
        } else {
            magneticOffset.current = { x: 0, y: 0 };
        }
    }, [cursorState.isHoveringButton, cursorState.targetElement, cursorState.position]);

    // Hide default cursor
    useEffect(() => {
        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, []);

    const getCursorStyle = () => {
        if (cursorState.isHoveringHealth) {
            return {
                bg: 'bg-[#00A3E0]',
                text: 'İyileş',
                shape: 'rounded-full',
                size: 'w-20 h-20',
            };
        }

        if (cursorState.isHoveringMICE) {
            return {
                bg: 'bg-[#39B54A]',
                text: 'Keşfet',
                shape: 'rounded-none',
                size: 'w-20 h-20',
            };
        }

        return {
            bg: 'bg-white mix-blend-difference',
            text: '',
            shape: 'rounded-full',
            size: 'w-2 h-2',
        };
    };

    const style = getCursorStyle();
    const scale = cursorState.isHoveringButton ? 1.2 : 1;

    return (
        <motion.div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center ${style.bg} ${style.shape} ${style.size} transition-all duration-300`}
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
                scale,
            }}
        >
            {style.text && (
                <span className="text-white text-sm font-bold select-none">
                    {style.text}
                </span>
            )}

            {/* Crosshair for MICE */}
            {cursorState.isHoveringMICE && (
                <>
                    <div className="absolute w-full h-0.5 bg-white" />
                    <div className="absolute w-0.5 h-full bg-white" />
                </>
            )}
        </motion.div>
    );
}
