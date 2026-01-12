import React from 'react';
import { SOLUTIONS } from '../constants';
import { Solution } from '../types';

interface SidebarProps {
  activeSolutionId: string | null;
  onSelectSolution: (id: string) => void;
  onSelectChat: () => void;
  isChatActive: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSolutionId, onSelectSolution, onSelectChat, isChatActive }) => {
  return (
    <div className="w-full md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Studio Helper
        </h1>
        <p className="text-xs text-slate-500 mt-1">Unofficial Guide</p>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Common Issues
        </div>
        <nav className="space-y-1 px-2">
          {SOLUTIONS.map((solution) => (
            <button
              key={solution.id}
              onClick={() => onSelectSolution(solution.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSolutionId === solution.id && !isChatActive
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {solution.title}
            </button>
          ))}
        </nav>

        <div className="mt-8 px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          AI Assistance
        </div>
        <div className="px-2">
           <button
              onClick={onSelectChat}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                isChatActive
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Ask AI Assistant
            </button>
        </div>
      </div>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-600">
        &copy; 2024 Helper App
      </div>
    </div>
  );
};

export default Sidebar;