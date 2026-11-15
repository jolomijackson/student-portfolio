// Each task is an object: { text: "...", done: false }
let tasks = [];

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");
const count = document.getElementById("task-count");

// Rebuilds the whole list from the array
function showTasks() {
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    if (tasks[i].done) {
      li.classList.add("done");
    }

    const span = document.createElement("span");
    span.textContent = tasks[i].text;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = tasks[i].done ? "Undo" : "Done";
    doneBtn.addEventListener("click", function () {
      toggleTask(i);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteTask(i);
    });

    const buttons = document.createElement("div");
    buttons.appendChild(doneBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttons);
    list.appendChild(li);
  }

  updateCount();
}

function addTask() {
  const text = input.value.trim();
  if (text === "") {
    alert("Please type a task first.");
    return;
  }
  tasks.push({ text: text, done: false });
  input.value = "";
  showTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

function updateCount() {
  let finished = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done) {
      finished++;
    }
  }
  if (tasks.length === 0) {
    count.textContent = "No tasks yet.";
  } else {
    count.textContent = finished + " of " + tasks.length + " tasks completed";
  }
}

addBtn.addEventListener("click", addTask);

// Pressing Enter also adds the task
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

showTasks();
