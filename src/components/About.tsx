import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, education, certifications, interests } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!isMobile) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.about-header',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.about-header', start: 'top 85%' },
          }
        );

        gsap.fromTo(
          '.about-card',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: { trigger: '.cards-grid', start: 'top 80%' },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative z-10 overflow-hidden"
      data-section="about"
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] 
        h-[300px] sm:h-[400px] lg:h-[500px] bg-jarvis-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] lg:w-[400px] 
        h-[250px] sm:h-[350px] lg:h-[400px] bg-jarvis-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="about-header text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-jarvis-primary text-xs sm:text-sm font-mono tracking-widest mb-2 sm:mb-3">// WHO I AM</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-white mb-3 sm:mb-4 px-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary">Me</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto rounded-full" />
        </div>

        {/* MAIN GRID 2 × 2 */}
        <div className="cards-grid grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

          {/* PROFILE CARD */}
          <div className="about-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 
          hover:border-jarvis-primary/30 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-jarvis-primary/20 to-jarvis-secondary/20 
              flex items-center justify-center border border-jarvis-primary/30 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-jarvis-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Profile</h3>
            </div>

            <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{personalInfo.bio}</p>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Email', value: personalInfo.email, color: 'jarvis-primary' },
                { label: 'Phone', value: personalInfo.phone, color: 'jarvis-secondary' },
                { label: 'Location', value: personalInfo.location, color: 'jarvis-accent' },
                { label: 'Status', value: 'Available', color: 'green-400', isStatus: true }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className={`w-1 h-6 sm:h-8 rounded-full bg-${item.color} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-mono text-${item.color} mb-0.5 sm:mb-1`}>{item.label}</p>
                    <p className="text-xs sm:text-sm text-white flex items-center gap-2 truncate">
                      {item.isStatus && <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />}
                      <span className="truncate">{item.value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS CARD */}
          <div className="about-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 
          hover:border-jarvis-secondary/30 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-jarvis-secondary/20 to-jarvis-accent/20 
              flex items-center justify-center border border-jarvis-secondary/30 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-jarvis-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Certifications</h3>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id}
                  className="flex justify-between items-center p-2.5 sm:p-3 rounded-lg 
                  bg-white/[0.02] border border-white/5 hover:border-jarvis-secondary/30 
                  transition-all group">
                  <div className="min-w-0 flex-1 mr-2">
                    <p className="text-xs sm:text-sm text-white group-hover:text-jarvis-secondary truncate">{cert.name}</p>
                    <p className="text-xs text-jarvis-light/60 truncate">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-jarvis-secondary/80 flex-shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="about-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 
          hover:border-jarvis-primary/30 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-jarvis-primary/20 to-jarvis-secondary/20 
              flex items-center justify-center border border-jarvis-primary/30 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-jarvis-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {education.map((edu) => (
                <div key={edu.id}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5 hover:border-jarvis-primary/30 transition-all group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm sm:text-base text-white font-semibold group-hover:text-jarvis-primary flex-1">{edu.degree}</h4>
                    <span className="text-xs font-mono px-2 py-1 
                    bg-jarvis-primary/10 text-jarvis-primary rounded-md border border-jarvis-primary/20 flex-shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-jarvis-light/70 mb-3">{edu.institution}</p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-2.5 rounded-lg bg-jarvis-primary/5 border border-jarvis-primary/10">
                      <p className="text-xs text-jarvis-primary/80">SGPA</p>
                      <p className="text-sm font-semibold text-white">{edu.cgpa}</p>
                    </div>

                    <div className="text-center p-2 sm:p-2.5 rounded-lg bg-jarvis-secondary/5 border border-jarvis-secondary/10">
                      <p className="text-xs text-jarvis-secondary/80">Uni</p>
                      <p className="text-sm font-semibold text-white truncate">{edu.languages}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SPECIALIZATION */}
          <div className="about-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 
          hover:border-jarvis-accent/30 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-jarvis-accent/20 to-purple-500/20 
              flex items-center justify-center border border-jarvis-accent/30 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-jarvis-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0012 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Specializations</h3>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {interests.map((item, i) => (
                <span key={i}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs rounded-lg bg-jarvis-accent/10 
                  border border-jarvis-accent/20 hover:border-jarvis-accent/40 
                  hover:text-jarvis-accent text-jarvis-light/80 transition-all">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;