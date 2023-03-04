const addGoalBtn = document.querySelector(".add-your-own-goal-btn");
addGoalBtn.addEventListener("click", (e) => {
  document.querySelector(".pick-goal-container").classList.add("d-none");
  document.querySelector(".add-goal-container").classList.remove("d-none");
});

const listItems = document.querySelectorAll('.list-group-item');
const goalCategorySelection = document.querySelector('#goal-category-selction');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const activeItem = document.querySelector('.list-group-item.active');
    if (activeItem) {
      activeItem.classList.remove('active');
    }
    item.classList.add('active');
    goalCategorySelection.innerHTML = item.textContent;
  });
});

