import React, { useState } from 'react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Loader } from './components/Loader';
import { Result } from './components/Result';
import { Content } from './components/Content';
import { UserState, ContentModule } from './types';
import { CORE_MAPPING, MODIFIER_MAPPING } from './constants';
import { buildResult } from './utils/scoring';

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
    const results = buildResult(answers);
    setState(prev => ({ ...prev, answers, results, step: 'loader' }));
  };

  const handleLoaderComplete = () => {
    setState(prev => ({ ...prev, step: 'result' }));
  };

  const handleUnlock = () => {
    const { results } = state;
    if (!results) return;

    const modules: ContentModule[] = [];

    // 1. Core Module Calculation
    const [exam, stage, type] = results.assignedCore.split('_');
    const examKey = exam.toLowerCase();
    const stageKey = stage.toLowerCase();

    if (CORE_MAPPING[examKey]?.[stageKey]) {
      modules.push(CORE_MAPPING[examKey][stageKey]);
    }

    // 2. Modifiers Calculation
    // Map assignedModifier strings to actual modules if they exist in mappings
    // For simplicity with existing core, we'll check common modifier questions
    Object.entries(state.answers).forEach(([questionId, answerId]) => {
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
      {state.step === 'result' && <Result onUnlock={handleUnlock} results={state.results!} />}
      {state.step === 'content' && <Content modules={state.unlockedModules || []} />}
    </div>
  );
};

export default App;