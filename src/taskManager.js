

export class Task {
    constructor(title, description, dueDate, priority = 'Medium', project = 'Home', isComplete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.isComplete = isComplete;
    }

    toggleComplete() {
        this.isComplete = !this.isComplete;
    }

    addTaskToTasks() {
        tasks.push(this);
    }

    editTask(editedTitle, editedDescription, editeddueDate, editedPriority, editedProject) {
        this.title = editedTitle;
        this.description = editedDescription;
        this.dueDate = editeddueDate;
        this.priority = editedPriority;
        this.project = editedProject;
    }
}

export const saveTasks = () => {
    localStorage.setItem('tasksStorage', JSON.stringify(tasks));
}

export const loadTasks = () => {
    if (localStorage.getItem('tasksStorage') === null) {
        return;
    }
    tasks.length = 0;
    let loadedTasksString = localStorage.getItem('tasksStorage');
    let loadedTasks = JSON.parse(loadedTasksString);
    
    for (let i = 0; i < loadedTasks.length; i++) {
        loadedTasks[i] = new Task(loadedTasks[i].title, loadedTasks[i].description, loadedTasks[i].dueDate, loadedTasks[i].priority, loadedTasks[i].project, loadTasks.isComplete);
        loadedTasks[i].addTaskToTasks();
    }
    }

export const tasks = [];
export const priorityList = ['Low', 'Medium', 'High'];

//use localstorage to save tasks between sessions.
