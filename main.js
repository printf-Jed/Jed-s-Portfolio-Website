// Entry point for Vite
import './style.css';

console.log('Portfolio successfully loaded.');

// 3D Parallax effect for project cards
const initParallax = () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    });
  });
};

// Initialize after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initParallax();

  // Scroll Parallax for Spline Background
  const splineContainer = document.querySelector('.spline-container');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (splineContainer) {
      splineContainer.style.transform = `translateX(-10%) translateY(${scrolled * 0.4}px)`;
    }
  });
});
