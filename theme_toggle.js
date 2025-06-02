// Theme toggle between dark/light mode
function initializeThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return; // Ensure button exists before adding event listener

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Light Mode";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}

initializeThemeToggle();