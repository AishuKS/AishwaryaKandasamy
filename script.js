// JavaScript code for interactive elements

// Smooth scrolling function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation links
const aboutLink = document.getElementById('about-link');
const resumeLink = document.getElementById('resume-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('#about');
});

resumeLink.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('#resume');
});

projectsLink.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('#projects');
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('#contact');
});

// Button clicks
const resumeButton = document.getElementById('resume-button');
const projectsButton = document.getElementById('projects-button');

resumeButton.addEventListener('click', function(event) {
    event.preventDefault();
    // You can update content or perform an action related to Resume
    document.getElementById('paragraph1').textContent = "This is my resume content.";
    document.getElementById('paragraph2').textContent = "Feel free to contact me for more details.";
    smoothScroll('#resume');
});

projectsButton.addEventListener('click', function(event) {
    event.preventDefault();
    // You can update content or perform an action related to Projects
    document.getElementById('paragraph1').textContent = "These are some of my projects.";
    document.getElementById('paragraph2').textContent = "Explore them further to see my work.";
    smoothScroll('#projects');
});
