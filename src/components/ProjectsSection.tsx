// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Assuming this comes from your data file
// import { projects } from '../data/portfolioData';

// gsap.registerPlugin(ScrollTrigger);

// /* ──────────────────────────────────────────────────────────────
//    Types & Palette Mapping
//    ────────────────────────────────────────────────────────────── */
// const statusStyles: Record<string, { text: string; dot: string; label: string }> = {
//   completed:     { text: 'text-[#10B981]', dot: 'bg-[#10B981]', label: 'COMPLETED' },
//   'in-progress': { text: 'text-[#F59E0B]', dot: 'bg-[#F59E0B]', label: 'IN_PROGRESS' },
//   planned:       { text: 'text-[#5EEAD4]', dot: 'bg-[#5EEAD4]', label: 'PLANNED' },
// };

// // Auto-generate counts based on actual data
// const categories = [
//   { id: 'all', name: 'ALL_REPOS', count: projects.length },
//   { id: 'QA & Development', name: 'QA_AND_DEV', count: projects.filter((p) => p.category === 'QA & Development').length },
//   { id: 'AI & Full Stack', name: 'AI_AND_ML', count: projects.filter((p) => p.category === 'AI & Full Stack').length },
// ];

// /* ──────────────────────────────────────────────────────────────
//    Custom Hook: Cryptographic Text Scramble
//    ────────────────────────────────────────────────────────────── */
// const useDecryptionEffect = (text: string, trigger: boolean, speed = 25) => {
//   const [displayText, setDisplayText] = useState('');
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>';

//   useEffect(() => {
//     if (!trigger) return;
//     let iteration = 0;
//     let interval: NodeJS.Timeout;

//     interval = setInterval(() => {
//       setDisplayText(text.split('').map((char, index) => {
//         if (index < iteration || char === ' ') return text[index];
//         return chars[Math.floor(Math.random() * chars.length)];
//       }).join(''));

//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 2;
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, trigger, speed]);

//   return displayText;
// };

// /* ──────────────────────────────────────────────────────────────
//    Component
//    ────────────────────────────────────────────────────────────── */
// const ProjectsSection: React.FC = () => {
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const [activeCategory, setActiveCategory] = useState('all');
//   const [isVisible, setIsVisible] = useState(false);

//   // Decryption effect triggers when section scrolls into view
//   const headerDecrypted = useDecryptionEffect("REPOSITORY_INDEX_ACCESS", isVisible, 30);

//   const filteredProjects = activeCategory === 'all' 
//     ? projects 
//     : projects.filter((p) => p.category === activeCategory);

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   /* ──────────────────────────────────────────────────────────
//      GSAP Animations (Hardware Snap)
//      ────────────────────────────────────────────────────────── */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hardware off state
//       gsap.set('.proj-panel', { borderColor: '#000000', backgroundColor: '#000000' });
//       gsap.set('.proj-content', { opacity: 0 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: projectsRef.current,
//           start: 'top 80%',
//           onEnter: () => setIsVisible(true),
//         },
//       });

//       tl.to('.proj-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' })
//         .to('.proj-panel', { backgroundColor: 'transparent', duration: 0.1, ease: 'none' })
//         .to('.proj-fill', { backgroundColor: '#11151C', duration: 0.1, ease: 'none' }, '<')
//         .to('.proj-content', { opacity: 1, duration: 0.1, stagger: 0.02, ease: 'none' });

//     }, projectsRef);

//     return () => ctx.revert();
//   }, [activeCategory]); // Re-run slightly on filter

//   /* ──────────────────────────────────────────────────────────
//      Calculations
//      ────────────────────────────────────────────────────────── */
//   const summary = [
//     { label: 'QA_AUTOMATION', value: projects.filter((p) => p.category === 'QA & Development').length },
//     { label: 'AI_AND_FULLSTACK', value: projects.filter((p) => p.category === 'AI & Full Stack').length },
//     { label: 'TOTAL_REPOS', value: projects.length },
//   ];

//   // Calculate empty grid cells to maintain perfect rectangle on desktop
//   const emptyCells = filteredProjects.length % 3 !== 0 ? 3 - (filteredProjects.length % 3) : 0;

//   return (
//     <section 
//       id="projects" 
//       ref={projectsRef} 
//       className="relative z-10 min-h-screen bg-[#05070A] py-24 px-4 sm:px-8 flex flex-col font-mono selection:bg-[#F59E0B] selection:text-[#0B0E14]"
//       data-section="projects"
//     >
//       <div className="max-w-[1200px] w-full mx-auto relative flex flex-col">

//         {/* ────────────────────────────────────────────────
//             HEADER CHROME
//         ──────────────────────────────────────────────── */}
//         <div className="proj-panel border border-[#1E293B] bg-[#11151C] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 mb-6 proj-fill">
//           <div className="proj-content flex items-center gap-3">
//             <span className="w-2 h-2 bg-[#F59E0B] animate-pulse" />
//             <h2 className="text-[12px] text-[#F59E0B] tracking-widest uppercase">
//               {headerDecrypted || "AWAITING_DECRYPTION..."}
//             </h2>
//           </div>
//           <div className="proj-content text-[10px] text-[#475569] tracking-widest mt-2 sm:mt-0 uppercase">
//             ARCHIVE_SIZE: {projects.length} // SECURE_ACCESS
//           </div>
//         </div>

//         {/* ────────────────────────────────────────────────
//             CATEGORY FILTER BAR
//         ──────────────────────────────────────────────── */}
//         <div className="proj-panel border border-[#1E293B] bg-[#0B0E14] mb-6 flex overflow-x-auto hide-scrollbar">
//           {categories.map((category) => {
//             const isActive = activeCategory === category.id;
//             return (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`
//                   proj-content relative font-mono text-[10px] tracking-widest px-5 py-3 
//                   uppercase whitespace-nowrap border-r border-[#1E293B] transition-colors duration-200
//                   ${isActive ? 'text-[#F59E0B] bg-[#11151C]' : 'text-[#475569] hover:text-[#94A3B8] hover:bg-[#11151C]/50'}
//                 `}
//               >
//                 {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F59E0B]" />}
//                 {category.name} <span className="opacity-50 ml-1">[{category.count}]</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* ────────────────────────────────────────────────
//             PROJECT DATA GRID (Hairline Borders)
//         ──────────────────────────────────────────────── */}
//         <div className="proj-panel border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
//           {filteredProjects.map((project) => {
//             const status = statusStyles[project.status] ?? statusStyles.completed;

//             return (
//               <div
//                 key={`${project.id}-${activeCategory}`}
//                 className="proj-content group bg-[#0B0E14] p-6 flex flex-col hover:bg-[#11151C] transition-colors duration-300 relative overflow-hidden"
//               >
//                 {/* Status indicator line on top hover */}
//                 <div className={`absolute top-0 left-0 w-full h-[2px] ${status.dot} -translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />

//                 {/* Header: Title & Year */}
//                 <div className="flex items-start justify-between gap-2 mb-4">
//                   <h3 className="text-[14px] font-bold text-[#94A3B8] group-hover:text-[#F59E0B] uppercase tracking-wide transition-colors">
//                     {project.title}
//                   </h3>
//                   <span className="text-[10px] text-[#475569] shrink-0 mt-0.5">
//                     {project.year}
//                   </span>
//                 </div>

//                 {/* Status Dot */}
//                 <div className={`flex items-center gap-2 text-[9px] uppercase tracking-widest mb-4 ${status.text}`}>
//                   <span className={`w-1.5 h-1.5 ${status.dot} animate-pulse`} />
//                   [{status.label}]
//                 </div>

//                 {/* Description */}
//                 <p className="text-[12px] text-[#475569] leading-relaxed mb-6 flex-1 uppercase tracking-wide">
//                   {project.description}
//                 </p>

//                 {/* Tech Tags */}
//                 <div className="flex flex-wrap gap-1.5 mb-6">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 text-[9px] uppercase tracking-wider bg-[#05070A] border border-[#1E293B] text-[#94A3B8]"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Link */}
//                 {project.githubRepo ? (
//                   <a
//                     href={project.githubRepo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-auto text-[10px] text-[#5EEAD4] hover:text-[#F59E0B] uppercase tracking-widest flex items-center gap-2 transition-colors w-max"
//                   >
//                     <span>[ VIEW_SOURCE ]</span>
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </a>
//                 ) : (
//                   <span className="mt-auto text-[10px] text-[#475569] uppercase tracking-widest flex items-center gap-2 cursor-not-allowed w-max">
//                     [ SECURE_REPO_RESTRICTED ]
//                   </span>
//                 )}
//               </div>
//             );
//           })}

//           {/* Fill empty grid spots with dot pattern to maintain strict UI rectangle */}
//           {Array.from({ length: emptyCells }).map((_, i) => (
//             <div key={`empty-${i}`} className="bg-[#0B0E14] hidden lg:block pattern-dots" />
//           ))}
//         </div>

//         {/* ────────────────────────────────────────────────
//             BOTTOM ROW: SUMMARY & CTA
//         ──────────────────────────────────────────────── */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* Summary Counts (Col span 8) */}
//           <div className="proj-panel lg:col-span-8 border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-1 sm:grid-cols-3">
//             {summary.map((item) => (
//               <div key={item.label} className="proj-content bg-[#0B0E14] p-5 flex flex-col justify-between hover:bg-[#11151C] transition-colors">
//                 <div className="text-[10px] text-[#475569] uppercase tracking-widest mb-4">
//                   [ {item.label} ]
//                 </div>
//                 <div className="text-2xl text-[#94A3B8] font-light">
//                   {item.value}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Box (Col span 4) */}
//           <div className="proj-panel lg:col-span-4 border border-[#1E293B] bg-[#0B0E14] p-5 flex flex-col justify-between">
//             <div className="proj-content">
//               <h3 className="text-[12px] text-[#F59E0B] tracking-widest uppercase mb-3">
//                 {'>'} SYS_OPERATOR_REQUIRED
//               </h3>
//               <p className="text-[10px] text-[#475569] uppercase tracking-wide leading-relaxed mb-6">
//                 Open to challenging roles and collaborative automation builds. System ready for input.
//               </p>
//             </div>

//             <button
//               onClick={() => scrollToSection('contact')}
//               className="proj-content group border border-[#5EEAD4] bg-[#5EEAD4]/10 hover:bg-[#5EEAD4] transition-colors duration-200 px-4 py-2 w-full flex items-center justify-between"
//             >
//               <span className="text-[10px] text-[#5EEAD4] group-hover:text-[#0B0E14] font-bold tracking-widest uppercase">
//                 [ INIT_CONTACT ]
//               </span>
//               <span className="text-[10px] text-[#5EEAD4] group-hover:text-[#0B0E14]">
//                 {'>'}
//               </span>
//             </button>
//           </div>

//         </div>
//       </div>

//       <style>{`
//         /* Hide scrollbar for filter strip but keep functionality */
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

//         /* Subtle dot pattern for empty grid cells */
//         .pattern-dots {
//           background-image: radial-gradient(#1E293B 1px, transparent 1px);
//           background-size: 16px 16px;
//           opacity: 0.3;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProjectsSection;


import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

// Assuming this comes from your data file
import { projects } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────
   Types & Palette Mapping
   ────────────────────────────────────────────────────────────── */
const statusStyles: Record<string, { text: string; dot: string; label: string }> = {
  completed: { text: 'text-[#10B981]', dot: 'bg-[#10B981]', label: 'COMPLETED' },
  'in-progress': { text: 'text-[#F59E0B]', dot: 'bg-[#F59E0B]', label: 'IN_PROGRESS' },
  planned: { text: 'text-[#5EEAD4]', dot: 'bg-[#5EEAD4]', label: 'PLANNED' },
};

// Auto-generate counts based on actual data
const categories = [
  { id: 'all', name: 'ALL_REPOS', count: projects.length },
  { id: 'QA & Development', name: 'QA_AND_DEV', count: projects.filter((p) => p.category === 'QA & Development').length },
  { id: 'AI & Full Stack', name: 'AI_AND_ML', count: projects.filter((p) => p.category === 'AI & Full Stack').length },
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
const ProjectsSection: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  // Decryption effect triggers when section scrolls into view
  const headerDecrypted = useDecryptionEffect("REPOSITORY_INDEX_ACCESS", isVisible, 30);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ──────────────────────────────────────────────────────────
     GSAP Animations (Hardware Snap)
     ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hardware off state
      gsap.set('.proj-panel', { borderColor: '#000000', backgroundColor: '#000000' });
      gsap.set('.proj-content', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          onEnter: () => setIsVisible(true),
        },
      });

      tl.to('.proj-panel', { borderColor: '#1E293B', duration: 0.1, ease: 'none' })
        .to('.proj-panel', { backgroundColor: 'transparent', duration: 0.1, ease: 'none' })
        .to('.proj-fill', { backgroundColor: '#11151C', duration: 0.1, ease: 'none' }, '<')
        .to('.proj-content', { opacity: 1, duration: 0.1, stagger: 0.02, ease: 'none' });

    }, projectsRef);

    return () => ctx.revert();
  }, [activeCategory]); // Re-run slightly on filter

  /* ──────────────────────────────────────────────────────────
     Calculations
     ────────────────────────────────────────────────────────── */
  const summary = [
    { label: 'QA_AUTOMATION', value: projects.filter((p) => p.category === 'QA & Development').length },
    { label: 'AI_AND_FULLSTACK', value: projects.filter((p) => p.category === 'AI & Full Stack').length },
    { label: 'TOTAL_REPOS', value: projects.length },
  ];

  // Calculate empty grid cells to maintain perfect rectangle on desktop
  const emptyCells = filteredProjects.length % 3 !== 0 ? 3 - (filteredProjects.length % 3) : 0;

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="relative z-10 min-h-screen bg-[#05070A] py-24 px-4 sm:px-8 flex flex-col font-mono selection:bg-[#F59E0B] selection:text-[#0B0E14]"
      data-section="projects"
    >
      <div className="max-w-[1200px] w-full mx-auto relative flex flex-col">

        {/* ────────────────────────────────────────────────
            CATEGORY FILTER BAR
        ──────────────────────────────────────────────── */}
        <div className="proj-panel border border-[#1E293B] bg-[#0B0E14] mb-6 flex overflow-x-auto hide-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  proj-content relative font-mono text-[10px] tracking-widest px-5 py-3 
                  uppercase whitespace-nowrap border-r border-[#1E293B] transition-colors duration-200
                  ${isActive ? 'text-[#F59E0B] bg-[#11151C]' : 'text-[#475569] hover:text-[#94A3B8] hover:bg-[#11151C]/50'}
                `}
              >
                {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F59E0B]" />}
                {category.name} <span className="opacity-50 ml-1">[{category.count}]</span>
              </button>
            );
          })}
        </div>

        {/* ────────────────────────────────────────────────
            PROJECT DATA GRID (Hairline Borders)
        ──────────────────────────────────────────────── */}
        <div className="proj-panel border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {filteredProjects.map((project) => {
            const status = statusStyles[project.status] ?? statusStyles.completed;

            return (
              <div
                key={`${project.id}-${activeCategory}`}
                className="proj-content group bg-[#0B0E14] p-6 flex flex-col hover:bg-[#11151C] transition-colors duration-300 relative overflow-hidden"
              >
                {/* Status indicator line on top hover */}
                <div className={`absolute top-0 left-0 w-full h-[2px] ${status.dot} -translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />

                {/* Header: Title & Year */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="text-[14px] font-bold text-[#94A3B8] group-hover:text-[#F59E0B] uppercase tracking-wide transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-[#475569] shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>

                {/* Status Dot */}
                <div className={`flex items-center gap-2 text-[9px] uppercase tracking-widest mb-4 ${status.text}`}>
                  <span className={`w-1.5 h-1.5 ${status.dot} animate-pulse`} />
                  [{status.label}]
                </div>

                {/* Description */}
                <p className="text-[12px] text-[#475569] leading-relaxed mb-6 flex-1 uppercase tracking-wide">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[9px] uppercase tracking-wider bg-[#05070A] border border-[#1E293B] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {project.githubRepo ? (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-[10px] text-[#5EEAD4] hover:text-[#F59E0B] uppercase tracking-widest flex items-center gap-2 transition-colors w-max"
                  >
                    <span>[ VIEW_SOURCE ]</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <span className="mt-auto text-[10px] text-[#475569] uppercase tracking-widest flex items-center gap-2 cursor-not-allowed w-max">
                    [ SECURE_REPO_RESTRICTED ]
                  </span>
                )}
              </div>
            );
          })}

          {/* Fill empty grid spots with dot pattern to maintain strict UI rectangle */}
          {Array.from({ length: emptyCells }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-[#0B0E14] hidden lg:block pattern-dots" />
          ))}
        </div>

        {/* ────────────────────────────────────────────────
            BOTTOM ROW: SUMMARY & CTA
        ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Summary Counts (Col span 8) */}
          <div className="proj-panel lg:col-span-8 border border-[#1E293B] bg-[#1E293B] gap-[1px] grid grid-cols-1 sm:grid-cols-3">
            {summary.map((item) => (
              <div key={item.label} className="proj-content bg-[#0B0E14] p-5 flex flex-col justify-between hover:bg-[#11151C] transition-colors">
                <div className="text-[10px] text-[#475569] uppercase tracking-widest mb-4">
                  [ {item.label} ]
                </div>
                <div className="text-2xl text-[#94A3B8] font-light">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box (Col span 4) */}
          <div className="proj-panel lg:col-span-4 border border-[#1E293B] bg-[#0B0E14] p-5 flex flex-col justify-between">
            <div className="proj-content">
              <h3 className="text-[12px] text-[#F59E0B] tracking-widest uppercase mb-3">
                {'>'} SYS_OPERATOR_REQUIRED
              </h3>
              <p className="text-[10px] text-[#475569] uppercase tracking-wide leading-relaxed mb-6">
                Open to challenging roles and collaborative automation builds. System ready for input.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="proj-content group border border-[#5EEAD4] bg-[#5EEAD4]/10 hover:bg-[#5EEAD4] transition-colors duration-200 px-4 py-2 w-full flex items-center justify-between"
            >
              <span className="text-[10px] text-[#5EEAD4] group-hover:text-[#0B0E14] font-bold tracking-widest uppercase">
                [ INIT_CONTACT ]
              </span>
              <span className="text-[10px] text-[#5EEAD4] group-hover:text-[#0B0E14]">
                {'>'}
              </span>
            </button>
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

export default ProjectsSection;