import React from 'react';
import type { Result } from '../data/types';

interface ResultScreenProps {
    result: Result;
    onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
    return (
        <div className="screen result-screen">
            <div className="result-card">
                <div className="result-header">
                    <span className="result-label">あなたのタイプは...</span>
                    <h2 className="result-title">{result.title}</h2>
                </div>

                <div className="result-quote">
                    {result.quote}
                </div>

                <div className="result-body">
                    <p className="result-description">{result.description}</p>

                    <div className="tags-container">
                        {result.tags?.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <button className="btn-secondary" onClick={onRestart}>
                    もう一度診断する
                </button>
            </div>
        </div>
    );
};
