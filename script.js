const sections = document.querySelectorAll('.fade-section');
const backgroundLayer = document.querySelector('.background-layer');
const backgroundDeco = document.querySelector('.background-deco');
const heroVisual = document.querySelector('.hero-visual');
const floatingItems = document.querySelectorAll('.hero-card, .visual-card, .media-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const move = scrollTop * 0.03;

  if (backgroundLayer) {
    backgroundLayer.style.transform = `translate3d(${move}px, ${-move / 1.8}px, 0)`;
  }
  if (backgroundDeco) {
    backgroundDeco.style.transform = `translate3d(${-move / 2.2}px, ${move / 1.9}px, 0)`;
  }
  if (heroVisual) {
    heroVisual.style.transform = `translate3d(0, ${move * 0.6}px, 0)`;
  }

  floatingItems.forEach((item, index) => {
    const depth = index % 2 === 0 ? move * 0.5 : move * -0.5;
    item.style.transform = `translate3d(0, ${depth}px, 0)`;
  });
});
