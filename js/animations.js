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

    // Storytelling section: sticky scroll interaction
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
        const messages = {
            '1': {
                title: 'Intelligence',
                desc: 'Adaptive UI that learns your flow.',
                bg: 'linear-gradient(135deg, #6c5ce7, #00c2ff)'
            },
            '2': {
                title: 'Focus',
                desc: 'Distraction-free environment.',
                bg: 'linear-gradient(135deg, #2d3436, #636e72)'
            },
            '3': {
                title: 'Smart Notes',
                desc: 'AI organized, instantly synced.',
                bg: 'linear-gradient(135deg, #fdcb6e, #e17055)'
            },
            '4': {
                title: 'Adaptive',
                desc: 'Interface morphs to your task.',
                bg: 'linear-gradient(135deg, #00cec9, #0984e3)'
            }
        };
        const msg = messages[step];
        if (msg) {
            content.innerHTML = `
                <h3 style="font-size:1.5rem; margin-bottom:0.5rem;">${msg.title}</h3>
                <p style="color: #a1a1a6;">${msg.desc}</p>
            `;
            content.parentElement.style.background = msg.bg;
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

        // Enlarge ring on interactive elements
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