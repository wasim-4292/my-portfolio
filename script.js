// Simple fade-in animation on load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, header, footer");

  sections.forEach((sec, index) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(10px)";
    sec.style.transition = "all 0.5s ease";

    setTimeout(() => {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }, 200 * index);
  });
});