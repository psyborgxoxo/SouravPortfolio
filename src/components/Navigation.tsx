// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { navigationItems } from '../data/portfolioData';

// gsap.registerPlugin(ScrollTrigger);

// const Navigation: React.FC = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     // Hardware boot snap animation for nav
//     gsap.fromTo('.nav-container',
//       { y: -20, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.1, ease: 'none', delay: 0.1 }
//     );

//     // Scroll detection
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // Calculate pure hardware progress bar
//       const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       setScrollProgress((winScroll / height) * 100);

//       // Update active section based on scroll position
//       const sections = navigationItems.map(item => item.href.substring(1));
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);

//     // Snappy hardware dropdown animation
//     if (!isMobileMenuOpen) {
//       gsap.fromTo('.mobile-menu',
//         { opacity: 0 },
//         { opacity: 1, duration: 0.1, ease: 'none' }
//       );
//     }
//   };

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 font-mono ${
//         isScrolled ? 'bg-[#0B0E14] border-b border-[#1E293B]' : 'bg-[#05070A] border-b border-transparent'
//       }`}>
        
//         {/* Top Hairline Progress Bar */}
//         <div className="absolute top-0 left-0 h-[1px] bg-[#1E293B] w-full z-50">
//           <div 
//             className="h-full bg-[#5EEAD4] transition-all duration-75 ease-linear"
//             style={{ width: `${scrollProgress}%` }}
//           />
//         </div>

//         <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16">
            
//             {/* ── LOGO / SYSTEM ROOT ── */}
//             <div className="nav-container flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
//               <div className="flex items-center justify-center w-6 h-6 bg-[#05070A] border border-[#1E293B]">
//                 <span className="w-1.5 h-1.5 bg-[#F59E0B] animate-pulse" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[12px] text-[#94A3B8] font-bold tracking-widest uppercase leading-none">
//                   ST3GN0
//                 </span>
//                 <span className="text-[9px] text-[#475569] tracking-widest uppercase mt-0.5 leading-none">
//                   // SYS_ROOT
//                 </span>
//               </div>
//             </div>

//             {/* ── DESKTOP NAVIGATION ── */}
//             <div className="hidden lg:flex items-center h-full">
//               {navigationItems.map((item, index) => {
//                 const isActive = activeSection === item.href.substring(1);
//                 return (
//                   <button
//                     key={item.name}
//                     onClick={() => scrollToSection(item.href)}
//                     className={`relative h-full flex items-center px-6 text-[10px] uppercase tracking-widest border-l border-[#1E293B] transition-colors duration-200 ${
//                       isActive 
//                         ? 'bg-[#11151C] text-[#5EEAD4] font-bold' 
//                         : 'bg-transparent text-[#475569] hover:bg-[#11151C]/50 hover:text-[#94A3B8]'
//                     } ${index === navigationItems.length - 1 ? 'border-r' : ''}`}
//                   >
//                     {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5EEAD4]" />}
//                     {isActive && <span className="text-[#5EEAD4] mr-2">{'>'}</span>}
//                     {item.name}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* ── MOBILE MENU BUTTON ── */}
//             <button
//               onClick={toggleMobileMenu}
//               className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center border border-[#1E293B] bg-[#0B0E14] text-[#475569] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors"
//             >
//               <div className={`w-4 h-[1px] bg-current transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : 'mb-1'}`} />
//               <div className={`w-4 h-[1px] bg-current transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`} />
//               <div className={`w-4 h-[1px] bg-current transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
//             </button>
//           </div>
//         </div>

//         {/* ── MOBILE DROPDOWN MENU ── */}
//         <div className={`lg:hidden overflow-hidden transition-all duration-200 ease-none bg-[#0B0E14] border-t border-[#1E293B] ${
//           isMobileMenuOpen ? 'max-h-[500px] border-b' : 'max-h-0 border-transparent border-b-0'
//         }`}>
//           <div className="mobile-menu flex flex-col p-4 space-y-2">
//             <div className="text-[10px] text-[#475569] tracking-widest uppercase mb-2">
//               [ NAV_PROTOCOLS ]
//             </div>
//             {navigationItems.map((item) => {
//               const isActive = activeSection === item.href.substring(1);
//               return (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className={`flex items-center text-left w-full px-4 py-3 text-[11px] uppercase tracking-widest border border-[#1E293B] transition-colors duration-200 ${
//                     isActive 
//                       ? 'bg-[#11151C] text-[#5EEAD4] border-l-2 border-l-[#5EEAD4] font-bold' 
//                       : 'bg-[#05070A] text-[#475569] hover:border-[#5EEAD4] hover:text-[#94A3B8]'
//                   }`}
//                 >
//                   {isActive && <span className="mr-3">{'>'}</span>}
//                   {item.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navigation;


import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigationItems } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /*
   * ─────────────────────────────────────────────
   * ROUTE / SECTION DETECTION
   * ─────────────────────────────────────────────
   *
   * Current routing:
   *
   * /
   * /projects
   *
   * The remaining sections still exist on the
   * homepage as anchors.
   */
  useEffect(() => {
    if (location.pathname === '/projects') {
      setActiveSection('projects');
    } else if (location.pathname === '/') {
      // Determine active homepage section from scroll position.
      const updateActiveSection = () => {
        const sections = navigationItems.map((item) =>
          item.href.replace('#', '')
        );

        const scrollPosition = window.scrollY + 100;

        let currentSection = 'home';

        for (const section of sections) {
          const element = document.getElementById(section);

          if (element) {
            const { offsetTop, offsetHeight } = element;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              currentSection = section;
              break;
            }
          }
        }

        setActiveSection(currentSection);
      };

      updateActiveSection();
    }
  }, [location.pathname]);

  /*
   * ─────────────────────────────────────────────
   * NAVIGATION BOOT ANIMATION
   * ─────────────────────────────────────────────
   */
  useEffect(() => {
    gsap.fromTo(
      '.nav-container',
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
        ease: 'none',
        delay: 0.1,
      }
    );
  }, []);

  /*
   * ─────────────────────────────────────────────
   * SCROLL HANDLER
   * ─────────────────────────────────────────────
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(progress);

      /*
       * Active section detection only applies
       * to the homepage.
       */
      if (location.pathname !== '/') {
        return;
      }

      const sections = navigationItems.map((item) =>
        item.href.replace('#', '')
      );

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run once immediately.
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  /*
   * ─────────────────────────────────────────────
   * NAVIGATION HANDLER
   * ─────────────────────────────────────────────
   */
  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    /*
     * PROJECTS is now a real page.
     */
    if (href === '#projects') {
      navigate('/projects');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    /*
     * HOME is now the root route.
     */
    if (href === '#home') {
      if (location.pathname !== '/') {
        navigate('/');
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    /*
     * Existing homepage sections continue
     * to work as anchors.
     */
    if (location.pathname !== '/') {
      navigate('/');

      /*
       * Wait for the homepage to render before
       * attempting to scroll to the section.
       */
      setTimeout(() => {
        const element = document.querySelector(href);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);

      return;
    }

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  /*
   * ─────────────────────────────────────────────
   * MOBILE MENU
   * ─────────────────────────────────────────────
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);

    if (!isMobileMenuOpen) {
      gsap.fromTo(
        '.mobile-menu',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
          ease: 'none',
        }
      );
    }
  };

  /*
   * ─────────────────────────────────────────────
   * ACTIVE STATE
   * ─────────────────────────────────────────────
   */
  const isItemActive = (href: string) => {
    if (href === '#projects') {
      return location.pathname === '/projects';
    }

    if (href === '#home') {
      return location.pathname === '/' && activeSection === 'home';
    }

    return location.pathname === '/' && activeSection === href.substring(1);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 font-mono ${
          isScrolled
            ? 'bg-[#0B0E14] border-b border-[#1E293B]'
            : 'bg-[#05070A] border-b border-transparent'
        }`}
      >
        {/* ─────────────────────────────────────────
            TOP HAIRLINE PROGRESS BAR
        ───────────────────────────────────────── */}
        <div className="absolute top-0 left-0 h-[1px] bg-[#1E293B] w-full z-50">
          <div
            className="h-full bg-[#5EEAD4] transition-all duration-75 ease-linear"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* ─────────────────────────────────────
                LOGO / SYSTEM ROOT
            ───────────────────────────────────── */}
            <div
              className="nav-container flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigation('#home')}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-[#05070A] border border-[#1E293B]">
                <span className="w-1.5 h-1.5 bg-[#F59E0B] animate-pulse" />
              </div>

              <div className="flex flex-col">
                <span className="text-[12px] text-[#94A3B8] font-bold tracking-widest uppercase leading-none">
                  ST3GN0
                </span>

                <span className="text-[9px] text-[#475569] tracking-widest uppercase mt-0.5 leading-none">
                  // SYS_ROOT
                </span>
              </div>
            </div>

            {/* ─────────────────────────────────────
                DESKTOP NAVIGATION
            ───────────────────────────────────── */}
            <div className="hidden lg:flex items-center h-full">
              {navigationItems.map((item, index) => {
                const isActive = isItemActive(item.href);

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`relative h-full flex items-center px-6 text-[10px] uppercase tracking-widest border-l border-[#1E293B] transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#11151C] text-[#5EEAD4] font-bold'
                        : 'bg-transparent text-[#475569] hover:bg-[#11151C]/50 hover:text-[#94A3B8]'
                    } ${
                      index === navigationItems.length - 1
                        ? 'border-r'
                        : ''
                    }`}
                  >
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5EEAD4]" />
                    )}

                    {isActive && (
                      <span className="text-[#5EEAD4] mr-2">
                        {'>'}
                      </span>
                    )}

                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* ─────────────────────────────────────
                MOBILE MENU BUTTON
            ───────────────────────────────────── */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center border border-[#1E293B] bg-[#0B0E14] text-[#475569] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors"
            >
              <div
                className={`w-4 h-[1px] bg-current transition-all duration-200 ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-[3px]'
                    : 'mb-1'
                }`}
              />

              <div
                className={`w-4 h-[1px] bg-current transition-all duration-200 ${
                  isMobileMenuOpen
                    ? 'opacity-0'
                    : 'mb-1'
                }`}
              />

              <div
                className={`w-4 h-[1px] bg-current transition-all duration-200 ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-[3px]'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            MOBILE DROPDOWN MENU
        ───────────────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ease-none bg-[#0B0E14] border-t border-[#1E293B] ${
            isMobileMenuOpen
              ? 'max-h-[500px] border-b'
              : 'max-h-0 border-transparent border-b-0'
          }`}
        >
          <div className="mobile-menu flex flex-col p-4 space-y-2">
            <div className="text-[10px] text-[#475569] tracking-widest uppercase mb-2">
              [ NAV_PROTOCOLS ]
            </div>

            {navigationItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center text-left w-full px-4 py-3 text-[11px] uppercase tracking-widest border border-[#1E293B] transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#11151C] text-[#5EEAD4] border-l-2 border-l-[#5EEAD4] font-bold'
                      : 'bg-[#05070A] text-[#475569] hover:border-[#5EEAD4] hover:text-[#94A3B8]'
                  }`}
                >
                  {isActive && (
                    <span className="mr-3">
                      {'>'}
                    </span>
                  )}

                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;