import React, { useMemo } from 'react';
import { Button } from './ui/Button';
import { Lock, Zap, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { evaluateStudyProfile, deriveResults } from '../utils/scoring';

interface ResultProps {
  onUnlock: () => void;
  answers: Record<number, string | number>;
}

export const Result: React.FC<ResultProps> = ({ onUnlock, answers }) => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_live_SE8ySjJENHfU7Q',
      amount: 19900,
      currency: 'INR',
      name: 'Veelio',
      description: 'Unlock Full Study System',
      handler: function (response: any) { onUnlock(); },
      theme: { color: '#2563eb' }
    };
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  const results = useMemo(() => {
    const scores = evaluateStudyProfile(answers);
    return deriveResults(scores);
  }, [answers]);

  const { burnoutLevel, mainDifficulty, peakEnergy, focusType, potential } = results;

  let stressColor = 'bg-yellow-500';
  let stressScore = 50; // 0-100

  if (burnoutLevel === 'High') {
    stressColor = 'bg-red-500';
    stressScore = 85;
  } else if (burnoutLevel === 'Low') {
    stressColor = 'bg-green-500';
    stressScore = 20;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 p-4 font-sans flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-6 animate-fade-in-up">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-slate-400 text-sm font-medium tracking-wider uppercase mb-2">Analysis Complete</p>
          <h1 className="text-3xl font-bold text-white">Summary of your Study Profile</h1>
        </div>

        {/* --- MAIN CARD: RESILIENCE / STRESS LEVEL --- */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-semibold text-slate-200">Current Stress & Burnout Risk</h2>
            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white ${burnoutLevel === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/50' : burnoutLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' : 'bg-green-500/20 text-green-400 border border-green-500/50'}`}>
              {burnoutLevel} Level
            </span>
          </div>

          {/* Visualization (Person/Icon) could go here, simplified for code */}

          {/* Slider Component */}
          <div className="mb-8 relative">
            {/* Gradient Bar */}
            <div className="h-4 w-full bg-gradient-to-r from-green-500/30 via-yellow-500/30 to-red-500/30 rounded-full mb-2 relative">
              {/* Tick Marks (Invisible mostly, just for spacing) */}
            </div>

            {/* The Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border-4 border-slate-900 transition-all duration-1000 ease-out"
              style={{ left: `${stressScore}%` }}
            >
              <div className="absolute -top-10 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-3 rounded-lg border border-slate-700 whitespace-nowrap">
                You are here
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-slate-500 font-medium px-1">
              <span>Low</span>
              <span>Normal</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>

          {/* Info Box */}
          <div className={`p-5 rounded-xl border flex gap-4 ${burnoutLevel === 'High' ? 'bg-red-900/10 border-red-500/20' : burnoutLevel === 'Medium' ? 'bg-yellow-900/10 border-yellow-500/20' : 'bg-green-900/10 border-green-500/20'}`}>
            <AlertCircle className={`w-6 h-6 shrink-0 ${burnoutLevel === 'High' ? 'text-red-400' : 'text-yellow-400'}`} />
            <div>
              <h4 className={`font-bold text-sm mb-1 ${burnoutLevel === 'High' ? 'text-red-400' : 'text-yellow-400'}`}>
                {burnoutLevel.toUpperCase()} Risk Detected
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {burnoutLevel === 'High'
                  ? "Your answers indicate intense pressure. This level contributes to procrastination ('freeze response'), reduced retention, and mental fatigue."
                  : "You are experiencing moderate pressure. Without a system, this can quickly escalate to burnout during exam season."}
              </p>
            </div>
          </div>

        </div>

        {/* --- GRID STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Stat 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Main Difficulty</div>
              <div className="text-slate-200 font-semibold text-lg">
                {mainDifficulty}
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Peak Energy</div>
              <div className="text-slate-200 font-semibold text-lg capitalize">
                {peakEnergy}
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Focus Type</div>
              <div className="text-slate-200 font-semibold text-lg">
                {focusType}
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Potential</div>
              <div className="text-slate-200 font-semibold text-lg">
                {potential}
              </div>
            </div>
          </div>
        </div>

        {/* --- PAYWALL ACTION --- */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Your Optimized System is Ready</h3>
          <p className="text-slate-400 mb-6 text-sm">Unlock your personalized protocols to lower stress and maximize {focusType} focus.</p>

          <Button onClick={handlePayment} fullWidth className="py-6 text-lg shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <Lock className="w-5 h-5 mr-2" /> Unlock My Report & System
          </Button>
          <p className="text-xs text-slate-600 mt-4">One-time payment • Instant Download</p>
        </div>

      </div>
    </div>
  );
};