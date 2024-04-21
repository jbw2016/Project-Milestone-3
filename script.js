//Function to toggle a navigation menu on small screens
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Event listener for the navigation menu toggle button
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

// This is the call to the button for scrolling
let mybutton = document.getElementById("myBtn");

// This allows for the page to scroll to top after button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

