// ====== script.js: AI Assistant, Theme Toggle, Scroll Animations ======

// AI Assistant Function
function askAI() {
    const responseArea = document.getElementById('ai-response-area');
    
    // Clear previous response
    responseArea.innerHTML = '';

    // Create a container for the new response
    const aiRespContainer = document.createElement('div');
    aiRespContainer.className = 'ai-response';

    // Add a temporary thinking message
    aiRespContainer.textContent = '...';
    responseArea.appendChild(aiRespContainer);

    // After a short delay, show the actual response
    setTimeout(() => {
        aiRespContainer.textContent = 'I build recommendation systems, image recognition models and NLP prototypes — check the Projects section for details.';
        
        // Scroll to the bottom of the chat container if it's scrollable
        const chatContainer = document.getElementById('chat-container');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
}


// Dark/Light Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

// Set initial theme based on user's system preference
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
    
    // Trigger the scroll animation check on load
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // We can manually trigger the 'show' for sections visible on load
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('show');
        }
    });
});


// Scroll fade-in animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

