const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // remove if you only want animation once
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));