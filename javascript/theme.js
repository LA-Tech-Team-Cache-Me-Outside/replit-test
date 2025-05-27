// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();

        const openBtn = document.getElementById("createProjectsBtn");
        const closeBtn = document.getElementById("closeProjectEditorBtn");
        const createProjOverlay = document.getElementById("createProjectOverlay");

        if (openBtn && closeBtn && createProjOverlay) {
            openBtn.addEventListener("click", () => {
                createProjOverlay.style.display = "flex";
                console.log("Create Projects button clicked");

            });

            closeBtn.addEventListener("click", () => {
                createProjOverlay.style.display = "none";
            });

            window.addEventListener("click", (e) => {
                if (e.target === createProjOverlay) {
                    createProjOverlay.style.display = "none";
                }
            });
        }
    });

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update button text
    const button = document.querySelector('.theme-toggle');
    button.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Function to load saved theme preference
function loadThemePreference() {
    const darkModePreference = localStorage.getItem('darkMode');
    const button = document.querySelector('.theme-toggle');
    
    if (darkModePreference === 'true') {
        document.body.classList.add('dark-mode');
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', loadThemePreference); 