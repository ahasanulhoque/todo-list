import {renderSidebar, renderPage} from './render-page.js'
import {Project} from './project-logic.js'
import {toDo} from './todo-logic.js';
import {showProjectForm, renderProject} from './render-project.js'
import {showToDoForm, removeToDoForm, renderToDo} from './render-todo.js'

const PageController = (() => {
    const content = document.querySelector('#content');
    const defaultProject = Project('Default project');

    //Add default project to sidebar
    renderSidebar(defaultProject.name);

    let projectsList = []; //All project objects will go in this array
    projectsList.push(defaultProject);
    let projectCount = 0; //This variable will be used to store
                          //arrays in projectsList at index

    content.onclick = function(e){
        //Listen for creation of new projects or new todos
        let button = e.target;

        if (button.id == 'new-project'){

            //allow user to create a project
            //Call a function to show a form to create a new project

            showProjectForm(content);
            //Select the form now shown on screen
            let form = document.querySelector('form');

            //Listen for clicks to add a project, or cancel the project form
            form.onclick = function(f){
                let newButton = f.target;
                if (newButton.tagName == 'BUTTON'){
                    //If either button is clicked, remove the form
                    removeToDoForm(content, form);

                    //If form is submitted, add a project
                    if (newButton.id == 'submit-project'){
                        let newProject = Project(form.elements.namedItem('project-title').value);

                        //Push to projectsList array and test if working
                        projectsList.push(newProject);
                        console.log(projectsList);

                        //Render new project on page
                        //renderProject(content, newProject.name);

                        //Add new project to sidebar
                        renderSidebar(newProject.name)
                    }
                }
            }

        } else if (button.className == 'new-to-do'){
            //Call a form function from a render module
            showToDoForm(content);

            //Select the form now shown on screen
            let form = document.querySelector('form');

            //Listen for clicks on new todo form, for submit or cancel buttons
            form.onclick = function(f){
                let newButton = f.target;
                if (newButton.tagName == 'BUTTON'){
                    //If submit or cancel button is selected, remove the form
                    removeToDoForm(content,form);
                    if (newButton.id == 'submit-todo'){
                        //If todo form is submitted instead of canceled
                        //create new todo object
                        let newToDo = toDo(form.elements.namedItem('todo-title').value,
                                            form.elements.namedItem('description').value,
                                            form.elements.namedItem('date').value,
                                            form.elements.namedItem('priority').value);
                        console.log(newToDo); //Test if working
                        
                        //Push to projects array and console.log to test if
                        //it's working
                        defaultProject.todos.push(newToDo);
                        console.log(defaultProject);

                        //Next: render todo on page
                        //currentProject needs to be updated to select correct project
                        const currentProject = document.querySelector('#content div');
                        renderToDo(currentProject, newToDo.title, newToDo.description,
                                    newToDo.dueDate, newToDo.priority);
                    }
                }
            }
        }
    }
})();

//10/19/20: Have default project working. Need to be able to make projects
//          allow user to choose which to add to

//Change todo.priority from integer to string (high, medium, low)?

//When a new ToDo is created, it will be added to project array
//Iterate over project array and use ToDo.priority to determine where
//to push ToDo into project array

//Use data-index for arrays and submit buttons?

//10/22/20: Procedure for choosing right project add todo to:
//Show list of all projects in sidebar: should show project name and todo names
//Click on a project to show it on main page
//Project on main page will have add todo form. This form should reference index
//in projects array for the selected project