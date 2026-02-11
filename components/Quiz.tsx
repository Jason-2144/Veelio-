import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { Button } from './ui/Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: Record<number, string | number>) => void;
  onExit?: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [sliderValue, setSliderValue] = useState(5);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const handleOptionSelect = (value: string | number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setSliderValue(5); // Reset slider for next Q if needed, though only Q10 is slider
      }, 250); // Small delay for visual feedback
    } else {
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (onExit) {
      onExit();
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-xl mx-auto p-6">

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="self-start text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4 px-2 py-1 -ml-2 rounded-lg hover:bg-slate-800/50"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Progress */}
      <div className="w-full h-1 bg-slate-800 rounded-full mb-12 mt-8">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.3)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center animate-fade-in-up">
        {/* Microcopy Header */}
        <p className="text-blue-400 text-sm font-medium mb-3 uppercase tracking-wider">
          Understanding You — {currentIndex + 1} of {QUESTIONS.length}
        </p>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          {currentQuestion.question}
        </h2>

        {/* Psychological Microcopy */}
        <p className="text-slate-400 mb-10 italic border-l-2 border-slate-700 pl-4">
          "{currentQuestion.microcopy}"
        </p>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.type === 'single' && currentQuestion.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className="w-full p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 hover:border-blue-500/50 transition-all text-left group"
            >
              <div className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                {option.label}
              </div>
              {option.subtext && (
                <div className="text-sm text-slate-500 mt-1 group-hover:text-slate-400">
                  {option.subtext}
                </div>
              )}
            </button>
          ))}

          {/* Slider for Q10 */}
          {currentQuestion.type === 'slider' && (
            <div className="py-8">
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between mt-6 text-xs text-slate-400 font-medium">
                <span>{currentQuestion.minLabel}</span>
                <span className="text-blue-400 text-lg font-bold">{sliderValue}</span>
                <span>{currentQuestion.maxLabel}</span>
              </div>

              <Button
                onClick={() => handleOptionSelect(sliderValue)}
                fullWidth
                className="mt-12"
              >
                Confirm Level <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};