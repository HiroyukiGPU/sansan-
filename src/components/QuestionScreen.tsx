import React from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../data/types';

interface QuestionScreenProps {
    question: Question;
    onOptionSelect: (optionId: string) => void;
    onBack?: () => void;
    direction?: number;
}

const containerVariants = {
    initial: (direction: number) => ({
        opacity: 0,
        x: direction > 0 ? 50 : -50,
    }),
    animate: {
        opacity: 1,
        x: 0,
        transition: { staggerChildren: 0.1 }
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction < 0 ? 50 : -50,
    }),
};

const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
};

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, onOptionSelect, onBack, direction = 1 }) => {
    return (
        <motion.div
            className="screen question-screen"
            custom={direction}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="question-content">
                <motion.h2 className="question-text" variants={itemVariants}>
                    {question.text}
                </motion.h2>

                <div className="options-container">
                    {question.options.map((option) => (
                        <motion.button
                            key={option.id}
                            className="option-btn"
                            onClick={() => onOptionSelect(option.id)}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, backgroundColor: "#f0fbff" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="option-label">{option.id}</span>
                            <span className="option-text">{option.text}</span>
                        </motion.button>
                    ))}
                </div>

                {onBack && (
                    <motion.button
                        className="btn-back-absolute"
                        onClick={onBack}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        ← 戻る
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};
