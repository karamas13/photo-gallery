import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((el) => {
        el.style.backgroundPositionY = `${scrolled * 0.5}px`; // Adjust value to control speed
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useParallax;
