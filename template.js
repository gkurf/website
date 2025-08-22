// Template definitions
const templates = {
    footer: `
        <footer class="site-footer">
            <p>&copy; 2025 Gabriel Kurfman</p>
        </footer>

        <div class="bottom-buttons">
            <a href="mailto:contact@gabekurfman.com" class="bottom-button">Contact Me</a>
            <!-- <button class="bottom-button" onclick="toggleJellyfishMode()">Jellyfish Mode</button> -->
        </div>
    `
};

// Function to insert template into element
function insertTemplate(templateName, elementId) {
    const element = document.getElementById(elementId);
    if (element && templates[templateName]) {
        element.innerHTML = templates[templateName];
    } else {
        console.error(`Template "${templateName}" or element "${elementId}" not found`);
    }
}

// Auto-load common components
document.addEventListener('DOMContentLoaded', function() {
    // Load footer on all pages
    insertTemplate('footer', 'footer-container');
});

// Placeholder for jellyfish mode function
function toggleJellyfishMode() {
    // Add your jellyfish mode logic here
    console.log('Jellyfish mode toggled!');
    // Example: document.body.classList.toggle('jellyfish-mode');
}