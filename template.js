// Template definitions
const templates = {
    head: {
        base: `
            <meta charset="UTF-8">
            <meta name="author" content="Gabriel Kurfman">
            <meta name="version" content="1.0.1">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/x-icon" href="media/favicon.ico">

        `,
        dynamic: {
            title: (value) => `<title>${value}</title>`,
            description: (value) => `<meta name="description" content="${value}">`,
            additionalCSS: (cssFiles) => {
                if (Array.isArray(cssFiles)) {
                    return cssFiles.map(file => `<link rel="stylesheet" href="${file}">`).join('\n            ');
                } else if (typeof cssFiles === 'string') {
                    return `<link rel="stylesheet" href="${cssFiles}">`;
                }
                return '';
            }
        }
    },
    footer: {
        base: `
            <footer class="site-footer">
                <p>&copy; 2025 Gabriel Kurfman. Hosted by GitHub Pages.</p>
            </footer>
            <div class="bottom-buttons">
                <a href="mailto:contact@gabekurfman.com" class="bottom-button">Contact Me</a>
                <!-- <button class="bottom-button" onclick="toggleJellyfishMode()">Jellyfish Mode</button> -->
            </div>
        `
    }
};

// Page-specific configurations
const pageConfigs = {
    'index.html': {
        title: 'Gabe Kurfman',
        description: "Gabe Kurfman's engineering portfolio",
        // additionalCSS: none - uses only global styles
    },
    'projects.html': {
        title: 'Projects - Gabe Kurfman',
        description: 'Gallery of completed engineering projects and work',
        additionalCSS: 'projects.css'
    },
    'project-details.html': {
        title: 'Project Details - Gabe Kurfman',
        description: 'Project photos, description, and helpful links about a project',
        additionalCSS: 'project-details.css'
    },
    'more-projects.html': {
        title: 'More Projects - Gabe Kurfman',
        description: 'Additional project gallery for miscellaneous work',
        additionalCSS: 'more-projects.css'
    },
    'about.html': {
        title: 'About - Gabe Kurfman',
        description: 'Gabe\'s resume and personal information',
        additionalCSS: 'about.css'
    }
};

// Function to get current page configuration
function getCurrentPageConfig() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    return pageConfigs[currentPage] || pageConfigs['index.html'];
}

// Generalized function to insert template into any element
function insertTemplate(templateName, elementId, config = null) {
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error(`Element "${elementId}" not found`);
        return;
    }

    const template = templates[templateName];
    if (!template) {
        console.error(`Template "${templateName}" not found`);
        return;
    }

    // Start with base template content
    let templateContent = template.base || '';
    
    // Add dynamic content if template has dynamic parts and config is provided
    if (template.dynamic && config) {
        for (const [key, generator] of Object.entries(template.dynamic)) {
            if (config[key] && typeof generator === 'function') {
                templateContent += generator(config[key]);
            }
        }
    }

    element.innerHTML = templateContent;
}

// Special function for head since it can't use a container
function populateHead(config = null) {
    const pageConfig = config || getCurrentPageConfig();
    const template = templates.head;
    
    if (!template) {
        console.error('Head template not found');
        return;
    }

    // Start with base template content
    let templateContent = template.base || '';
    
    // Add dynamic content
    if (template.dynamic && pageConfig) {
        for (const [key, generator] of Object.entries(template.dynamic)) {
            if (pageConfig[key] && typeof generator === 'function') {
                templateContent += generator(pageConfig[key]);
            }
        }
    }

    document.head.innerHTML += templateContent;
}

// Auto-load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Populate head directly (no container needed)
    populateHead();
    
    // Insert footer template with page config for dynamic content
    insertTemplate('footer', 'footer-container', getCurrentPageConfig());
});