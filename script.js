const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        const selectedPriority = document.querySelector('input[name="priority"]:checked');
        if (selectedPriority) {
            taskItem.classList.add(selectedPriority.value);
        } else {
            taskItem.classList.add("default");
        }

        taskItem.addEventListener("click", function () {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});