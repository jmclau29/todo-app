import { projects } from "./projectManager";

export class Task {
    constructor(title, description, dueDate = new Date(), priority = 'Medium', project = 'Home') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.isComplete = 'false';
    }

    addTaskToTasks() {
        tasks.push(this);
    }

    markComplete() {
        this.isComplete = !this.isComplete;
    }
}

export const tasks = [];

