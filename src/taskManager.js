import { projects } from "./projectManager";

export class Task {
    constructor(title, description, dueDate, priority, project = 'Home') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    addTaskToTasks() {
        tasks.push(this);
    }
}

export const tasks = [];

