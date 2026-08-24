// Main application entry point
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initInteractions();
    console.log('Maniesta One initialized');
});