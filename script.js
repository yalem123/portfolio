document.addEventListener("DOMContentLoaded", function () {
  // Fade in welcome message
  var welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.style.opacity = "1";

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Filter projects
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.dataset.filter;

      projectCards.forEach((card) => {
        if (filterValue === "all" || card.dataset.category === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
