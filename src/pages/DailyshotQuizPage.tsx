import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Copy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

// Simplified scoring for 3 products only
type ProductScore = {
    energy: number;
    libido: number;
    hangover: number;
};

const initialScores: ProductScore = {
    energy: 0,
    libido: 0,
    hangover: 0,
};

interface QuizOption {
    labelKey: string;
    product: keyof ProductScore;
    points: number;
}

interface QuizQuestion {
    id: number;
    questionKey: string;
    options: QuizOption[];
}

// 10 Questions: Q1-3 Energy, Q4-6 Libido, Q7-10 Hangover
const QUIZ_QUESTIONS: QuizQuestion[] = [
    // === ENERGY QUESTIONS (1-3) ===
    {
        id: 1,
        questionKey: 'quiz.q1.question',
        options: [
            { labelKey: 'quiz.q1.opt1', product: 'energy', points: 3 },
            { labelKey: 'quiz.q1.opt2', product: 'energy', points: 2 },
            { labelKey: 'quiz.q1.opt3', product: 'energy', points: 1 },
            { labelKey: 'quiz.q1.opt4', product: 'energy', points: 0 },
        ],
    },
    {
        id: 2,
        questionKey: 'quiz.q2.question',
        options: [
            { labelKey: 'quiz.q2.opt1', product: 'energy', points: 3 },
            { labelKey: 'quiz.q2.opt2', product: 'energy', points: 2 },
            { labelKey: 'quiz.q2.opt3', product: 'energy', points: 1 },
            { labelKey: 'quiz.q2.opt4', product: 'energy', points: 0 },
        ],
    },
    {
        id: 3,
        questionKey: 'quiz.q3.question',
        options: [
            { labelKey: 'quiz.q3.opt1', product: 'energy', points: 3 },
            { labelKey: 'quiz.q3.opt2', product: 'energy', points: 2 },
            { labelKey: 'quiz.q3.opt3', product: 'energy', points: 1 },
            { labelKey: 'quiz.q3.opt4', product: 'energy', points: 0 },
        ],
    },
    // === LIBIDO QUESTIONS (4-6) - Vitality & Wellness ===
    {
        id: 4,
        questionKey: 'quiz.q4.question',
        options: [
            { labelKey: 'quiz.q4.opt1', product: 'libido', points: 3 },
            { labelKey: 'quiz.q4.opt2', product: 'libido', points: 2 },
            { labelKey: 'quiz.q4.opt3', product: 'libido', points: 1 },
            { labelKey: 'quiz.q4.opt4', product: 'libido', points: 0 },
        ],
    },
    {
        id: 5,
        questionKey: 'quiz.q5.question',
        options: [
            { labelKey: 'quiz.q5.opt1', product: 'libido', points: 3 },
            { labelKey: 'quiz.q5.opt2', product: 'libido', points: 2 },
            { labelKey: 'quiz.q5.opt3', product: 'libido', points: 1 },
            { labelKey: 'quiz.q5.opt4', product: 'libido', points: 0 },
        ],
    },
    {
        id: 6,
        questionKey: 'quiz.q6.question',
        options: [
            { labelKey: 'quiz.q6.opt1', product: 'libido', points: 3 },
            { labelKey: 'quiz.q6.opt2', product: 'libido', points: 2 },
            { labelKey: 'quiz.q6.opt3', product: 'libido', points: 1 },
            { labelKey: 'quiz.q6.opt4', product: 'libido', points: 0 },
        ],
    },
    // === HANGOVER QUESTIONS (7-9) - Social & Party ===
    {
        id: 7,
        questionKey: 'quiz.q7.question',
        options: [
            { labelKey: 'quiz.q7.opt1', product: 'hangover', points: 3 },
            { labelKey: 'quiz.q7.opt2', product: 'hangover', points: 2 },
            { labelKey: 'quiz.q7.opt3', product: 'hangover', points: 1 },
            { labelKey: 'quiz.q7.opt4', product: 'hangover', points: 0 },
        ],
    },
    {
        id: 8,
        questionKey: 'quiz.q8.question',
        options: [
            { labelKey: 'quiz.q8.opt1', product: 'hangover', points: 3 },
            { labelKey: 'quiz.q8.opt2', product: 'hangover', points: 2 },
            { labelKey: 'quiz.q8.opt3', product: 'hangover', points: 1 },
            { labelKey: 'quiz.q8.opt4', product: 'hangover', points: 0 },
        ],
    },
    {
        id: 9,
        questionKey: 'quiz.q9.question',
        options: [
            { labelKey: 'quiz.q9.opt1', product: 'hangover', points: 3 },
            { labelKey: 'quiz.q9.opt2', product: 'hangover', points: 2 },
            { labelKey: 'quiz.q9.opt3', product: 'hangover', points: 1 },
            { labelKey: 'quiz.q9.opt4', product: 'hangover', points: 0 },
        ],
    },
    // === USAGE QUESTION (10) - Determines discount tier ===
    {
        id: 10,
        questionKey: 'quiz.q10.question',
        options: [
            { labelKey: 'quiz.q10.opt1', product: 'energy', points: 0 }, // Never used → 10%
            { labelKey: 'quiz.q10.opt2', product: 'energy', points: 0 }, // 1-2 times → 15%
            { labelKey: 'quiz.q10.opt3', product: 'energy', points: 0 }, // 3-5 times → 20%
            { labelKey: 'quiz.q10.opt4', product: 'energy', points: 0 }, // Regular → 30%
        ],
    },
];

// Discount tiers based on Q10 answer (usage)
const DISCOUNT_TIERS = [10, 15, 20, 30]; // Option index maps to discount %

const PRODUCT_MAP: Record<keyof ProductScore, string> = {
    energy: 'EnergyShot',
    libido: 'LibidoShot',
    hangover: 'HangoverShot',
};

// Dynamic discount codes based on tier
const getDiscountCode = (productName: string, discountPercent: number): string => {
    const prefix = productName.toUpperCase().replace('SHOT', '');
    return `${prefix}${discountPercent}`;
};

function DailyshotQuizPage() {
    const { t, i18n } = useTranslation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState<ProductScore>(initialScores);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(10);

    const question = QUIZ_QUESTIONS[currentQuestion];
    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

    const handleOptionSelect = (optionIndex: number) => {
        setSelectedOption(optionIndex);
    };

    const handleNext = () => {
        if (selectedOption === null) return;

        const option = question.options[selectedOption];

        // Update scores
        const newScores = { ...scores };
        newScores[option.product] += option.points;
        setScores(newScores);

        // Track answer
        const newAnswers = [...answers, selectedOption];
        setAnswers(newAnswers);

        // If Q10, set discount tier
        if (currentQuestion === 9) {
            setDiscountPercent(DISCOUNT_TIERS[selectedOption]);
        }

        // Move to next or show result
        if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            const prevAnswer = answers[currentQuestion - 1];
            const prevOption = QUIZ_QUESTIONS[currentQuestion - 1].options[prevAnswer];

            // Revert score
            const newScores = { ...scores };
            newScores[prevOption.product] -= prevOption.points;
            setScores(newScores);

            // Remove last answer
            setAnswers(answers.slice(0, -1));
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(prevAnswer);
        }
    };

    const getRecommendedProduct = () => {
        const maxScore = Math.max(scores.energy, scores.libido, scores.hangover);
        let recommended: keyof ProductScore = 'energy';

        if (scores.libido === maxScore) recommended = 'libido';
        else if (scores.hangover === maxScore) recommended = 'hangover';

        const productName = PRODUCT_MAP[recommended];
        return products.find(p => p.name === productName) || products[0];
    };

    const result = getRecommendedProduct();
    const discountCode = getDiscountCode(result.name, discountPercent);

    const copyCode = async () => {
        await navigator.clipboard.writeText(discountCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const restart = () => {
        setCurrentQuestion(0);
        setScores(initialScores);
        setAnswers([]);
        setShowResult(false);
        setSelectedOption(null);
        setDiscountPercent(10);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {t('quiz.title', 'Sana Özel Dailyshot')}
                    </h1>
                    <p className="text-gray-400">
                        {t('quiz.subtitle', 'Hayat tarzına uygun ürünü keşfet')}
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-700"
                        >
                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                    <span>{t('quiz.question', 'Soru')} {currentQuestion + 1}/{QUIZ_QUESTIONS.length}</span>
                                    <span>{Math.round(progress)}%</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-health-primary to-purple-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>

                            {/* Question */}
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                                {t(question.questionKey)}
                            </h2>

                            {/* Options */}
                            <div className="space-y-3 mb-8">
                                {question.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionSelect(index)}
                                        className={cn(
                                            "w-full p-4 rounded-xl text-left transition-all duration-200 border-2",
                                            selectedOption === index
                                                ? "bg-health-primary/20 border-health-primary text-white"
                                                : "bg-gray-700/50 border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-600"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                                selectedOption === index
                                                    ? "border-health-primary bg-health-primary"
                                                    : "border-gray-500"
                                            )}>
                                                {selectedOption === index && (
                                                    <Check className="w-4 h-4 text-white" />
                                                )}
                                            </div>
                                            <span>{t(option.labelKey)}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between">
                                <Button
                                    variant="outline"
                                    onClick={handleBack}
                                    disabled={currentQuestion === 0}
                                    className="gap-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    {t('quiz.back', 'Geri')}
                                </Button>

                                <Button
                                    onClick={handleNext}
                                    disabled={selectedOption === null}
                                    className="gap-2 bg-health-primary hover:bg-health-primary/90"
                                >
                                    {currentQuestion === QUIZ_QUESTIONS.length - 1 ? t('quiz.finish', 'Bitir') : t('quiz.next', 'İleri')}
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-700 text-center"
                        >
                            {/* Result Header */}
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-health-primary to-purple-600">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {t('quiz.yourProduct', 'Sana Özel Ürün')}
                            </h2>

                            {/* Product Card */}
                            <div className="bg-gray-900/50 rounded-2xl p-6 my-6">
                                <img
                                    src={result.image}
                                    alt={result.name}
                                    className="w-32 h-32 object-contain mx-auto mb-4"
                                />
                                <p className="text-2xl font-bold text-white">
                                    {result.name}
                                </p>
                                <p className="text-gray-400 mt-2">
                                    {i18n.language === 'en' ? result.shortDescription : result.shortDescriptionTr}
                                </p>
                            </div>

                            {/* Discount Code */}
                            <div className="bg-gradient-to-r from-health-primary/20 to-purple-600/20 rounded-xl p-6 mb-6 border border-health-primary/30">
                                <p className="text-sm text-gray-400 mb-2">
                                    {t('quiz.discountMessageDynamic', 'İndirim Kodun:')}
                                </p>
                                <p className="text-4xl font-bold text-health-primary mb-2">
                                    %{discountPercent}
                                </p>
                                <div className="flex items-center justify-center gap-3 bg-gray-900 rounded-lg p-3">
                                    <span className="text-xl font-mono font-bold text-white tracking-wider">
                                        {discountCode}
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

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    variant="outline"
                                    onClick={restart}
                                    className="flex-1"
                                >
                                    {t('quiz.restart', 'Tekrar Başla')}
                                </Button>
                                <Link to="/health" className="flex-1">
                                    <Button className="w-full bg-health-primary hover:bg-health-primary/90">
                                        {t('quiz.browseProducts', 'Ürünlere Göz At')}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default DailyshotQuizPage;
