import "./styles.css";
import { projects, Project } from "./projectManager";
import { Task, tasks } from "./taskManager";
import { initialDOMLoad } from "./initialDOMLoad";
import { renderNav } from "./UI";

initialDOMLoad();

console.log(projects);


const newTask = new Task('Buy flowers', 'Buy flowers for my wife.');
newTask.addTaskToTasks();
console.log(tasks);

const newProject = new Project('School');
newProject.addProject();
console.log(newProject);

renderNav();