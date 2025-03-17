document.addEventListener("DOMContentLoaded", () => {
    const zadanie = document.getElementById("zadanie");
    const dodaj = document.getElementById("dodaj");
    const lista = document.getElementById("lista");
    
    function getTasks() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        lista.innerHTML = "";
        const tasks = getTasks();
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Usuń";
            deleteButton.addEventListener("click", () => {
                removeTask(index);
            });
            
            li.appendChild(deleteButton);
            lista.appendChild(li);
        });
    }

    dodaj.addEventListener("click", () => {
        const task = zadanie.value.trim();
        if (task) {
            const tasks = getTasks();
            tasks.push(task);
            saveTasks(tasks);
            renderTasks();
            zadanie.value = "";
        }
    });

    function removeTask(index) {
        const tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    }

    renderTasks();
});