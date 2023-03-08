const calendarWeekDiv = document.querySelector(".week-content .calendar");
const calendarMonthDiv = document.querySelector(".month-content .calendar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentWeekBtn = document.getElementById("current-week-btn");
const currentMonthBtn = document.getElementById("current-month-btn");

// Display calendar for current week
const displayCurrentWeek = (date) => {
  document.querySelector(".week-content").classList.remove("hide");
  document.querySelector(".month-content").classList.add("hide");

  const startOfWeek = moment(date).startOf("week");
  const endOfWeek = moment(date).endOf("week");

  let calendar = "<h2>Current Week</h2>";
  calendar += `<p>${startOfWeek.format("MMM Do")} - ${endOfWeek.format("MMM Do") }</p>`
  calendar += "<table>";
  calendar += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

  let day = startOfWeek.clone();
  while (day <= endOfWeek) {
    calendar += "<tr>";
    for (let i = 0; i < 7; i++) {
      const dayFormatted = day.format("MM-DD-YYYY");
      
      calendar += `<td><a href="/dashboard/day/${dayFormatted}"><div class="day-cell">${day.format(
        "D"
      )}</div></a></td>`;
      day.add(1, "day");
    }
    calendar += "</tr>";
  }

  calendar += "</table>";
  calendarWeekDiv.innerHTML = calendar;
};

// Display calendar for current month
const displayCurrentMonth = (date) => {
  document.querySelector(".week-content").classList.add("hide");
  document.querySelector(".month-content").classList.remove("hide");

  const startOfMonth = moment(date).startOf("month");
  const endOfMonth = moment(date).endOf("month");

  let calendar = "<h2>Current Month</h2>";
  calendar += `<p>${startOfMonth.format("MMMM YYYY")}</p>`;
  calendar += "<table>";
  calendar += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

  let day = startOfMonth.clone().subtract(startOfMonth.day(), "days");
  while (day <= endOfMonth) {
    calendar += "<tr>";
    for (let i = 0; i < 7; i++) {
      const dayFormatted = day.format("MM-DD-YYYY");
      calendar += `<td><a href="/dashboard/day/${dayFormatted}"><div class="day-cell">${day.format(
        "D"
      )}</div></a></td>`;
      day.add(1, "day");
    }
    calendar += "</tr>";
  }

  calendar += "</table>";
  calendarMonthDiv.innerHTML = calendar;
};