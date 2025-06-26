// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Event listener to toggle the 'hidden' class on the mobile menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Optional: Close mobile menu when a navigation link within it is clicked
// This improves user experience by collapsing the menu after navigation
const mobileMenuLinks = mobileMenu.querySelectorAll('#mobile-menu a'); // Select links specifically within the mobile menu
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Add 'hidden' class to hide the menu
    });
});

// The Credly embed.js script is now loaded directly in index.html next to each badge div,
// as per your original request to ensure visibility.
// Therefore, the global loading logic for credlyScript is removed from here.
