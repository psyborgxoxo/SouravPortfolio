import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExperienceSection from '../components/ExperienceSection';

export const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05070A] text-white font-mono flex flex-col">
      {/* Top Routing Chrome Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 pt-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#10B981] animate-pulse" />
          <span className="text-[10px] text-[#10B981] tracking-widest uppercase">
            SYS_ROUTE // EXPERIENCE_TIMELINE
          </span>
        </div>
        <button
          onClick={() => navigate('/')}
          className="border border-[#1E293B] bg-[#0B0E14] px-3 py-1 text-[10px] text-[#5EEAD4] hover:border-[#5EEAD4] hover:bg-[#11151C] transition-colors uppercase tracking-widest flex items-center gap-2"
        >
          <span>{'<'} RETURN_HOME</span>
        </button>
      </div>

      {/* Render the core Experience component */}
      <div className="flex-1">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default ExperiencePage;