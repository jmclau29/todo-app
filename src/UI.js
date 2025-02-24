import { tasks } from "./taskManager";
import { projects } from "./projectManager";

//this UI module handles UI functionality. Basically, DOM manipulation.

export const interfaceManager = () => {
    const projectNav = document.querySelector('#navbar');
    const display = document.querySelector('#display');


    //renders the navbar in the DOM.
    const renderNavbar = () => {
        clearNavList();
        const projectNavTitle = document.createElement('h1');
        projectNavTitle.textContent = 'Projects';
        projectNav.appendChild(projectNavTitle);
        const projectNavList = document.createElement('div');
        projectNavList.setAttribute('id', 'nav-list');
        projectNav.appendChild(projectNavList);
        for (let i = 0; i < projects.length; i++) {
            let navListItem = document.createElement('button');
            navListItem.setAttribute('id', `${projects[i]}`);
            navListItem.classList.add('navListItem');
            navListItem.textContent = `${projects[i]}`;

            //add an event listener to the navListItem
            navListItem.addEventListener('click', () => {filterTasks(projects[i])});
            projectNavList.appendChild(navListItem);
        }
        let navListLastItem = document.createElement('button');
        navListLastItem.textContent = 'Show all Tasks';
        navListLastItem.addEventListener('click', () => {renderDisplay()});
        projectNavList.appendChild(navListLastItem);

        //functionality to change projects
    }

    //clears the NavList so it can be rendered/updated.
    const clearNavList = () => {
        while (projectNav.firstChild) {
            projectNav.removeChild(projectNav.firstChild);
        }
    }

    //a function to render the display for todos.
    const renderDisplay = (value = tasks) => {
        clearTaskList();

        const displayTitle = document.createElement('h1');
        displayTitle.textContent = 'Tasks';
        display.appendChild(displayTitle);

        const taskList = document.createElement('ul');
        display.append(taskList);
        for (let i = 0; i < value.length; i++) {
            let taskItem = document.createElement('li');
            taskItem.setAttribute('id', `${value[i].title}`);
            taskItem.classList.add('taskListItem');
            taskItem.textContent = `Title: ${value[i].title}, description: ${value[i].description}, Due: ${value[i].dueDate}, Priority: ${value[i].priority}, Project: ${value[i].project}`;
            taskList.appendChild(taskItem);
        }

    }

    const clearTaskList = () => {
        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }
    }

    //build an input html that helps input new tasks into the current project.

    //functionality for buttons to filter the tasks array down to by their category
    const filterTasks = (projectName) => {
        let displayArray = tasks.filter(task => task.project === projectName);
        renderDisplay(displayArray);
    }

    return { renderNavbar, renderDisplay, filterTasks };
}