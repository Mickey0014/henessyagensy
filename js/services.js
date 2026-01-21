document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  const sections = document.querySelectorAll(".service-details");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const targetId = card.dataset.target.replace("#", "");

      // remove active states
      sections.forEach(sec => sec.classList.remove("active"));
      cards.forEach(c => c.classList.remove("active"));

      // activate selected
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add("active");
      card.classList.add("active");

      // scroll to stack smoothly
      document
        .getElementById("service-details")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});
