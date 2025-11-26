import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.contact-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // Animate contact info cards
      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // Animate contact buttons
      gsap.fromTo(
        '.contact-button',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.contact-buttons-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // Animate social links
      gsap.fromTo(
        '.social-link',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // MatchMedia for responsive animations
      const mm = gsap.matchMedia();
      mm.add('(max-width: 768px)', () => {
        gsap.fromTo(
          '.contact-header',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.contact-section',
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '916360642212';
    const message = encodeURIComponent('Hello! I am interested in connecting with you.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Button animation
    gsap.to('.whatsapp-btn', {
      scale: 0.95,
      duration: 0.1,
      onComplete: () => {
        gsap.to('.whatsapp-btn', {
          scale: 1,
          duration: 0.3,
          onComplete: () => {
            window.open(whatsappURL, '_blank');
          },
        });
      },
    });
  };

  const handleEmailClick = () => {
    // Button animation
    gsap.to('.email-btn', {
      scale: 0.95,
      duration: 0.1,
      onComplete: () => {
        gsap.to('.email-btn', {
          scale: 1,
          duration: 0.3,
          onComplete: () => {
            window.location.href = `mailto:${personalInfo.email}`;
          },
        });
      },
    });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'EMAIL',
      value: personalInfo.email,
      description: 'Primary communication channel',
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.5 9.897 9.897 0 101.387 19.583l.002-.005a9.886 9.886 0 004.6-18.078z" />
        </svg>
      ),
      title: 'WHATSAPP',
      value: '+91 63606 42212',
      description: 'Quick chat and messaging',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.social.github,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: personalInfo.social.linkedin,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.24 8.13h4.48V24H.24zM8.9 8.13h4.29v2.15h.06c.6-1.13 2.08-2.32 4.27-2.32 4.56 0 5.4 3 5.4 6.9V24h-4.48v-7.8c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.98 2.01-2.98 4.1V24H8.9V8.13z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: personalInfo.social.instagram,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.75 1.145 4.92 4.92 0 0 1 1.145 1.75c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.145 1.75 4.92 4.92 0 0 1-1.75 1.145c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.75-1.145 4.92 4.92 0 0 1-1.145-1.75c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.145-1.75 4.92 4.92 0 0 1 1.75-1.145c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm7.2-1.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
        </svg>
      ),
    },

  ];

  return (
    <section id="contact" ref={contactRef} className="contact-section section-padding relative overflow-hidden" data-section="contact">
      {/* Background effects */}
      <div className="absolute inset-0 scan-line opacity-5" />

      <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="contact-header text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-jarvis-primary text-xs sm:text-sm font-mono tracking-widest">// LET'S CONNECT</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mb-2 sm:mb-3">
            Contact Me
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto rounded-full" />
          <p className="text-jarvis-light text-sm sm:text-base max-w-2xl mx-auto mt-2 sm:mt-3 font-exo2">
            Ready to collaborate on innovative projects? Let's build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Contact Info */}
          <div className="contact-info space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 font-orbitron">
                <span className="neon-text">COMMUNICATION</span>
                <span className="text-jarvis-primary ml-2">CHANNELS</span>
              </h3>
              <p className="text-jarvis-light mb-6 sm:mb-8 font-exo2 text-sm sm:text-base">
                Multiple ways to connect and discuss opportunities. Always open to challenging projects and meaningful collaborations.
              </p>
            </div>

            {/* Social Links */}
            <div className="social-links pt-6 sm:pt-8">
              <h4 className="text-lg sm:text-xl font-semibold text-jarvis-white mb-4 sm:mb-5 font-orbitron">NETWORK</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link w-10 h-10 sm:w-12 sm:h-12 holographic-panel rounded-full flex items-center justify-center text-jarvis-light hover:text-jarvis-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="holographic-card p-4 sm:p-6 rounded-xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse-glow" />
                <span className="text-jarvis-white font-semibold font-mono text-sm sm:text-base">SYSTEM STATUS: ONLINE</span>
              </div>
              <p className="text-jarvis-light text-xs sm:text-sm font-exo2">
                Available for new projects and exciting opportunities in full-stack development, quality assurance, and AI integration.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Buttons */}
          <div className="contact-buttons-container">
            <div className="holographic-card p-6 sm:p-8 space-y-4 sm:space-y-6 relative overflow-hidden rounded-xl h-full flex flex-col justify-center">
              {/* Holographic background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-jarvis-primary/5 via-jarvis-secondary/5 to-jarvis-accent/5" />

              <h3 className="text-xl sm:text-2xl font-semibold text-jarvis-white mb-2 sm:mb-4 font-orbitron relative z-10">
                <span className="neon-text">GET IN</span>
                <span className="text-jarvis-primary ml-2">TOUCH</span>
              </h3>

              <p className="text-jarvis-light text-sm sm:text-base font-exo2 mb-4 sm:mb-6 relative z-10">
                Choose your preferred way to reach out. I'm always ready to discuss exciting opportunities and collaborations.
              </p>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="neon-button-primary group w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary hover:from-jarvis-secondary hover:to-jarvis-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 relative z-10 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.5 9.897 9.897 0 101.387 19.583l.002-.005a9.886 9.886 0 004.6-18.078z" />
                </svg>
                <span className="text-sm sm:text-base group-hover:shadow-glow">CHAT ON WHATSAPP</span>
              </button>

              {/* Email Button */}
              <button
                onClick={handleEmailClick}
                className="neon-button-primary group w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary hover:from-jarvis-secondary hover:to-jarvis-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 relative z-10 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base group-hover:shadow-glow">SEND EMAIL</span>
              </button>

              {/* Info Text */}
              <div className="text-xs sm:text-sm text-jarvis-light text-center mt-4 sm:mt-6 relative z-10 font-exo2">
                <p>✨ Both options are monitored closely for quick responses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-jarvis-primary/20 text-center">
          <p className="text-jarvis-light font-mono text-xs sm:text-sm">
            © 2025.Built with TypeScript, Tailwind CSS, and GSAP.
            <span className="text-jarvis-primary ml-2">Powred By ST3GN0</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;