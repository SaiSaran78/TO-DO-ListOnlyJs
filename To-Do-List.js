// Wait for the DOM content to be fully loaded before executing the code
// closing bracket at end of the code
// document.addEventListener("DOMContentLoaded", function () {})
// Get references to DOM elements
// const taskInput = document.getElementById("typeInput");
// const taskList = document.getElementById("todolist");
// const addTaskButton=document.getElementById("Newtask");
// Add an event listener to the "Add Task" button
document.getElementById("NewTask").addEventListener("click", addTaskButton);
function addTaskButton() {
  // const taskText = taskInput.value.trim();
  const taskText = document.getElementById("typeInput").value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
                  <span>${taskText}</span>
                  <button class="complete">Complete</button>
                  <button class="edit">edit</button>
                  <button class="delete">Delete</button>
              `;
    // Append to the taskList HTML element
    document.getElementById("todolist").appendChild(listItem);
    // taskList.appendChild(listItem);
    // Clear the input field
    document.getElementById("typeInput").value = "";
    // taskInput .value = "";
  }
}
// Add a click event listener directly to the "todolist" HTML element
// taskList.addEventListener('click',function (e){})
document.getElementById("todolist").addEventListener("click", taskList);
function taskList(e) {
  const listItem = e.target.parentNode;
  if (e.target.classList.contains("complete")) {
    e.target.parentNode.querySelector("span").classList.toggle("completed");
  } else if (e.target.classList.contains("edit")) {
    const span = listItem.querySelector("span");
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null) {
      span.textContent = newText;
    }
  } else if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
}