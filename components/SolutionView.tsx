import React from 'react';
import { Solution } from '../types';

interface SolutionViewProps {
  solution: Solution;
}

const SolutionView: React.FC<SolutionViewProps> = ({ solution }) => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">{solution.title}</h2>
        <p className="text-slate-400 text-lg">{solution.summary}</p>
      </header>

      <div className="space-y-6">
        {solution.steps.map((step, index) => (
          <div key={step.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-800">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
                
                {step.warning && (
                  <div className="mt-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3 flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-yellow-200/80 text-sm">{step.warning}</span>
                  </div>
                )}

                {step.codeSnippet && (
                  <div className="mt-4 bg-black rounded-lg p-4 font-mono text-xs text-green-400 overflow-x-auto border border-slate-800">
                    {step.codeSnippet}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionView;