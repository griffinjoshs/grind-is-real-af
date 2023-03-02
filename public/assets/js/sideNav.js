// Get all nav-link elements
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each nav-link element and add an event listener to it
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the 'active' class from all nav-link elements
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the 'active' class to the clicked nav-link element
    link.classList.add('active');
  });
});
