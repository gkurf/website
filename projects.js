let currentFilter = 'all';

async function fetchProjects() {
    // await new Promise(resolve => setTimeout(resolve, 500));
    return projectsData; // Loaded from external file
}

// Function to validate project categories
function validateProjectCategories(projects) {
    const projectCategories = [...new Set(projects.map(project => project.category))];
    const invalidCategories = projectCategories.filter(category =>
        !CATEGORY_ORDER.includes(category)
    );

    if (invalidCategories.length > 0) {
        throw new Error(`Invalid project categories found: ${invalidCategories.join(', ')}. Please add these categories to CATEGORY_ORDER or update the project categories.`);
    }
}

// Function to generate filter buttons dynamically based on category order
function generateFilterButtons() {
    const filterButtonsContainer = document.getElementById('filterButtons');

    // Create filter buttons HTML
    let buttonsHTML = '<button class="filter-btn" data-filter="all">All Projects</button>';

    CATEGORY_ORDER.forEach(category => {
        buttonsHTML += `<button class="filter-btn" data-filter="${category}">${category}</button>`;
    });

    filterButtonsContainer.innerHTML = buttonsHTML;
}

// Function to show/hide the "Show More Projects" button based on filter
function toggleShowMoreButton(filter) {
    const showMoreButton = document.querySelector('.show-more-button');
    if (showMoreButton) {
        if (filter === 'all') {
            showMoreButton.style.display = 'block';
        } else {
            showMoreButton.style.display = 'none';
        }
    }
}

// Function to render projects
function renderProjects(projects, filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');

    // Filter projects
    let filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    // Sort by reverse ID order
    filteredProjects.sort((a, b) => (b.id || 0) - (a.id || 0));

    // Generate HTML using unified card system - now linking to project details
    const projectsHTML = filteredProjects.map(project => {
        return `
                    <div class="card" data-category="${project.category}">
                        <a href="project-details.html?id=${project.id}" class="card-link">
                            <img class="card-image" src='${project.image}' alt="${project.title} thumbnail">
                            <div class="card-title">
                                ${project.title}
                                <div class="card-category">${project.category}</div>
                                <div class="card-long-description">${project.description}</div>
                            </div>
                        </a>
                    </div>
                `;
    }).join('');

    projectsGrid.innerHTML = projectsHTML;
    
    // Toggle "Show More Projects" button visibility
    toggleShowMoreButton(filter);
}

// Set active filter button
function setActiveFilter(filter) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get filter value and render
            const filter = button.dataset.filter;
            currentFilter = filter;
            renderProjects(projectsData, filter);

            URLUtils.setParam('filter', filter);
        });
    });
}

// Initialize page
async function initializePage() {
    try {
        const projects = await fetchProjects();
        document.getElementById('loading').style.display = 'none';

        // VALIDATE PROJECT CATEGORIES FIRST
        validateProjectCategories(projects);

        // Generate filter buttons based on project categories
        generateFilterButtons(projects);

        // Get initial filter from URL
        const initialFilter = URLUtils.getParam('filter', 'all');
        currentFilter = initialFilter;

        // Set active filter button
        setActiveFilter(currentFilter);

        // Render projects and initialize filters
        renderProjects(projects, currentFilter);
        initializeFilters();
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('loading').textContent = `Error: ${error.message}`;
    }
}

// Start the app
initializePage();