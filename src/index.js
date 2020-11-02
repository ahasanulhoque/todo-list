import {renderSidebar, renderSidebarTodos, renderMain, renderPage} from './render-page.js'
import {Project} from './project-logic.js'
import {toDo} from './todo-logic.js';
import {showProjectForm, renderProject} from './render-project.js'
import {showToDoForm, removeToDoForm, renderToDo} from './render-todo.js'

const PageController = (() => {
    const content = document.querySelector('#content');
    const sidebar = document.querySelector('#sidebar');
    const defaultProject = Project('Default project');

    let projectsList = []; //All project objects will go in this array
    projectsList.push(defaultProject);
    let projectCount = 0; //This variable will be used to store
                          //arrays in projectsList at index

    //Add default project to sidebar
    renderSidebar(defaultProject.name, projectsList.indexOf(defaultProject));

    //Show default project in main view
    renderMain(content, defaultProject.name, projectsList.indexOf(defaultProject));

    //Listen for clicks on projects in sidebar, or New Project button to create a project
    sidebar.onclick = function(e){
        let click = e.target;
        if (click.hasAttribute('data-index')){
            //Render the clicked project fully in the main view
            renderMain(content, projectsList[click.dataset.index].name, click.dataset.index, 
                        projectsList[click.dataset.index].todos);
            projectsList[click.dataset.index].todos.forEach((todo) => {
                renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                            todo.dueDate, todo.priority);
            });
        } else if (click.id == 'new-project'){

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

                        //Add new project to sidebar
                        renderSidebar(newProject.name, projectsList.indexOf(newProject));
                    }
                }
            }

        }
    }

    content.onclick = function(e){
        //Listen for creation of new todos
        let button = e.target;

        if (button.id == 'new-to-do'){
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
                        
                        //Push to projects todos array by finding the correct project using the displayed
                        //project's data-index
                        let selectedProjectDOM = document.querySelector('#project-full');
                        projectsList[selectedProjectDOM.dataset.index].todos.push(newToDo);

                        //Render new todo on page
                        renderToDo(document.querySelector('#todos-list'), newToDo.title, newToDo.description, newToDo.dueDate,
                                        newToDo.priority);

                        //Update the sidebar with the new todo
                        renderSidebarTodos(document.querySelector('#sidebar').querySelector(`[data-index="${selectedProjectDOM.dataset.index}"]`).querySelector('.todos-sidebar'),
                                            newToDo.title, newToDo.dueDate)
                        
                        
                        //Next: render todo on page
                        //renderToDo(currentProject, newToDo.title, newToDo.description,
                        //            newToDo.dueDate, newToDo.priority);
                    }
                }
            }
        }
    }
})();

//Change todo.priority from integer to string (high, medium, low)?

//When a new ToDo is created, it will be added to project array
//Iterate over project array and use ToDo.priority to determine where
//to push ToDo into project array