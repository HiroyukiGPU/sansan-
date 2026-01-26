import React from 'react';
import type { Question } from '../data/types';

interface QuestionScreenProps {
    question: Question;
    onOptionSelect: (optionId: string) => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, onOptionSelect }) => {
    return (
        <div className="screen question-screen">
            <div className="question-content">
                <h2 className="question-text">{question.text}</h2>
                <div className="options-container">
                    {question.options.map((option) => (
                        <button
                            key={option.id}
                            className="option-btn"
                            onClick={() => onOptionSelect(option.id)}
                        >
                            <span className="option-label">{option.id}</span>
                            <span className="option-text">{option.text}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
