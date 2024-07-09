document.addEventListener('DOMContentLoaded', () => {
    function loadContent(url, containerId) {
        fetch('sections/' + url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(containerId).innerHTML = html;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load projects section
    loadContent('projects.html', 'projects-container');

    // Load experiences section
    loadContent('experiences.html', 'experiences-container');

    // Load technical skills section
    loadContent('technical_skills.html', 'technical-skills-container');

    // Load contact section
    loadContent('contact.html', 'contact-container');
});