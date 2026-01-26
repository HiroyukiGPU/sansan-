import { useState } from 'react';
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

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionId('Q1');
    setCurrentResultId(null);
  };

  const handleOptionSelect = (optionId: string) => {
    const currentQuestion = questions.find((q) => q.id === currentQuestionId);
    if (!currentQuestion) return;

    const selectedOption = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!selectedOption) return;

    if (selectedOption.resultId) {
      setCurrentResultId(selectedOption.resultId);
      setStep('result');
    } else if (selectedOption.nextQuestionId) {
      setCurrentQuestionId(selectedOption.nextQuestionId);
    }
  };

  const handleRestart = () => {
    setStep('start');
    setCurrentQuestionId('Q1');
    setCurrentResultId(null);
  };

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  const currentResult = currentResultId ? results[currentResultId] : null;

  return (
    <div className="app-container">
      {step === 'start' && <StartScreen onStart={handleStart} />}
      {step === 'quiz' && currentQuestion && (
        <QuestionScreen question={currentQuestion} onOptionSelect={handleOptionSelect} />
      )}
      {step === 'result' && currentResult && (
        <ResultScreen result={currentResult} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
