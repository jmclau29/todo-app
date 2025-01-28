import "./styles.css";
import { projects, Project } from "./projectManager";
import { Task, tasks } from "./taskManager";
import { initialDOMLoad } from "./initialDOMLoad";

initialDOMLoad();
console.log(projects);

const newTask = new Task('Buy flowers', 'Buy flowers for my wife.');
newTask.addTaskToTasks();