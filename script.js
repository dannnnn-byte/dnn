// Menu Responsive
function openMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
}

// Animation simple saat scroll (fade-in)
const elements = document.querySelectorAll(".item, .edu-item, .about, .skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "1s ease";
  observer.observe(el);
});
