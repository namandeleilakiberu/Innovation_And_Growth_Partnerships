// Update year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form validation and mock submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    // Email regex simple check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Mock submit
    document.getElementById('feedback').textContent = 'Thanks for your message! We will be in touch soon.';
    form.reset();
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
