
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.6s ease";
      }
    });
  });

  cards.forEach(card => observer.observe(card));
});
