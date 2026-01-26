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

  const handleStart = () => {
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
      // If at start of quiz, go back to start screen
      setStep('start');
      return;
    }

    const prevQuestionId = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentQuestionId(prevQuestionId);
    setStep('quiz'); // Ensure we are in quiz state (useful if returning from result, though currently result handles restart)
  };

  const handleRestart = () => {
    setStep('start');
    setCurrentQuestionId('Q1');
    setCurrentResultId(null);
    setHistory([]);
  };

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  const currentResult = currentResultId ? results[currentResultId] : null;

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {step === 'start' && (
          <StartScreen key="start" onStart={handleStart} />
        )}

        {step === 'quiz' && currentQuestion && (
          <QuestionScreen
            key={currentQuestionId}
            question={currentQuestion}
            onOptionSelect={handleOptionSelect}
            onBack={history.length > 0 ? handleBack : undefined}
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
