import React, { useState } from 'react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Loader } from './components/Loader';
import { Result } from './components/Result';
import { UserState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<UserState>({
    step: 'landing',
    answers: {}
  });

  const handleStart = () => {
    setState(prev => ({ ...prev, step: 'quiz' }));
  };

  const handleQuizComplete = (answers: Record<number, string | number>) => {
    setState(prev => ({ ...prev, answers, step: 'loader' }));
  };

  const handleLoaderComplete = () => {
    setState(prev => ({ ...prev, step: 'result' }));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      {state.step === 'landing' && <Landing onStart={handleStart} />}
      {state.step === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {state.step === 'loader' && <Loader onComplete={handleLoaderComplete} />}
      {state.step === 'result' && <Result />}
    </div>
  );
};

export default App;