// ===== JELLYFISH ANIMATION CONFIGURATION =====
const JELLYFISH_CONFIG = {
    // Animation settings
    keyframeCount: 15,
    animationFPS: 6,
    
    // Spawn settings
    spawnIntervalSeconds: 9,
    maxJellyfish: 5,
    spawnMargin: 150,
    
    // Size settings
    minSize: 100,
    maxSize: 150,
    
    // Movement settings
    initialAngleRange: 10,
    maxAngleFromVertical: 15,
    driftAngleRange: 5,
    burstSpeed: 65,
    driftSpeed: 25,
    
    // Phase durations (in frames)
    accelerationFrames: 3,
    burstFrames: 2,
    decelerationFrames: 5,
    driftFrames: 5,
    
    // Other settings
    fadeOutDurationSeconds: 1,
    driftChangeIntervalSeconds: 0.5,
    despawnMargin: 300,
    maxTransitionTime: 3000,
    
    // Sprites
    spriteSheets: {
        peach_mirrored: '/media/0-jellyfish/sprite-peach-mirrored.png',
        purple_normal: '/media/0-jellyfish/sprite-purple-normal.png'
    },
    frameWidth: 1080,
    frameHeight: 1920,
    spriteVariants: ['peach_mirrored', 'purple_normal']
};

// ===== UTILITY FUNCTIONS =====
function clampAngle(angle) {
    return Math.max(-JELLYFISH_CONFIG.maxAngleFromVertical, 
                   Math.min(JELLYFISH_CONFIG.maxAngleFromVertical, angle));
}

function validateJellyfishState(jelly) {
    // Ensure angle is within valid range
    jelly.angle = clampAngle(jelly.angle);
    
    // Ensure position values are reasonable
    if (typeof jelly.x !== 'number' || !isFinite(jelly.x)) jelly.x = window.innerWidth / 2;
    if (typeof jelly.y !== 'number' || !isFinite(jelly.y)) jelly.y = window.innerHeight + jelly.height;
    
    // Ensure size values are reasonable
    if (typeof jelly.size !== 'number' || jelly.size < JELLYFISH_CONFIG.minSize || jelly.size > JELLYFISH_CONFIG.maxSize) {
        jelly.size = JELLYFISH_CONFIG.minSize + Math.random() * (JELLYFISH_CONFIG.maxSize - JELLYFISH_CONFIG.minSize);
    }
    
    return jelly;
}

// ===== SIMPLIFIED PERSISTENCE MANAGER =====
class JellyfishPersistenceManager {
    constructor() {
        this.storageKey = 'jellyfishState';
        this.transitionKey = 'jellyfishTransition';
    }
    
    saveState(jellyfish, managerState) {
        const state = {
            timestamp: Date.now(),
            performanceTime: performance.now(),
            managerState,
            jellyfish: jellyfish.map(jelly => ({
                x: jelly.x,
                y: jelly.y,
                angle: clampAngle(jelly.angle), // Ensure angle is clamped when saving
                size: jelly.size,
                height: jelly.height,
                spriteVariant: jelly.spriteVariant,
                currentAnimationFrame: jelly.currentAnimationFrame,
                ageAtSave: (performance.now() - jelly.animationStartTime) / 1000,
                lastDriftAge: (jelly.lastDriftChangeTime - jelly.animationStartTime) / 1000
            }))
        };
        
        try {
            sessionStorage.setItem(this.storageKey, JSON.stringify(state));
            sessionStorage.setItem(this.transitionKey, 'true');
        } catch (error) {
            console.warn('Failed to save jellyfish state:', error);
        }
    }
    
    loadState() {
        try {
            if (sessionStorage.getItem(this.transitionKey) !== 'true') return null;
            
            const stateData = sessionStorage.getItem(this.storageKey);
            if (!stateData) return null;
            
            const state = JSON.parse(stateData);
            const timeDiff = Date.now() - state.timestamp;
            
            return timeDiff <= JELLYFISH_CONFIG.maxTransitionTime ? state : null;
        } catch (error) {
            console.warn('Failed to load jellyfish state:', error);
            this.clearState();
            return null;
        }
    }
    
    clearState() {
        sessionStorage.removeItem(this.storageKey);
        sessionStorage.removeItem(this.transitionKey);
    }
    
    markTransitionComplete() {
        sessionStorage.removeItem(this.transitionKey);
    }
}

// ===== SIMPLIFIED SPRITESHEET PRELOADER =====
class SpriteSheetPreloader {
    constructor() {
        this.loadedSprites = {};
        this.isPreloading = false;
    }
    
    async preloadAllSprites() {
        if (this.isPreloading) return;
        this.isPreloading = true;
        
        const loadPromises = Object.entries(JELLYFISH_CONFIG.spriteSheets).map(([variant, path]) => {
            if (this.loadedSprites[variant]) return Promise.resolve();
            
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    this.loadedSprites[variant] = img;
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to preload spritesheet: ${path}`);
                    resolve(); // Don't reject, just continue
                };
                img.src = path;
            });
        });
        
        await Promise.allSettled(loadPromises);
    }
}

// Global instances
const spritePreloader = new SpriteSheetPreloader();
const persistenceManager = new JellyfishPersistenceManager();

// ===== MAIN JELLYFISH MANAGER =====
class JellyfishManager {
    constructor() {
        this.jellyfish = [];
        this.animationFrame = null;
        this.isActive = false;
        this.isPaused = false;
        this.lastSpawnTime = 0;
        this.startTime = 0;
        this.pausedTime = 0;
        this.pauseStartTime = 0;
        
        this.setupEventHandlers();
    }
    
    setupEventHandlers() {
        // Pause/resume on visibility change
        document.addEventListener('visibilitychange', () => {
            document.hidden ? this.pause() : this.resume();
        });
        
        // Save state before page unload
        const saveState = () => {
            if (this.isActive && this.jellyfish.length > 0) {
                persistenceManager.saveState(this.jellyfish, {
                    lastSpawnTime: this.lastSpawnTime,
                    startTime: this.startTime,
                    pausedTime: this.pausedTime,
                    isActive: this.isActive
                });
            }
        };
        
        window.addEventListener('beforeunload', saveState);
        window.addEventListener('pagehide', saveState);
    }
    
    pause() {
        if (!this.isActive || this.isPaused) return;
        this.isPaused = true;
        this.pauseStartTime = performance.now();
    }
    
    resume() {
        if (!this.isActive || !this.isPaused) return;
        
        const pauseDuration = performance.now() - this.pauseStartTime;
        this.pausedTime += pauseDuration;
        this.isPaused = false;
        this.pauseStartTime = 0;
        
        // Update all jellyfish timestamps to account for the pause
        this.jellyfish.forEach(jelly => {
            jelly.animationStartTime += pauseDuration;
            jelly.lastDriftChangeTime += pauseDuration;
        });
        
        if (!this.animationFrame) this.animate();
    }
    
    getAdjustedTime() {
        const now = performance.now();
        return (now - this.startTime) / 1000;
    }
    
    async restoreFromSavedState() {
        const savedState = persistenceManager.loadState();
        if (!savedState) return false;
        
        try {
            const now = performance.now();
            const timeDiff = (Date.now() - savedState.timestamp) / 1000;
            
            // Only restore if time difference is reasonable
            if (timeDiff > JELLYFISH_CONFIG.maxTransitionTime / 1000) {
                persistenceManager.clearState();
                return false;
            }
            
            // Restore manager state
            this.startTime = now;
            this.pausedTime = 0;
            this.lastSpawnTime = -timeDiff; // Adjust spawn timing
            
            // Restore jellyfish that aren't off-screen
            for (const saved of savedState.jellyfish) {
                if (!this.wouldBeOffScreen(saved, timeDiff)) {
                    const jelly = this.createJellyfish(saved, now, timeDiff);
                    if (jelly) this.jellyfish.push(jelly);
                }
            }
            
            persistenceManager.markTransitionComplete();
            return true;
        } catch (error) {
            console.warn('Failed to restore jellyfish state:', error);
            persistenceManager.clearState();
            return false;
        }
    }
    
    createJellyfish(saved, now, timeDiff) {
        try {
            // Validate and clamp the saved state
            const validatedSaved = {
                ...saved,
                angle: clampAngle(saved.angle),
                x: typeof saved.x === 'number' && isFinite(saved.x) ? saved.x : window.innerWidth / 2,
                y: typeof saved.y === 'number' && isFinite(saved.y) ? saved.y : window.innerHeight + (saved.height || 200)
            };
            
            // Calculate new position based on time difference
            const angleRad = (validatedSaved.angle * Math.PI) / 180;
            const distance = JELLYFISH_CONFIG.driftSpeed * timeDiff;
            
            const jelly = {
                element: this.createJellyfishElement(validatedSaved.spriteVariant),
                x: validatedSaved.x + Math.sin(angleRad) * distance,
                y: validatedSaved.y - Math.cos(angleRad) * distance, // Move upward
                angle: validatedSaved.angle,
                size: validatedSaved.size,
                height: validatedSaved.height,
                spriteVariant: validatedSaved.spriteVariant,
                currentAnimationFrame: validatedSaved.currentAnimationFrame || 0,
                animationStartTime: now,
                lastDriftChangeTime: now
            };
            
            // Validate the created jellyfish
            validateJellyfishState(jelly);
            
            // Set up element
            jelly.element.style.width = jelly.size + 'px';
            jelly.element.style.height = jelly.height + 'px';
            this.updateSpriteFrame(jelly, jelly.currentAnimationFrame);
            this.positionElement(jelly);
            
            document.body.appendChild(jelly.element);
            return jelly;
        } catch (error) {
            console.warn('Failed to create jellyfish from saved state:', error);
            return null;
        }
    }
    
    wouldBeOffScreen(saved, timeDiff) {
        try {
            const angle = clampAngle(saved.angle);
            const angleRad = (angle * Math.PI) / 180;
            const distance = JELLYFISH_CONFIG.driftSpeed * timeDiff;
            
            const estimatedX = saved.x + Math.sin(angleRad) * distance;
            const estimatedY = saved.y - Math.cos(angleRad) * distance; // Move upward
            
            const margin = JELLYFISH_CONFIG.despawnMargin;
            return (
                estimatedY + saved.height/2 < -margin ||
                estimatedX + saved.size/2 < -margin ||
                estimatedX - saved.size/2 > window.innerWidth + margin
            );
        } catch (error) {
            console.warn('Error checking if jellyfish would be off-screen:', error);
            return true; // If we can't determine, assume it would be off-screen
        }
    }
    
    async start() {
        if (this.isActive) return;
        
        await spritePreloader.preloadAllSprites();
        this.isActive = true;
        
        const restored = await this.restoreFromSavedState();
        if (!restored) {
            this.startTime = performance.now();
            this.pausedTime = 0;
            this.lastSpawnTime = -JELLYFISH_CONFIG.spawnIntervalSeconds;
        }
        
        if (document.hidden) this.pause();
        this.animate();
    }
    
    stop(fade = false) {
        this.isActive = false;
        this.isPaused = false;
        
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
        
        if (fade) {
            this.jellyfish.forEach(jelly => {
                jelly.element.style.transition = `opacity ${JELLYFISH_CONFIG.fadeOutDurationSeconds}s ease-out`;
                jelly.element.style.opacity = '0';
            });
            setTimeout(() => this.clearAll(), JELLYFISH_CONFIG.fadeOutDurationSeconds * 1000);
        } else {
            this.clearAll();
        }
        
        persistenceManager.clearState();
    }
    
    clearAll() {
        this.jellyfish.forEach(jelly => jelly.element.remove());
        this.jellyfish = [];
    }
    
    spawnJellyfish() {
        const size = JELLYFISH_CONFIG.minSize + Math.random() * (JELLYFISH_CONFIG.maxSize - JELLYFISH_CONFIG.minSize);
        const height = size * JELLYFISH_CONFIG.frameHeight / JELLYFISH_CONFIG.frameWidth;
        const spriteVariant = JELLYFISH_CONFIG.spriteVariants[Math.floor(Math.random() * JELLYFISH_CONFIG.spriteVariants.length)];
        
        const spawnAreaWidth = window.innerWidth - (2 * JELLYFISH_CONFIG.spawnMargin);
        const spawnX = JELLYFISH_CONFIG.spawnMargin + Math.random() * spawnAreaWidth;
        
        const jelly = {
            element: this.createJellyfishElement(spriteVariant),
            x: spawnX,
            y: window.innerHeight + height,
            angle: clampAngle((Math.random() - 0.5) * 2 * JELLYFISH_CONFIG.initialAngleRange),
            size,
            height,
            animationStartTime: performance.now(),
            lastDriftChangeTime: performance.now(),
            currentAnimationFrame: 0,
            spriteVariant
        };
        
        jelly.element.style.width = size + 'px';
        jelly.element.style.height = height + 'px';
        this.positionElement(jelly);
        
        document.body.appendChild(jelly.element);
        this.jellyfish.push(jelly);
    }
    
    createJellyfishElement(spriteVariant) {
        const div = document.createElement('div');
        div.className = 'jellyfish-animated';
        div.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 100;
            opacity: 0.8;
            background-image: url('${JELLYFISH_CONFIG.spriteSheets[spriteVariant]}');
            background-size: ${JELLYFISH_CONFIG.keyframeCount * 100}% 100%;
            background-repeat: no-repeat;
            transform-origin: center center;
        `;
        return div;
    }
    
    positionElement(jelly) {
        jelly.element.style.transform = `translate(${jelly.x - jelly.size/2}px, ${jelly.y - jelly.height/2}px) rotate(${jelly.angle}deg)`;
    }
    
    getCurrentPhaseInfo(age) {
        const acc = JELLYFISH_CONFIG.accelerationFrames / JELLYFISH_CONFIG.animationFPS;
        const burst = JELLYFISH_CONFIG.burstFrames / JELLYFISH_CONFIG.animationFPS;
        const decel = JELLYFISH_CONFIG.decelerationFrames / JELLYFISH_CONFIG.animationFPS;
        const drift = JELLYFISH_CONFIG.driftFrames / JELLYFISH_CONFIG.animationFPS;
        
        const cycleTime = acc + burst + decel + drift;
        const pos = age % cycleTime;
        
        if (pos < acc) {
            const progress = pos / acc;
            const speed = JELLYFISH_CONFIG.driftSpeed + progress * (JELLYFISH_CONFIG.burstSpeed - JELLYFISH_CONFIG.driftSpeed);
            return { phase: 'acceleration', speed };
        } else if (pos < acc + burst) {
            return { phase: 'burst', speed: JELLYFISH_CONFIG.burstSpeed };
        } else if (pos < acc + burst + decel) {
            const progress = (pos - acc - burst) / decel;
            const speed = JELLYFISH_CONFIG.burstSpeed + progress * (JELLYFISH_CONFIG.driftSpeed - JELLYFISH_CONFIG.burstSpeed);
            return { phase: 'deceleration', speed };
        } else {
            return { phase: 'drift', speed: JELLYFISH_CONFIG.driftSpeed };
        }
    }
    
    updateSpriteFrame(jelly, frameIndex) {
        const framePercentage = (frameIndex / (JELLYFISH_CONFIG.keyframeCount - 1)) * 100;
        jelly.element.style.backgroundPosition = `${framePercentage}% 0%`;
    }
    
    animate() {
        if (!this.isActive) return;
        
        if (this.isPaused) {
            this.animationFrame = requestAnimationFrame(() => this.animate());
            return;
        }
        
        const currentTime = this.getAdjustedTime();
        
        // Spawn new jellyfish if needed
        if (currentTime - this.lastSpawnTime >= JELLYFISH_CONFIG.spawnIntervalSeconds && 
            this.jellyfish.length < JELLYFISH_CONFIG.maxJellyfish) {
            this.spawnJellyfish();
            this.lastSpawnTime = currentTime;
        }
        
        // Update each jellyfish
        for (let i = this.jellyfish.length - 1; i >= 0; i--) {
            const jelly = this.jellyfish[i];
            
            try {
                // Validate jellyfish state before processing
                validateJellyfishState(jelly);
                
                // Calculate jellyfish age
                const age = (performance.now() - jelly.animationStartTime) / 1000;
                
                // Update animation frame
                const frameIndex = Math.floor(age * JELLYFISH_CONFIG.animationFPS) % JELLYFISH_CONFIG.keyframeCount;
                if (frameIndex !== jelly.currentAnimationFrame) {
                    jelly.currentAnimationFrame = frameIndex;
                    this.updateSpriteFrame(jelly, frameIndex);
                }
                
                // Get movement speed for current phase
                const phaseInfo = this.getCurrentPhaseInfo(age);
                
                // Handle drift angle changes
                const lastDriftAge = (jelly.lastDriftChangeTime - jelly.animationStartTime) / 1000;
                if (phaseInfo.phase === 'drift' && age - lastDriftAge >= JELLYFISH_CONFIG.driftChangeIntervalSeconds) {
                    const drift = (Math.random() - 0.5) * 2 * JELLYFISH_CONFIG.driftAngleRange;
                    jelly.angle = clampAngle(jelly.angle + drift);
                    jelly.lastDriftChangeTime = performance.now();
                }
                
                // Move jellyfish (CRITICAL FIX: Ensure consistent upward movement)
                const angleRad = (jelly.angle * Math.PI) / 180;
                const deltaTime = 1/60;
                
                // X movement: positive angle = right, negative angle = left
                jelly.x += Math.sin(angleRad) * phaseInfo.speed * deltaTime;
                
                // Y movement: ALWAYS subtract to move upward (decreasing Y coordinates)
                // Math.cos(0) = 1, so when angle is 0 (straight up), we get maximum upward movement
                jelly.y -= Math.abs(Math.cos(angleRad)) * phaseInfo.speed * deltaTime;
                
                this.positionElement(jelly);
                
                // Remove if off-screen
                const margin = JELLYFISH_CONFIG.despawnMargin;
                if (jelly.y + jelly.height/2 < -margin ||
                    jelly.x + jelly.size/2 < -margin ||
                    jelly.x - jelly.size/2 > window.innerWidth + margin) {
                    jelly.element.remove();
                    this.jellyfish.splice(i, 1);
                }
                
            } catch (error) {
                console.warn('Error updating jellyfish:', error);
                // Remove problematic jellyfish
                jelly.element.remove();
                this.jellyfish.splice(i, 1);
            }
        }
        
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}

// Global instance
let jellyfishManager = null;

// ===== THEME TOGGLE =====
async function toggleJellyfishMode() {
    const html = document.documentElement;
    const isJellyfishMode = html.getAttribute('data-theme') === 'jellyfish';
    
    if (isJellyfishMode) {
        // Switch to normal mode
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'normal');
        jellyfishManager?.stop(true);
        updateButtonText('Jellyfish Mode');
    } else {
        // Switch to jellyfish mode
        html.setAttribute('data-theme', 'jellyfish');
        localStorage.setItem('theme', 'jellyfish');
        
        if (!jellyfishManager) jellyfishManager = new JellyfishManager();
        await jellyfishManager.start();
        updateButtonText('Boring Mode');
    }
}

function updateButtonText(text) {
    const button = document.querySelector('.bottom-button[onclick="toggleJellyfishMode()"] span');
    if (button) button.textContent = text;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async function() {
    // Preload sprites early
    spritePreloader.preloadAllSprites().catch(console.warn);
    
    if (localStorage.getItem('theme') === 'jellyfish') {
        document.documentElement.setAttribute('data-theme', 'jellyfish');
        jellyfishManager = new JellyfishManager();
        await jellyfishManager.start();
        updateButtonText('Boring Mode');
    }
});