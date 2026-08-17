import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────
   Custom Hook: Cryptographic Text Scramble
   ────────────────────────────────────────────────────────────── */
const useDecryptionEffect = (text: string, trigger: boolean, speed = 25) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>';
  
  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    let interval: NodeJS.Timeout;
    
    interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (index < iteration || char === ' ') return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [text, trigger, speed]);

  return displayText;
};

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */
const ContactSection: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Decryption effect triggers when section scrolls into view
  const headerDecrypted = useDecryptionEffect("COMMUNICATIONS_UPLINK", isVisible, 30);

  /* ──────────────────────────────────────────────────────────
     GSAP Animations (Hardware Snap)
     ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.contact-panel', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.contact-content', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 85%',
          onEnter: () => setIsVisible(true),
        },
      });

      tl.to('.contact-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' })
        .to('.contact-panel', { backgroundColor: 'transparent', duration: 0.1, ease: 'none' })
        .to('.panel-fill', { backgroundColor: '#11151C', duration: 0.1, ease: 'none' }, '<')
        .to('.contact-content', { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'none' });

    }, contactRef);
    return () => ctx.revert();
  }, []);

  /* ──────────────────────────────────────────────────────────
     Handlers
     ────────────────────────────────────────────────────────── */
  const handleWhatsAppClick = () => {
    const phoneNumber = '916360642212';
    const message = encodeURIComponent('SYS.REQ: Connect with Operator ST3GN0.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.social.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: personalInfo.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.24 8.13h4.48V24H.24zM8.9 8.13h4.29v2.15h.06c.6-1.13 2.08-2.32 4.27-2.32 4.56 0 5.4 3 5.4 6.9V24h-4.48v-7.8c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.98 2.01-2.98 4.1V24H8.9V8.13z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: personalInfo.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.75 1.145 4.92 4.92 0 0 1 1.145 1.75c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.145 1.75 4.92 4.92 0 0 1-1.75 1.145c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.75-1.145 4.92 4.92 0 0 1-1.145-1.75c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.145-1.75 4.92 4.92 0 0 1 1.75-1.145c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm7.2-1.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
        </svg>
      ),
    },
  ].filter((social) => social.url);

  return (
    <section 
      id="contact" 
      ref={contactRef} 
      className="relative z-10 flex flex-col font-mono selection:bg-[#5EEAD4] selection:text-[#0B0E14] bg-[#05070A] py-24"
      data-section="contact"
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 relative flex flex-col">

        {/* ────────────────────────────────────────────────
            HEADER
        ──────────────────────────────────────────────── */}
        <div className="contact-panel border border-[#1E293B] bg-[#11151C] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 mb-6 panel-fill">
          <div className="contact-content flex items-center gap-3">
            <span className="w-2 h-2 bg-[#F59E0B] animate-pulse" />
            <h2 className="text-[12px] text-[#F59E0B] tracking-widest uppercase">
              {headerDecrypted || "AWAITING_DECRYPTION..."}
            </h2>
          </div>
          <div className="contact-content text-[10px] text-[#475569] tracking-widest mt-2 sm:mt-0 uppercase">
            SECURE_CHANNEL // OPEN
          </div>
        </div>

        {/* ────────────────────────────────────────────────
            MAIN GRID
        ──────────────────────────────────────────────── */}
        <div className="contact-panel border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-1 lg:grid-cols-2 mb-6">
          
          {/* ── LEFT PANE: STATUS & CHANNELS ── */}
          <div className="flex flex-col gap-[1px] bg-[#1E293B]">
            
            {/* Status Box */}
            <div className="bg-[#0B0E14] flex flex-col h-full group hover:bg-[#11151C] transition-colors duration-300">
              <div className="border-b border-[#1E293B] px-5 py-3 flex items-center gap-2 contact-content">
                <span className="w-1.5 h-1.5 bg-[#5EEAD4]" />
                <span className="text-[10px] text-[#475569] tracking-widest uppercase">status.spec.ts</span>
              </div>
              <div className="p-5 flex-1 contact-content">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-[#10B981] animate-pulse" />
                  <span className="text-[12px] text-[#10B981] font-bold tracking-widest">PASS</span>
                  <span className="text-[12px] text-[#94A3B8] tracking-wider truncate">availability === "open"</span>
                </div>
                <p className="text-[12px] text-[#475569] uppercase tracking-wide leading-relaxed">
                  Available for new projects in full-stack development, QA automation, and AI integration.
                </p>
              </div>
            </div>

            {/* Channels Box */}
            <div className="bg-[#0B0E14] flex flex-col h-full group hover:bg-[#11151C] transition-colors duration-300">
              <div className="border-b border-[#1E293B] px-5 py-3 flex items-center gap-2 contact-content">
                <span className="text-[#5EEAD4]">{'>'}</span>
                <span className="text-[10px] text-[#475569] tracking-widest uppercase">channels.ts</span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-3 contact-content">
                <div className="flex justify-between items-center border border-[#1E293B] p-3 bg-[#05070A]">
                  <span className="text-[10px] text-[#475569] uppercase tracking-widest">EMAIL</span>
                  <span className="text-[11px] text-[#94A3B8] tracking-widest truncate">{personalInfo.email}</span>
                </div>
                <div className="flex justify-between items-center border border-[#1E293B] p-3 bg-[#05070A]">
                  <span className="text-[10px] text-[#475569] uppercase tracking-widest">PHONE</span>
                  <span className="text-[11px] text-[#94A3B8] tracking-widest">{personalInfo.phone}</span>
                </div>
                
                {socialLinks.length > 0 && (
                  <div className="flex gap-3 mt-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="w-10 h-10 flex items-center justify-center border border-[#1E293B] bg-[#05070A] text-[#475569] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors duration-200"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* ── RIGHT PANE: ACTIONS ── */}
          <div className="bg-[#0B0E14] p-6 lg:p-8 flex flex-col justify-center relative group hover:bg-[#11151C] transition-colors duration-300">
            <div className="contact-content">
              <h3 className="text-[14px] text-[#94A3B8] tracking-widest uppercase font-bold mb-3">
                <span className="text-[#F59E0B] mr-2">$</span> reach --out
              </h3>
              <p className="text-[12px] text-[#475569] uppercase tracking-wide leading-relaxed mb-8">
                Pick whichever channel is most efficient. Both streams are monitored continuously.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3 border border-[#F59E0B] bg-[#F59E0B]/10 hover:bg-[#F59E0B] text-[#F59E0B] hover:text-[#0B0E14] transition-colors duration-200 px-5 py-4 font-bold tracking-widest uppercase text-[11px]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.5 9.897 9.897 0 101.387 19.583l.002-.005a9.886 9.886 0 004.6-18.078z" />
                  </svg>
                  $ CHAT --WHATSAPP
                </button>

                <button
                  onClick={handleEmailClick}
                  className="w-full flex items-center justify-center gap-3 border border-[#1E293B] bg-[#05070A] text-[#94A3B8] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors duration-200 px-5 py-4 tracking-widest uppercase text-[11px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  $ SEND --EMAIL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────
            FOOTER
        ──────────────────────────────────────────────── */}
        <div className="contact-panel border border-[#1E293B] bg-[#0B0E14] flex flex-col sm:flex-row justify-between items-center px-6 py-4 mt-6">
          <div className="contact-content text-[10px] text-[#475569] tracking-widest uppercase">
            © {new Date().getFullYear()}. REACT // TAILWIND // GSAP
          </div>
          <div className="contact-content text-[10px] text-[#475569] tracking-widest uppercase mt-2 sm:mt-0">
            POWERED BY <span className="text-[#5EEAD4]">ST3GN0</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;