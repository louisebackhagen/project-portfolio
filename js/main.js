const THEME_KEY = "portfolio-theme";
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("theme-dark", isDark);
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
  }
}

const savedTheme = localStorage.getItem(THEME_KEY);
setTheme(savedTheme || (systemPrefersDark.matches ? "dark" : "light"));

systemPrefersDark.addEventListener("change", (event) => {
  const hasUserPreference = localStorage.getItem(THEME_KEY);
  if (!hasUserPreference) {
    setTheme(event.matches ? "dark" : "light");
  }
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}
