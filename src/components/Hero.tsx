import React, { useEffect, useRef, useState, useCallback, ReactNode } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(TextPlugin);

/* ──────────────────────────────────────────────────────────────
   Types & Assertions
   ────────────────────────────────────────────────────────────── */
type Assertion = {
  id: string;
  label: string;
  detail: string;
};

const assertions: Assertion[] = [
  { id: 'identity', label: 'sys.identity.verify', detail: `TARGET: "${personalInfo.name}"` },
  { id: 'role', label: 'auth.role.assign', detail: `ROLE_VERIFIED: "${personalInfo.title}"` },
  { id: 'graphrag', label: 'agentic_rag.oracle', detail: 'GraphRAG tests deployed' },
  { id: 'llm_eval', label: 'llm_eval.benchmark', detail: 'LLM Quality gates active' },
];

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
      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, trigger, speed]);

  return displayText;
};

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // States
  const [isInteractive, setIsInteractive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<{ command: string; output: ReactNode }[]>([]);
  const [startDecryption, setStartDecryption] = useState(false);

  // Strict Reset on Mount (Fixes Hot-Reload Persistence Issue)
  useEffect(() => {
    setCommandHistory([]);
    setInputValue('');
  }, []);

  const taglineDecrypted = useDecryptionEffect(personalInfo.tagline, startDecryption, 15);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /* ──────────────────────────────────────────────────────────
     Upgraded Terminal Command Engine
     ────────────────────────────────────────────────────────── */
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    let output: ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-[#94A3B8] space-y-1 mt-2">
            <p className="text-[#5EEAD4] font-bold tracking-widest mb-2">[ AVAILABLE_PROTOCOLS ]</p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-[#F59E0B] font-bold">whoami</span><span>Display operator dossier</span>
              <span className="text-[#F59E0B] font-bold">skills</span><span>Print system capabilities</span>
              <span className="text-[#F59E0B] font-bold">projects</span><span>Navigate to automated pipelines</span>
              <span className="text-[#F59E0B] font-bold">resources</span><span>Access external directories & resume</span>
              <span className="text-[#F59E0B] font-bold">contact</span><span>Establish secure comms link</span>
              <span className="text-[#F59E0B] font-bold">clear</span><span>Flush terminal memory</span>
            </div>
          </div>
        );
        break;
      
      case 'whoami':
        output = (
          <div className="mt-2 p-3 border border-[#1E293B] bg-[#05070A]">
            <div className="text-[#5EEAD4] tracking-widest uppercase mb-3">{'>'} DECRYPTING_OPERATOR_DOSSIER...</div>
            <div className="grid grid-cols-[120px_1fr] gap-y-1 text-[#94A3B8] uppercase tracking-wide text-[12px]">
              <span className="text-[#475569]">DESIGNATION:</span><span className="text-[#EDECE7]">{personalInfo.name}</span>
              <span className="text-[#475569]">PRIMARY_ROLE:</span><span>{personalInfo.title}</span>
              <span className="text-[#475569]">BASE_LOC:</span><span>{personalInfo.location || "CLASSIFIED"}</span>
              <span className="text-[#475569]">STATUS:</span><span className="text-[#10B981] font-bold">ACTIVE_OPERATOR</span>
              <span className="text-[#475569]">CLEARANCE:</span><span className="text-[#F59E0B]">LEVEL_4 (SDET/AI)</span>
            </div>
          </div>
        );
        break;
      
      case 'resources':
        output = (
          <div className="mt-2 p-3 border border-[#1E293B] bg-[#05070A]">
            <div className="text-[#F59E0B] tracking-widest uppercase mb-2">{'>'} FETCHING_EXTERNAL_DIRECTORIES...</div>
            <ul className="space-y-2 text-[#94A3B8] text-[12px] uppercase tracking-widest">
              <li>
                <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="hover:text-[#5EEAD4] flex items-center gap-2 transition-colors">
                  <span className="text-[#475569]">[{'>'}]</span> GITHUB_ARCHIVE
                </a>
              </li>
              <li>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#5EEAD4] flex items-center gap-2 transition-colors">
                  <span className="text-[#475569]">[{'>'}]</span> LINKEDIN_NODE
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-[#5EEAD4] flex items-center gap-2 transition-colors">
                  <span className="text-[#475569]">[{'>'}]</span> DOWNLOAD_DOSSIER (PDF)
                </a>
              </li>
            </ul>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="mt-2 text-[#94A3B8] text-[12px] uppercase tracking-wide">
            <div className="text-[#5EEAD4] mb-2">{'>'} SYSTEM_CAPABILITIES_LOADED:</div>
            <p><span className="text-[#475569]">QA_GATES:</span> Playwright, Selenium, TestNG, Jest</p>
            <p><span className="text-[#475569]">LANGUAGES:</span> Java, Python, TypeScript</p>
            <p><span className="text-[#475569]">AI_SYS:</span> GraphRAG, Agentic Pipelines, LLM Eval</p>
            <p><span className="text-[#475569]">DEVOPS:</span> Jenkins, GitHub Actions, Docker</p>
          </div>
        );
        break;

      case 'projects':
        scrollToSection('projects');
        output = <div className="text-[#5EEAD4] mt-2">{'>'} ROUTING_TO_ARCHIVE... [OK]</div>;
        break;

      case 'contact':
        scrollToSection('contact');
        output = (
          <div className="text-[#10B981] mt-2">
            {'>'} INITIATING_SECURE_UPLINK... <a href={`mailto:${personalInfo.email}`} className="underline text-[#5EEAD4] hover:text-[#F59E0B]">{personalInfo.email}</a>
          </div>
        );
        break;
      
      case 'sudo':
        output = <div className="text-[#EF4444] mt-2 bg-[#EF4444]/10 border border-[#EF4444]/30 p-2 uppercase tracking-widest font-bold">ACCESS DENIED: Unauthorized privilege escalation attempt logged.</div>;
        break;

      case 'clear':
        setCommandHistory([]);
        setInputValue('');
        return;
      
      default:
        output = <div className="text-[#EF4444] mt-2">SYS.ERR: Unrecognized protocol '{cmd}'. Type 'help' for manual.</div>;
    }

    setCommandHistory((prev) => [...prev, { command: cmd, output }]);
    setInputValue('');
  };

  /* ──────────────────────────────────────────────────────────
     Auto-Scroll (Protected)
     ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [commandHistory, isInteractive]);

  /* ──────────────────────────────────────────────────────────
     Hardware Boot Animation
     ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. HARD RESET
      gsap.set('.hero-element', { opacity: 0 });
      gsap.set('.terminal-panel', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.terminal-chrome', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.terminal-content', { opacity: 0 });
      
      gsap.set('.assertion-row', { opacity: 0 });
      assertions.forEach((a) => {
        gsap.set(`.status-running-${a.id}`, { opacity: 0 });
        gsap.set(`.status-pass-${a.id}`, { opacity: 0 });
      });

      const tl = gsap.timeline({ delay: prefersReducedMotion ? 0 : 0.2 });

      // 2. Left side identity text
      tl.to('.hero-element', { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'none' })
        .call(() => setStartDecryption(true));

      // 3. Right side Terminal powers up
      tl.to('.terminal-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' }, '+=0.2')
        .to('.terminal-panel', { backgroundColor: '#0B0E14', duration: 0.1, ease: 'none' })
        .to('.terminal-chrome', { backgroundColor: '#11151C', borderBottomColor: '#1E293B', duration: 0.1, ease: 'none' }, '<')
        .to('.terminal-content', { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'none' });

      // 4. Automated Execution Pipeline
      const commandTl = gsap.timeline({
        delay: prefersReducedMotion ? 0.1 : 0.5,
        onComplete: () => {
          setIsInteractive(true);
          setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 100);
        },
      });

      commandTl.to('.terminal-command-intro', {
        text: 'npm run exec --system_auth',
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: 'none',
      });

      assertions.forEach((a) => {
        const processingTime = prefersReducedMotion ? 0.05 : 0.25;
        commandTl.to(`.assertion-row-${a.id}`, { opacity: 1, duration: 0.1, ease: 'none' }, '+=0.1');
        commandTl.set(`.status-running-${a.id}`, { opacity: 1 }, '<');
        commandTl.set(`.status-running-${a.id}`, { opacity: 0 }, `+=${processingTime}`);
        commandTl.set(`.status-pass-${a.id}`, { opacity: 1 }, '<');
      });

      // Terminal System Lock Flash
      commandTl.to('.terminal-summary', { opacity: 1, duration: 0.1, ease: 'none' }, '+=0.2');
      commandTl.to('.terminal-panel', { borderColor: '#5EEAD4', duration: 0.1, ease: 'none' }, '<');
      commandTl.to('.terminal-panel', { borderColor: '#1E293B', duration: 0.5, ease: 'none' }, '+=0.3');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-[#05070A] overflow-hidden selection:bg-[#5EEAD4] selection:text-[#0B0E14] font-mono"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT PANE: Identity ── */}
          <div className="lg:col-span-5 space-y-6">
            <div className="hero-element flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#F59E0B]">
              <span className="w-6 h-[1px] bg-[#F59E0B]" />
              SECURE_PIPELINE_OP
            </div>

            <h1 className="hero-element font-bold text-4xl md:text-5xl lg:text-6xl text-[#94A3B8] leading-tight tracking-tighter uppercase">
              {personalInfo.name}
            </h1>

            <div className="space-y-4">
              <h2 className="hero-element text-[12px] tracking-widest text-[#5EEAD4] uppercase border-l-2 border-[#5EEAD4] pl-3">
                {personalInfo.title}
              </h2>
              {/* Decrypted Tagline */}
              <p className="hero-element text-[13px] text-[#475569] leading-relaxed max-w-lg min-h-[4rem] uppercase tracking-wide">
                {taglineDecrypted}
                <span className="inline-block w-[6px] h-[12px] bg-[#5EEAD4] ml-2 align-middle animate-[pulse_1s_steps(2,start)_infinite]" />
              </p>
            </div>

            {/* Operator Commands */}
            <div className="hero-element flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative text-[10px] px-6 py-3 border border-[#5EEAD4] bg-[#5EEAD4]/10 text-[#5EEAD4] font-bold tracking-widest uppercase hover:bg-[#5EEAD4] hover:text-[#0B0E14] transition-colors duration-200"
              >
                [ VIEW_ARCHIVE ]
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group text-[10px] px-6 py-3 border border-[#1E293B] bg-[#0B0E14] text-[#94A3B8] tracking-widest uppercase hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors duration-200"
              >
                [ ESTABLISH_UPLINK ]
              </button>
            </div>
          </div>

          {/* ── RIGHT PANE: Terminal Suite ── */}
          <div className="lg:col-span-7 relative group">
            <div 
              className="terminal-panel relative border border-[#1E293B] bg-[#0B0E14] shadow-2xl flex flex-col transition-colors duration-300 h-[500px]"
              onClick={() => isInteractive && inputRef.current?.focus({ preventScroll: true })}
            >
              {/* Terminal Chrome */}
              <div className="terminal-chrome flex items-center justify-between px-4 py-2 border-b border-[#1E293B] bg-[#11151C] shrink-0">
                <div className="terminal-content flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5EEAD4] animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-[10px] text-[#475569] tracking-widest uppercase">
                    SYS.OP // LANGLEY_NODE_04
                  </span>
                </div>
                <span className="terminal-content text-[10px] text-[#475569] uppercase tracking-widest">AWAITING_INPUT</span>
              </div>

              {/* Terminal Body */}
              <div
                ref={terminalBodyRef}
                className="px-5 py-5 text-[12px] leading-relaxed flex-1 overflow-y-auto"
              >
                {/* Initial Boot Command */}
                <div className="terminal-content flex items-center gap-3 text-[#F59E0B] font-semibold mb-6">
                  <span>{'>'}</span>
                  <span className="terminal-command-intro text-[#94A3B8] uppercase" />
                  {!isInteractive && <span className="w-[6px] h-[12px] bg-[#5EEAD4] inline-block animate-[pulse_1s_steps(2,start)_infinite]" />}
                </div>

                {/* System Check Rows (FIXED ALIGNMENT) */}
                <div className="space-y-2 mb-6">
                  {assertions.map((a) => (
                    <div key={a.id} className={`assertion-row assertion-row-${a.id} flex items-center gap-4`}>
                      <span className="relative inline-block w-24 h-5 shrink-0 font-bold tracking-widest uppercase">
                        <span className={`status-running-${a.id} absolute inset-0 text-[#F59E0B] flex items-center gap-2`}>
                          <span className="w-1.5 h-1.5 bg-[#F59E0B] animate-pulse" /> RUNNING
                        </span>
                        <span className={`status-pass-${a.id} absolute inset-0 text-[#10B981] flex items-center gap-2`}>
                          <span className="w-1.5 h-1.5 bg-[#10B981]" /> [ OK ]
                        </span>
                      </span>
                      {/* Fixed width to ensure perfect alignment and removed truncate */}
                      <span className="text-[#475569] w-[220px] shrink-0 uppercase tracking-widest">
                        {a.label}
                      </span>
                      <span className="text-[#94A3B8] uppercase tracking-wider truncate">
                        {a.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* System Summary */}
                <div className="terminal-summary opacity-0 border-y border-[#1E293B] py-3 mb-4 text-[#475569] text-[10px] uppercase tracking-widest flex justify-between">
                  <span>AUTH: <span className="text-[#10B981] font-bold">VERIFIED</span></span>
                  <span>GATES: <span className="text-[#10B981] font-bold">PASSED</span></span>
                  <span>TYPE 'HELP' TO BEGIN</span>
                </div>

                {/* Interactive Log History */}
                {isInteractive && (
                  <div className="space-y-4">
                    {commandHistory.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="flex items-center gap-3 text-[#F59E0B] font-semibold">
                          <span>{'>'}</span>
                          <span className="text-[#94A3B8] uppercase tracking-wide">{item.command}</span>
                        </div>
                        <div className="ml-5">
                          {item.output}
                        </div>
                      </div>
                    ))}
                    
                    {/* Live Input Field */}
                    <form onSubmit={handleCommand} className="flex items-center gap-3 relative mt-2">
                      <span className="text-[#F59E0B] font-semibold">{'>'}</span>
                      <div className="relative w-full flex items-center">
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          className="bg-transparent border-none outline-none text-[#94A3B8] w-full caret-transparent placeholder:text-[#1E293B] uppercase tracking-wide"
                          placeholder="AWAITING_COMMAND..."
                          autoComplete="off"
                          spellCheck="false"
                        />
                        {/* Custom Block Cursor */}
                        <span className="absolute left-0 top-0 text-transparent pointer-events-none whitespace-pre font-mono uppercase tracking-wide">
                          {inputValue}
                          <span className="inline-block w-[6px] h-[12px] bg-[#5EEAD4] translate-y-[2px] animate-[pulse_1s_steps(2,start)_infinite]" />
                        </span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-element">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center group opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Scroll to next section"
        >
          <span className="text-[9px] tracking-[0.4em] text-[#475569] mb-2 group-hover:text-[#5EEAD4] transition-colors uppercase">
            DESCEND
          </span>
          <span className="w-[1px] h-8 bg-[#1E293B] relative overflow-hidden group-hover:bg-[#5EEAD4]/20">
            <span className="absolute top-0 left-0 w-full h-1/3 bg-[#5EEAD4] animate-[scanline_2s_linear_infinite]" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;