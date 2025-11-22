import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Analytics from './components/Analytics';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Page loading animation
    gsap.fromTo('.app-content', 
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Smooth scroll for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      gsap.killTweensOf('.app-content');
    };
  }, []);

  return (
    <div className="app-content min-h-screen bg-jarvis-black text-jarvis-white overflow-x-hidden relative">
      {/* Google Analytics */}
      <Analytics />
      
      {/* Particle Background System */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 holographic-panel rounded-full flex items-center justify-center text-jarvis-primary hover:text-jarvis-secondary hover:shadow-glow transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* Loading Screen (Optional) */}
      <div id="loading-screen" className="fixed inset-0 bg-jarvis-black z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-jarvis-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-jarvis-primary font-orbitron text-xl">INITIALIZING JARVIS...</p>
          <div className="mt-4 text-jarvis-light font-mono text-sm">
            [████████████████████████████████] 100%
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
