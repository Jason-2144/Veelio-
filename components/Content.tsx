import React from 'react';
import { ContentModule } from '../types';
import { Download, FileText, Zap } from 'lucide-react';

interface ContentProps {
    modules: ContentModule[];
}

export const Content: React.FC<ContentProps> = ({ modules }) => {
    return (
        <div className="min-h-screen bg-[#020617] p-8 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Welcome to Your Study System</h1>
                <p className="text-slate-400 mb-8">
                    Here are your personalized study modules based on your analysis. Download them to get started.
                </p>

                {modules.length === 0 ? (
                    <div className="p-6 bg-red-900/20 border border-red-800 rounded-xl text-red-200">
                        No modules found. Please contact support or try retaking the quiz.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {modules.map((module) => (
                            <div key={module.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${module.type === 'core' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                                        {module.type === 'core' ? <FileText className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-1 text-slate-200 group-hover:text-white transition-colors">
                                            {module.title}
                                        </h2>
                                        <p className="text-slate-500 text-sm">
                                            {module.description}
                                        </p>
                                        {module.type === 'modifier' && (
                                            <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                Modifier
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <a
                                    href={`/${module.file}`}
                                    download
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 whitespace-nowrap"
                                >
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
