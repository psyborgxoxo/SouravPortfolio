import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo('.contact-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate contact info cards
      gsap.fromTo('.contact-card',
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
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate contact form
      gsap.fromTo('.contact-form',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate social links
      gsap.fromTo('.social-link',
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
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Animate shake effect for form
      gsap.to('.contact-form', {
        x: -10,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        ease: 'power2.inOut'
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      onComplete: () => {
        gsap.to('.submit-btn', {
          scale: 1,
          duration: 0.3,
          onComplete: () => {
            // Open mailto link
            window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
            setIsSubmitting(false);

            // Reset form
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          }
        });
      }
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
      action: `mailto:${personalInfo.email}`,
      description: 'Primary communication channel'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'PHONE',
      value: personalInfo.phone,
      action: `tel:${personalInfo.phone}`,
      description: 'Direct voice communication'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'LOCATION',
      value: personalInfo.location,
      action: '#',
      description: 'Based in Bangalore, India'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.social.github,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="contact-section section-padding relative overflow-hidden" data-section="contact">
      {/* Background effects */}
      <div className="absolute inset-0 scan-line opacity-5" />

      <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="about-header text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-jarvis-primary text-xs sm:text-sm font-mono tracking-widest mb-2 sm:mb-3">// LET'S CONNECT</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-white mb-3 sm:mb-4 px-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-jarvis-primary to-jarvis-secondary">Me</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-jarvis-primary to-jarvis-secondary mx-auto rounded-full" />
                    <p className="text-jarvis-light text-sm sm:text-base max-w-2xl mx-auto mt-4 sm:mt-6 font-exo2">
            Ready to collaborate on innovative projects? Let's build the future together.
          </p>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Contact Info */}
          <div className="contact-info space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-orbitron">
                <span className="neon-text">COMMUNICATION</span>
                <span className="text-jarvis-primary ml-2">CHANNELS</span>
              </h3>
              <p className="text-jarvis-light mb-6 sm:mb-8 font-exo2 text-sm sm:text-base">
                Multiple ways to connect and discuss opportunities. Always open to challenging projects and meaningful collaborations.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="contact-card block holographic-card hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="text-jarvis-primary group-hover:text-jarvis-secondary transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-jarvis-white mb-1">{method.title}</h4>
                      <p className="text-jarvis-primary font-mono font-semibold text-sm sm:text-base">{method.value}</p>
                      <p className="text-xs sm:text-sm text-jarvis-light">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links pt-6 sm:pt-8">
              <h4 className="text-lg sm:text-xl font-semibold text-jarvis-white mb-4 sm:mb-6 font-orbitron">NETWORK</h4>
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
                Available for new projects and exciting opportunities in full-stack development,
                quality assurance, and AI integration.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form holographic-card p-6 sm:p-8 space-y-4 sm:space-y-6 relative overflow-hidden">
              {/* Holographic background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-jarvis-primary/5 via-jarvis-secondary/5 to-jarvis-accent/5" />

              <h3 className="text-xl sm:text-2xl font-semibold text-jarvis-white mb-4 sm:mb-6 font-orbitron relative z-10">
                <span className="neon-text">SEND</span>
                <span className="text-jarvis-primary ml-2">MESSAGE</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-jarvis-light mb-2 font-mono">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-jarvis-gray-800 border rounded-lg text-jarvis-white placeholder-jarvis-light focus:border-jarvis-primary focus:outline-none focus:ring-2 focus:ring-jarvis-primary/20 transition-all duration-300 ${validationErrors.name ? 'border-red-400' : 'border-jarvis-primary/20'
                      }`}
                    placeholder="Enter your name"
                  />
                  {validationErrors.name && (
                    <p className="text-red-400 text-xs sm:text-sm mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-jarvis-light mb-2 font-mono">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-jarvis-gray-800 border rounded-lg text-jarvis-white placeholder-jarvis-light focus:border-jarvis-primary focus:outline-none focus:ring-2 focus:ring-jarvis-primary/20 transition-all duration-300 ${validationErrors.email ? 'border-red-400' : 'border-jarvis-primary/20'
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {validationErrors.email && (
                    <p className="text-red-400 text-xs sm:text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="relative z-10">
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-jarvis-light mb-2 font-mono">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-jarvis-gray-800 border border-jarvis-primary/20 rounded-lg text-jarvis-white placeholder-jarvis-light focus:border-jarvis-primary focus:outline-none focus:ring-2 focus:ring-jarvis-primary/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="relative z-10">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-jarvis-light mb-2 font-mono">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-jarvis-gray-800 border rounded-lg text-jarvis-white placeholder-jarvis-light focus:border-jarvis-primary focus:outline-none focus:ring-2 focus:ring-jarvis-primary/20 transition-all duration-300 resize-none ${validationErrors.message ? 'border-red-400' : 'border-jarvis-primary/20'
                    }`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {validationErrors.message && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{validationErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn w-full px-6 sm:px-8 py-3 sm:py-4 neon-button-primary relative z-10 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-jarvis-black border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm sm:text-base">TRANSMITTING...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="text-sm sm:text-base">SEND MESSAGE</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-jarvis-primary/20 text-center">
          <p className="text-jarvis-light font-mono text-xs sm:text-sm">
            © 2024 {personalInfo.name}. Built with React, TypeScript, Tailwind CSS, and GSAP.
            <span className="text-jarvis-primary ml-2">JARVIS-INSPIRED DESIGN</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;