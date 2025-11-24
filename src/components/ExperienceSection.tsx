import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experiences = [

    {
      id: 1,
      period: "January 2024 – Present",
      title: "CTO",
      company: "Design Hut Interior Studio",
      location: "Karnataka, India",
      type: "Remote",
      url: "https://design-hut.vercel.app/",
      description: "Led the technology vision and architecture for the product and ensured alignment with business goals.",
      achievements: [
        "Led the technology vision and architecture for the product and ensured alignment with business goals",
        "Evaluated and adopted modern tools, frameworks, and AI-driven technologies to improve development efficiency",
        "Guided engineering teams through technical decisions, scalability planning, and best coding practices",
        "Oversaw end-to-end system design, deployment pipelines, and production stability",
        "Collaborated with cross-functional leaders to plan product milestones, technical roadmaps, and long-term strategy"
      ],
      skills: ['CTO', 'Architecture', 'AI/ML', 'Engineering Leadership', 'System Design']
    },

    {
      id: 2,
      period: 'April 2024 — Present',
      title: 'Crio Fellowship in QA Automation (SDET) - Advanced',
      company: 'CRIO',
      location: 'Remote',
      type: 'Current Learning',
      description: 'Advanced QA Automation fellowship program focusing on test automation, CI/CD pipelines, and DevOps practices.',
      achievements: [
        'Automated 50+ test cases using Selenium and TestNG, reducing manual testing time by 40%',
        'Designed and implemented robust CI/CD pipeline using Jenkins',
        'Built proficiency in API testing, performance testing, and end-to-end automation',
        'Applying AI/ML techniques to enhance test efficiency',
        'Hands-on with Selenium, TestNG, Jenkins, Python'
      ],
      skills: ['Test Automation', 'CI/CD', 'Selenium', 'TestNG', 'Python', 'API Testing']
    },
    {
      id: 3,
      period: 'Sep 2022 – Apr 2024',
      title: 'SDET — Fynd (Jio Commerce Platform)',
      company: 'FYND',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Built and maintained UI and API automation using Selenium, TestNG, and Python to improve release reliability.',
      achievements: [
        'Built and maintained UI and API automation using Selenium, TestNG, and Python',
        'Integrated automated suites into CI/CD with Jenkins',
        'Partnered with developers and product to define test strategies',
        'Drove API and performance testing to catch regressions early',
        'Improved release reliability through robust test automation'
      ],
      skills: ['SDET', 'Selenium', 'TestNG', 'Python', 'CI/CD', 'Jenkins']
    },
    {
      id: 4,
      period: 'Nov 2021 – Jun 2022',
      title: 'Software Engineer — RCS Pvt. Ltd.',
      company: 'RCS Pvt. Ltd.',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Developed functional and regression suites for web applications, improving coverage and stability.',
      achievements: [
        'Developed functional and regression suites for web applications',
        'Implemented API validation workflows',
        'Collaborated with cross-functional teams to triage defects',
        'Built expertise in web application testing'
      ],
      skills: ['QA Automation', 'Functional Testing', 'Regression Testing', 'API Validation']
    },
    {
      id: 5,
      period: 'Jul 2021 – Sep 2021',
      title: 'Cyber Security Summer Intern',
      company: 'Gurugram Police CSSI 2021',
      location: 'Gurugram, India',
      type: 'Internship',
      description: '60-day cyber security summer internship specialized in email hacking prevention and web security.',
      achievements: [
        'Specialized in email hacking prevention and web security analysis',
        'Developed proficiency in OSINT tools and techniques',
        'Gained expertise in malware analysis and incident response',
        'Built comprehensive cybersecurity toolkit'
      ],
      skills: ['Cybersecurity', 'OSINT', 'Ethical Hacking', 'Malware Analysis']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const timelineLine = document.querySelector('.timeline-line');

      gsap.fromTo(timelineLine,
        { height: 0 },
        {
          height: '100%',
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 80%',
          }
        }
      );

      timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'top 80%',
            }
          }
        );
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  const getTypeBadgeClasses = (type: string) => {
    switch (type) {
      case 'Current Learning':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Internship':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  return (
    <section ref={experienceRef} id="experience" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="about-header text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-jarvis-primary text-xs sm:text-sm font-mono tracking-widest mb-2 sm:mb-3">// WROKING DIRECTORY</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-white mb-3 sm:mb-4 px-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary">Experience</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Left on mobile, center on desktop */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 w-0.5 bg-gradient-to-b from-electric-blue via-neon-cyan to-electric-blue timeline-line h-full"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-electric-blue rounded-full border-2 md:border-4 border-deep-black z-10 animate-pulse"></div>

                  {/* Content Card */}
                  <div className={`
                    w-full pl-10 md:pl-0
                    md:w-5/12 
                    ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}
                  `}>
                    <div className="holographic-panel p-4 sm:p-5 md:p-6 rounded-lg bg-gray-900/50 border border-electric-blue/20 backdrop-blur-sm hover:border-electric-blue/40 transition-all duration-300">
                      {/* Period & Type Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <span className="text-electric-blue text-xs sm:text-sm font-medium order-2 sm:order-1">
                          {exp.period}
                        </span>
                        <span className={`
                          px-2 py-1 rounded text-xs font-medium border self-start sm:self-auto order-1 sm:order-2
                          ${getTypeBadgeClasses(exp.type)}
                        `}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 text-left md:text-inherit">
                        {exp.title}
                      </h3>
                      <p className="text-electric-blue font-medium text-sm sm:text-base mb-1 text-left md:text-inherit">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-4 text-left md:text-inherit">
                        {exp.location}
                      </p>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-3 md:mb-4 leading-relaxed text-left md:text-inherit">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-3 md:mb-4">
                        <h4 className="text-electric-blue font-medium text-sm mb-2 text-left md:text-inherit">
                          Key Achievements:
                        </h4>
                        <ul className="text-xs sm:text-sm text-gray-400 space-y-1.5">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-left">
                              <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start md:justify-start">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-0.5 sm:py-1 bg-electric-blue/20 text-electric-blue rounded text-xs border border-electric-blue/30 whitespace-nowrap"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;