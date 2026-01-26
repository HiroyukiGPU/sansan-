import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StartScreen } from './components/StartScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';
import { questions, results } from './data/quizData';
import './index.css';

type Step = 'start' | 'quiz' | 'result';

function App() {
  const [step, setStep] = useState<Step>('start');
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('Q1');
  const [currentResultId, setCurrentResultId] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [direction, setDirection] = useState<number>(1); // 1: forward, -1: back

  const handleStart = () => {
    setDirection(1);
    setStep('quiz');
    setCurrentQuestionId('Q1');
    setCurrentResultId(null);
    setHistory([]);
  };

  const handleOptionSelect = (optionId: string) => {
    const currentQuestion = questions.find((q) => q.id === currentQuestionId);
    if (!currentQuestion) return;

    const selectedOption = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!selectedOption) return;

    setDirection(1);
    // Add current question to history before moving forward
    setHistory((prev) => [...prev, currentQuestionId]);

    if (selectedOption.resultId) {
      setCurrentResultId(selectedOption.resultId);
      setStep('result');
    } else if (selectedOption.nextQuestionId) {
      setCurrentQuestionId(selectedOption.nextQuestionId);
    }
  };

  const handleBack = () => {
    if (history.length === 0) {
      setDirection(-1);
      setStep('start');
      return;
    }

    setDirection(-1);
    const prevQuestionId = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentQuestionId(prevQuestionId);
    setStep('quiz');
  };

  const handleRestart = () => {
    setDirection(1);
    setStep('start');
    setCurrentQuestionId('Q1');
    setCurrentResultId(null);
    setHistory([]);
  };

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  const currentResult = currentResultId ? results[currentResultId] : null;

  return (
    <div className="app-container">
      <AnimatePresence mode="wait" custom={direction}>
        {step === 'start' && (
          <StartScreen key="start" onStart={handleStart} />
        )}

        {step === 'quiz' && currentQuestion && (
          <QuestionScreen
            key={currentQuestionId}
            question={currentQuestion}
            onOptionSelect={handleOptionSelect}
            onBack={history.length > 0 ? handleBack : undefined}
            direction={direction}
          />
        )}

        {step === 'result' && currentResult && (
          <ResultScreen
            key="result"
            result={currentResult}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
