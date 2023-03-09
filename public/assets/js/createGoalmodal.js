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
    recommendedTasks: '',
  },
  {
    goal: "Meditate",
    categories: ["Find Inner Peace"],
    recommendedTasks: '',
  },
  {
    goal: "Read",
    categories: ["Work", "Find Inner Peace"],
    recommendedTasks: '',
  },
  {
    goal: "Volunteer",
    categories: ["Community Service"],
    recommendedTasks: '',
  },
  {
    goal: "Cook healthy meals",
    categories: ["Eat Healthy"],
    recommendedTasks: '',
  },
  {
    goal: "Save money",
    categories: ["Aquire Wealth"],
    recommendedTasks: '',
  },
  {
    goal: "Get organized",
    categories: ["Work", "School"],
    recommendedTasks: '',
  },
  {
    goal: "Learn a new skill",
    categories: ["Work", "School"],
    recommendedTasks: '',
  },
  {
    goal: "Spend time with family/friends",
    categories: ["Find Inner Peace"],
    recommendedTasks: '',
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
    generateGoalSettingsModal(goal.goal);
  });
  goalCategorySelection.innerHTML = goalList;
}

function generateGoalSettingsModal(goal) {
  const modalContent = document.getElementById("addedGoalSettings");
  modalContent.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Selected Goal: ${goal}</h5>
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
          <div class='task-titles'>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success">Add Goal to Plan</button>
        </div>
      </div>
    </div>
  `;

  const howLongGoalSelect = modalContent.querySelector(".how-long-goal");
const taskTitlesDiv = modalContent.querySelector(".task-titles");

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

if (selectedValue === "weeks" || "months") {
  // howManyXWeekSelect.parentNode.classList.add("hide");
  howManyXWeekSelect.parentNode.classList.remove("hide");
} else {
  howManyXWeekSelect.parentNode.classList.add("hide");
}

howManyXWeekSelect.addEventListener("change", changeTasksTitles)

function changeTasksTitles () {
  taskTitlesDiv.innerHTML = "";
const selectedValue = howManyXWeekSelect.value;
for (let i = 0; i < selectedValue; i++) {
  const input = document.createElement("input");
  input.classList.add("form-control", "mb-3");
  input.type = "text";
  input.placeholder = `Task ${i + 1} Title`;
  taskTitlesDiv.appendChild(input);
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
