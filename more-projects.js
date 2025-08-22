let allProjects = [];

        async function fetchMoreProjects() {
            return moreProjectsData;
        }

        function renderMoreProjects(projects) {
            const projectsList = document.getElementById('moreProjectsList');

            if (projects.length === 0) {
                projectsList.innerHTML = '<div style="text-align: center; color: #666666; margin: 40px 0;">No projects found.</div>';
                return;
            }

            const projectsHTML = projects.map((project, index) => {
                const hasImage = project.image && project.image !== '';
                const isEven = index % 2 === 0;
                const alignmentClass = hasImage ? (isEven ? 'left-aligned' : 'right-aligned') : 'no-image';
                
                return `
                    <div class="more-project-item ${alignmentClass}">
                        ${hasImage ? `
                            <div class="more-project-image">
                                <img src="${project.image}" alt="${project.title}" loading="lazy" />
                            </div>
                        ` : ''}
                        <div class="more-project-content">
                            <h3 class="more-project-title">${project.title}</h3>
                            <div class="more-project-meta">
                                ${alignmentClass === 'right-aligned' ? 
                                    (project.tag ? `<span class="more-project-tag">${project.tag}</span>` : '') + 
                                    (project.date ? `<span class="more-project-date">${DateUtils.formatDate(project.date)}</span>` : '') :
                                    (project.date ? `<span class="more-project-date">${DateUtils.formatDate(project.date)}</span>` : '') + 
                                    (project.tag ? `<span class="more-project-tag">${project.tag}</span>` : '')
                                }
                            </div>
                            ${project.link ? `<a href="${project.link}" class="more-project-link" ${project.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>Link →</a>` : ''}
                        </div>
                    </div>
                `;
            }).join('');

            projectsList.innerHTML = projectsHTML;
        }

        async function initializePage() {
            try {
                const projects = await fetchMoreProjects();
                allProjects = projects;
                
                allProjects.sort((a, b) => (b.id || 0) - (a.id || 0));

                document.getElementById('loading').style.display = 'none';
                renderMoreProjects(allProjects);
            } catch (error) {
                console.error('Error loading more projects:', error);
                document.getElementById('loading').textContent = `Error: ${error.message}`;
            }
        }

        initializePage();