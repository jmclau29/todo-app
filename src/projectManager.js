import { projects } from "./HomeProjectLoad"

const addProject = (projectTitle) => {
    for (i = 0; i < projects.length; i++) {
        if (projects[i] === projectTitle) {
            console.log('that Project already exists!');
            return;
        }
    }
    projects.push(projectTitle);
}

const removeProject = (projectTitle) => {
    if (projectTitle === 'Home') {
        console.log("You can't delete this project!");
        return;
    } else {
        for (i = 0; i < projects.length; i++) {
            if (projectTitle === projects.length[i]) {
                projects.splice(i, 1);
            }
        }
    }
}

export { addProject, removeProject };