import "./styles.css";
import { projects, Project } from "./projectManager";
import { Task, tasks } from "./taskManager";
import { initialDOMLoad } from "./initialDOMLoad";
import { interfaceManager } from "./UI";

initialDOMLoad();
interfaceManager().makeNavbar();
console.log(projects);


const newTask = new Task('Buy flowers', 'Buy flowers for my wife.');
newTask.addTaskToTasks();
console.log(tasks);

const newProject = new Project('School');
newProject.addProject();
interfaceManager().makeNavbar();
console.log(newProject);

