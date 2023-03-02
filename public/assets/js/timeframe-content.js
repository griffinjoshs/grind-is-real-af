// dailyview navtab bar (today, this week, this month, this year)
const dayContent = () => {
document.querySelector('.day-content').classList.remove('hide')

    const pills = document.querySelectorAll(".nav-pills .nav-link");
    pills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        const pillId = pill.getAttribute("href");
        const pillContent = document.querySelector(pillId);
        const activePills = document.querySelectorAll(
          ".nav-pills .nav-link.active"
        );
        activePills.forEach((activePill) =>
          activePill.classList.remove("active")
        );
        pill.classList.add("active");
        Array.from(document.querySelectorAll(".tab-pane")).forEach(
          (tabPane) => (tabPane.style.display = "none")
        );
        pillContent.style.display = "block";
      });
    });
  }
 