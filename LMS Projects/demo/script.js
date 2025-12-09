// Global tasks array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

// Save task
document.getElementById("saveBtn").addEventListener("click", () => {
    const title = document.getElementById("taskTitle").value;
    const date = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;

    if (!title || !date) return alert("Please fill all fields!");

    const taskObj = { title, date, priority };

    if (editIndex === null) {
        tasks.push(taskObj);
    } else {
        tasks[editIndex] = taskObj;
        editIndex = null;
        document.getElementById("formTitle").innerText = "Add Task";
    }

    saveAndRender();
    clearForm();
});

// Render tasks
function renderTasks() {
    const container = document.getElementById("taskList");
    container.innerHTML = "";

    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const priorityFilter = document.getElementById("priorityFilter").value;

    const filteredTasks = tasks.filter(task => {
        const matchesText = task.title.toLowerCase().includes(searchText);
        const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter;
        return matchesText && matchesPriority;
    });

    filteredTasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>Date: ${task.date}</p>
                <p>Priority: ${task.priority}</p>
            </div>

            <div>
                <span class="btn-edit" onclick="editTask(${index})">✏ Edit</span><br>
                <span class="btn-delete" onclick="deleteTask(${index})">🗑 Delete</span>
            </div>
        `;

        container.appendChild(div);
    });
}

// Edit task
function editTask(index) {
    editIndex = index;
    const task = tasks[index];

    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskDate").value = task.date;
    document.getElementById("taskPriority").value = task.priority;

    document.getElementById("formTitle").innerText = "Edit Task";
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

// Save to local storage + render
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Clear form
function clearForm() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskPriority").value = "Medium";
}

// Search + Filter listeners
document.getElementById("searchInput").addEventListener("input", renderTasks);
document.getElementById("priorityFilter").addEventListener("change", renderTasks);

// Initial render
renderTasks();
