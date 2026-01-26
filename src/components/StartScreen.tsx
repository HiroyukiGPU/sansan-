import React from 'react';

interface StartScreenProps {
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="screen start-screen">
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
        </div>
    );
};
