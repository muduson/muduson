// Greeting Function Based on Time of Day
window.addEventListener('load', function() {
    const hour = new Date().getHours();
    const greeting = document.createElement('p');
    const header = document.querySelector('header');
    
    if (hour >= 5 && hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }

    header.appendChild(greeting);
});

// Form Validation for Contact Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }

    if (message.trim() === '') {
        alert('Message cannot be empty.');
        event.preventDefault();
    }
});

/// Apply theme on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    const toggleButton = document.getElementById('themeToggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      });
    }
  });
  



// Dynamic Content Manipulation (for example, showing/hiding project details)
document.querySelectorAll('.project a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const projectDetails = document.createElement('p');
        projectDetails.textContent = 'Detailed description of the project goes here.';
        this.parentNode.appendChild(projectDetails);
    });
});

// Survey Form Validation
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const suggestions = document.getElementById('suggestions').value;

    if (!satisfaction) {
        alert('Please select your satisfaction level.');
        event.preventDefault();
    }

    if (suggestions.trim() === '') {
        alert('Please provide suggestions.');
        event.preventDefault();
    }
});
