import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PrizeSegment {
    discount: number;
    code: string;
    color: string;
    probability: number;
}

const PRIZES: PrizeSegment[] = [
    { discount: 10, code: 'WELL10', color: '#10B981', probability: 0.50 },
    { discount: 15, code: 'WELL15', color: '#3B82F6', probability: 0.29 },
    { discount: 20, code: 'WELL20', color: '#8B5CF6', probability: 0.15 },
    { discount: 30, code: 'WELL30', color: '#F59E0B', probability: 0.05 },
    { discount: 50, code: 'WELL50', color: '#EF4444', probability: 0.01 },
];

function SpinWheelPage() {
    const { t, i18n } = useTranslation();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [currentRotation, setCurrentRotation] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [prize, setPrize] = useState<PrizeSegment | null>(null);
    const [copied, setCopied] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    // Draw the wheel
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 10;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw segments
        const numSegments = PRIZES.length;
        const segmentAngle = (2 * Math.PI) / numSegments;

        PRIZES.forEach((segment, index) => {
            const startAngle = index * segmentAngle - Math.PI / 2;
            const endAngle = startAngle + segmentAngle;

            // Draw segment
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = segment.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Draw text
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startAngle + segmentAngle / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 24px Inter, sans-serif';
            const text = i18n.language === 'en' ? `${segment.discount}%` : `%${segment.discount}`;
            ctx.fillText(text, radius - 30, 8);
            ctx.restore();
        });

        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
        ctx.fillStyle = '#1f2937';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw center text
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(t('spinWheel.spin', 'SPIN'), centerX, centerY + 5);
    }, [i18n.language, t]);

    // Select prize based on probability
    const selectPrize = (): PrizeSegment => {
        const random = Math.random();
        let cumulative = 0;
        for (const segment of PRIZES) {
            cumulative += segment.probability;
            if (random <= cumulative) {
                return segment;
            }
        }
        return PRIZES[0]; // Fallback to 10%
    };

    const spin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setPrize(null);
        setShowConfetti(false);

        // Select prize based on probability FIRST
        const selectedPrize = selectPrize();
        const prizeIndex = PRIZES.findIndex(p => p.code === selectedPrize.code);
        const numSegments = PRIZES.length;
        const segmentAngle = 360 / numSegments;

        // Calculate target rotation
        const prizeSegmentCenter = (prizeIndex * segmentAngle) + (segmentAngle / 2);
        const fullSpins = 5 + Math.floor(Math.random() * 3); // 5-7 full spins
        const stopAngle = 360 - prizeSegmentCenter;
        const totalRotation = (fullSpins * 360) + stopAngle;

        // Disable animation, reset to 0, then enable and spin
        setShouldAnimate(false);
        setCurrentRotation(0);

        // After a frame, enable animation and spin to target
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setShouldAnimate(true);
                setCurrentRotation(totalRotation);
            });
        });

        // After spin completes (~4s), show the prize
        setTimeout(() => {
            setIsSpinning(false);
            setPrize(selectedPrize);
            setShowConfetti(true);

            // Hide confetti after 3 seconds
            setTimeout(() => setShowConfetti(false), 3000);
        }, 4000);
    };

    const copyCode = async () => {
        if (!prize) return;
        await navigator.clipboard.writeText(prize.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Confetti particles
    const confettiColors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444', '#EC4899'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 pt-24">
            {/* Confetti */}
            <AnimatePresence>
                {showConfetti && (
                    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                        {[...Array(50)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: -20,
                                    rotate: 0,
                                    scale: Math.random() * 0.5 + 0.5,
                                }}
                                animate={{
                                    y: window.innerHeight + 20,
                                    rotate: Math.random() * 360,
                                    x: Math.random() * window.innerWidth,
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: Math.random() * 2 + 2,
                                    ease: 'easeOut',
                                }}
                                className="absolute w-3 h-3 rounded-sm"
                                style={{
                                    backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                    <Gift className="w-10 h-10 text-health-primary" />
                    {t('spinWheel.title', 'Hediye Çarkı')}
                </h1>
                <p className="text-gray-400 text-lg">
                    {t('spinWheel.subtitle', 'Çarkı çevir, indirim kazan!')}
                </p>
            </motion.div>

            {/* Wheel Container */}
            <div className="relative">
                {/* Pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-white drop-shadow-lg" />
                </div>

                {/* Wheel */}
                <motion.div
                    animate={{ rotate: currentRotation }}
                    transition={shouldAnimate ? {
                        duration: 4,
                        ease: [0.2, 0.8, 0.2, 1],
                    } : { duration: 0 }}
                    className="relative"
                >
                    <canvas
                        ref={canvasRef}
                        width={350}
                        height={350}
                        className="drop-shadow-2xl"
                    />
                </motion.div>

                {/* Spin Button Overlay */}
                {!isSpinning && !prize && (
                    <button
                        onClick={spin}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-health-primary hover:bg-health-primary/90 transition-colors z-20 flex items-center justify-center"
                    >
                        <span className="text-white font-bold text-sm">
                            {t('spinWheel.spin', 'ÇEVİR')}
                        </span>
                    </button>
                )}
            </div>

            {/* Prize Modal */}
            <AnimatePresence>
                {prize && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => { }}
                    >
                        <motion.div
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            className="bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: prize.color }}>
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-2">
                                {t('spinWheel.congratulations', 'Tebrikler!')}
                            </h2>

                            <p className="text-xl text-gray-300 mb-6">
                                <span className="font-bold text-4xl" style={{ color: prize.color }}>
                                    %{prize.discount}
                                </span>
                                <br />
                                {t('spinWheel.wonDiscount', 'İndirim Kazandınız!')}
                            </p>

                            <div className="bg-gray-900 rounded-xl p-4 mb-6">
                                <p className="text-sm text-gray-400 mb-2">{t('spinWheel.yourCode', 'İndirim Kodun:')}</p>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-2xl font-mono font-bold text-white tracking-wider">
                                        {prize.code}
                                    </span>
                                    <button
                                        onClick={copyCode}
                                        className={cn(
                                            "p-2 rounded-lg transition-colors",
                                            copied ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        )}
                                    >
                                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setPrize(null);
                                }}
                                className="w-full py-3 px-6 bg-health-primary hover:bg-health-primary/90 text-white font-bold rounded-xl transition-colors"
                            >
                                {t('spinWheel.spinAgain', 'Tekrar Çevir')}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spinning indicator */}
            {isSpinning && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-xl text-gray-300 animate-pulse"
                >
                    {t('spinWheel.spinning', 'Çevriliyor...')}
                </motion.p>
            )}

            {/* Spin button when idle and no prize showing */}
            {!isSpinning && !prize && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={spin}
                    className="mt-8 px-8 py-4 bg-gradient-to-r from-health-primary to-purple-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                    {t('spinWheel.spinNow', 'Şimdi Çevir')} 🎰
                </motion.button>
            )}
        </div>
    );
}

export default SpinWheelPage;
