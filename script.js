const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });
    // Кнопка "Наверх" (Scroll to top)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = "↑ Наверх";
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

    // Анимация при наведении на ссылки
    document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('hover-animate');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover-animate');
  });
}); 
    // Анимация при скролле
    document.addEventListener('DOMContentLoaded', () => {
      const animateElements = document.querySelectorAll('.animate');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      animateElements.forEach(el => observer.observe(el));
      
      // Эффект курсора
      const cursor = document.querySelector('.cursor-effect');
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
      
      document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
      });
      
      document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
      });
      
      // Плавные ссылки
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    });