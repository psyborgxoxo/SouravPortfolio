import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }

    // Refresh ScrollTrigger after filtering
    ScrollTrigger.refresh();
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // Animate project cards with stagger
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length, icon: '🚀' },
    { id: 'Full Stack Development', name: 'Full Stack', count: projects.filter(p => p.category === 'Full Stack Development').length, icon: '🔧' },
    { id: 'QA & Development', name: 'QA & Dev', count: projects.filter(p => p.category === 'QA & Development').length, icon: '🔍' },
    { id: 'Mobile Development', name: 'Mobile', count: projects.filter(p => p.category === 'Mobile Development').length, icon: '📱' },
    { id: 'AI & Full Stack', name: 'AI & ML', count: projects.filter(p => p.category === 'AI & Full Stack').length, icon: '🤖' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'planned': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📋';
      default: return '❓';
    }
  };

  return (
    <section id="projects" ref={projectsRef} className="projects-section section-padding relative overflow-hidden" data-section="projects">
      {/* Background effects */}
      <div className="absolute inset-0 scan-line opacity-5" />

      <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="about-header text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-jarvis-primary text-xs sm:text-sm font-mono tracking-widest mb-2 sm:mb-3">// PROJECT COMPLETED</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-white mb-3 sm:mb-4 px-4">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary">Archives</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto rounded-full" />
          <p className="text-jarvis-light text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 font-exo2">
            Complete portfolio of Full-stack applications, Automation solutions, and AI-powered systems
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                ? 'bg-jarvis-primary text-jarvis-black shadow-glow'
                : 'holographic-panel text-jarvis-light hover:text-jarvis-primary hover:shadow-glow-sm'
                }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-jarvis-black/30 rounded-full text-xs sm:text-sm">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.id}-${activeCategory}`}
              className="project-card holographic-card hover:shadow-glow-lg transition-all duration-500 group relative overflow-hidden"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-jarvis-primary/5 via-jarvis-secondary/5 to-jarvis-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project Header */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="text-jarvis-primary group-hover:text-jarvis-secondary transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium border ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)} {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-xs sm:text-sm text-jarvis-light font-mono">{project.year}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-jarvis-white mb-2 sm:mb-3 group-hover:text-jarvis-primary transition-colors duration-300 font-orbitron">
                  {project.title}
                </h3>

                <p className="text-jarvis-light leading-relaxed mb-3 sm:mb-4 font-exo2 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-jarvis-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-jarvis-light font-mono">STATUS: {project.status.toUpperCase()}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="relative z-10">
                <h4 className="text-xs sm:text-sm font-semibold text-jarvis-primary mb-2 sm:mb-3 font-mono">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-jarvis-primary/10 text-jarvis-primary text-xs sm:text-sm rounded-full border border-jarvis-primary/20 hover:bg-jarvis-primary/20 transition-colors duration-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Repository Link */}
              {project.githubRepo && (
                <div className="relative z-10 mt-4 flex items-center space-x-2">
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-jarvis-primary hover:text-jarvis-secondary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-xs sm:text-sm font-mono">View on GitHub</span>
                  </a>
                </div>
              )}

              {/* Hover Expansion Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Automation Testing',
              value: projects.filter(p => p.category === 'QA & Development').length,
              icon: '📱',
              description: 'React Native Apps',
            },
            {
              title: 'Full Stack Apps',
              value: projects.filter(p => p.category === 'Full Stack Development').length,
              icon: '⚡',
              description: 'MERN Stack Projects',
            },
            {
              title: 'AI Integration',
              value: projects.filter(p => p.category === 'AI & Full Stack').length,
              icon: '🤖',
              description: 'AI-Powered Applications',
            },
          ].map((category, index) => (
            <div
              key={index}
              className="holographic-panel p-4 sm:p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <div className="text-lg sm:text-xl font-bold text-jarvis-primary mb-1 font-orbitron">{category.value}</div>
              <div className="text-base sm:text-lg font-semibold text-jarvis-white mb-1">{category.title}</div>
              <div className="text-xs sm:text-sm text-jarvis-light">{category.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="holographic-panel p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-orbitron">
              <span className="neon-text">NEXT</span>
              <span className="text-jarvis-primary ml-2">PROJECT</span>
            </h3>
            <p className="text-jarvis-light mb-4 sm:mb-6 font-exo2 text-sm sm:text-base">
              Currently developing advanced AI-powered testing frameworks and exploring cutting-edge full-stack technologies.
              Always open to challenging opportunities and innovative collaborations.
            </p>

            {/* Updated Button to Navigate to Contact Section */}
            <button
              onClick={() => scrollToSection('contact')}
              className="neon-button-primary group"
            >
              <span className="group-hover:shadow-glow">Let's Build Something Amazing</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;