import { useEffect } from 'react';

export const useScrollOptimization = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const images = document.querySelectorAll('img');
    const motionDivs = document.querySelectorAll('.motion-div');

    const optimizeOnScroll = () => {
      // Add a low-quality class during scroll
      document.body.classList.add('is-scrolling');
      
      // Remove animations during scroll
      motionDivs.forEach(div => {
        div.classList.add('pause-animations');
      });

      // Reduce image quality during scroll
      images.forEach(img => {
        img.style.imageRendering = 'pixelated';
      });

      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Reset optimizations after scrolling stops
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
        motionDivs.forEach(div => {
          div.classList.remove('pause-animations');
        });
        images.forEach(img => {
          img.style.imageRendering = 'auto';
        });
      }, 150);
    };

    window.addEventListener('scroll', optimizeOnScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizeOnScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
};