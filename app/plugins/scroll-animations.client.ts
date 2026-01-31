import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger);

  const setupScrollAnimations = () => {
    // Only animate sections that are below the fold
    // Use a simple approach: animate the section as a whole
    const sections = document.querySelectorAll('section, #mission');
    const viewportHeight = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Skip if section is in initial viewport (above the fold)
      if (rect.top < viewportHeight) return;

      // Simple fade-up animation for the whole section
      gsap.set(section, { opacity: 0, y: 30 });

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    // Footer animation
    const footer = document.querySelector('footer');
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      if (footerRect.top >= viewportHeight) {
        gsap.set(footer, { opacity: 0, y: 20 });
        gsap.to(footer, {
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    }

    ScrollTrigger.refresh();
  };

  // Run immediately when page finishes loading
  nuxtApp.hook('page:finish', () => {
    // Use requestAnimationFrame for smoother initialization
    requestAnimationFrame(setupScrollAnimations);
  });

  // Handle route changes
  nuxtApp.hook('page:transition:finish', () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
    requestAnimationFrame(setupScrollAnimations);
  });
});
