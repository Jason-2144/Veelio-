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
          <p className="text-red-500 text-sm font-bold tracking-wider uppercase mb-2 animate-pulse">Critical Failure Detected</p>
          <h1 className="text-3xl font-bold text-white">Your Current System is Collapsing</h1>
        </div>

        {/* --- MAIN CARD: RESILIENCE / STRESS LEVEL --- */}
        <div className="bg-slate-900 border border-red-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-pulse"></div>

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-semibold text-slate-200">Systemic Burnout Risk: TERMINAL</h2>
            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white bg-red-500/20 text-red-400 border border-red-500/50`}>
              {burnoutLevel} Risk
            </span>
          </div>

          {/* Slider Component */}
          <div className="mb-8 relative">
            <div className="h-4 w-full bg-slate-800 rounded-full mb-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 opacity-50 rounded-full"></div>
            </div>

            {/* The Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)] border-4 border-slate-900"
              style={{ left: `92%` }}
            >
              <div className="absolute -top-10 -translate-x-1/2 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-lg whitespace-nowrap">
                DANGER ZONE
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-slate-500 font-medium px-1">
              <span>Stable</span>
              <span>Warning</span>
              <span>Crisis</span>
              <span className="text-red-500 font-bold">Terminal</span>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-5 rounded-xl border flex gap-4 bg-red-900/20 border-red-500/40">
            <AlertCircle className="w-6 h-6 shrink-0 text-red-500" />
            <div>
              <h4 className="font-bold text-sm mb-1 text-red-500">
                TOTAL COLLAPSE IMMINENT
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your current study patterns are not just inefficient—they are self-destructive. You are currently in a "Freeze Response" loop. Without immediate intervention, your retention will drop to near zero and your competitive potential will be permanently neutralized.
              </p>
            </div>
          </div>

        </div>

        {/* --- GRID STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/50 border border-red-900/30 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Diagnostic Status</div>
              <div className="text-red-400 font-bold text-lg">
                {mainDifficulty}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-xl text-slate-500">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Neuro-Energy Level</div>
              <div className="text-slate-400 font-semibold text-lg capitalize">
                {peakEnergy}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-xl text-slate-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Attention Filter</div>
              <div className="text-slate-400 font-semibold text-lg">
                {focusType}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-red-900/30 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1">Resource Output</div>
              <div className="text-red-400 font-bold text-lg">
                {potential} Potential
              </div>
            </div>
          </div>
        </div>

        {/* --- PAYWALL ACTION --- */}
        <div className="mt-8 pt-8 border-t border-red-900/30 text-center">
          <h3 className="text-xl font-bold text-white mb-2 italic">"You are working hard to fail."</h3>
          <p className="text-slate-400 mb-6 text-sm">Every hour you spend without this system is a wasted hour you can never recover. Stop the bleeding before it's too late.</p>

          <Button onClick={handlePayment} fullWidth className="py-6 text-lg bg-red-600 hover:bg-red-700 shadow-[0_0_30px_rgba(220,38,38,0.3)] border-none">
            <Lock className="w-5 h-5 mr-2" /> Force System Reset & Restore Potential
          </Button>
          <p className="text-xs text-slate-600 mt-4 uppercase tracking-tighter">Immediate Action Required • System Override Available</p>
        </div>

      </div>
    </div>
  );
};