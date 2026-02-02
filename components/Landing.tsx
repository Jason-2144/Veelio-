import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Brain, Clock } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto animate-fade-in">
      
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
        Why does your schedule fail? <br />
        <span className="text-blue-400">Because it wasn't built for your brain.</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
        Stop copying toppers. Their routine is their advantage—and your trap. 
        We analyze your biology, stress levels, and academic debt to build a survival system that works when motivation dies.
      </p>

      {/* CTA */}
      <div className="w-full max-w-xs space-y-4">
        <Button onClick={onStart} fullWidth className="text-lg">
          Analyze My Study Pattern
          <ArrowRight className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> Takes 60 seconds
          </span>
          <span>•</span>
          <span>No Login Required</span>
        </div>
      </div>

    </div>
  );
};