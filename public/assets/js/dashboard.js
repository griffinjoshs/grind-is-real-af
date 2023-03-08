let currentDate;

fetch('/current-date')
  .then(response => response.text())
  .then(text => {
    currentDate = moment(text);
  });

  const dashColumn = document.querySelector(".dash-column");

// Rest of your code here
document.getElementById("prev-day").addEventListener("click", () => {
  const currentUrl = window.location.href;
  const dateRegex = /\/dashboard\/day\/(\d{2}-\d{2}-\d{4})/;
  const match = currentUrl.match(dateRegex);
  if (match) {
    currentDate = moment(match[1], 'MM-DD-YYYY').subtract(1, 'day');
    const newUrl = currentUrl.replace(match[0], `/dashboard/day/${currentDate.format('MM-DD-YYYY')}`);
    window.location.href = newUrl;
    console.log("Current date after decrement:", currentDate.format("MM-DD-YYYY"));
    setDayView(currentDate);
  }
});

document.getElementById("next-day").addEventListener("click", () => {
  const currentUrl = window.location.href;
  const dateRegex = /\/dashboard\/day\/(\d{2}-\d{2}-\d{4})/;
  const match = currentUrl.match(dateRegex);
  if (match) {
    currentDate = moment(match[1], 'MM-DD-YYYY').add(1, 'day');
    const newUrl = currentUrl.replace(match[0], `/dashboard/day/${currentDate.format('MM-DD-YYYY')}`);
    window.location.href = newUrl;
    console.log("Current date after increment:", currentDate.format("MM-DD-YYYY"));
    setDayView(currentDate);
  }
});

document.getElementById("prev-week").addEventListener("click", () => {
  const currentUrl = window.location.href;
  const weekRegex = /\/dashboard\/week\/(\d{2}-\d{4})/;
  const match = currentUrl.match(weekRegex);
  if (match) {
    const currentWeek = moment(match[1], "WW-YYYY");
    const previousWeek = currentWeek.subtract(1, "week").format("WW-YYYY");
    const newUrl = currentUrl.replace(match[0], `/dashboard/week/${previousWeek}`);
    window.location.href = newUrl;
    setWeekView(moment(previousWeek, "WW-YYYY"));
  }
});

document.getElementById("next-week").addEventListener("click", () => {
  const currentUrl = window.location.href;
  const weekRegex = /\/dashboard\/week\/(\d{2}-\d{4})/;
  const match = currentUrl.match(weekRegex);
  if (match) {
    const currentWeek = moment(match[1], "WW-YYYY");
    const nextWeek = currentWeek.add(1, "week").format("WW-YYYY");
    const newUrl = currentUrl.replace(match[0], `/dashboard/week/${nextWeek}`);
    window.location.href = newUrl;
    setWeekView(moment(nextWeek, "WW-YYYY"));
  }
});  
  
  document.getElementById("prev-month").addEventListener("click", () => {
    const currentUrl = window.location.href;
    const monthRegex = /\/dashboard\/month\/(\d{2}-\d{4})/;
    const match = currentUrl.match(monthRegex);
    if (match) {
      const previousMonth = moment(match[1], "MM-YYYY").subtract(1, "month").format("MM-YYYY");
      window.location.href = currentUrl.replace(match[1], previousMonth);
    }
  });
  
  document.getElementById("next-month").addEventListener("click", () => {
    const currentUrl = window.location.href;
    const monthRegex = /\/dashboard\/month\/(\d{2}-\d{4})/;
    const match = currentUrl.match(monthRegex);
    if (match) {
      const nextMonth = moment(match[1], "MM-YYYY").add(1, "month").format("MM-YYYY");
      window.location.href = currentUrl.replace(match[1], nextMonth);
    }
  });
    
  document.getElementById("prev-year").addEventListener("click", () => {
    const currentUrl = window.location.href;
    const yearRegex = /\/dashboard\/year\/(\d{4})/;
    const match = currentUrl.match(yearRegex);
    if (match) {
      const currentYear = parseInt(match[1]);
      const previousYear = currentYear - 1;
      const newUrl = currentUrl.replace(match[0], `/dashboard/year/${previousYear}`);
      window.location.href = newUrl;
    }
  });
  
  document.getElementById("next-year").addEventListener("click", () => {
    const currentUrl = window.location.href;
    const yearRegex = /\/dashboard\/year\/(\d{4})/;
    const match = currentUrl.match(yearRegex);
    if (match) {
      const currentYear = parseInt(match[1]);
      const nextYear = currentYear + 1;
      const newUrl = currentUrl.replace(match[0], `/dashboard/year/${nextYear}`);
      window.location.href = newUrl;
    }
  });   
    
    // Functions to render the views
    function setDayView(date) {
      console.log(date)
      const formattedDate = date.format("dddd, <br> MMMM D, YYYY");
      const selectedDate = document.querySelector("#day-view .selected-date");
      
      console.log("Formatted date:", formattedDate);
      console.log("Selected date element:", selectedDate);
      if (selectedDate) {
        console.log("Updating selected date text content");
        selectedDate.innerHTML = formattedDate;
        displayCurrentDay(date)
      } else {
        console.log("Selected date element not found");
      }
    }
    

    function setWeekView(date) {
      const weekNumber = moment(date).isoWeek(); 
      const year = moment(date).year();
      let weekInfo = weekNumber + ', ' + year
      console.log(weekInfo)
      displayCurrentWeek(date)
      const weeksLeft = moment(date).isoWeeksInYear() - weekNumber;
      const formattedDate = `Week ${weekNumber} <br> ${weeksLeft} weeks left in the year`;
      const selectedDate = document.querySelector("#week-view .selected-date");
      selectedDate.innerHTML = formattedDate;
    }       
    
    function setMonthView(date) {
      let monthInfo = moment(date).format("MM, YYYY");
      console.log(monthInfo)
      displayCurrentMonth(date)
      const formattedDate = moment(date).format("MMMM, YYYY");
      const selectedDate = document.querySelector("#month-view .selected-date");
      selectedDate.textContent = formattedDate;
    }
    
    function setYearView(date) {
      console.log(date)
    const year = date.year();
    displayCurrentYear(date)
    const formattedDate = `${year}`;
    const selectedDate = document.querySelector("#year-view .selected-date");
    selectedDate.textContent = formattedDate;
    }

    function updateSelectedDate() {
      const currentUrl = window.location.href;
      const dateRegex = /\/dashboard\/day\/(\d{2}-\d{2}-\d{4})/;
      const match = currentUrl.match(dateRegex);
      if (match) {
        const date = moment(match[1], 'MM-DD-YYYY');
        setDayView(date);
      }
    }

    function updateSelectedWeek() {
      const currentUrl = window.location.href;
      const weekRegex = /\/dashboard\/week\/(\d{2}-\d{4})/;
      const match = currentUrl.match(weekRegex);
      if (match) {
        const weekYear = match[1];
        const weekNumber = weekYear.split("-")[0];
        const year = weekYear.split("-")[1];
        const date = moment().year(year).isoWeek(weekNumber);
        setWeekView(date);
      }
    }    
    
    function updateSelectedMonth() {
      const currentUrl = window.location.href;
      const monthRegex = /\/dashboard\/month\/(\d{2}-\d{4})/;
      const match = currentUrl.match(monthRegex);
      if (match) {
        const monthYear = match[1];
        const month = monthYear.split("-")[0];
        const year = monthYear.split("-")[1];
        const date = moment().year(year).month(month - 1);
        setMonthView(date);
      }
    }
    
    function updateSelectedYear() {
      const currentUrl = window.location.href;
      const yearRegex = /\/dashboard\/year\/(\d{4})/;
      const match = currentUrl.match(yearRegex);
      if (match) {
        const year = match[1];
        const date = moment().year(year);
        setYearView(date);
      }
    }
    
    // Call the update functions when the page loads
    updateSelectedDate();
    updateSelectedWeek();
    updateSelectedMonth();
    updateSelectedYear();  
    
    const prevBtns = document.querySelectorAll('.prev-btn');
    prevBtns.forEach((btn) => {
      btn.innerHTML = '<i class="fas fa-arrow-left"></i>'
    });
    
    const nextBtns = document.querySelectorAll('.next-btn');
    nextBtns.forEach((btn) => {
      btn.innerHTML = '<i class="fas fa-arrow-right"></i>'
    });