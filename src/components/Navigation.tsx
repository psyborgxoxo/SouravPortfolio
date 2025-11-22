import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navigationItems } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Animate navigation on mount
    gsap.fromTo('.nav-container',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Animate mobile menu
    if (!isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'holographic-panel backdrop-blur-xl border-b border-jarvis-primary/20'
        : 'bg-transparent'
        }`}>
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="nav-container flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-jarvis-black-800 rounded-lg flex items-center justify-center holographic-border group hover:shadow-glow transition-all duration-300">
                  <img
                    src="/logos.png"
                    alt="SS Logo"
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse-glow border-2 border-jarvis-black" />
              </div>
              <div className="hidden sm:block">
                <div className="font-orbitron font-bold text-lg text-jarvis-white">
                  <span className="neon-text">SOURAV</span>
                </div>
                <div className="text-xs text-jarvis-light font-mono">STATUS: ONLINE</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative group px-4 py-2 font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                    ? 'text-jarvis-primary'
                    : 'text-jarvis-light hover:text-jarvis-primary'
                    }`}
                >
                  <span className="font-exo2">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary rounded-full scan-line" />
                  )}
                  <div className="absolute inset-0 bg-jarvis-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
            >
              <div className={`w-6 h-0.5 bg-jarvis-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:shadow-glow'
                }`} />
              <div className={`w-6 h-0.5 bg-jarvis-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'group-hover:shadow-glow'
                }`} />
              <div className={`w-6 h-0.5 bg-jarvis-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:shadow-glow'
                }`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="mobile-menu holographic-panel border-t border-jarvis-primary/20">
            <div className="container-width py-4">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                      ? 'bg-jarvis-primary text-jarvis-black'
                      : 'text-jarvis-light hover:bg-jarvis-primary/10 hover:text-jarvis-primary'
                      }`}
                  >
                    <span className="font-exo2">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-jarvis-gray-950/50">
        <div
          className="h-full bg-gradient-to-r from-jarvis-primary to-jarvis-secondary transition-all duration-150 scan-line"
          style={{
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>
    </>
  );
};

export default Navigation;
