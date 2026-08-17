import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assuming these come from your data file
import { skills, Skill } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────
   Types & Palette
   ────────────────────────────────────────────────────────────── */
type Tier = 'growing' | 'solid' | 'strong';

const getTier = (proficiency: number): Tier => {
  if (proficiency >= 85) return 'strong';
  if (proficiency >= 70) return 'solid';
  return 'growing';
};

// Updated to the Matte / Intelligence Palette
const tierStyles: Record<Tier, { bar: string; text: string; label: string }> = {
  growing: { bar: '#F59E0B', text: 'text-[#F59E0B]', label: 'GROWING' }, // Amber
  solid: { bar: '#5EEAD4', text: 'text-[#5EEAD4]', label: 'SOLID' },   // Teal
  strong: { bar: '#10B981', text: 'text-[#10B981]', label: 'STRONG' },  // Emerald
};

const categories = [
  { id: 'all', name: 'ALL_SYSTEMS' },
  { id: 'Quality Assurance & Testing', name: 'QA_AUTOMATION' },
  { id: 'Programming Languages', name: 'CORE_LANGUAGES' },
  { id: 'CI/CD & Version Control', name: 'PIPELINES_CICD' },
  { id: 'AI', name: 'AI_INTEGRATION' },
  { id: 'Security & Development', name: 'SEC_DEV' },
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
      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [text, trigger, speed]);

  return displayText;
};

/* ──────────────────────────────────────────────────────────────
   Skill Row (Telemetry Block)
   ────────────────────────────────────────────────────────────── */
const SkillRow: React.FC<{ skill: Skill; animateBars: boolean }> = ({ skill, animateBars }) => {
  const tier = getTier(skill.proficiency);
  const style = tierStyles[tier];

  return (
    <div className="skills-content group bg-[#0B0E14] p-4 md:p-5 flex flex-col justify-between hover:bg-[#11151C] transition-colors duration-200">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[12px] text-[#94A3B8] group-hover:text-[#5EEAD4] transition-colors duration-200 uppercase tracking-wider truncate mr-4">
          {skill.name}
        </span>
        <span className={`font-mono text-[10px] shrink-0 ${style.text}`}>
          {skill.proficiency}%
        </span>
      </div>

      {/* Segmented Hardware Progress Bar */}
      <div className="w-full h-1.5 bg-[#05070A] border border-[#1E293B] overflow-hidden mb-3 relative">
        {/* Fill */}
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{
            width: animateBars ? `${skill.proficiency}%` : '0%',
            backgroundColor: style.bar
          }}
        />
        {/* Scanner Line Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rV7928GBgYmMAEEAAgwADugCW/z2r+zAAAAAElFTkSuQmCC')] opacity-20 pointer-events-none" />
      </div>

      {/* Metadata Row */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] text-[#475569] uppercase tracking-widest truncate">
          {skill.category}
        </span>
        <span className={`font-mono text-[9px] shrink-0 tracking-widest uppercase ${style.text}`}>
          [{style.label}]
        </span>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Skills Section (Main Workstation Interface)
   ────────────────────────────────────────────────────────────── */
const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);

  // Decryption effect triggers when section scrolls into view
  const headerDecrypted = useDecryptionEffect("SYSTEM_COVERAGE_REPORT", isVisible, 30);

  /* ──────────────────────────────────────────────────────────
     GSAP Animations (Hardware Snap)
     ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hardware off state
      gsap.set('.skills-panel', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.skills-content', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          onEnter: () => setIsVisible(true),
        },
      });

      tl.to('.skills-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' })
        .to('.skills-panel', { backgroundColor: 'transparent', duration: 0.1, ease: 'none' })
        .to('.panel-fill', { backgroundColor: '#11151C', duration: 0.1, ease: 'none' }, '<')
        .to('.skills-content', { opacity: 1, duration: 0.1, stagger: 0.02, ease: 'none' })
        .call(() => setAnimateBars(true)); // Trigger progress bars to fill

    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]); // Re-run animation slightly when filtering

  /* ──────────────────────────────────────────────────────────
     Calculations
     ────────────────────────────────────────────────────────── */
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  const avgCoverage = skills.length > 0
    ? Math.round(skills.reduce((sum, skill) => sum + skill.proficiency, 0) / skills.length)
    : 0;

  const summary = [
    { label: 'QA_PIPELINES', count: skills.filter(s => s.category === 'Quality Assurance & Testing').length },
    { label: 'LANG_RUNTIME', count: skills.filter(s => s.category === 'Programming Languages').length },
    { label: 'CICD_ORCHESTRATION', count: skills.filter(s => s.category === 'CI/CD & Version Control').length },
    { label: 'AI_MODELS', count: skills.filter(s => s.category === 'AI').length },
  ];

  /* ──────────────────────────────────────────────────────────
     Render
     ────────────────────────────────────────────────────────── */
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 min-h-screen bg-[#05070A] py-24 px-4 sm:px-8 flex flex-col font-mono selection:bg-[#5EEAD4] selection:text-[#0B0E14]"
    >
      <div className="max-w-[1200px] w-full mx-auto relative flex flex-col">

        {/* ────────────────────────────────────────────────
            HEADER CHROME
        ──────────────────────────────────────────────── */}
        <div className="skills-panel border border-[#1E293B] bg-[#11151C] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 mb-6 panel-fill">
          <div className="skills-content flex items-center gap-3">
            <span className="w-2 h-2 bg-[#5EEAD4] animate-pulse" />
            <h2 className="text-[12px] text-[#5EEAD4] tracking-widest uppercase">
              {headerDecrypted || "AWAITING_DECRYPTION..."}
            </h2>
          </div>
          <div className="skills-content text-[10px] text-[#475569] tracking-widest mt-2 sm:mt-0 uppercase">
            TRACKED_NODES: {skills.length} // AVG_COVERAGE: {avgCoverage}%
          </div>
        </div>

        {/* ────────────────────────────────────────────────
            CATEGORY FILTER BAR
        ──────────────────────────────────────────────── */}
        <div className="skills-panel border border-[#1E293B] bg-[#0B0E14] mb-6 flex overflow-x-auto hide-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setAnimateBars(false); // Reset bars
                  setActiveCategory(category.id);
                }}
                className={`
                  skills-content relative font-mono text-[10px] tracking-widest px-5 py-3 
                  uppercase whitespace-nowrap border-r border-[#1E293B] transition-colors duration-200
                  ${isActive ? 'text-[#5EEAD4] bg-[#11151C]' : 'text-[#475569] hover:text-[#94A3B8] hover:bg-[#11151C]/50'}
                `}
              >
                {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5EEAD4]" />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* ────────────────────────────────────────────────
            SKILLS TELEMETRY GRID (Hairline Borders)
        ──────────────────────────────────────────────── */}
        <div className="skills-panel border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {filteredSkills.map((skill) => (
            <SkillRow
              key={`${skill.name}-${activeCategory}`}
              skill={skill}
              animateBars={animateBars}
            />
          ))}
          {/* Fill empty grid spots with blank blocks for a complete UI feel if needed */}
          {filteredSkills.length % 3 !== 0 && Array.from({ length: 3 - (filteredSkills.length % 3) }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-[#0B0E14] hidden lg:block pattern-dots" />
          ))}
        </div>

        {/* ────────────────────────────────────────────────
            BOTTOM DATA METRICS
        ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Summary Counts */}
          <div className="skills-panel lg:col-span-8 border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-2 md:grid-cols-4">
            {summary.map((item) => (
              <div key={item.label} className="skills-content bg-[#0B0E14] p-4 flex flex-col justify-between hover:bg-[#11151C] transition-colors">
                <div className="text-[10px] text-[#475569] uppercase tracking-widest mb-4">
                  {item.label}
                </div>
                <div className="text-2xl text-[#94A3B8] font-light">
                  {item.count}
                </div>
              </div>
            ))}
          </div>

          {/* Core Stack Block */}
          <div className="skills-panel lg:col-span-4 border border-[#1E293B] bg-[#0B0E14] p-4 flex flex-col">
            <div className="skills-content text-[10px] text-[#475569] uppercase tracking-widest mb-4">
              [ CORE_STACK_CAPABILITIES ]
            </div>
            <div className="skills-content flex flex-wrap gap-2 mt-auto">
              {['Automation', 'Development', 'QA Testing', 'Cybersecurity', 'AI'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase text-[#94A3B8] border border-[#1E293B] px-2 py-1 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors cursor-default"
                >
                  <span className="text-[#475569] mr-1">{'>'}</span>{tech}                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* Hide scrollbar for filter strip but keep functionality */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Subtle dot pattern for empty grid cells */
        .pattern-dots {
          background-image: radial-gradient(#1E293B 1px, transparent 1px);
          background-size: 16px 16px;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;