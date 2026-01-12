import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SolutionView from './components/SolutionView';
import GeminiAssistant from './components/GeminiAssistant';
import { SOLUTIONS } from './constants';

const App: React.FC = () => {
  const [activeSolutionId, setActiveSolutionId] = useState<string | null>(SOLUTIONS[0].id);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectSolution = (id: string) => {
    setActiveSolutionId(id);
    setIsChatActive(false);
    setIsMobileMenuOpen(false);
  };

  const handleSelectChat = () => {
    setIsChatActive(true);
    setActiveSolutionId(null);
    setIsMobileMenuOpen(false);
  };

  const activeSolution = SOLUTIONS.find(s => s.id === activeSolutionId);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Responsive */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
          activeSolutionId={activeSolutionId} 
          onSelectSolution={handleSelectSolution}
          onSelectChat={handleSelectChat}
          isChatActive={isChatActive}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <div className="md:hidden h-16 border-b border-slate-800 flex items-center px-4 bg-slate-900/50 backdrop-blur">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-slate-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="ml-4 font-semibold text-slate-200">AI Studio Helper</span>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
          {isChatActive ? (
            <GeminiAssistant />
          ) : activeSolution ? (
            <SolutionView solution={activeSolution} />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500">
              Select a topic from the sidebar
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;