const categories = [
  {
    text: "Aquire Wealth",
    id: "list-home-list",
    href: "#list-home",
    ariaControls: "aquire-wealth",
  },
  {
    text: "Get Fit",
    id: "list-profile-list",
    href: "#list-profile",
    ariaControls: "get-fit",
  },
  {
    text: "Eat Healthy",
    id: "list-messages-list",
    href: "#list-messages",
    ariaControls: "eat-healthy",
  },
  {
    text: "Find Inner Peace",
    id: "inner-peace-list",
    href: "#inner-peace",
    ariaControls: "inner-peace",
  },
  {
    text: "Work",
    id: "inner-the-boss",
    href: "#the-boss",
    ariaControls: "the-boss",
  },
  {
    text: "School",
    id: "inner-the-teacher",
    href: "#the-teacher",
    ariaControls: "the-teacher",
  },
  {
    text: "Heal Your Brain",
    id: "heal-your-brain",
    href: "#heal-your-brain",
    ariaControls: "heal-your-brain",
  },
  {
    text: "Community Service",
    id: "heal-your-brain",
    href: "#heal-your-brain",
    ariaControls: "heal-your-brain",
  },
];

const goals = [
  {
    goal: "Workout",
    categories: ["Get Fit", "Work"],
    recommendedTasks: ['upper-body day', 'lowe body day', 'leg day', 'shoulder day', 'back and biceps', 'chest day', 'quad day', 'hamstring day'],
  },
  {
    goal: "Meditate",
    categories: ["Find Inner Peace"],
    recommendedTasks: [],
  },
  {
    goal: "Read",
    categories: ["Work", "Find Inner Peace"],
    recommendedTasks: [],
  },
  {
    goal: "Volunteer",
    categories: ["Community Service"],
    recommendedTasks: [],
  },
  {
    goal: "Cook healthy meals",
    categories: ["Eat Healthy"],
    recommendedTasks: [],
  },
  {
    goal: "Save money",
    categories: ["Aquire Wealth"],
    recommendedTasks: [],
  },
  {
    goal: "Get organized",
    categories: ["Work", "School"],
    recommendedTasks: [],
  },
  {
    goal: "Learn a new skill",
    categories: ["Work", "School"],
    recommendedTasks: [],
  },
  {
    goal: "Spend time with family/friends",
    categories: ["Find Inner Peace"],
    recommendedTasks: [],
  },
];

showCategories(categories);

const addGoalBtn = document.querySelector(".add-your-own-goal-btn");
addGoalBtn.addEventListener("click", (e) => {
  document.querySelector(".pick-goal-container").classList.add("d-none");
  document.querySelector(".add-goal-container").classList.remove("d-none");
});

const listItems = document.querySelectorAll(".list-group-item");
const goalCategorySelection = document.querySelector("#goal-category-selction");

// activates the clicked category
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".list-group-item.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    item.classList.add("active");
    // goalCategorySelection.innerHTML = item.textContent;
    displayGoals(item.textContent);
  });
});

function displayGoals(categoryText) {
  const categoryGoals = goals.filter((goal) =>
    goal.categories.includes(categoryText)
  );
  let goalList = "";
  categoryGoals.forEach((goal) => {
    goalList += `
    <li class='goal-list-item m-0 p-0'>
    <button data-bs-toggle="modal"
    data-bs-target="#addedGoalSettings">
    ${goal.goal}
    </button>
    </li>`;
    // console.log(goal)
    generateGoalSettingsModal(goal);
  });
  goalCategorySelection.innerHTML = goalList;
}

function generateGoalSettingsModal(goal) {
  const modalContent = document.getElementById("addedGoalSettings");
  modalContent.innerHTML = `
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Selected Goal: ${goal.goal}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class='duration-selector-sec d-flex'>
            <select class="form-select how-long-goal" style="width: 180px" aria-label="Default select example">
              <option value="" selected>Select a duration</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
          </div>
          <div class='how-many-x-week hide'>
            <label for='howmanyxweek'>How Many Tasks per Week?</label>
            <select id='howmanyxweek' name='howmanyxweek' class='form-select'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div class='task-titles hide'>
          </div>
        </div>
        <div class="modal-footer">
        Selected Goal: ${goal.goal}
          <button type="button" class="btn btn-success">Add Goal to Plan</button>
        </div>
      </div>
    </div>
  `;

  const howLongGoalSelect = modalContent.querySelector(".how-long-goal");

  howLongGoalSelect.addEventListener("change", () => {
    const selectedValue = howLongGoalSelect.value;
    let durationSelect = modalContent.querySelector(".how-long-duration");
    
    if (!selectedValue) {
      if (durationSelect) {
        durationSelect.remove();
      }
      return;
    }

    if (!durationSelect) {
      durationSelect = document.createElement("select");
      durationSelect.classList.add("form-select", "how-long-duration");
      durationSelect.style.width = "180px";
      durationSelect.setAttribute("aria-label", "Default select example");
      const durationDiv = document.createElement("div");
      durationDiv.appendChild(durationSelect);
      howLongGoalSelect.parentNode.appendChild(durationDiv);
    }

    let options = [];
    let maxDuration = 0;

    switch (selectedValue) {
      case "days":
        options = ["1", "2", "3", "4", "5"];
        maxDuration = 5;
        break;
      case "weeks":
        options = ["1", "2"];
        maxDuration = 2;
        break;
      case "months":
        options = ["1", "2", "3", "4", "5", "6"];
        maxDuration = 6;
        break;
    }
    durationSelect.innerHTML = `
      <option value="" selected>Select a duration</option>
      ${options.map((option) => `<option value="${option}">${option}</option>`).join("")}
    `;

    const currentDuration = durationSelect.value;
    if (currentDuration > maxDuration) {
    durationSelect.value = "";
    }

    const howManyXWeekSelect = modalContent.querySelector("#howmanyxweek");
const taskTitlesDiv = modalContent.querySelector(".task-titles");

if (selectedValue === "weeks" || selectedValue === "months") {
  howManyXWeekSelect.parentNode.classList.remove("hide");
  taskTitlesDiv.classList.remove('hide')
} else {
  howManyXWeekSelect.parentNode.classList.add("hide");
  taskTitlesDiv.classList.add('hide')
}


howManyXWeekSelect.addEventListener("change", changeTasksTitles)

goal.recommendedTasks.forEach((task) => {
console.log(task)
})


function changeTasksTitles() {
  taskTitlesDiv.innerHTML = "";
  const selectedValue = howManyXWeekSelect.value;
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  for (let i = 0; i < selectedValue; i++) {    
    const select = document.createElement("select");
    select.classList.add("form-select", "mb-3");
    select.name = `Task ${i + 1}`;

    // Create default option element
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select Task";
    select.appendChild(defaultOption);

    // Create option elements for each recommended task
    goal.recommendedTasks.forEach((task) => {
      const option = document.createElement("option");
      option.value = task;
      option.text = task;
      select.appendChild(option);
    });

    // Create day of week selector
    const daySelect = document.createElement("select");
    daySelect.classList.add("form-select", "mb-3");
    daySelect.name = `Day of Week ${i + 1}`;

    // Create default option element
    const defaultDayOption = document.createElement("option");
    defaultDayOption.value = "";
    defaultDayOption.text = "Select Day of Week";
    daySelect.appendChild(defaultDayOption);

    // Create option elements for each day of the week
    daysOfWeek.forEach((day) => {
      const option = document.createElement("option");
      option.value = day;
      option.text = day;
      daySelect.appendChild(option);
    });

    // Create time input field
    const timeInput = document.createElement("input");
    timeInput.classList.add("form-control", "mb-3");
    timeInput.type = "time";
    timeInput.name = `Time ${i + 1}`;

    // Create div to hold select fields
    const selectDiv = document.createElement("div");
    selectDiv.classList.add("d-flex", "justify-content-between", "mb-3");
    selectDiv.appendChild(select);
    selectDiv.appendChild(daySelect);
    selectDiv.appendChild(timeInput);

    taskTitlesDiv.appendChild(selectDiv);
  }
}

function changeTasksTitles() {
  taskTitlesDiv.innerHTML = "";
  const selectedValue = howManyXWeekSelect.value;
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  for (let i = 0; i < selectedValue; i++) {    
    const select = document.createElement("select");
    select.classList.add("form-select", "mb-3");
    select.name = `Task ${i + 1}`;

    // Create default option element
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select Task";
    select.appendChild(defaultOption);

    // Create option elements for each recommended task
    goal.recommendedTasks.forEach((task) => {
      const option = document.createElement("option");
      option.value = task;
      option.text = task;
      select.appendChild(option);
    });

    // Create custom task option element
    const customTaskOption = document.createElement("option");
    customTaskOption.value = "Custom Task";
    customTaskOption.text = "Custom Task";
    select.appendChild(customTaskOption);

    // Create day of week selector
    const daySelect = document.createElement("select");
    daySelect.classList.add("form-select", "mb-3");
    daySelect.name = `Day of Week ${i + 1}`;

    // Create default option element
    const defaultDayOption = document.createElement("option");
    defaultDayOption.value = "";
    defaultDayOption.text = "Select Day of Week";
    daySelect.appendChild(defaultDayOption);

    // Create option elements for each day of the week
    daysOfWeek.forEach((day) => {
      const option = document.createElement("option");
      option.value = day;
      option.text = day;
      daySelect.appendChild(option);
    });

    // Create task input field
    const taskInput = document.createElement("input");
    taskInput.classList.add("form-control", "mb-3", "d-none"); // Hide the task input field by default
    taskInput.type = "text";
    taskInput.name = `Task ${i + 1}`;

    // Show the task input field when "Custom Task" is selected
    select.addEventListener("change", () => {
      if (select.value === "Custom Task") {
        select.classList.add("d-none");
        taskInput.classList.remove("d-none");
      } else {
        select.classList.remove("d-none");
        taskInput.classList.add("d-none");
      }
    });

    // Create time input field
    const timeInput = document.createElement("input");
    timeInput.classList.add("form-control", "mb-3");
    timeInput.type = "time";
    timeInput.name = `Time ${i + 1}`;

    // Create div to hold select fields
    const selectDiv = document.createElement("div");
    selectDiv.classList.add("d-flex", "justify-content-between", "mb-3");
    selectDiv.appendChild(select);
    selectDiv.appendChild(taskInput);
    selectDiv.appendChild(daySelect);
    selectDiv.appendChild(timeInput);

    taskTitlesDiv.appendChild(selectDiv);
  }
}

  })}              

function showCategories(categories) {
  categories.forEach((category) => {
    let categoryItem = `
      <a
        class="list-group-item list-group-item-action"
        id="${category.id}"
        data-bs-toggle="list"
        href="${category.href}"
        role="tab"
        aria-controls="${category.ariaControls}"
        >${category.text}</a
      >  
    </div> `;
    document.getElementById("categories").innerHTML += categoryItem;
  });
}

{
  /* <button
type="button"
class="btn btn-warning add-your-own-goal-btn"
>
Add Your Own +
</button> */
}
