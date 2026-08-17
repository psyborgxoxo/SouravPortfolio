// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// /**
//  * Design concept
//  * ----------------
//  * The original copy already called this "// WORKING DIRECTORY" — a git
//  * term. Taking that literally: experience becomes a commit log. Each role
//  * is a commit (hash, date, message, branch), achievements are diff-style
//  * addition lines, skills are topic tags. Left-aligned single column instead
//  * of the alternating zigzag — simpler, and reads naturally as a log rather
//  * than a decorative timeline.
//  */

// type ExperienceType = 'Remote' | 'Current Learning' | 'Full-time' | 'Internship';

// const branchStyles: Record<string, { text: string; border: string; label: string }> = {
//   'Current Learning': { text: 'text-[#58A6FF]', border: 'border-[#58A6FF]/30', label: 'learning' },
//   Internship: { text: 'text-[#868C98]', border: 'border-[#23262E]', label: 'internship' },
//   default: { text: 'text-[#E8A33D]', border: 'border-[#E8A33D]/30', label: 'work' },
// };

// const commitHash = (id: number) => (id * 2654435761 >>> 0).toString(16).slice(0, 7);

// const Experience: React.FC = () => {
//   const experienceRef = useRef<HTMLDivElement>(null);

//   const experiences: {
//     id: number;
//     period: string;
//     title: string;
//     company: string;
//     location: string;
//     type: ExperienceType;
//     url?: string;
//     description: string;
//     achievements: string[];
//     skills: string[];
//   }[] = [
//     {
//       id: 1,
//       period: 'January 2024 – Present',
//       title: 'CTO — Design Hut Studio',
//       company: 'Design Hut Studio',
//       location: 'Karnataka, India',
//       type: 'Remote',
//       url: 'https://design-hut.vercel.app/',
//       description: 'Led the technology vision and architecture for the product and ensured alignment with business goals.',
//       achievements: [
//         'Led technology vision and architecture, aligned to business goals',
//         'Evaluated and adopted AI-driven tools to improve development efficiency',
//         'Guided engineering teams on technical decisions and scalability planning',
//         'Oversaw system design, deployment pipelines, and production stability',
//         'Planned product milestones and technical roadmap with cross-functional leaders',
//       ],
//       skills: ['CTO', 'Architecture', 'AI/ML', 'Engineering Leadership', 'System Design'],
//     },
//     {
//       id: 2,
//       period: 'April 2024 — Present',
//       title: 'Crio Fellowship in QA Automation (SDET) — Advanced',
//       company: 'CRIO',
//       location: 'Remote',
//       type: 'Current Learning',
//       description: 'Advanced QA Automation fellowship focused on test automation, CI/CD pipelines, and DevOps practices.',
//       achievements: [
//         'Automated 50+ test cases with Selenium and TestNG, cutting manual testing time by 40%',
//         'Designed and implemented a CI/CD pipeline in Jenkins',
//         'Built proficiency in API testing, performance testing, and end-to-end automation',
//         'Applied AI/ML techniques to improve test efficiency',
//       ],
//       skills: ['Test Automation', 'CI/CD', 'Selenium', 'TestNG', 'Python', 'API Testing'],
//     },
//     {
//       id: 3,
//       period: 'Sep 2022 – Apr 2024',
//       title: 'SDET — Fynd (Jio Commerce Platform)',
//       company: 'FYND',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       description: 'Built and maintained UI and API automation using Selenium, TestNG, and Python to improve release reliability.',
//       achievements: [
//         'Built and maintained UI and API automation with Selenium, TestNG, Python',
//         'Integrated automated suites into CI/CD with Jenkins',
//         'Partnered with developers and product to define test strategies',
//         'Drove API and performance testing to catch regressions early',
//       ],
//       skills: ['SDET', 'Selenium', 'TestNG', 'Python', 'CI/CD', 'Jenkins'],
//     },
//     {
//       id: 4,
//       period: 'Nov 2021 – Jun 2022',
//       title: 'Software Engineer — RCS Pvt. Ltd.',
//       company: 'RCS Pvt. Ltd.',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       description: 'Developed functional and regression suites for web applications, improving coverage and stability.',
//       achievements: [
//         'Developed functional and regression suites for web applications',
//         'Implemented API validation workflows',
//         'Collaborated cross-functionally to triage defects',
//       ],
//       skills: ['QA Automation', 'Functional Testing', 'Regression Testing', 'API Validation'],
//     },
//     {
//       id: 5,
//       period: 'Jul 2021 – Sep 2021',
//       title: 'Cyber Security Summer Intern',
//       company: 'Gurugram Police CSSI 2021',
//       location: 'Gurugram, India',
//       type: 'Internship',
//       description: '60-day cyber security internship focused on email hacking prevention and web security.',
//       achievements: [
//         'Specialized in email hacking prevention and web security analysis',
//         'Developed proficiency in OSINT tools and techniques',
//         'Gained experience in malware analysis and incident response',
//       ],
//       skills: ['Cybersecurity', 'OSINT', 'Ethical Hacking', 'Malware Analysis'],
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.commit-line',
//         { height: 0 },
//         {
//           height: '100%',
//           duration: 1.5,
//           ease: 'power2.out',
//           scrollTrigger: { trigger: experienceRef.current, start: 'top 75%', invalidateOnRefresh: true },
//         }
//       );

//       gsap.fromTo(
//         '.commit-item',
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           stagger: 0.12,
//           ease: 'power3.out',
//           scrollTrigger: { trigger: experienceRef.current, start: 'top 75%', invalidateOnRefresh: true },
//         }
//       );

//       ScrollTrigger.refresh();
//     }, experienceRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={experienceRef} id="experience" className="section-padding relative z-10 bg-[#0C0D11] overflow-hidden">
//       <div
//         className="absolute inset-0 opacity-[0.06] pointer-events-none"
//         style={{
//           backgroundImage:
//             'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
//           backgroundSize: '48px 48px',
//           backgroundAttachment: 'fixed',
//         }}
//       />

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-10 sm:mb-12 lg:mb-14">
//           <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#E8A33D] mb-3">// working directory</p>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-mono text-[#EDECE7] mb-4">
//             git log <span className="text-[#E8A33D]">--experience</span>
//           </h2>
//           <div className="w-14 h-[3px] bg-[#E8A33D] mx-auto rounded-full" />
//         </div>

//         <div className="max-w-3xl mx-auto relative">
//           {/* Commit line */}
//           <div className="commit-line absolute left-[7px] top-2 w-px bg-[#23262E]" />

//           <div className="space-y-6">
//             {experiences.map((exp) => {
//               const branch = branchStyles[exp.type] ?? branchStyles.default;
//               return (
//                 <div key={exp.id} className="commit-item relative pl-8">
//                   {/* Commit dot */}
//                   <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-[#0C0D11] border-2 border-[#E8A33D] z-10" />

//                   <div className="p-4 sm:p-5 rounded-lg bg-[#15171C] border border-[#23262E] hover:border-[#3A3F4B] transition-colors">
//                     {/* Commit meta */}
//                     <div className="flex flex-wrap items-center gap-2 mb-3">
//                       <span className="font-mono text-xs text-[#5B6070]">commit {commitHash(exp.id)}</span>
//                       <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${branch.border} ${branch.text}`}>
//                         {branch.label}
//                       </span>
//                       <span className="font-mono text-xs text-[#5B6070] ml-auto">{exp.period}</span>
//                     </div>

//                     {/* Message */}
//                     <h3 className="font-sans text-base sm:text-lg font-semibold text-[#EDECE7] mb-1">{exp.title}</h3>
//                     <p className="font-mono text-xs text-[#E8A33D] mb-0.5">{exp.company}</p>
//                     <p className="font-mono text-xs text-[#5B6070] mb-3">{exp.location}</p>

//                     <p className="font-sans text-sm text-[#B7BBC2] leading-relaxed mb-3">{exp.description}</p>

//                     {/* Diff-style achievements */}
//                     <div className="font-mono text-xs space-y-1 mb-4 bg-[#0F1115] border border-[#23262E] rounded-md p-3">
//                       {exp.achievements.map((line, i) => (
//                         <div key={i} className="flex gap-2 text-[#B7BBC2]">
//                           <span className="text-[#3FB950] shrink-0">+</span>
//                           <span>{line}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-1.5">
//                       {exp.skills.map((skill) => (
//                         <span
//                           key={skill}
//                           className="font-mono px-2 py-1 text-[10px] rounded bg-[#0F1115] border border-[#23262E] text-[#868C98]"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────
   Types & Data
   ────────────────────────────────────────────────────────────── */
type ExperienceType = 'Remote' | 'Current Learning' | 'Full-time' | 'Internship';

const branchStyles: Record<string, { text: string; label: string; status: string }> = {
  'Current Learning': { text: 'text-[#5EEAD4]', label: 'TRAINING_NODE', status: 'IN_PROGRESS' }, // Teal
  Internship:         { text: 'text-[#94A3B8]', label: 'INTERN_NODE',   status: 'COMPLETED' },   // Slate
  default:            { text: 'text-[#F59E0B]', label: 'ACTIVE_NODE',   status: 'VERIFIED' },    // Amber
};

const commitHash = (id: number) => (id * 2654435761 >>> 0).toString(16).slice(0, 7).toUpperCase();

const experiences: {
  id: number;
  period: string;
  title: string;
  company: string;
  location: string;
  type: ExperienceType;
  url?: string;
  description: string;
  achievements: string[];
  skills: string[];
}[] = [
  {
    id: 1,
    period: 'JAN 2024 – PRESENT',
    title: 'CTO — Design Hut Studio',
    company: 'DESIGN HUT STUDIO',
    location: 'KARNATAKA, INDIA',
    type: 'Remote',
    url: 'https://design-hut.vercel.app/',
    description: 'Led the technology vision and architecture for the product and ensured alignment with business goals.',
    achievements: [
      'Led technology vision and architecture, aligned to business goals',
      'Evaluated and adopted AI-driven tools to improve development efficiency',
      'Guided engineering teams on technical decisions and scalability planning',
      'Oversaw system design, deployment pipelines, and production stability',
      'Planned product milestones and technical roadmap with cross-functional leaders',
    ],
    skills: ['CTO', 'Architecture', 'AI/ML', 'Engineering Leadership', 'System Design'],
  },
  {
    id: 2,
    period: 'APR 2024 — PRESENT',
    title: 'Crio Fellowship in QA Automation (SDET) — Advanced',
    company: 'CRIO',
    location: 'REMOTE',
    type: 'Current Learning',
    description: 'Advanced QA Automation fellowship focused on test automation, CI/CD pipelines, and DevOps practices.',
    achievements: [
      'Automated 50+ test cases with Selenium and TestNG, cutting manual testing time by 40%',
      'Designed and implemented a CI/CD pipeline in Jenkins',
      'Built proficiency in API testing, performance testing, and end-to-end automation',
      'Applied AI/ML techniques to improve test efficiency',
    ],
    skills: ['Test Automation', 'CI/CD', 'Selenium', 'TestNG', 'Python', 'API Testing'],
  },
  {
    id: 3,
    period: 'SEP 2022 – APR 2024',
    title: 'SDET — Fynd (Jio Commerce Platform)',
    company: 'FYND',
    location: 'BANGALORE, INDIA',
    type: 'Full-time',
    description: 'Built and maintained UI and API automation using Selenium, TestNG, and Python to improve release reliability.',
    achievements: [
      'Built and maintained UI and API automation with Selenium, TestNG, Python',
      'Integrated automated suites into CI/CD with Jenkins',
      'Partnered with developers and product to define test strategies',
      'Drove API and performance testing to catch regressions early',
    ],
    skills: ['SDET', 'Selenium', 'TestNG', 'Python', 'CI/CD', 'Jenkins'],
  },
  {
    id: 4,
    period: 'NOV 2021 – JUN 2022',
    title: 'Software Engineer — RCS Pvt. Ltd.',
    company: 'RCS PVT. LTD.',
    location: 'BANGALORE, INDIA',
    type: 'Full-time',
    description: 'Developed functional and regression suites for web applications, improving coverage and stability.',
    achievements: [
      'Developed functional and regression suites for web applications',
      'Implemented API validation workflows',
      'Collaborated cross-functionally to triage defects',
    ],
    skills: ['QA Automation', 'Functional Testing', 'Regression Testing', 'API Validation'],
  },
  {
    id: 5,
    period: 'JUL 2021 – SEP 2021',
    title: 'Cyber Security Summer Intern',
    company: 'GURUGRAM POLICE CSSI 2021',
    location: 'GURUGRAM, INDIA',
    type: 'Internship',
    description: '60-day cyber security internship focused on email hacking prevention and web security.',
    achievements: [
      'Specialized in email hacking prevention and web security analysis',
      'Developed proficiency in OSINT tools and techniques',
      'Gained experience in malware analysis and incident response',
    ],
    skills: ['Cybersecurity', 'OSINT', 'Ethical Hacking', 'Malware Analysis'],
  },
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
   Component
   ────────────────────────────────────────────────────────────── */
const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const headerDecrypted = useDecryptionEffect("EXEC: AUDIT_LOG // OP_HISTORY", isVisible, 30);

  /* ──────────────────────────────────────────────────────────
     GSAP Animations (Hardware Snap)
     ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden states
      gsap.set('.audit-panel', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.audit-row', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.audit-content', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 80%',
          onEnter: () => setIsVisible(true),
        },
      });

      // Sequential hardware boot
      tl.to('.audit-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' })
        .to('.audit-panel', { backgroundColor: 'transparent', duration: 0.1, ease: 'none' })
        .to('.audit-chrome', { backgroundColor: '#11151C', duration: 0.1, ease: 'none' }, '<')
        // Reveal rows one by one, top to bottom
        .to('.audit-row', { borderColor: '#1E293B', backgroundColor: 'transparent', duration: 0.1, stagger: 0.08, ease: 'none' })
        .to('.audit-content', { opacity: 1, duration: 0.1, stagger: 0.02, ease: 'none' }, '-=0.2');

    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="experience" 
      ref={experienceRef} 
      className="relative z-10 min-h-screen bg-[#05070A] py-24 px-4 sm:px-8 flex flex-col font-mono selection:bg-[#5EEAD4] selection:text-[#0B0E14]"
      data-section="experience"
    >
      <div className="max-w-[1200px] w-full mx-auto relative flex flex-col">

        {/* ────────────────────────────────────────────────
            HEADER CHROME
        ──────────────────────────────────────────────── */}
        <div className="audit-panel border border-[#1E293B] bg-[#11151C] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 mb-6 audit-chrome">
          <div className="audit-content flex items-center gap-3">
            <span className="text-[#F59E0B] font-bold">{'>'}</span>
            <h2 className="text-[12px] text-[#F59E0B] tracking-widest uppercase">
              {headerDecrypted || "AWAITING_DECRYPTION..."}
            </h2>
            <span className="w-2 h-4 bg-[#5EEAD4] animate-[pulse_1s_steps(2,start)_infinite] ml-1" />
          </div>
          <div className="audit-content text-[10px] text-[#475569] tracking-widest mt-2 sm:mt-0 uppercase">
            RECORDS_FOUND: {experiences.length}
          </div>
        </div>

        {/* ────────────────────────────────────────────────
            MAIN AUDIT LOG (GRID STRUCTURE)
        ──────────────────────────────────────────────── */}
        <div className="audit-panel border-t border-l border-r border-[#1E293B] bg-[#0B0E14] flex flex-col">
          {experiences.map((exp, index) => {
            const branch = branchStyles[exp.type] ?? branchStyles.default;
            
            return (
              <div 
                key={exp.id} 
                className="audit-row grid grid-cols-1 lg:grid-cols-12 border-b border-[#1E293B] bg-[#0B0E14] hover:bg-[#11151C] transition-colors duration-300 group"
              >
                
                {/* ── METADATA COLUMN (Left) ── */}
                <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#1E293B] p-5 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle highlight bar on hover */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-[#1E293B] group-hover:bg-[#F59E0B] transition-colors duration-300`} />
                  
                  <div className="audit-content">
                    <div className="text-[10px] text-[#475569] tracking-widest uppercase mb-1">
                      [ TIMESTAMP ]
                    </div>
                    <div className="text-[12px] text-[#94A3B8] tracking-widest mb-6">
                      {exp.period}
                    </div>
                    
                    <div className="text-[10px] text-[#475569] tracking-widest uppercase mb-1">
                      [ COMMIT_HASH ]
                    </div>
                    <div className={`text-[12px] tracking-widest uppercase font-bold mb-6 ${branch.text}`}>
                      SYS.REV // {commitHash(exp.id)}
                    </div>
                  </div>

                  <div className="audit-content flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-40 ${branch.text.replace('text-', 'bg-')}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${branch.text.replace('text-', 'bg-')}`} />
                    </span>
                    <span className="text-[10px] text-[#475569] uppercase tracking-widest">
                      {branch.label} : {branch.status}
                    </span>
                  </div>
                </div>

                {/* ── PAYLOAD COLUMN (Right) ── */}
                <div className="lg:col-span-9 p-5 md:p-8 flex flex-col">
                  
                  {/* Header */}
                  <div className="audit-content flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-[#94A3B8] uppercase tracking-wide group-hover:text-[#5EEAD4] transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-[11px] uppercase tracking-widest">
                        <span className="text-[#F59E0B]">{exp.company}</span>
                        <span className="text-[#475569]">|</span>
                        <span className="text-[#475569]">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="audit-content text-[12px] text-[#475569] uppercase tracking-wide leading-relaxed mb-6 max-w-4xl">
                    {exp.description}
                  </p>

                  {/* Diff-Style Achievements */}
                  <div className="audit-content bg-[#05070A] border border-[#1E293B] p-4 md:p-5 mb-6 space-y-2">
                    {exp.achievements.map((line, i) => (
                      <div key={i} className="flex gap-3 text-[10px] md:text-[11px] text-[#94A3B8] uppercase tracking-wide leading-relaxed hover:text-[#EDECE7] transition-colors">
                        <span className="text-[#10B981] font-bold shrink-0">[+]</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="audit-content flex flex-wrap gap-2 mt-auto">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] uppercase tracking-widest text-[#475569] border border-[#1E293B] px-2 py-1 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ────────────────────────────────────────────────
            FOOTER CHROME
        ──────────────────────────────────────────────── */}
        <div className="audit-panel border-b border-l border-r border-[#1E293B] bg-[#11151C] p-4 flex justify-between items-center audit-chrome">
          <div className="audit-content text-[10px] text-[#475569] uppercase tracking-widest">
            END_OF_LOG // EOF
          </div>
          <div className="audit-content text-[10px] text-[#475569] uppercase tracking-widest">
            STATUS: NOMINAL
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;