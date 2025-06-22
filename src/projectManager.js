let projects = [];

export class Project {
    constructor(title) {
        this.title = title;
    }

    addProject() {
        if (this.title === 'Home') {
            console.log('You cannot make this project!');
            return;
        }
        for (let i = 0; i < projects.length; i++) {
            if (this.title === projects[i].title) {
                console.log('You cannot make this project!');
                return;
            }
        }
        projects.push(this);
    }

    removeProject() {
        for (let i = 0; i < projects.length; i++) {
            if (this.title === projects[i].title) {
                projects.splice(i, 1);
                console.log(projects);
                return;
            }
        }
    }
}

export const saveProjects = () => {
    localStorage.setItem('projectsStorage', JSON.stringify(projects));
    console.log(localStorage.getItem('projectsStorage'));
}

export const loadProjects = () => {
    if (localStorage.getItem('projectsStorage') === null) {
        return;
    }
    projects.length = 1;
    let loadedProjectsString = localStorage.getItem('projectsStorage');
    let loadedProjects = JSON.parse(loadedProjectsString);

    for (let i = 1; i < loadedProjects.length; i++) {
        loadedProjects[i] = new Project(loadedProjects[i].title);
        loadedProjects[i].addProject();
    }

}

let initialProject = new Project('Home');
projects.push(initialProject);

export { projects };