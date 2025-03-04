This project is to make a todo app for TOP.

Assignment is as follows:

1. Have todos be objects dynamically created using classes. DONE

2. Give the todo objects a title, description, dueDate, and priority. DONE

3. Give the todo list projects. I implemented this using a project making class and a projects array, and gave the todo objects an object property with a default value of 'Home'. DONE

The User should be able to create new projects and choose which project the todos are assigned to. I made a project class that allows for the creation of new projects, and assigned it a method to add the project to the projects array. DONE

4. The application logic (creating new todos, setting todos as complete, changing todo priority etc.) needs to be separate from DOM manipulating logic. I separated them by making separate modules for tasks, projects, and DOM management. DONEish

5. UI should allow the user to
    1. view all projects. DONE
    2. view all todos in each project. DONE
    3. expand a single todo to see/edit details.
        1. Expand a todo.
        2. Change individual todo details (title, description, due date, priority, project)
        3. Check a todo as complete
    4. delete a todo.

6. Consider adding date and time functionality using date-fns.

7. Try adding localStorage to the project using the Web Storage API.