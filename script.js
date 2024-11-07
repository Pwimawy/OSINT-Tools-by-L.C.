// Light/Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle'); // Corrected ID
const body = document.body;

modeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});
