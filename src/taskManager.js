

export class Task {
    constructor(title, description, dueDate, priority = 'Medium', project = 'Home') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.isComplete = false;
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

export const restoreTasks = () => {
    let storedTasks = JSON.parse(localStorage.getItem('tasksStorage'));
    tasks.length = 0;
    console.log(storedTasks.length);
    for (let i = 0; i < storedTasks.length; i++) {
        let storedTask = storedTasks[i];
        let restoredTask = new Task(storedTask.title, storedTask.description, storedTask.dueDate, storedTask.priority, storedTask.project);
        restoredTask.addTaskToTasks();
    }
}

export const tasks = [];
export const priorityList = ['Low', 'Medium', 'High'];

//use localstorage to save tasks between sessions.
