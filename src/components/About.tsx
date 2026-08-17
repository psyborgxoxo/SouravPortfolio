import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assuming these come from your data file. (Mocked here for demonstration)
import { personalInfo, education, certifications, interests } from '../data/portfolioData';

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

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Decryption effect triggers when section scrolls into view
  const titleDecrypted = useDecryptionEffect("TARGET_DOSSIER_REVEALED", isVisible, 30);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states (Hardware powered down)
      gsap.set('.dossier-panel', { backgroundColor: '#000000', borderColor: '#000000' });
      gsap.set('.dossier-content', { opacity: 0 });

      // Hardware Boot Sequence on Scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          onEnter: () => setIsVisible(true),
        },
      });

      // 1. Borders snap on
      tl.to('.dossier-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' })
      // 2. Backgrounds snap to slate
        .to('.dossier-panel', { backgroundColor: 'transparent', duration: 0.1, ease: 'none' })
        .to('.panel-bg-fill', { backgroundColor: '#11151C', duration: 0.1, ease: 'none' }, '<')
      // 3. Content flashes in sequentially
        .to('.dossier-content', { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'none' });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactFields = [
    { label: 'OP_EMAIL', value: personalInfo.email },
    { label: 'COMM_LINK', value: personalInfo.phone },
    { label: 'BASE_LOC', value: personalInfo.location },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 w-full min-h-screen bg-[#05070A] py-24 px-4 sm:px-8 flex flex-col font-mono selection:bg-[#5EEAD4] selection:text-[#0B0E14]"
    >
      {/* Container - Strict max width, centered */}
      <div className="max-w-[1200px] w-full mx-auto relative flex flex-col">
        
        {/* ============================================================
            DOSSIER HEADER (Minimal Chrome)
        ============================================================ */}
        <div className="dossier-panel border border-[#1E293B] bg-[#11151C] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 mb-6">
          <div className="dossier-content flex items-center gap-3">
            <span className="w-2 h-2 bg-[#F59E0B] animate-pulse" />
            <h2 className="text-[12px] text-[#F59E0B] tracking-widest uppercase">
              {titleDecrypted || "AWAITING_DECRYPTION..."}
            </h2>
          </div>
          <div className="dossier-content text-[10px] text-[#475569] tracking-widest mt-2 sm:mt-0 uppercase">
            SYS.REF // {new Date().toISOString().split('T')[0].replace(/-/g, '.')}
          </div>
        </div>

        {/* ============================================================
            MAIN GRID LAYOUT
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-l border-[#1E293B]">
          
          {/* ── LEFT PANE: Telemetry & Contact (Col Span 3) ── */}
          <div className="dossier-panel lg:col-span-3 border-r border-b border-[#1E293B] flex flex-col bg-[#0B0E14]">
            
            {/* Operator Status */}
            <div className="panel-bg-fill border-b border-[#1E293B] px-5 py-4">
              <div className="dossier-content text-[10px] text-[#475569] uppercase tracking-widest mb-4">
                [ CURRENT_STATUS ]
              </div>
              <div className="dossier-content flex items-center gap-3 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-40" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
                </span>
                <span className="text-[12px] text-[#10B981] font-bold tracking-wider">ACTIVE_OPERATOR</span>
              </div>
              <div className="dossier-content text-[11px] text-[#94A3B8] uppercase">
                ROLE: {personalInfo.title}
              </div>
            </div>

            {/* Comms Link */}
            <div className="border-b border-[#1E293B] px-5 py-4 flex-1">
              <div className="dossier-content text-[10px] text-[#475569] uppercase tracking-widest mb-4">
                [ COMMS_UPLINK ]
              </div>
              <div className="dossier-content space-y-4">
                {contactFields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-1">
                    <span className="text-[10px] text-[#5EEAD4] uppercase">{field.label}</span>
                    <span className="text-[12px] text-[#94A3B8] truncate">{field.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Metrics */}
            <div className="panel-bg-fill px-5 py-4">
              <div className="dossier-content text-[10px] text-[#475569] uppercase tracking-widest mb-3">
                [ SYS_METRICS ]
              </div>
              <div className="dossier-content flex justify-between items-end border-l-2 border-[#1E293B] pl-3">
                <div>
                  <div className="text-[10px] text-[#475569] uppercase">UPTIME</div>
                  <div className="text-[16px] text-[#94A3B8] font-bold">2.5+ YRS</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#475569] uppercase">GATES</div>
                  <div className="text-[16px] text-[#10B981] font-bold">100%</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANE: Data Streams (Col Span 9) ── */}
          <div className="lg:col-span-9 flex flex-col">
            
            {/* Top Right: Manifesto / Bio */}
            <div className="dossier-panel border-r border-b border-[#1E293B] p-6 lg:p-8 bg-[#0B0E14]">
              <div className="dossier-content text-[10px] text-[#5EEAD4] uppercase tracking-widest mb-4">
                &gt; DECRYPTED_PROFILE_SUMMARY
              </div>
              <h3 className="dossier-content text-xl sm:text-2xl lg:text-3xl font-light text-[#94A3B8] leading-tight tracking-tight uppercase mb-6 max-w-3xl">
                Building quality into the system <span className="text-[#F59E0B]">— not after it.</span>
              </h3>
              <p className="dossier-content text-[13px] text-[#475569] leading-relaxed max-w-4xl uppercase tracking-wide">
                {personalInfo.bio}
              </p>
            </div>

            {/* Bottom Right Split: Edu & Certs */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
              
              {/* Education Data Table */}
              <div className="dossier-panel border-r border-b lg:border-b-0 border-[#1E293B] p-6 bg-[#0B0E14] panel-bg-fill">
                <div className="dossier-content text-[10px] text-[#475569] uppercase tracking-widest mb-6 flex justify-between">
                  <span>[ EDUCATION_RECORDS ]</span>
                  <span>YAML</span>
                </div>
                <div className="dossier-content space-y-6">
                  {education.map((edu, i) => (
                    <div key={edu.id} className={`flex flex-col gap-1 ${i !== education.length - 1 ? 'pb-6 border-b border-[#1E293B]' : ''}`}>
                      <div className="flex justify-between items-start">
                        <span className="text-[13px] text-[#5EEAD4] font-bold">{edu.degree}</span>
                        <span className="text-[10px] text-[#F59E0B] shrink-0">{edu.year}</span>
                      </div>
                      <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider">{edu.institution}</span>
                      <span className="text-[10px] text-[#475569]">CGPA_LOG: {edu.cgpa}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Data List */}
              <div className="dossier-panel border-r border-b lg:border-b-0 border-[#1E293B] p-6 bg-[#0B0E14]">
                <div className="dossier-content text-[10px] text-[#475569] uppercase tracking-widest mb-6 flex justify-between">
                  <span>[ CREDENTIALS_VERIFIED ]</span>
                  <span>JSON</span>
                </div>
                <div className="dossier-content space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="group border border-[#1E293B] p-3 flex flex-col gap-2 hover:border-[#5EEAD4] transition-colors duration-200">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[12px] text-[#94A3B8] leading-tight uppercase group-hover:text-[#5EEAD4] transition-colors">
                          {cert.name}
                        </span>
                        <span className="text-[10px] text-[#10B981] shrink-0">[OK]</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] text-[#475569] uppercase tracking-widest">{cert.issuer}</span>
                        <span className="text-[10px] text-[#F59E0B]">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================
            INTERESTS (Bottom Data Bar)
        ============================================================ */}
        <div className="dossier-panel border-x border-b border-[#1E293B] bg-[#11151C] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="dossier-content text-[10px] text-[#475569] uppercase tracking-widest shrink-0">
            [ ACTIVE_RESEARCH ]
          </div>
          <div className="dossier-content flex flex-wrap gap-2">
            {interests.map((item, index) => (
              <span
                key={index}
                className="text-[10px] text-[#94A3B8] uppercase tracking-wider px-2 py-1 border border-[#1E293B] hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors cursor-default"
              >
                <span className="text-[#475569] mr-1">#</span>{item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;