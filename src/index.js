import {renderSidebar, renderSidebarTodos, renderMain, renderPage} from './render-page.js'
import {Project} from './project-logic.js'
import {toDo, toggleStatus} from './todo-logic.js';
import {showProjectForm, renderProject} from './render-project.js'
import {showToDoForm, removeToDoForm, renderToDo, expandToDo} from './render-todo.js'

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
            renderMain(content, projectsList[click.dataset.index].name, click.dataset.index);
            projectsList[click.dataset.index].todos.forEach((todo) => {
                renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                            todo.dueDate, todo.priority, projectsList[click.dataset.index].todos.indexOf(todo));
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
        //Listen for creation of new todos or deletion of existing todos
        let button = e.target;

        //Location of the selected project in the projects array, used in several of below if statements
        let projectIndex = document.querySelector('#project-full').getAttribute('data-index');

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
                                        newToDo.priority, projectsList[selectedProjectDOM.dataset.index].todos.indexOf(newToDo));

                        //Update the sidebar with the new todo
                        renderSidebarTodos(document.querySelector('#sidebar').querySelector(`[data-index="${selectedProjectDOM.dataset.index}"]`).querySelector('.todos-sidebar'),
                                            newToDo.title, newToDo.dueDate)
                        
                        
                        console.log(newToDo);
                    }
                }
            }
        } else if(button.getAttribute('class') == 'expand-todo'){
            expandToDo(document.querySelector('#todos-list').querySelector(`[data-index="${button.getAttribute('data-index')}"]`));
        } else if(button.getAttribute('class') == 'edit-todo'){
            alert('edit');
        } else if(button.getAttribute('class') == 'check-todo'){
            //projectsList[projectIndex].todos[button.getAttribute('data-index')].toggleStatus();
            toggleStatus(projectsList[projectIndex].todos[button.getAttribute('data-index')].status);
            console.log(projectsList[projectIndex].todos[button.getAttribute('data-index')]);
        } else if(button.getAttribute('class') == 'delete-todo'){
            //Button to delete todos

            //First, remove the deleted todo from its project's todos array
            
            let todoIndex = button.getAttribute('data-index');
            projectsList[projectIndex].deleteToDo(projectsList[projectIndex].todos, todoIndex);
            console.log(projectsList[projectIndex]);

            //Next, remove the deleted todo from the page.
            //Will need to render all todos again since data-indices need to be changed
            document.querySelector('#todos-list').querySelectorAll('*').forEach(n => n.remove());

            projectsList[projectIndex].todos.forEach((todo) => {
                renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                            todo.dueDate, todo.priority, projectsList[projectIndex].todos.indexOf(todo));            
            });
        }
    }
})();

//Change todo.priority from integer to string (high, medium, low)?

/*
11/10/20 NOTES:
STILL NEED TO ADD:
EDIT FUNCITONALITY
LOCALSTORAGE
DATE-FNS
*/