// Interactions: product showcase tabs, feature tabs, gallery, lightbox, experience play
export function initInteractions() {
    // Product Showcase Tabs
    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    const showcaseViews = document.querySelectorAll('.showcase-view');
    showcaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            showcaseTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const view = tab.dataset.view;
            showcaseViews.forEach(v => v.classList.remove('active'));
            document.getElementById(`showcase-${view}`).classList.add('active');
        });
    });

    // Feature tabs
    const featureBtns = document.querySelectorAll('.feature-btn');
    const featurePanels = document.querySelectorAll('.feature-panel');
    featureBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            featureBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const feature = btn.dataset.feature;
            featurePanels.forEach(p => p.classList.remove('active'));
            document.getElementById(`feature-${feature}`).classList.add('active');
        });
    });

    // Gallery horizontal scroll
    const galleryScroll = document.getElementById('gallery-scroll');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    if (galleryScroll) {
        galleryPrev.addEventListener('click', () => {
            galleryScroll.scrollBy({ left: -300, behavior: 'smooth' });
        });
        galleryNext.addEventListener('click', () => {
            galleryScroll.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(index) {
        const item = galleryItems[index];
        if (!item) return;
        const bgImage = getComputedStyle(item.querySelector('.gallery-image')).backgroundImage;
        lightboxImage.style.backgroundImage = bgImage;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
    });

    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxClose.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Experience Play button
    const experiencePlay = document.getElementById('experience-play');
    const experienceAnimation = document.getElementById('experience-animation');
    if (experiencePlay && experienceAnimation) {
        experiencePlay.addEventListener('click', () => {
            experiencePlay.classList.add('hidden');
            experienceAnimation.classList.add('playing');
        });
    }
}