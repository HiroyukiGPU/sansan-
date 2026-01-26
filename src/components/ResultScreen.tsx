import React from 'react';
import { motion } from 'framer-motion';
import type { Result } from '../data/types';

interface ResultScreenProps {
    result: Result;
    onRestart: () => void;
}

const containerVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } as any },
    exit: { opacity: 0, scale: 0.95 },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const OneDaySchedule: React.FC<{ schedule: Result['schedule'] }> = ({ schedule }) => {
    if (!schedule || schedule.length === 0) return null;

    return (
        <div className="schedule-container">
            <h3 className="schedule-title">ONE DAY SCHEDULE</h3>
            <div className="timeline">
                {schedule.map((item, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                    >
                        <div className="timeline-time">{item.time}</div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">{item.description}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
    return (
        <motion.div
            className="screen result-screen"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="result-card">
                <motion.div className="result-header" variants={itemVariants} transition={{ delay: 0.2 }}>
                    <span className="result-label">あなたのタイプは...</span>
                    <h2 className="result-title">{result.title}</h2>
                </motion.div>

                <motion.div className="result-quote" variants={itemVariants} transition={{ delay: 0.4 }}>
                    {result.quote}
                </motion.div>

                <motion.div className="result-body" variants={itemVariants} transition={{ delay: 0.6 }}>
                    <p className="result-description">{result.description}</p>

                    <div className="tags-container">
                        {result.tags?.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>

                    <OneDaySchedule schedule={result.schedule} />
                </motion.div>

                <motion.button
                    className="btn-secondary"
                    onClick={onRestart}
                    variants={itemVariants}
                    transition={{ delay: 1.5 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#0055aa", color: "#fff", borderColor: "#0055aa" }}
                    whileTap={{ scale: 0.95 }}
                >
                    もう一度診断する
                </motion.button>
            </div>
        </motion.div>
    );
};
