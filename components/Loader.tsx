import React, { useEffect, useState } from 'react';
import { LOADER_MESSAGES } from '../constants';
import { Scan, BrainCircuit } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Total duration 30 seconds
    const duration = 4000;
    const intervalTime = 50; // Update progress every 50ms for smoothness
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        onComplete();
      }
    }, intervalTime);

    // Message rotation every 3 seconds (aligned with duration)
    const messageTimer = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % LOADER_MESSAGES.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#020617] font-sans">

      {/* Icon Animation */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full"></div>
        <BrainCircuit className="w-20 h-20 text-blue-600 animate-pulse relative z-10" />
        <Scan className="w-20 h-20 text-slate-600 absolute top-0 left-0 animate-[spin_4s_linear_infinite] opacity-50" />
      </div>

      {/* Main Headline */}
      <h2 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight">
        Building your personalized study system…
      </h2>

      {/* Subheadline */}
      <p className="text-slate-500 text-sm mb-12 max-w-sm mx-auto leading-relaxed">
        This system is being generated uniquely from your answers.
      </p>

      {/* Dynamic Analysis Message */}
      <div className="h-6 mb-4 flex items-center justify-center w-full">
        <p key={messageIndex} className="text-blue-400 text-sm font-mono animate-[pulse_3s_ease-in-out_infinite] shadow-blue-500/20 drop-shadow-sm">
          {`> ${LOADER_MESSAGES[messageIndex]}`}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
        <div
          className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
          style={{
            width: `${progress}%`,
            transition: 'width 50ms linear'
          }}
        ></div>
      </div>

    </div>
  );
};