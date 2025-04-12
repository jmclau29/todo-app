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


let initialProject = new Project('Home');
projects.push(initialProject);

export { projects };