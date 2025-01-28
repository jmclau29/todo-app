import "./styles.css";
import { projects, addProject, removeProject } from "./projectManager";
import { Task, tasks } from "./taskManager";
import { initialDOMLoad } from "./initialDOMLoad";

initialDOMLoad();
console.log(projects);

const newTask = new Task('Buy flowers', 'Buy flowers for my wife.');
console.log(newTask);

newTask.addTaskToTasks();
console.log(tasks);

const newerTask = new Task('bruh', 'bruhscription');
console.log(newerTask);
newerTask.addTaskToTasks();
console.log(tasks);