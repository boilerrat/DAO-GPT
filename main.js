const darkModeToggle = document.getElementById("darkModeToggle");
const root = document.documentElement;

darkModeToggle.addEventListener("click", () => {
    root.classList.toggle("dark-mode");
});
