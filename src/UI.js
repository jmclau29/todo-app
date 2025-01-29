import { tasks } from "./taskManager";
import { projects } from "./projectManager";

//this UI module handles UI functionality. Basically, DOM manipulation.

export const interfaceManager = () => {
    const projectNav = document.querySelector('.navbar');
    const projectNavList = document.createElement('ul');
    projectNav.appendChild(projectNavList);

    const makeNavbar = () => {
        projectNavList.textContent = '';
        for (let i = 0; i < projects.length; i++) {
            let navListItem = document.createElement('li');
            navListItem.classList.add(`${projects[i]}`);
            navListItem.classList.add('navListItem');
            navListItem.textContent = `${projects[i]}`;
            projectNavList.appendChild(navListItem);
        }
    }

    return { makeNavbar };
}




