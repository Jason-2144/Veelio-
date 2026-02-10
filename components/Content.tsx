import React from 'react';

export const Content: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#020617] p-8 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Welcome to Your Study System</h1>
                <p className="text-slate-400 mb-8">
                    This is the post-payment content area. You can now start building the actual study modules here.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-2">Module 1: Sleep Optimization</h2>
                        <p className="text-slate-500">How to fix your circadian rhythm without giving up your night owl nature.</p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-2">Module 2: Focus Protocols</h2>
                        <p className="text-slate-500">Deep work triggers for the distracted mind.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
