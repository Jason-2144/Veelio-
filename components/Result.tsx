import React from 'react';
import { PAYWALL_FEATURES } from '../constants';
import { Button } from './ui/Button';
import { Lock, CheckCircle2, AlertTriangle, Moon, Battery, Fingerprint } from 'lucide-react';

interface ResultProps {
  onUnlock: () => void;
}

export const Result: React.FC<ResultProps> = ({ onUnlock }) => {
  const handlePayment = () => {
    // TEMPORARY: Bypass payment for testing
    onUnlock();
    return;

    /*
    const options = {
      key: 'rzp_live_SE8ySjJENHfU7Q', // Your Live Key
      amount: 19900, // 199 INR in paise
      currency: 'INR',
      name: 'Veelio',
      description: 'Unlock Full Study System',
      image: 'https://cdn.lucide.dev/lucide/brain.svg',
      handler: function (response: any) {
        alert('Payment Successful!');
        alert('Payment ID: ' + response.razorpay_payment_id);
        onUnlock(); // Call this on success
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#2563eb'
      }
    };

    const rzp1 = new (window as any).Razorpay(options);

    rzp1.on('payment.failed', function (response: any) {
      alert('Payment Failed');
      alert('Reason: ' + response.error.reason);
      console.error(response.error);
    });

    rzp1.open();
    */
  };

  return (
    <div className="min-h-screen bg-[#020617] pb-20">

      {/* 1. Identity Reveal (Sticky Header feeling) */}
      <div className="bg-gradient-to-b from-blue-950/20 to-[#020617] border-b border-blue-900/30 p-8 pt-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs mb-6">
          <Fingerprint className="w-3 h-3" />
          Archetype Identified
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          You are a <span className="text-blue-400">Resilient Night Owl Hardworker</span>
        </h1>

        <div className="flex justify-center gap-4 text-xs font-mono text-slate-500 mb-6">
          <span className="flex items-center gap-1"><Moon className="w-3 h-3" /> CHRONOTYPE: LATE</span>
          <span className="flex items-center gap-1"><Battery className="w-3 h-3" /> BURNOUT RISK: HIGH</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 -mt-4">

        {/* 2. Validation Paragraph */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
          <p className="text-slate-300 leading-relaxed text-lg">
            <span className="text-white font-semibold">Here is the truth:</span> You are not lazy. You actually work hard — just at the wrong times, under constant pressure.
            <br /><br />
            Your brain doesn't activate until 10 PM, yet you force yourself to wake up at 6 AM because "that's what toppers do." This creates a chronic sleep debt loop that kills your retention, no matter how many hours you stare at books.
          </p>
        </div>

        {/* 3. The "Product" (Blurred) */}
        <div className="space-y-6 relative">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Your System is Ready</h3>
            <span className="text-xs text-green-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Generated
            </span>
          </div>

          {/* Cards Container */}
          <div className="space-y-4 select-none pointer-events-none">
            {PAYWALL_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex items-center justify-between opacity-50 blur-[2px]">
                <div>
                  <h4 className="font-semibold text-slate-200">{feature.title}</h4>
                  <p className="text-sm text-slate-500">{feature.desc}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-800"></div>
              </div>
            ))}
          </div>

          {/* Paywall Overlay */}
          <div className="absolute inset-0 top-10 backdrop-blur-[6px] bg-gradient-to-b from-[#020617]/0 via-[#020617]/90 to-[#020617] flex flex-col items-center justify-end pb-0 z-10 h-[110%]">

            <div className="w-full bg-[#0B1120] border border-blue-900/20 shadow-2xl rounded-t-3xl p-8 animate-slide-up">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-900/20 p-4 rounded-full border border-blue-900/30">
                  <Lock className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white text-center mb-2">
                Unlock Your Full Study System
              </h2>
              <p className="text-slate-400 text-center mb-8 text-sm">
                We've analyzed your sleep, focus, and stress. <br />This isn't a generic template. It's yours.
              </p>

              <div className="space-y-3 mb-8">
                {PAYWALL_FEATURES.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{f.title}: <span className="text-slate-500">{f.desc}</span></span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>And 2 more custom modules...</span>
                </div>
              </div>

              <Button onClick={handlePayment} fullWidth className="text-lg py-5 mb-4">
                Unlock My System
              </Button>

              <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                <span>One-time Payment</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>Instant Access</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>Secure</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};