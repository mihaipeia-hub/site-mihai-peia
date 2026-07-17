// ÎNLOCUIEȘTE valoarea de mai jos cu linkul tău real (Calendly, Google Calendar etc.)
const CALENDAR_URL = "https://calendly.com/ceomihaipeia/30min";

const calendarLinks = document.querySelectorAll("[data-calendar-link]");
const isCalendarConfigured = !CALENDAR_URL.includes("NUMELE-TAU");

calendarLinks.forEach((link) => {
  if (isCalendarConfigured) {
    link.href = CALENDAR_URL;
    link.target = "_blank";
    link.rel = "noopener";
  }
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const form = document.querySelector("#lead-form");
const toast = document.querySelector("#toast");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (isCalendarConfigured) {
    toast.classList.add("show");
    setTimeout(() => window.open(CALENDAR_URL, "_blank", "noopener"), 450);
    setTimeout(() => toast.classList.remove("show"), 2500);
  } else {
    toast.textContent = "Formular completat. Configurează linkul de calendar în script.js.";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3500);
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
