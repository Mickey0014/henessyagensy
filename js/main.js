document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.querySelector(".menu-overlay");
  const navLinks = document.querySelectorAll(".nav a");

  if (!hamburger || !navMenu || !overlay) return;

  // OPEN / CLOSE MENU
  const toggleMenu = () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  };

  // Hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close on overlay click
  overlay.addEventListener("click", () => {
    closeMenu();
  });

  // Close menu helper
  const closeMenu = () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  };

  // Nav link click (supports one-page sections)
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // If it's a section link like #services
      if (href.startsWith("#")) {
        e.preventDefault();

        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }

      closeMenu();
    });
  });
});
