

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

    changePriority(priority) {
        this.priority = priority;
    }

    changeDate(day, month, year) {
        let date = new Date(`${year}, ${month}, ${day}`);
        this.dueDate = date;
    }
}

export const tasks = [];
export const priorityList = ['Low', 'Medium', 'High'];

