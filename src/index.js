import "./styles.css";
import { projects, Project } from "./projectManager";
import { Task, tasks } from "./taskManager";
import { initialDOMLoad } from "./initialDOMLoad";
import { interfaceManager } from "./UI";

initialDOMLoad();
interfaceManager().renderNavbar();
interfaceManager().renderDisplay();
console.log(projects);


const newTask = new Task('Buy flowers', 'Buy flowers for my wife.');
newTask.addTaskToTasks();
console.log(tasks);
const newerTask = new Task('Buy flowers', 'Buy flowers for my husband.');
newerTask.addTaskToTasks();
console.log(tasks);
interfaceManager().renderDisplay();
const newProject = new Project('School');
newProject.addProject();
interfaceManager().renderNavbar();
console.log(newProject);

