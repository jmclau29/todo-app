

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
}

export const tasks = [];
export const priorityList = ['Low', 'Medium', 'High'];

