// Scroll animation for sections
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.filter = "blur(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.filter = "blur(5px)";
  section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  observer.observe(section);
});

// Tool cards hover effect
const toolCards = document.querySelectorAll('.tool-card, .card');
toolCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Social icons animation
const socialIcons = document.querySelectorAll('.company-social a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
  });
  
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'translateY(0) scale(1) rotate(0)';
  });
});

// Dynamic tech pills animation
const techPills = document.querySelectorAll('.tech-pill');
techPills.forEach((pill, index) => {
  pill.style.animationDelay = `${index * 0.1}s`;
  pill.style.animation = 'fadeInUp 0.5s ease forwards';
});

// Add floating particles background
function createParticles() {
  const hero = document.querySelector('.hero');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(122, 124, 255, ${Math.random() * 0.5 + 0.2})`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    hero.appendChild(particle);
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  
  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
  `;
  document.head.appendChild(style);
});