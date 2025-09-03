// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Newsletter form submission
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (email) {
    formMessage.textContent = `🎉 Thanks for subscribing, ${email}!`;
    formMessage.classList.remove("hidden");
    formMessage.style.color = "#bbf7d0";
    emailInput.value = "";
  }
});
