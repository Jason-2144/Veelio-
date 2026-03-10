import React from 'react';
import { Button } from './ui/Button';
import {
  Zap, Clock, AlertCircle, ShieldCheck,
  ChevronRight, Star, CheckCircle2,
  Activity, ShieldAlert, BookOpen, RefreshCcw,
  Target, ZapOff, Fingerprint, Lock, Shield,
  Calendar, AlertTriangle, Layers, Rocket, HeartPulse,
  Smile, Frown, ArrowRight, Check, PlayCircle
} from 'lucide-react';
import { DiagnosticResults } from '../types';

interface ResultProps {
  onUnlock: () => void;
  results: DiagnosticResults;
}

export const Result: React.FC<ResultProps> = ({ onUnlock, results }) => {
  const {
    riskProfile,
    focusPattern,
    focusRange,
    energyType,
    energyWindow,
    strategyMismatch,
    stressResponse,
    timelinePressure,
    monthsLeft,
    examType,
    syllabusRemaining,
    coreModule,
    modifier1,
    modifier2,
    modifier3
  } = results;

  const handlePayment = () => {
    const options = {
      key: 'rzp_live_SE8ySjJENHfU7Q',
      amount: 19900,
      currency: 'INR',
      name: 'Veelio',
      description: 'Unlock Full Study System',
      handler: function (response: any) { onUnlock(); },
      theme: { color: '#667eea' }
    };
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-center py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase italic">
            You Just Took The First Step.
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white/90">
            Now Here's What 90% of Students Do Wrong Next.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20 space-y-24">

        {/* The Problem Section */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight text-center md:text-left">
            They Know The Problem. But They Don't Fix It.
          </h2>
          <div className="space-y-6 text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            <p>You just spent 5 minutes identifying exactly what's breaking your study routine.</p>
            <p className="text-white italic">Your focus issues. Your time conflicts. Your burnout patterns.</p>
            <p>You know what's wrong.</p>
            <p className="text-blue-400 font-black">But knowing isn't enough. You've known for months.</p>
            <p className="text-white font-black text-2xl pt-4">The question is: What are you going to do about it?</p>
          </div>
        </div>

        {/* Consequences Section */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 space-y-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Frown className="w-32 h-32 text-red-500" />
          </div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Here's What Happens If You Do Nothing
            </h3>
            <div className="space-y-4 text-slate-400 text-lg font-medium">
              <p>You'll bookmark this page.</p>
              <p>Tell yourself "I'll figure it out later."</p>
              <p>Try another YouTube study vlog. Download another aesthetic Notion template.</p>
              <div className="pt-4 space-y-2">
                <p className="text-red-400 font-black text-2xl">And in 2 weeks, you'll be exactly where you are right now.</p>
                <p className="text-slate-300 font-bold italic">Frustrated. Behind on syllabus. Guilty about wasted time.</p>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest pt-4 animate-pulse">Except now you're 2 weeks closer to your exam.</p>
            </div>
          </div>
        </div>

        {/* The Solution Invitation */}
        <div className="text-center space-y-8 py-12">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-500 decoration-8 underline-offset-[12px]">
            Or You Could Actually Fix It. Today.
          </h2>
          <div className="space-y-4 text-slate-400 text-xl font-medium max-w-2xl mx-auto">
            <p>The Veelio system isn't another motivational speech.</p>
            <p>It's not a generic PDF that tells you to "work hard and stay focused."</p>
            <p className="text-white font-black text-2xl pt-4">It's a complete study system built for YOUR exact situation.</p>
            <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm pt-4">Here's what you're getting:</p>
          </div>
        </div>

        {/* Secondary Unlock CTA */}
        <div className="max-w-md mx-auto space-y-4 py-8">
          <Button onClick={handlePayment} fullWidth className="py-6 text-lg font-black bg-white text-[#667eea] hover:bg-slate-50 shadow-xl rounded-2xl group border-none uppercase transition-all hover:scale-[1.02]">
            UNLOCK MY SYSTEM – ₹199
          </Button>
          <div className="flex items-center justify-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" /> Secure Razorpay Payment
          </div>
        </div>

        {/* Product Component 1: Core Module */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-14 rounded-[3rem] relative overflow-hidden group hover:border-[#667eea]/50 transition-colors shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Layers className="w-40 h-40 text-[#667eea]" />
          </div>
          <div className="space-y-10 relative z-10">
            <div className="space-y-3">
              <span className="text-xs text-[#667eea] font-black uppercase tracking-[0.4em]">Foundation:</span>
              <h4 className="text-3xl md:text-4xl font-black text-white leading-tight underline decoration-[#667eea]/50 underline-offset-8">📚 Your Veelio Core Module</h4>
              <p className="text-slate-400 text-lg font-bold">25-30 pages of actionable strategy</p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { text: 'Daily block-wise timetable (customized for your exam timeline)', highlight: true },
                { text: 'Weekly review & adjustment system', highlight: false },
                { text: 'Monthly progression map broken into phases', highlight: false },
                { text: 'Subject-wise weightage & priority areas', highlight: false },
                { text: 'Concept-to-practice ratios that actually work', highlight: false },
                { text: 'Built-in revision cycles (not an afterthought)', highlight: false }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#667eea] shrink-0 mt-0.5" />
                  <span className={`text-base leading-snug ${item.highlight ? 'text-white font-bold' : 'text-slate-300 font-medium'}`}>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-800 space-y-4">
              <p className="text-slate-500 font-black uppercase tracking-widest text-sm">This isn't just "study physics from 9-11 AM."</p>
              <p className="text-xl font-bold text-white leading-relaxed italic">
                "Here's exactly what to study, how to study it, when to revise it, and how to know if you're on track."
              </p>
            </div>
          </div>
        </div>

        {/* Product Component 2: Modifiers */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h4 className="text-3xl font-black text-white tracking-tight flex items-center justify-center gap-4">
              ⚡ Your Custom Modifiers
            </h4>
            <div className="bg-[#667eea]/10 inline-block px-6 py-2 rounded-full border border-[#667eea]/20">
              <p className="text-[#667eea] font-black text-sm uppercase tracking-widest">Based on your quiz results, you get 2-4 modifiers</p>
            </div>
            <p className="text-slate-400 text-lg font-medium">These address YOUR specific blocks:</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: "🧠",
                title: "Low Focus Modifier",
                desc: "Study techniques for 30-90 min attention spans (not generic Pomodoro BS)",
                active: results.assignedModifiers.includes('low_focus') || results.focusRange.includes('45-90')
              },
              {
                icon: "🌙",
                title: "Night Owl Modifier",
                desc: "How to use 9 PM-1 AM productively without destroying your sleep",
                active: results.assignedModifiers.includes('night_owl') || results.energyType.toLowerCase().includes('night')
              },
              {
                icon: "🏃",
                title: "Athlete/Extracurricular Modifier",
                desc: "Balancing sports/activities with exam prep",
                active: results.assignedModifiers.includes('athlete')
              },
              {
                icon: "😰",
                title: "High Burnout Risk Protocol",
                desc: "Early warning signs & prevention strategies",
                active: results.riskProfile.includes('BURNOUT')
              }
            ].filter(mod => mod.active).map((mod, i) => (
              <div key={i} className="bg-slate-900/40 border border-[#667eea]/20 p-8 rounded-[2.5rem] flex gap-8 items-center group hover:bg-[#667eea]/5 transition-all">
                <div className="text-6xl group-hover:scale-110 transition-transform">{mod.icon}</div>
                <div className="space-y-2">
                  <h5 className="text-xl font-black text-white tracking-tight uppercase italic">{mod.title}</h5>
                  <p className="text-slate-400 text-lg font-medium">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 font-bold italic">Each modifier = 15-30 pages of specific tactics, not vague advice.</p>
        </div>

        {/* Product Component 3: Crisis Protocol */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-[3rem] p-8 md:p-14 space-y-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <HeartPulse className="w-40 h-40 text-red-500" />
          </div>
          <div className="space-y-10 relative z-10">
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic">🚨 The Veelio Crisis Protocol</h4>
              <p className="text-red-400 text-xl font-black">This alone is worth ₹199.</p>
            </div>

            <div className="space-y-8 text-slate-300 text-lg font-medium max-w-2xl">
              <p>Every other study plan assumes you're a robot who never misses a day.</p>
              <p className="text-white font-black text-2xl">Veelio assumes you're human.</p>
              <div className="space-y-4 pt-4">
                <p className="text-slate-500 font-black uppercase text-sm tracking-[0.2em]">What to do when you miss:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "1 day", sub: "quick recovery" },
                    { label: "3 days", sub: "minor adjustment" },
                    { label: "1 week", sub: "structured catch-up" },
                    { label: "2 weeks", sub: "triage mode" }
                  ].map((tier, i) => (
                    <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-1">
                      <p className="text-white font-black">{tier.label}</p>
                      <p className="text-[10px] text-red-400 font-bold uppercase tracking-tighter">{tier.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <p className="text-white font-bold opacity-70 underline decoration-red-500 underline-offset-8">Includes:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    "What to skip vs what's non-negotiable",
                    "How to catch up without burning out harder",
                    "Guilt management & psychological reset",
                    "Week-by-week recovery phases"
                  ].map((inc, i) => (
                    <li key={i} className="flex gap-3 items-center text-sm font-bold text-slate-400">
                      <ArrowRight className="w-4 h-4 text-red-500 shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-red-400 font-black text-center pt-8 text-xl italic uppercase tracking-tighter">
                This is the difference between bouncing back in 2 days vs spiraling for 2 weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Bonus Materials */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-[2.5rem] p-10 space-y-10 group transition-all hover:bg-slate-900/40">
          <div className="text-center space-y-2">
            <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center justify-center gap-4">
              <Rocket className="w-8 h-8 text-yellow-500" /> 🎯 Bonus Materials
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Veelio Focus Formulas", desc: "Tested techniques for different attention spans" },
              { title: "Syllabus Tracker", desc: "Know exactly where you stand at any moment" },
              { title: "Parent Pressure Scripts", desc: "How to handle \"beta padh lo\" conversations" },
              { title: "Exam Week Protocol", desc: "Last 7 days strategy" },
              { title: "Mock Test Analysis Framework", desc: "Turn every test into actionable improvements" }
            ].map((bonus, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-yellow-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-white font-black text-sm uppercase tracking-tight">{bonus.title}</h5>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed italic">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10 space-y-6">
            <h4 className="text-xl font-black text-white uppercase tracking-widest italic">Don't buy Veelio if:</h4>
            <ul className="space-y-4">
              {[
                "You just want motivation (go watch a YouTube video)",
                "You're looking for a magic shortcut (doesn't exist)",
                "You won't actually implement it (then you're wasting ₹199)"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <ZapOff className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-slate-400 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-500/5 border border-blue-500/10 rounded-[2.5rem] p-10 space-y-6">
            <h4 className="text-xl font-black text-white uppercase tracking-widest italic">Buy Veelio if:</h4>
            <ul className="space-y-4">
              {[
                "You're tired of starting and quitting study plans",
                "You know you need structure but generic plans don't work",
                "You're willing to follow a system that's built for YOU",
                "You want a safety net for when things go wrong"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-300 font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-10">
          <h4 className="text-center text-slate-500 font-black uppercase tracking-[0.4em] text-xs">What Students Are Saying</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I'm a night owl and every plan told me to wake up at 5 AM. Veelio actually worked WITH my schedule. First time I've stuck to something for more than 2 weeks.",
                author: "Arjun, JEE 2024"
              },
              {
                quote: "The Crisis Protocol saved me. I got COVID and missed 12 days. Without Veelio I would've panicked and given up. Instead I followed the recovery plan and actually caught up.",
                author: "Priya, NEET 2024"
              },
              {
                quote: "Finally a system that doesn't make me feel like a failure for having a 45-minute attention span. The Low Focus Modifier is exactly what I needed.",
                author: "Rahul, JEE Dropper"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] space-y-6 group hover:scale-[1.02] transition-transform">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 font-medium italic leading-relaxed">“{t.quote}”</p>
                <p className="text-white font-black text-xs uppercase tracking-widest pt-2">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Investment */}
        <div className="bg-slate-900 border-2 border-slate-800 rounded-[3rem] p-10 md:p-14 space-y-12 shadow-2xl">
          <h4 className="text-3xl font-black text-white tracking-tight text-center">The Investment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-500 font-black uppercase text-xs tracking-widest">Other options:</p>
              <div className="space-y-4">
                {[
                  { label: "Coaching institutes", val: "₹40,000 - ₹2,00,000/year" },
                  { label: "Personal mentorship", val: "₹5,000 - ₹15,000/month" },
                  { label: "Generic study planners", val: "₹500 - ₹2,000" }
                ].map((opt, i) => (
                  <div key={i} className="flex justify-between items-center text-slate-400 font-medium">
                    <span>{opt.label}</span>
                    <span className="text-white font-bold opacity-50">{opt.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#667eea] p-8 rounded-[2rem] text-center space-y-4 shadow-xl shadow-[#667eea]/20">
              <h5 className="text-white font-black text-xl uppercase italic tracking-widest">Your Veelio System</h5>
              <div className="text-6xl font-black text-white tracking-tighter">₹199</div>
              <p className="text-white/80 font-bold uppercase tracking-widest text-[10px]">One-time payment. Lifetime access.</p>
            </div>
          </div>
          <p className="text-center text-slate-500 italic font-bold">All PDFs downloadable immediately.</p>
        </div>

        {/* Zero Risk Section */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-[2.5rem] p-10 md:p-14 text-center space-y-6">
          <h4 className="text-3xl font-black text-white flex items-center justify-center gap-4 tracking-tight">
            <ShieldCheck className="w-10 h-10 text-blue-500" /> Zero Risk
          </h4>
          <p className="text-[#667eea] font-black text-xl uppercase tracking-widest italic">7-Day Money Back Guarantee</p>
          <div className="max-w-xl mx-auto space-y-4 text-slate-400 text-lg font-medium leading-relaxed">
            <p>Download everything. Try the system for a week.</p>
            <p>If it doesn't work for you, email us. Full refund. No questions asked.</p>
            <p className="text-white font-bold pt-4">You literally have nothing to lose except ₹199 you'd probably spend on chai and samosas anyway.</p>
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[3.5rem] p-10 md:p-16 text-center space-y-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -mr-48 -mt-48 transition-transform group-hover:scale-110"></div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-widest italic uppercase">
              ⏰ Your System Expires in 24 Hours
            </h3>
            <div className="max-w-2xl mx-auto space-y-6 text-white/90 text-lg font-bold leading-relaxed">
              <p>Your quiz results generated a custom system specifically for you.</p>
              <p className="text-2xl font-black italic underline decoration-white decoration-4 underline-offset-8">But here's the thing:</p>
              <p>If you don't act now, you'll close this tab. Get distracted. Forget about it.</p>
              <p className="text-white font-black text-3xl">And tomorrow you'll be back to the same cycle.</p>
              <p className="text-white italic">Your personalized Veelio system is ready. Right now.</p>
              <p className="text-4xl font-black pt-8 tracking-tighter">Are you going to take it?</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 p-10 rounded-[3rem] space-y-10 relative z-10">
            <div className="space-y-4">
              <h4 className="text-4xl font-black text-white tracking-tight">Unlock Your Veelio System</h4>
              <p className="text-white text-lg font-black tracking-[0.3em] uppercase opacity-70">₹199 | Instant Download | Money Back Guarantee</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto text-left py-4">
              {[
                'Your Core Module (25-30 pages)',
                '2-4 Custom Modifiers (10-15 pages each)',
                'Crisis Protocol',
                'All bonus materials',
                'Lifetime access'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <Button onClick={handlePayment} fullWidth className="py-10 md:py-14 text-2xl md:text-3xl font-black bg-white text-[#667eea] hover:bg-slate-50 shadow-2xl rounded-3xl group border-none uppercase transition-all hover:scale-[1.03]">
                GET MY SYSTEM NOW - ₹199
              </Button>
              <p className="text-white/80 font-bold italic text-sm">Your system is generated and waiting. This offer expires in 24 hours.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-4 border-t border-white/10 opacity-60 text-[10px] font-black uppercase tracking-[0.3em] text-white">
              <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> Secure payment via Razorpay</span>
              <span className="flex items-center gap-2"><PlayCircle className="w-3 h-3" /> Instant PDF download</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> 7-day money back guarantee</span>
            </div>
          </div>
        </div>


        {/* Founder's Letter */}
        <div className="max-w-2xl mx-auto space-y-8 text-center pt-20 border-t border-slate-900">
          <h4 className="text-3xl font-black text-white tracking-tight italic uppercase">Still Thinking About It?</h4>
          <div className="space-y-8 text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">
            <p>Look, I get it.</p>
            <p>₹199 isn't a lot, but it's something. And you've been burned by "study systems" before.</p>
            <p className="text-white font-black text-2xl not-italic">Here's the truth:</p>
            <p>I built Veelio because I was exactly where you are.</p>
            <p>Trying plan after plan. Feeling like something was wrong with ME because I couldn't stick to the topper's routine.</p>
            <p className="text-blue-500 font-bold not-italic">It took me way too long to realize: The plans were the problem, not me.</p>
            <p className="text-white font-black text-2xl not-italic">Your brain isn't broken. Your strategy is.</p>
            <p>This system is what I wish someone had given me when I was preparing.</p>
            <p>Not perfect. Not magic. Just honest, personalized, and actually usable.</p>
            <p className="text-white font-black pt-4">Try it for a week. If it doesn't help, I'll refund you myself.</p>
            <p className="text-white font-black text-3xl pt-8 not-italic">What do you have to lose?</p>
            <div className="pt-10 space-y-1 not-italic">
              <p className="text-white font-black text-2xl tracking-tighter">— Amaan</p>
              <p className="text-slate-500 font-black text-xs uppercase tracking-widest">Founder, Veelio</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};