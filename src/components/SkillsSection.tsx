import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skills);
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
          '.skills-header',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.skills-section',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          '.skill-card',
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.skills-grid',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, skillsRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All', icon: '⚡' },
    { id: 'Full Stack Development', name: 'Full Stack', icon: '🔧' },
    { id: 'Quality Assurance & Testing', name: 'QA', icon: '🔍' },
    { id: 'Programming Languages', name: 'Programming', icon: '💻' },
    { id: 'API & Testing Tools', name: 'API', icon: '🔗' },
    { id: 'Emerging Technologies', name: 'Tech', icon: '🚀' },
    { id: 'Security & Development', name: 'Security', icon: '🛡️' },
  ];

  const getSkillColor = (proficiency: number) => {
    if (proficiency >= 90) return 'from-jarvis-primary to-jarvis-secondary';
    if (proficiency >= 80) return 'from-jarvis-secondary to-jarvis-accent';
    if (proficiency >= 70) return 'from-jarvis-accent to-purple-500';
    return 'from-purple-500 to-yellow-400';
  };

  const getSkillLevel = (proficiency: number) => {
    if (proficiency >= 90) return 'EXPERT';
    if (proficiency >= 80) return 'ADVANCED';
    if (proficiency >= 70) return 'INTERMEDIATE';
    return 'LEARNING';
  };

  // Mobile Compact Card Component
  const MobileSkillCard = ({ skill }: { skill: any }) => (
    <div className="skill-card bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-lg p-3 hover:border-jarvis-primary/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white truncate flex-1 mr-2">{skill.name}</h3>
        <div className={`px-2 py-0.5 rounded text-xs font-bold bg-gradient-to-r ${getSkillColor(skill.proficiency)} text-black`}>
          {skill.proficiency}%
        </div>
      </div>

      <div className="w-full bg-gray-950 rounded-full h-1.5 mb-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getSkillColor(skill.proficiency)} rounded-full transition-all duration-500`}
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-jarvis-light/60 truncate">{skill.category.split(' ')[0]}</span>
        <div className="flex space-x-0.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full ${i < Math.floor(skill.proficiency / 20) ? 'bg-jarvis-primary' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Desktop Full Card Component
  const DesktopSkillCard = ({ skill }: { skill: any }) => (
    <div className="skill-card bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 hover:border-jarvis-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden hover:shadow-glow">
      <div className="absolute inset-0 bg-gradient-to-r from-jarvis-primary/5 via-jarvis-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <h3 className="text-lg font-semibold text-white group-hover:text-jarvis-primary transition-colors duration-300">
          {skill.name}
        </h3>
        <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getSkillColor(skill.proficiency)} text-black`}>
          {getSkillLevel(skill.proficiency)}
        </div>
      </div>

      <div className="mb-4 relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-jarvis-light/60">PROFICIENCY</span>
          <span className="text-sm font-bold text-jarvis-primary">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-950 rounded-full h-3 border border-white/10 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getSkillColor(skill.proficiency)} rounded-full relative overflow-hidden transition-all duration-500`}
            style={{ width: `${skill.proficiency}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between relative z-10">
        <span className="px-3 py-1 bg-jarvis-primary/10 text-jarvis-primary text-xs rounded-full border border-jarvis-primary/20">
          {skill.category}
        </span>

        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i < Math.floor(skill.proficiency / 20)
                ? 'bg-jarvis-primary shadow-lg shadow-jarvis-primary/50'
                : 'bg-gray-600'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="skills-section section-padding relative z-10 overflow-hidden"
      data-section="skills"
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] 
        h-[300px] sm:h-[400px] lg:h-[500px] bg-jarvis-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] lg:w-[400px] 
        h-[250px] sm:h-[350px] lg:h-[400px] bg-jarvis-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Header */}
        <div className="about-header text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-jarvis-primary text-xs sm:text-sm font-mono tracking-widest mb-2 sm:mb-3">// WHAT I DO</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-white mb-3 sm:mb-4 px-4">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary">Database</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto rounded-full" />
           <p className="text-jarvis-light/60 text-sm md:text-lg max-w-2xl mx-auto mt-4 md:mt-6 px-4">
            Advanced skill matrix with proficiency levels and real-world application expertise
          </p>
        </div>

        {/* Category Filter - Horizontal Scroll on Mobile */}
        <div className="mb-8 md:mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm whitespace-nowrap flex-shrink-0 ${activeCategory === category.id
                  ? 'bg-jarvis-primary text-jarvis-black shadow-glow'
                  : 'holographic-panel text-jarvis-light hover:text-jarvis-primary hover:shadow-glow-sm'
                  }`}
              >
                <span className="mr-1 md:mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Responsive Layout */}
        <div className={`skills-grid grid gap-3 md:gap-6 ${isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {filteredSkills.map((skill) => (
            isMobile ? (
              <MobileSkillCard key={`${skill.name}-${activeCategory}`} skill={skill} />
            ) : (
              <DesktopSkillCard key={`${skill.name}-${activeCategory}`} skill={skill} />
            )
          ))}
        </div>

        {/* Skills Summary - Compact on Mobile */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            {
              label: 'QA & Testing',
              count: skills.filter(s => s.category === 'Quality Assurance & Testing').length,
              icon: '🔍',
              color: 'text-jarvis-secondary',
            },
            {
              label: 'Programming',
              count: skills.filter(s => s.category === 'Programming Languages').length,
              icon: '💻',
              color: 'text-jarvis-accent',
            },
              {
              label: 'CI/CD & Version Control',
              count: skills.filter(s => s.category === 'CI/CD & Version Control').length,
              icon: '⚡',
              color: 'text-jarvis-primary',
            },
            {
              label: 'Artificial Intelligence',
              count: skills.filter(s => s.category === 'AI').length,
              icon: '🛡️',
              color: 'text-green-400',
            },
          ].map((category, index) => (
            <div
              key={index}
              className="holographic-panel p-4 md:p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300"
            >
              <div className={`text-2xl md:text-3xl mb-2 md:mb-3 ${category.color}`}>
                {category.icon}
              </div>
              <div className={`text-xl md:text-2xl font-bold mb-1 ${category.color}`}>
                {category.count}
              </div>
              <div className="text-xs md:text-sm text-jarvis-light/60">{category.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="mt-12 md:mt-16">
          <div className="holographic-panel p-6 md:p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary">CORE</span>
              <span className="ml-2 text-jarvis-primary">TECHNOLOGIES</span>
            </h3>
            <p className="text-jarvis-light/60 text-sm md:text-base mb-4 md:mb-6 px-2">
              Primary technology stack and specialized tools for modern full-stack development
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {['Automation', 'Development','QA Testing', 'Cybersecurity', 'AI'].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-jarvis-primary/10 text-jarvis-primary text-xs md:text-sm rounded-full border border-jarvis-primary/20 hover:bg-jarvis-primary/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;