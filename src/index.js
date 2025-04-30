import "./styles.css";
import { projects, Project } from "./projectManager";
import { Task, tasks } from "./taskManager";
import { initialDOMLoad } from "./initialDOMLoad";
import { interfaceManager } from "./UI";

initialDOMLoad();
interfaceManager().renderNavbar();
interfaceManager().renderDisplay();
console.log(projects);
console.log(tasks);


//hardcoded stuff for testing.
for (let i = 0; i < 5; i++) {
    const newTask = new Task(`${i}`, 'Buy flowers for my wife.');
    newTask.addTaskToTasks();
}

interfaceManager().renderDisplay();
interfaceManager().renderNavbar();