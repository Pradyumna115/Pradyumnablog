// Simple load-in animation script
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".load-in");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 150); // staggered effect (150ms apart)
  });
});
