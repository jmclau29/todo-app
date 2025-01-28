import { projects } from "./HomeProjectLoad"

export class Project {
    constructor(title) {
        this.title = title;
    }

    addProject = (projectTitle) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i] === projectTitle) {
                console.log('that Project already exists!');
                return;
            }
        }
        projects.push(projectTitle);
        projects.sort;
    }

    removeProject = (projectTitle) => {
        if (projectTitle === 'Home') {
            console.log("You can't delete this project!");
            return;
        } else {
            for (let i = 0; i < projects.length; i++) {
                if (projectTitle === projects.length[i]) {
                    projects.splice(i, 1);
                }
            }
        }
    }
}

export { projects };