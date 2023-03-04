

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

const displaySideNav = () => {
  const sideNavContainers = document.querySelectorAll('.side-navbar-container');
  sideNavContainers.forEach(container => {
    container.innerHTML = `
      <ul class="nav side-navbar w-100 d-flex justify-content-evenly bg-second flex-nowrap">
        <li class="sidenav-item nav-item text-mainColor">
          <a class="nav-link ${window.location.pathname === '/challenges' ? 'active' : ''}" href="/challenges">
            <h2>
              <i class="fas fa-trophy"></i>
            </h2>
            <h5>
              Challenges
            </h5>
          </a>
        </li>
        
        <li class="sidenav-item nav-item text-mainColor">
          <a class="nav-link ${window.location.pathname.startsWith('/dashboard') ? 'active' : ''}" href="/dashboard/day/">
            <h2>
              <i class="far fa-check-circle"></i>
            </h2>
            <h5>
              Dashboard
            </h5>
          </a>
        </li>

        <li class="sidenav-item nav-item text-mainColor">
          <a class="nav-link ${window.location.pathname === '/journal' ? 'active' : ''}" href="/journal">
            <h2>
              <i class="fas fa-pen"></i>
            </h2>
            <h5>
              Journal
            </h5>
          </a>
        </li>
    
        <li class="sidenav-item nav-item text-mainColor">
          <a class="nav-link ${window.location.pathname === '/stats' ? 'active' : ''}" href="/stats">
            <h2>
              <i class="fas fa-chart-pie"></i>
            </h2>
            <h5>
              Stats
            </h5>
          </a>
        </li>

        <li class="sidenav-item nav-item text-mainColor">
          <a class="nav-link ${window.location.pathname === '/rewards' ? 'active' : ''}" href="/rewards">
            <h2>
              <i class="fa-solid fa-trophy"></i>
            </h2>
            <h5>
             Rewards
            </h5>
          </a>
        </li>
      </ul>
    `;
  });
}

displaySideNav();


