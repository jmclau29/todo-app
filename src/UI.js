import { tasks } from "./taskManager";
import { projects } from "./projectManager";

const projectNav = document.querySelector('.navbar');

const renderNav = () => {
    const projectNavList = document.createElement('ul');
    projectNav.appendChild(projectNavList);
    for (let i = 0; i < projects.length; i++) {
        let navListItem = document.createElement('li');
        navListItem.textContent = projects[i];
        projectNavList.appendChild(navListItem);
    }
}

export { renderNav }