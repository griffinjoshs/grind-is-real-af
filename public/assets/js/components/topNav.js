function createNavbar(userInfo) {
  const [username, level, coins] = userInfo;

  return `
  <nav class="navbar bg-second p-0">
  <div class="container-fluid h-100 px-0" style="position: relative">
    <div class="level p-0 m-0 h-100">
      <div class="level p-0 m-0 h-100">
        <div
          class="navbar-brand bg-primary d-flex justify-content-left align-items-center"
          href="#"
          style="height: 100%; width: 85%"
        >
          <div
            class="current-level d-flex align-items-center justify-content-center mh-100"
          >
            <div
              class="level-square bg-warning d-flex justify-content-center align-items-center"
              style="width: 57px; height: 57px"
            >
              <h6 class="h2 text-dark">${level}</h6>
            </div>
            <div>
              <div class="username h4">
                <h3 class="px-2 text-dark">@${username}</h3>
              </div>
              <div id="level-progress"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>

    <div class="coin-count d-flex justify-content-evenly align-items-center py-1 m-0 bg-third rounded-pill" style='width: 130px'>
      <h4>$</h4>
      <h3>45</h3>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#navbar-offcanvas"
      aria-controls="navbar-offcanvas"
      style="border: none; outline: none"
    >
      <span class="navbar-toggler-icon" style="font-size: 30px"></span>
    </button>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="navbar-offcanvas"
      aria-labelledby="navbar-offcanvas-label"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="navbar-offcanvas-label">Menu</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    `;
}

let userInfo = ["griffinjoshs", 1, 24];
const navbar = createNavbar(userInfo);
document.querySelectorAll(".navbar-container").forEach(function (element) {
  element.innerHTML = navbar;
});
