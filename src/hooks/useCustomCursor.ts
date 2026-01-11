import { useEffect, useState, useCallback } from 'react';

interface CursorPosition {
    x: number;
    y: number;
}

interface CursorState {
    position: CursorPosition;
    isHoveringHealth: boolean;
    isHoveringMICE: boolean;
    isHoveringButton: boolean;
    targetElement: HTMLElement | null;
}

/**
 * Custom hook for the Power Cursor
 * Tracks cursor position and hover states for contextual cursor morphing
 */
export function useCustomCursor() {
    const [cursorState, setCursorState] = useState<CursorState>({
        position: { x: 0, y: 0 },
        isHoveringHealth: false,
        isHoveringMICE: false,
        isHoveringButton: false,
        targetElement: null,
    });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setCursorState((prev) => ({
            ...prev,
            position: { x: e.clientX, y: e.clientY },
        }));
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    // Update cursor state based on hovered element
    const updateCursorState = useCallback((element: HTMLElement | null) => {
        if (!element) {
            setCursorState((prev) => ({
                ...prev,
                isHoveringHealth: false,
                isHoveringMICE: false,
                isHoveringButton: false,
                targetElement: null,
            }));
            return;
        }

        const cursorType = element.getAttribute('data-cursor');
        const isButton = element.tagName === 'BUTTON' || element.tagName === 'A';

        setCursorState((prev) => ({
            ...prev,
            isHoveringHealth: cursorType === 'health',
            isHoveringMICE: cursorType === 'mice',
            isHoveringButton: isButton,
            targetElement: isButton ? element : null,
        }));
    }, []);

    return { cursorState, updateCursorState };
}
