import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const uiElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title, subtitle, and buttons
      const tl = gsap.timeline({ delay: 0.5 });

      gsap.set(['.hero-title', '.hero-subtitle', '.hero-tagline', '.hero-buttons'], {
        opacity: 0,
        y: 50,
      });

      tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
        .to(
          '.hero-subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          '.hero-tagline',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .to(
          '.hero-buttons',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        );

      // Floating profile image animation
      gsap.to('.profile-image', {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Typing effect for tagline
      const words = personalInfo.tagline.split(' ');
      let currentWordIndex = 0;

      const typeWords = () => {
        if (currentWordIndex < words.length) {
          const currentText = words.slice(0, currentWordIndex + 1).join(' ');
          gsap.to('.tagline-text', {
            text: currentText,
            duration: 0.5,
            ease: 'none',
            onComplete: () => {
              currentWordIndex++;
              setTimeout(typeWords, 300);
            },
          });
        }
      };

      setTimeout(typeWords, 2000);

      // Stats animation
      gsap.fromTo(
        '.hero-stats',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hero-stats',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-0"
      data-section="hero"
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-jarvis-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] sm:w-[450px] lg:w-[500px] h-[350px] sm:h-[450px] lg:h-[500px] bg-jarvis-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line opacity-10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div ref={textRef} className="text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Main Title */}
            <h1 className="hero-title">
              <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-orbitron">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary via-jarvis-secondary to-jarvis-accent glitch-text animate-gradient">
                  {personalInfo.name}
                </span>
              </span>
            </h1>

            {/* Accent Line */}
            <div className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto lg:mx-0 rounded-full shadow-lg shadow-jarvis-primary/50"></div>

            {/* Subtitle */}
            <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-jarvis-primary font-bold">
              <span className="font-exo2 tracking-wide">{personalInfo.title}</span>
            </h2>

            {/* Typing Tagline */}
            <p className="hero-tagline tagline-text text-sm sm:text-base md:text-lg lg:text-xl text-jarvis-light leading-relaxed font-exo2 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"></p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary text-jarvis-black font-bold text-sm sm:text-base rounded-lg sm:rounded-xl overflow-hidden shadow-lg shadow-jarvis-primary/25 hover:shadow-jarvis-primary/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-jarvis-secondary to-jarvis-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 border-2 border-jarvis-primary text-jarvis-primary font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-jarvis-primary hover:text-jarvis-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-jarvis-primary/10 hover:shadow-jarvis-primary/30"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 max-w-xs xs:max-w-sm sm:max-w-md mx-auto lg:mx-0 pt-4 sm:pt-6 lg:pt-8">
              <div className="group text-center p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl holographic-panel backdrop-blur-sm hover:shadow-lg hover:shadow-jarvis-primary/20 transition-all duration-300">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-jarvis-primary to-jarvis-secondary font-orbitron group-hover:scale-110 transition-transform">4+</div>
                <div className="text-xs sm:text-sm text-jarvis-light mt-0.5 sm:mt-1 font-exo2">Projects</div>
              </div>
              <div className="group text-center p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl holographic-panel backdrop-blur-sm hover:shadow-lg hover:shadow-jarvis-secondary/20 transition-all duration-300">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-jarvis-secondary to-jarvis-accent font-orbitron group-hover:scale-110 transition-transform">3+</div>
                <div className="text-xs sm:text-sm text-jarvis-light mt-0.5 sm:mt-1 font-exo2">Years Exp</div>
              </div>
              <div className="group text-center p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl holographic-panel backdrop-blur-sm hover:shadow-lg hover:shadow-jarvis-accent/20 transition-all duration-300">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-jarvis-accent to-jarvis-primary font-orbitron group-hover:scale-110 transition-transform">AI</div>
                <div className="text-xs sm:text-sm text-jarvis-light mt-0.5 sm:mt-1 font-exo2">Focus</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div ref={profileRef} className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-jarvis-primary/30 via-jarvis-secondary/20 to-jarvis-accent/30 rounded-full blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Profile Image Container */}
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden holographic-border shadow-2xl">
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-jarvis-primary via-jarvis-secondary to-jarvis-accent rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>

                {/* Inner container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-jarvis-black">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover profile-image transform group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-jarvis-black/60 via-transparent to-transparent" />

                  {/* Bottom label */}
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-0 right-0 text-center backdrop-blur-sm bg-jarvis-black/30 py-1 sm:py-2 border-t border-jarvis-primary/30">
                    <div className="text-xs sm:text-sm text-jarvis-primary font-mono font-bold tracking-wider">FULL STACK QAE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="text-xs text-jarvis-light font-mono mb-2 sm:mb-3 tracking-widest group-hover:text-jarvis-primary transition-colors">SCROLL</div>
          <div className="w-5 h-9 sm:w-6 sm:h-10 md:w-7 md:h-12 border-2 border-jarvis-primary/50 rounded-full flex justify-center p-1.5 sm:p-2 group-hover:border-jarvis-primary transition-colors shadow-lg shadow-jarvis-primary/20">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-jarvis-primary rounded-full animate-bounce shadow-lg shadow-jarvis-primary/50" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;