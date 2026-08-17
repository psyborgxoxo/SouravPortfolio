import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsSection from '../components/ProjectsSection';
import Analytics from '../components/Analytics'; // Adjust path if Analytics is located elsewhere

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05070A] text-white font-mono flex flex-col">
      {/* Google Analytics */}
      <Analytics />

      {/* Top Routing Chrome Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 pt-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#F59E0B] animate-pulse" />
          <span className="text-[10px] text-[#F59E0B] tracking-widest uppercase">
            SYS_ROUTE // REPOSITORY_INDEX
          </span>
        </div>
        <button
          onClick={() => navigate('/')}
          className="border border-[#1E293B] bg-[#0B0E14] px-3 py-1 text-[10px] text-[#5EEAD4] hover:border-[#5EEAD4] hover:bg-[#11151C] transition-colors uppercase tracking-widest flex items-center gap-2"
        >
          <span>{'<'} RETURN_HOME</span>
        </button>
      </div>

      {/* Render the core Projects component */}
      <div className="flex-1">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProjectsPage;