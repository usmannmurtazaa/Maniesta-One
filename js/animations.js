// Scroll animations: IntersectionObserver for reveal, storytelling steps, parallax
export function initAnimations() {
    // General reveal animations
    const revealElements = document.querySelectorAll('[data-animate], .reveal, .reveal-left, .reveal-right, .reveal-scale');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated', 'revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // Storytelling section: sticky scroll interaction with online images
    const storytellingSteps = document.querySelectorAll('.story-step');
    const storytellingVisual = document.getElementById('storytelling-visual');
    const storytellingScreenContent = document.getElementById('storytelling-screen-content');
    const storytellingSticky = document.querySelector('.storytelling-sticky');

    if (storytellingSteps.length && storytellingVisual) {
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const step = entry.target;
                    const stepIndex = step.dataset.step;
                    storytellingSteps.forEach(s => s.classList.remove('active'));
                    step.classList.add('active');
                    updateStorytellingVisual(stepIndex);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-20% 0px -20% 0px'
        });
        storytellingSteps.forEach(step => stepObserver.observe(step));
    }

    function updateStorytellingVisual(step) {
        const content = storytellingScreenContent;
        if (!content) return;

        // Online images for each step
        const messages = {
            '1': {
                title: 'Intelligence',
                desc: 'Adaptive UI that learns your flow.',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
                overlay: 'linear-gradient(135deg, rgba(108,92,231,0.7), rgba(0,194,255,0.5))'
            },
            '2': {
                title: 'Focus',
                desc: 'Distraction-free environment.',
                image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
                overlay: 'linear-gradient(135deg, rgba(45,52,54,0.8), rgba(99,110,114,0.6))'
            },
            '3': {
                title: 'Smart Notes',
                desc: 'AI organized, instantly synced.',
                image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop',
                overlay: 'linear-gradient(135deg, rgba(253,203,110,0.7), rgba(225,112,85,0.6))'
            },
            '4': {
                title: 'Adaptive',
                desc: 'Interface morphs to your task.',
                image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
                overlay: 'linear-gradient(135deg, rgba(0,206,201,0.7), rgba(9,132,227,0.6))'
            }
        };

        const msg = messages[step];
        if (msg) {
            content.innerHTML = `
                <div style="
                    width: 100%;
                    height: 100%;
                    background-image: url('${msg.image}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 2rem;
                ">
                    <div style="
                        position: absolute;
                        inset: 0;
                        background: ${msg.overlay};
                        border-radius: 16px;
                    "></div>
                    <h3 style="
                        font-size: 1.5rem;
                        margin-bottom: 0.5rem;
                        position: relative;
                        z-index: 1;
                        color: white;
                    ">${msg.title}</h3>
                    <p style="
                        color: rgba(255,255,255,0.9);
                        position: relative;
                        z-index: 1;
                        max-width: 300px;
                    ">${msg.desc}</p>
                </div>
            `;
        }
    }

    // Hero device mouse parallax
    const heroDevice = document.getElementById('hero-device');
    if (heroDevice && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const rect = heroDevice.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (clientX - centerX) / centerX;
            const deltaY = (clientY - centerY) / centerY;
            heroDevice.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
        });
        heroDevice.addEventListener('mouseleave', () => {
            heroDevice.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        });
    }

    // Custom cursor
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (dot && ring && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.2;
            ringY += (mouseY - ringY) * 0.2;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        document.querySelectorAll('a, button, .gallery-item, .showcase-tab, .feature-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                ring.style.width = '56px';
                ring.style.height = '56px';
            });
            el.addEventListener('mouseleave', () => {
                ring.style.width = '36px';
                ring.style.height = '36px';
            });
        });
    }
}