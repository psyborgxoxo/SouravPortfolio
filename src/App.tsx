import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Analytics from './components/Analytics';

import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Hardware boot snap animation
    gsap.fromTo(
      '.app-content',
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: 'none' }
    );

    // Smooth scroll for existing anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;

      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault();

        const targetId = target
          .getAttribute('href')
          ?.substring(1);

        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      gsap.killTweensOf('.app-content');
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            HOME PAGE (Landing / Hero Base)
            ===================================================== */}
        <Route
          path="/"
          element={
            <div className="app-content min-h-screen bg-[#05070A] text-[#94A3B8] font-mono overflow-x-hidden relative selection:bg-[#5EEAD4] selection:text-[#0B0E14]">

              {/* Google Analytics */}
              <Analytics />

              {/* Navigation */}
              <Navigation />

              {/* Main Content Hub */}
              <main className="relative z-10">
                <Hero />
                <About />
              </main>

              {/* Scroll to Top Button */}
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
                className="fixed bottom-8 right-8 w-12 h-12 border border-[#1E293B] bg-[#0B0E14] flex items-center justify-center text-[#475569] hover:border-[#5EEAD4] hover:text-[#5EEAD4] hover:bg-[#11151C] transition-colors duration-200 z-50 group"
                aria-label="Scroll to top"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>

              {/* Loading Screen */}
              <div
                id="loading-screen"
                className="fixed inset-0 bg-[#05070A] z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000"
              >
                <div className="text-left font-mono">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 bg-[#F59E0B] animate-pulse" />
                    <p className="text-[#F59E0B] text-[10px] tracking-widest uppercase">
                      SYS.BOOT_SEQ // INIT
                    </p>
                  </div>
                  <p className="text-[#5EEAD4] text-lg tracking-widest uppercase">
                    LOADING_OPERATOR_DATA...
                  </p>
                  <div className="mt-4 text-[#475569] text-xs tracking-widest">
                    [████████████████████████████████] 100%
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* =====================================================
            MODULAR SECTION ROUTES
            ===================================================== */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;