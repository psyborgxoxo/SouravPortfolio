import { useEffect } from 'react';

// Google Analytics 4 (GA4) component
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 Measurement ID

interface AnalyticsProps {
  measurementId?: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const Analytics: React.FC<AnalyticsProps> = ({ 
  measurementId = GA_MEASUREMENT_ID 
}) => {
  useEffect(() => {
    // Skip if no measurement ID is provided
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.log('⚠️ Google Analytics not configured - using measurement ID placeholder');
      return;
    }

    // Create script tag for gtag
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Create inline script for gtag configuration
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'portfolio_section'
        }
      });
    `;
    document.head.appendChild(script2);

    // Track page views
    const trackPageView = (url: string, title: string) => {
      if (window.gtag) {
        window.gtag('config', measurementId, {
          page_title: title,
          page_location: url,
        });
      }
    };

    // Track section views based on scroll position
    const trackSectionView = (sectionName: string) => {
      if (window.gtag) {
        window.gtag('event', 'section_view', {
          section_name: sectionName,
          event_category: 'engagement',
          event_label: sectionName,
        });
      }
    };

    // Track user interactions
    const trackEvent = (action: string, category: string, label?: string) => {
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
        });
      }
    };

    // Set up intersection observer to track section views
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName) {
              trackSectionView(sectionName);
            }
          }
        });
      },
      {
        threshold: 0.5, // Track when 50% of section is visible
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [measurementId]);

  return null;
};

export default Analytics;

// Helper functions for manual tracking
export const trackContactFormSubmission = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'submit', {
      event_category: 'contact',
      event_label: 'contact_form',
    });
  }
};

export const trackProjectView = (projectTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'projects',
      event_label: projectTitle,
    });
  }
};

export const trackSkillFilter = (category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'filter', {
      event_category: 'skills',
      event_label: category,
    });
  }
};

export const trackProjectFilter = (category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'filter', {
      event_category: 'projects',
      event_label: category,
    });
  }
};

export const trackNavigationClick = (destination: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'navigation',
      event_label: destination,
    });
  }
};