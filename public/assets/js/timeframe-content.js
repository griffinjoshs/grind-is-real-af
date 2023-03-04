// dailyview navtab bar (today, this week, this month, this year)
const pills = document.querySelectorAll(".nav-pills .nav-link");

const dayContent = () => {
document.querySelector('.day-content').classList.remove('hide')

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
 
// get current hour
const currentHour = new Date().getHours();

// get time content elements
const timeContent = document.querySelector('.time-content');
const tabs = timeContent.querySelectorAll('.nav-link');
const tabPanes = timeContent.querySelectorAll('.tab-pane');

// activate appropriate tab based on current time
if (currentHour < 12) {
  tabs[0].classList.add('active');
  tabPanes[0].classList.add('show', 'active');
} else if (currentHour < 18) {
  tabs[1].classList.add('active');
  tabPanes[1].classList.add('show', 'active');
} else {
  tabs[2].classList.add('active');
  tabPanes[2].classList.add('show', 'active');
}


// time, goal title, task title, icon