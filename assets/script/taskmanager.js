// Initialising DOM elements
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// Function to submit form
formEl.addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    if (!taskNameInput || !taskTypeInput) {
        alert("Fill the form before adding!");
        return false;
      }
    var formInput = {
        name: taskNameInput,
        type: taskTypeInput
    };
    addTask(formInput);
    formEl.reset();
}

// Function to add new task
function addTask(formInput) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + formInput.name + "</h3><span class='task-type'>" + formInput.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};



