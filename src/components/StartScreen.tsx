import React from 'react';
import { motion } from 'framer-motion';

interface StartScreenProps {
    onStart: () => void;
}

const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <motion.div
            className="screen start-screen"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <div className="content">
                <h1 className="title">
                    <span>Sansan</span>
                    <br />
                    Career Diagnosis
                </h1>
                <p className="subtitle">あなたのキャリアタイプを診断します</p>
                <button className="btn-primary" onClick={onStart}>
                    診断を始める
                </button>
            </div>
        </motion.div>
    );
};
