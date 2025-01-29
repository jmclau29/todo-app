import { projects } from "./HomeProjectLoad"

export class Project {
    constructor(title) {
        this.title = title;
    }

    addProject() {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i] === this.title) {
                console.log('that Project already exists!');
                return;
            }
        }
        projects.push(this.title);
        projects.sort;
    }

    removeProject() {
        if (this.title === 'Home') {
            console.log("You can't delete this project!");
            return;
        } else {
            for (let i = 0; i < projects.length; i++) {
                if (this.title === projects.length[i]) {
                    projects.splice(i, 1);
                }
            }
        }
    }
}

export { projects };