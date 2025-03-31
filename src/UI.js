import { Task, tasks, priorityList } from "./taskManager";
import { Project, projects } from "./projectManager";

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
            let navListDiv = document.createElement('div');
            navListDiv.setAttribute('id', `${projects[i].title}`);
            navListDiv.setAttribute('class', 'navlist-div');
            projectNavList.appendChild(navListDiv)

            //add a button to allow deletion of a project from the navlist
            let deleteProjectButton = document.createElement('button');
            deleteProjectButton.setAttribute('type', 'button');
            deleteProjectButton.classList.add('delete-project-button');
            deleteProjectButton.textContent = 'x';

            //add an event listener for deleteButtonProject
            deleteProjectButton.addEventListener('click', (e) => {
                if (e.target.classList.contains('delete-project-button')) {
                    for (let i = 0; i < projects.length; i++) {
                        if (e.target.parentElement.id === projects[i].title) {
                            projects[i].removeProject();
                        }
                    }
                    renderNavbar();
                }
            })


            let navListItem = document.createElement('button');
            navListItem.setAttribute('type', 'button');
            navListItem.classList.add('project-nav-button')
            navListItem.textContent = `${projects[i].title}`;

            //add an event listener to the navListItem
            navListItem.addEventListener('click', () => { filterTasks(projects[i].title) });
            navListDiv.appendChild(navListItem);
            navListDiv.appendChild(deleteProjectButton);
        }

        let navListLastItem = document.createElement('button');
        navListLastItem.setAttribute('type', 'button');
        navListLastItem.setAttribute('id', 'show-all-tasks')
        navListLastItem.textContent = 'Show all Tasks';
        navListLastItem.addEventListener('click', () => { renderDisplay() });
        projectNavList.appendChild(navListLastItem);

        let newProjectButton = document.createElement('button');
        newProjectButton.setAttribute('type', 'button');
        newProjectButton.textContent = 'Make a new Project';
        newProjectButton.classList.add('newProjectButton');
        projectNavList.appendChild(newProjectButton);

        newProjectButton.addEventListener('click', (e) => {
            if (e.target.classList.contains('newProjectButton')) {
                newProjectButton.remove();

                let newProjectInput = document.createElement('input');
                newProjectInput.setAttribute('type', 'text');
                newProjectInput.setAttribute('id', 'project-name');
                projectNavList.appendChild(newProjectInput);

                let newProjectSubmit = document.createElement('button');
                newProjectSubmit.setAttribute('type', 'button');
                newProjectSubmit.setAttribute('id', 'project-submit');
                newProjectSubmit.textContent = 'Submit New Project';
                projectNavList.appendChild(newProjectSubmit);

                newProjectInput.addEventListener('keypress', (e) => {
                    if (e.key === "Enter") {
                        newProjectSubmit.click();
                    }
                })

                newProjectSubmit.addEventListener('click', (e) => {
                    if (newProjectInput.value.trim() == '' || newProjectInput.value == newProjectInput.defaultValue) {
                        console.log('bad project name');
                        return;
                    }
                    newProjectSubmit.remove();
                    if (e.target.id === 'project-submit') {
                        let newProject = new Project(`${newProjectInput.value.trim()}`);
                        newProject.addProject();
                        renderNavbar();
                        console.log(projects);
                    }
                })
            }
        });
        let homeDeleteButton = document.getElementById('Home').lastChild;
        homeDeleteButton.remove();
    }

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

        const newTaskContainer = document.createElement('div');
        newTaskContainer.setAttribute('id', 'new-task-container');
        display.appendChild(newTaskContainer);

        const newTaskButton = document.createElement('button');
        newTaskButton.setAttribute('type', 'button');
        newTaskButton.setAttribute('id', 'new-task-button');
        newTaskButton.textContent = 'New Task';
        newTaskContainer.appendChild(newTaskButton);

        newTaskButton.addEventListener('click', (e) => {
            if (e.target.id === 'new-task-button') {
                newTaskButton.remove();

                let newTaskInputDiv = document.createElement('div');
                newTaskInputDiv.id = 'new-task-input-div';
                newTaskContainer.appendChild(newTaskInputDiv);

                let newTaskTitleInput = document.createElement('input');
                newTaskTitleInput.setAttribute('id', 'new-task-title');
                newTaskTitleInput.classList.add('input-field');
                newTaskTitleInput.setAttribute('type', 'text');
                newTaskTitleInput.setAttribute('placeholder', 'Title');
                newTaskInputDiv.appendChild(newTaskTitleInput);

                let newTaskDescriptionInput = document.createElement('input');
                newTaskDescriptionInput.setAttribute('id', 'new-task-description');
                newTaskDescriptionInput.classList.add('input-field');
                newTaskDescriptionInput.setAttribute('type', 'text');
                newTaskDescriptionInput.setAttribute('placeholder', 'Description');
                newTaskInputDiv.appendChild(newTaskDescriptionInput);

                //get today's date for the min
                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth() + 1;
                let yyyy = today.getFullYear(); //this whole thing is super cool!

                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                today = `${yyyy}-${mm}-${dd}`;


                let newtaskDueDate = document.createElement('input');
                newtaskDueDate.setAttribute('id', 'new-task-due-date');
                newtaskDueDate.classList.add('input-field')
                newtaskDueDate.setAttribute('type', 'date');
                newtaskDueDate.setAttribute('min', today);
                newtaskDueDate.setAttribute('value', today);
                newTaskInputDiv.appendChild(newtaskDueDate);



                let newTaskPriority = document.createElement('select');
                newTaskPriority.setAttribute('id', 'priority-select');
                newTaskPriority.classList.add('input-field');
                for (let i = 0; i < priorityList.length; i++) {
                    let option = document.createElement('option');
                    option.value = priorityList[i];
                    option.text = 'Priority: ' + priorityList[i];
                    newTaskPriority.appendChild(option);
                }
                newTaskInputDiv.appendChild(newTaskPriority);

                let newTaskProject = document.createElement('select');
                newTaskProject.setAttribute('id', 'new-task-project');
                newTaskProject.classList.add('input-field');
                for (let i = 0; i < projects.length; i++) {
                    let option = document.createElement('option');
                    option.value = projects[i].title;
                    option.text = 'Project: ' + projects[i].title;
                    newTaskProject.appendChild(option);
                }
                newTaskInputDiv.appendChild(newTaskProject);

                let newTaskSubmit = document.createElement('button');
                newTaskSubmit.setAttribute('id', 'new-task-submit');
                newTaskSubmit.classList.add('input-field');
                newTaskSubmit.setAttribute('type', 'button');
                newTaskSubmit.textContent = 'Create New Task';
                newTaskInputDiv.appendChild(newTaskSubmit);

                newTaskSubmit.addEventListener('click', (e) => {
                    if (e.target.id === 'new-task-submit') {
                        let title = newTaskTitleInput.value.trim();
                        let description = newTaskDescriptionInput.value.trim();
                        let dueDate = newtaskDueDate.value;
                        let priority = newTaskPriority.value;
                        let project = newTaskProject.value;

                        if (title == '' || title == newTaskTitleInput.defaultValue) {
                            console.log('bad title');
                            return;
                        }
                        if (description == '' || description == newTaskDescriptionInput.defaultValue) {
                            console.log('bad task description');
                            return;
                        }

                        let newTask = new Task(title, description, dueDate, priority, project);
                        newTask.addTaskToTasks();
                        console.log(tasks);
                    }
                    renderDisplay();
                })
            }
        })

        const taskListContainer = document.createElement('ul');
        taskListContainer.setAttribute('id', 'task-list-container');
        display.appendChild(taskListContainer);

        // START HERE
        //change the display for the task to make it an expandable box, which can manipulate the title, description, duedate, priority, and project
        for (let i = 0; i < value.length; i++) {
            let taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            if (value[i].dueDate) {
                taskItem.textContent = `${value[i].title}, due ${value[i].dueDate}`;
                // below meant for editing overdue task's with a red dueDate, continue later
               /*  if (value[i].dueDate > today) {
                    taskItem.classList.add('overdue');
                } */
            } else {
                taskItem.textContent = `${value[i].title}`;
            }
            taskListContainer.appendChild(taskItem);

            let taskContent = document.createElement('div');
            taskContent.classList.add('content-div', 'content-hidden');
            taskItem.appendChild(taskContent);

            let taskDescription = document.createElement('p');
            taskDescription.textContent = `${value[i].description}`;
            taskContent.appendChild(taskDescription);
            let taskPriority = document.createElement('p');
            taskPriority.textContent = `Priority: ${value[i].priority}`;
            taskContent.appendChild(taskPriority);
            let taskProject = document.createElement('p');
            taskProject.textContent = `Project: ${value[i].project}`;
            taskContent.appendChild(taskProject);

            taskItem.addEventListener('click', () => {
                taskContent.classList.toggle('content-hidden');
            });
        }
    }

    const clearTaskList = () => {
        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }
    }




    //functionality for buttons to filter the tasks array down to by their category
    const filterTasks = (projectName) => {
        let displayArray = tasks.filter(task => task.project === projectName);
        renderDisplay(displayArray);
    }

    return { renderNavbar, renderDisplay, filterTasks };
}