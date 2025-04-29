

export class Task {
    constructor(title, description, dueDate, priority = 'Medium', project = 'Home') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.isComplete = 'false';
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

export const tasks = [];
export const priorityList = ['Low', 'Medium', 'High'];

