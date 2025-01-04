document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Verifică dacă linkul este intern
      if (link.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        alert(`Navigating to ${link.textContent}`);
      }
    });
  });
});
