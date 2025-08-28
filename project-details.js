class Gallery {
    constructor() {
        this.currentIndex = 0;
        this.media = [];
        this.autoAdvanceTimer = null;
        this.indicators = [];
        this.mediaContainer = null;
        this.preloadedMedia = new Map();
        this.isPreloading = false;
        this.isTransitioning = false; // Prevents button spam during transitions
    }

    initialize(media) {
        if (!media || media.length === 0) return;

        this.media = media;
        this.currentIndex = 0;
        this.mediaContainer = document.getElementById('galleryMediaContainer');
        this.isTransitioning = false;

        // Show gallery container and preloader
        document.getElementById('galleryContainer').style.display = 'block';
        this.showPreloader();

        this.createIndicators();
        
        // Preload all media first, then show the gallery
        this.preloadAllMedia().then(() => {
            this.hidePreloader();
            this.showCurrentMedia();
            this.startAutoAdvance();
        }).catch((error) => {
            console.error('Error preloading media:', error);
            this.hidePreloader();
            this.showCurrentMedia(); // Show anyway, individual items will handle their own loading
            this.startAutoAdvance();
        });
    }

    showPreloader() {
        document.getElementById('galleryPreloader').style.display = 'block';
    }

    hidePreloader() {
        document.getElementById('galleryPreloader').style.display = 'none';
    }

    // Preload all media items
    async preloadAllMedia() {
        this.isPreloading = true;
        const preloadPromises = this.media.map((mediaItem, index) => {
            return this.preloadMediaItem(mediaItem, index);
        });

        try {
            await Promise.allSettled(preloadPromises);
        } finally {
            this.isPreloading = false;
        }
    }

    // Preload individual media item
    preloadMediaItem(mediaItem, index) {
        return new Promise((resolve, reject) => {
            if (mediaItem.type === 'video') {
                if (this.isYouTubeUrl(mediaItem.src)) {
                    // YouTube videos don't need preloading
                    this.preloadedMedia.set(index, { type: 'youtube', src: mediaItem.src });
                    resolve();
                } else {
                    // Preload regular video
                    const video = document.createElement('video');
                    video.preload = 'metadata';
                    video.muted = true;
                    
                    const handleLoad = () => {
                        this.preloadedMedia.set(index, { type: 'video', element: video });
                        resolve();
                    };
                    
                    const handleError = (e) => {
                        console.warn(`Failed to preload video ${index}:`, mediaItem.src, e);
                        reject(new Error(`Failed to preload video ${index}`));
                    };
                    
                    video.addEventListener('loadedmetadata', handleLoad, { once: true });
                    video.addEventListener('error', handleError, { once: true });
                    
                    // Set src after event listeners to avoid race conditions
                    video.src = mediaItem.src;
                }
            } else {
                // Preload image
                const img = new Image();
                
                const handleLoad = () => {
                    // Verify image actually loaded with valid dimensions
                    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                        this.preloadedMedia.set(index, { type: 'image', element: img });
                        resolve();
                    } else {
                        console.warn(`Image loaded but has invalid dimensions ${index}:`, mediaItem.src);
                        reject(new Error(`Invalid image dimensions ${index}`));
                    }
                };
                
                const handleError = (e) => {
                    console.warn(`Failed to preload image ${index}:`, mediaItem.src, e);
                    reject(new Error(`Failed to preload image ${index}`));
                };
                
                img.addEventListener('load', handleLoad, { once: true });
                img.addEventListener('error', handleError, { once: true });
                
                // Set src after event listeners to avoid race conditions
                img.src = mediaItem.src;
            }
        });
    }

    // Extract YouTube video ID from various YouTube URL formats
    extractYouTubeId(url) {
        const regexPatterns = [
            // Standard watch URL
            /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
            // Short URL
            /(?:youtu\.be\/)([^&\n?#]+)/,
            // Embed URL
            /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
            // YouTube Shorts
            /(?:youtube\.com\/shorts\/)([^&\n?#]+)/,
            // Mobile URL
            /(?:m\.youtube\.com\/watch\?v=)([^&\n?#]+)/,
            // Watch URL with additional parameters
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/
        ];
        
        for (const pattern of regexPatterns) {
            const match = url.match(pattern);
            if (match) return match[1];
        }
        return null;
    }

    // Check if a URL is a YouTube URL
    isYouTubeUrl(url) {
        return /(?:youtube\.com|youtu\.be|m\.youtube\.com)/.test(url);
    }

    createIndicators() {
        const container = document.getElementById('galleryIndicators');
        container.innerHTML = '';
        this.indicators = [];

        this.media.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.className = 'indicator';
            indicator.addEventListener('click', () => this.goTo(index));
            container.appendChild(indicator);
            this.indicators.push(indicator);
        });
    }

    showCurrentMedia() {
        // Prevent transitions if already transitioning
        if (this.isTransitioning) {
            return;
        }

        this.isTransitioning = true;
        
        // Update indicators immediately
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });

        const currentMedia = this.media[this.currentIndex];
        const preloadedData = this.preloadedMedia.get(this.currentIndex);
        let newElement;

        if (currentMedia.type === 'video') {
            // For videos, do instant transition (no cross-fade)
            this.clearContainer();

            if (this.isYouTubeUrl(currentMedia.src)) {
                newElement = this.createYouTubeEmbed(currentMedia.src);
            } else {
                // Use preloaded video if available, otherwise create new one
                if (preloadedData && preloadedData.type === 'video') {
                    newElement = preloadedData.element.cloneNode(true);
                    newElement.className = 'gallery-media is-video loaded';
                    newElement.controls = true;
                    newElement.currentTime = 0; // Reset to beginning
                } else {
                    newElement = document.createElement('video');
                    newElement.className = 'gallery-media is-video loaded';
                    newElement.src = currentMedia.src;
                    newElement.controls = true;
                    newElement.preload = 'metadata';
                    newElement.muted = true;
                }

                // Video event listeners
                newElement.addEventListener('play', () => {
                    this.stopAutoAdvance();
                });

                newElement.addEventListener('pause', () => {
                    this.startAutoAdvance();
                });

                newElement.addEventListener('loadeddata', () => {
                    newElement.play().catch(error => {
                        console.log('Autoplay prevented:', error);
                    });
                });
            }

            this.mediaContainer.appendChild(newElement);
            // Video transitions are immediate
            this.endTransition();
        } else {
            // For images, create smooth cross-fade effect
            this.crossFadeToImage(currentMedia, preloadedData);
        }
    }

    crossFadeToImage(mediaItem, preloadedData) {
        let newElement;
        
        // Use preloaded image if available, otherwise create new one
        if (preloadedData && preloadedData.type === 'image') {
            newElement = preloadedData.element.cloneNode(true);
            newElement.className = 'gallery-media is-image';
            newElement.alt = `Project media ${this.currentIndex + 1}`;
        } else {
            newElement = document.createElement('img');
            newElement.className = 'gallery-media is-image';
            newElement.src = mediaItem.src;
            newElement.alt = `Project media ${this.currentIndex + 1}`;
        }

        // Position the new image behind existing content (opacity 0)
        newElement.style.opacity = '0';
        this.mediaContainer.appendChild(newElement);

        const performCrossFade = () => {
            // Get all existing media elements (to fade out)
            const existingElements = Array.from(this.mediaContainer.querySelectorAll('.gallery-media'))
                .filter(el => el !== newElement);

            // Fade in new image
            newElement.style.transition = 'opacity 0.5s ease-in-out';
            newElement.style.opacity = '1';

            // Fade out existing elements
            existingElements.forEach(el => {
                el.style.transition = 'opacity 0.5s ease-in-out';
                el.style.opacity = '0';
            });

            // Clean up after transition completes
            setTimeout(() => {
                existingElements.forEach(el => {
                    if (el.parentNode) {
                        el.remove();
                    }
                });
                this.endTransition();
            }, 500); // Match the transition duration
        };

        // Start cross-fade once image is ready
        if (newElement.complete && newElement.naturalWidth > 0) {
            // Image already loaded
            setTimeout(performCrossFade, 10);
        } else {
            // Wait for image to load
            newElement.addEventListener('load', performCrossFade, { once: true });
            
            // Fallback in case image doesn't load
            newElement.addEventListener('error', () => {
                console.warn('Failed to load image:', mediaItem.src);
                this.endTransition();
            }, { once: true });

            // Timeout fallback
            setTimeout(() => {
                if (this.isTransitioning) {
                    performCrossFade();
                }
            }, 2000);
        }
    }

    clearContainer() {
        this.mediaContainer.innerHTML = '';
    }

    endTransition() {
        this.isTransitioning = false;
    }

    createYouTubeEmbed(url) {
        const videoId = this.extractYouTubeId(url);
        if (!videoId) {
            console.error('Could not extract YouTube video ID from:', url);
            return this.createErrorElement('Invalid YouTube URL');
        }

        const iframe = document.createElement('iframe');
        iframe.className = 'gallery-media is-youtube loaded';
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=1`;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.title = 'YouTube Video';

        // Stop auto-advance when YouTube video loads
        iframe.addEventListener('load', () => {
            this.stopAutoAdvance();
        });

        return iframe;
    }

    createErrorElement(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'gallery-media is-error loaded';
        errorDiv.textContent = message;
        return errorDiv;
    }

    next() {
        if (this.isTransitioning) return; // Prevent spam clicking
        
        this.currentIndex = (this.currentIndex + 1) % this.media.length;
        this.showCurrentMedia();
        this.resetAutoAdvance();
    }

    previous() {
        if (this.isTransitioning) return; // Prevent spam clicking
        
        this.currentIndex = (this.currentIndex - 1 + this.media.length) % this.media.length;
        this.showCurrentMedia();
        this.resetAutoAdvance();
    }

    goTo(index) {
        if (this.isTransitioning) return; // Prevent spam clicking
        if (index < 0 || index >= this.media.length) return; // Bounds check
        
        this.currentIndex = index;
        this.showCurrentMedia();
        this.resetAutoAdvance();
    }

    startAutoAdvance() {
        if (this.media.length <= 1) return;

        this.stopAutoAdvance();
        this.autoAdvanceTimer = setInterval(() => {
            const currentElement = this.mediaContainer.querySelector('.gallery-media');
            
            // Only advance for images (no auto-advance for videos)
            if (currentElement && currentElement.classList.contains('is-image') && !this.isTransitioning) {
                this.next();
            }
        }, 5000); // 5 seconds for images
    }

    stopAutoAdvance() {
        if (this.autoAdvanceTimer) {
            clearInterval(this.autoAdvanceTimer);
            this.autoAdvanceTimer = null;
        }
    }

    resetAutoAdvance() {
        this.stopAutoAdvance();
        setTimeout(() => {
            // Only restart auto-advance for images
            const currentElement = this.mediaContainer.querySelector('.gallery-media');
            if (currentElement && currentElement.classList.contains('is-image')) {
                this.startAutoAdvance();
            }
        }, 1000); // 1 second delay before restarting
    }

    destroy() {
        this.stopAutoAdvance();
        this.isTransitioning = false;
        if (this.mediaContainer) {
            this.mediaContainer.innerHTML = '';
        }
        this.preloadedMedia.clear();
    }
}

const gallery = new Gallery();

let currentProject = null;

// Find project by ID
function findProjectById(id) {
    return projectsData.find(project => project.id == id);
}

// Render project details
function renderProjectDetails(project) {
    currentProject = project;

    // Update page title and main title
    document.title = `${project.title} - Gabe Kurfman`;
    document.getElementById('projectTitleMain').textContent = project.title;

    // Update breadcrumb with category link and project name
    document.getElementById('categoryLink').textContent = project.category;
    document.getElementById('categoryLink').href = `projects.html?filter=${encodeURIComponent(project.category)}`;
    document.getElementById('currentProject').textContent = " " + project.title;

    // Handle description
    const descriptionContainer = document.getElementById('projectDescription');
    if (Array.isArray(project.fullDescription)) {
        descriptionContainer.innerHTML = project.fullDescription.map(p => `<p>${p}</p>`).join('');
    } else {
        descriptionContainer.innerHTML = `<p>${project.fullDescription || project.description}</p>`;
    }

    // Handle project dates
    if (project.startDate || project.endDate) {
        const dateBox = document.getElementById('projectDateBox');
        const dateElement = document.getElementById('projectDate');
        const dateRange = DateUtils.formatDateRange(project.startDate, project.endDate);

        if (dateRange) {
            dateElement.textContent = dateRange;
            dateBox.style.display = 'block';
        }
    }

    // Initialize gallery
    const projectContentWrapper = document.getElementById('projectContentWrapper');
    if (project.media && project.media.length > 0) {
        gallery.initialize(project.media);
        projectContentWrapper.classList.remove('no-gallery');
    } else {
        projectContentWrapper.classList.add('no-gallery');
    }

    // Handle downloads
    if (project.downloads && project.downloads.length > 0) {
        const downloadsSection = document.getElementById('downloadsSection');
        const downloadsGrid = document.getElementById('downloadsGrid');

        const downloadsHTML = project.downloads.map(download => `
            <a href="${download.url}" class="download-item" target="_blank">
                <div class="download-link">${download.name}</div>
                <div class="download-description">${download.description}</div>
            </a>
        `).join('');

        downloadsGrid.innerHTML = downloadsHTML;
        downloadsSection.style.display = 'block';
    }
}

// Initialize page
async function initializePage() {
    try {
        const projectId = URLUtils.getParam('id');

        if (!projectId) {
            throw new Error('No project ID provided');
        }

        const project = findProjectById(projectId);

        if (!project) {
            throw new Error(`Project with ID ${projectId} not found`);
        }

        // Hide loading and show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('projectContent').style.display = 'block';

        renderProjectDetails(project);

    } catch (error) {
        console.error('Error loading project:', error);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'block';
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (gallery.media.length > 0) {
        if (e.key === 'ArrowLeft') {
            gallery.previous();
        } else if (e.key === 'ArrowRight') {
            gallery.next();
        }
    }
});

// Clean up when page unloads
window.addEventListener('beforeunload', () => {
    gallery.destroy();
});

// Initialize the page
initializePage();