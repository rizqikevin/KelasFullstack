document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    const noteForm = document.getElementById("note-form");
    const noteInput = document.getElementById("note-input");
    const noteList = document.getElementById("note-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function saveNotes() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.name;
            if (task.completed) {
                li.classList.add("completed");
            }

            li.addEventListener("click", () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Hapus";
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    function renderNotes() {
        noteList.innerHTML = "";
        notes.forEach((note, index) => {
            const li = document.createElement("li");
            li.textContent = note;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Hapus";
            deleteBtn.addEventListener("click", () => {
                notes.splice(index, 1);
                saveNotes();
                renderNotes();
            });

            li.appendChild(deleteBtn);
            noteList.appendChild(li);
        });
    }

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (taskInput.value.trim() === "") return;
        tasks.push({ name: taskInput.value, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = "";
    });

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (noteInput.value.trim() === "") return;
        notes.push(noteInput.value);
        saveNotes();
        renderNotes();
        noteInput.value = "";
    });

    renderTasks();
    renderNotes();
});
