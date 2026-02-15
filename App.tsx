import React, { useState } from 'react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Loader } from './components/Loader';
import { Result } from './components/Result';
import { Content } from './components/Content';
import { UserState, ContentModule } from './types';
import { CORE_MAPPING, MODIFIER_MAPPING } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<UserState>({
    step: 'landing',
    answers: {},
    unlockedModules: []
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

  const handleUnlock = () => {
    const modules: ContentModule[] = [];
    const { answers } = state;

    // 1. Core Module Calculation
    let exam = answers[1] as string; // Question 1: Exam (jee/neet)
    const grade = answers[2] as string; // Question 2: Grade (11/12/dropper/revision)

    // Normalize exam IDs
    if (exam === 'jee_boards') exam = 'jee';
    if (exam === 'neet_boards') exam = 'neet';

    if (exam && grade && CORE_MAPPING[exam]?.[grade]) {
      modules.push(CORE_MAPPING[exam][grade]);
    }

    // 2. Modifiers Calculation
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const qId = Number(questionId);
      const aId = String(answerId);

      if (MODIFIER_MAPPING[qId]?.[aId]) {
        modules.push(MODIFIER_MAPPING[qId][aId]);
      }
    });

    setState(prev => ({ ...prev, step: 'content', unlockedModules: modules }));
  };

  const handleBackToLanding = () => {
    setState(prev => ({ ...prev, step: 'landing', answers: {}, unlockedModules: [] }));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      {state.step === 'landing' && <Landing onStart={handleStart} />}
      {state.step === 'quiz' && <Quiz onComplete={handleQuizComplete} onExit={handleBackToLanding} />}
      {state.step === 'loader' && <Loader onComplete={handleLoaderComplete} />}
      {state.step === 'result' && <Result onUnlock={handleUnlock} answers={state.answers} />}
      {state.step === 'content' && <Content modules={state.unlockedModules || []} />}
    </div>
  );
};

export default App;