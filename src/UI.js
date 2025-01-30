import { tasks } from "./taskManager";
import { projects } from "./projectManager";

//this UI module handles UI functionality. Basically, DOM manipulation.

export const interfaceManager = () => {
    const projectNav = document.querySelector('.navbar');


    const renderNavbar = () => {
        clearNavList();
        const projectNavList = document.createElement('ul');
        projectNavList.setAttribute('id','nav-list');
        projectNav.appendChild(projectNavList);
        for (let i = 0; i < projects.length; i++) {
            let navListItem = document.createElement('li');
            navListItem.setAttribute('id',`${projects[i]}`);
            navListItem.classList.add('navListItem');
            navListItem.textContent = `${projects[i]}`;
            projectNavList.appendChild(navListItem);
        }
    }

    //clears the NavList so it can be rendered/updated.
    const clearNavList = () => {
        while (projectNav.firstChild) {
            projectNav.removeChild(projectNav.firstChild);
        }
    }

    return { renderNavbar };
}




