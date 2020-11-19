import {renderPage , renderSidebar , renderMain , removeForm } from './render-page.js'
import {Project, deleteToDo, deleteProject} from './project-logic.js'
import {toDo, toggleStatus} from './todo-logic.js';
import { showProjectForm , updateProjectName } from './render-project.js'
import {showToDoForm, renderToDo, expandToDo, editToDo, toggleTodoStatusClass} from './render-todo.js'
import { saveProjects , getProjects } from './storage-functions.js'

const PageController = (() => {
    //renderPage() runs immediately on page load
    const content = document.querySelector('#content');
    const sidebar = document.querySelector('#sidebar');

    let projectsList = []; //All project objects will go in this array

    //Retrieve projects from storage or push Default project to projectsList if nothing
    //is available in storage or if there is no storage
    projectsList = getProjects('projectsList', projectsList, Project('My first project'));

    //Show the first project in the main view, and render each of its todos
    renderMain(content, projectsList[0].name, 0);
    projectsList[0].todos.forEach((todo, index) => {
        renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                    todo.dueDate, todo.priority, index, todo.status);
    });

    //Render the sidebar with all loaded projects
    projectsList.forEach((project, index) => {
        renderSidebar(project.name, index)
    });

    //Listen for clicks on projects in sidebar, or New Project button to create a project
    sidebar.onclick = function(e){
        let click = e.target;
        if (click.hasAttribute('data-index')){
            //Render the clicked project fully in the main view
            renderMain(content, projectsList[click.dataset.index].name, click.dataset.index);
            projectsList[click.dataset.index].todos.forEach((todo) => {
                renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                            todo.dueDate, todo.priority, projectsList[click.dataset.index].todos.indexOf(todo),
                            todo.status);
            });
        } else if (click.id == 'new-project'){

            //allow user to create a project
            //Call a function to show a form to create a new project

            showProjectForm(content, 'Add');
            //Select the form now shown on screen
            let form = document.querySelector('form');

            //Listen for clicks to add a project, or cancel the project form
            form.onclick = function(f){
                let newButton = f.target;
                if (newButton.tagName == 'BUTTON'){
                    //If either button is clicked, remove the form
                    removeForm(content, form);

                    //If form is submitted, add a project
                    if (newButton.id == 'submit-project'){
                        let newProject = Project(form.elements.namedItem('project-title').value);

                        //Push to projectsList array and test if working
                        projectsList.push(newProject);

                        //Add new project to sidebar
                        renderSidebar(newProject.name, projectsList.indexOf(newProject));
                        
                        //Render the project in full
                        renderMain(content, newProject.name, projectsList.indexOf(newProject));
                        
                        //Save the project to localStorage
                        saveProjects('projectsList', projectsList);
                    }
                }
            }

        }
    }

    content.onclick = function(e){
        //Listen for creation of new todos, or editing or deletion of existing todos
        //Also listen for editing or deletion of currently selected project.
        let button = e.target;

        //Location of the selected project in the projects array, used in several of below if statements
        let projectIndex = document.querySelector('#project-full').getAttribute('data-index');

        if (button.id == 'new-to-do'){
            //Call a form function from a render module
            showToDoForm(content, 'Add');

            //Select the form now shown on screen
            let form = document.querySelector('form');

            //Listen for clicks on new todo form, for submit or cancel buttons
            form.onclick = function(f){
                let newButton = f.target;
                if (newButton.tagName == 'BUTTON'){
                    //If submit or cancel button is selected, remove the form
                    removeForm(content,form);
                    if (newButton.id == 'submit-todo'){
                        //If todo form is submitted instead of canceled
                        //create new todo object
                        let newToDo = toDo(form.elements.namedItem('todo-title').value,
                                            form.elements.namedItem('description').value,
                                            form.elements.namedItem('date').value,
                                            form.elements.namedItem('priority').value);
                        
                        //Push to projects todos array by finding the correct project using the displayed
                        //project's data-index
                        projectsList[projectIndex].todos.push(newToDo);

                        //Render new todo on page
                        renderToDo(document.querySelector('#todos-list'), newToDo.title, newToDo.description, newToDo.dueDate,
                                        newToDo.priority, projectsList[projectIndex].todos.indexOf(newToDo), newToDo.status);
                        
                        //Save the new todo in localStorage
                        saveProjects('projectsList', projectsList);
                    }
                }
            }
        } else if(button.getAttribute('class') == 'expand-todo'){
            expandToDo(document.querySelector('#todos-list').querySelector(`[data-index="${button.getAttribute('data-index')}"]`));
        } else if(button.getAttribute('class') == 'edit-todo'){
            //Show edit form and then pass values to todo object
            showToDoForm(content, 'Edit');
            let form = document.querySelector('form');

            form.onclick = function(f){
                let newButton = f.target;
                if (newButton.tagName == 'BUTTON'){
                    //If submit or cancel button is selected, remove the form
                    removeForm(content,form);
                    if (newButton.id == 'submit-todo'){
                        //If todo form is submitted instead of canceled
                        //Update  todo object
                        projectsList[projectIndex].todos[button.getAttribute('data-index')].title = form.elements.namedItem('todo-title').value;
                        projectsList[projectIndex].todos[button.getAttribute('data-index')].description = form.elements.namedItem('description').value;
                        projectsList[projectIndex].todos[button.getAttribute('data-index')].dueDate = form.elements.namedItem('date').value;
                        projectsList[projectIndex].todos[button.getAttribute('data-index')].priority = form.elements.namedItem('priority').value;

                        //Edit todo DOM object
                        editToDo(document.querySelector('#todos-list').querySelector(`[data-index="${button.getAttribute('data-index')}"]`),
                                 projectsList[projectIndex].todos[button.getAttribute('data-index')].title = form.elements.namedItem('todo-title').value,
                                 projectsList[projectIndex].todos[button.getAttribute('data-index')].description = form.elements.namedItem('description').value,
                                 projectsList[projectIndex].todos[button.getAttribute('data-index')].dueDate = form.elements.namedItem('date').value,
                                 projectsList[projectIndex].todos[button.getAttribute('data-index')].priority = form.elements.namedItem('priority').value);

                        //Save edited todo in localStorage
                        saveProjects('projectsList', projectsList);
                    }
                }
            }
        } else if(button.getAttribute('class') == 'check-todo'){
            //projectsList[projectIndex].todos[button.getAttribute('data-index')].toggleStatus();
            projectsList[projectIndex].todos[button.getAttribute('data-index')].status = toggleStatus(projectsList[projectIndex].todos[button.getAttribute('data-index')].status);
            toggleTodoStatusClass(document.querySelector('#todos-list').querySelector(`[data-index="${button.getAttribute('data-index')}"]`))

            //Save todo status changes to localStorage
            saveProjects('projectsList', projectsList);
        } else if(button.getAttribute('class') == 'delete-todo'){
            //Button to delete todos

            //First, remove the deleted todo from its project's todos array
            
            let todoIndex = button.getAttribute('data-index');
            deleteToDo(projectsList[projectIndex].todos, todoIndex);

            //Next, remove the deleted todo from the page.
            //Will need to render all todos again since data-indices need to be changed
            document.querySelector('#todos-list').querySelectorAll('*').forEach(n => n.remove());

            projectsList[projectIndex].todos.forEach((todo) => {
                renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                            todo.dueDate, todo.priority, projectsList[projectIndex].todos.indexOf(todo),
                            todo.status);            
            });

            //Save projects to localStorage, with todo deleted
            saveProjects('projectsList', projectsList);
        } else if(button.id == 'edit-project'){
            //Funcitonality to edit project

            //Show project form again to edit the project
            showProjectForm(content, 'Edit', projectsList[projectIndex].name);
            //Select the form now shown on screen
            let form = document.querySelector('form');

            //Listen for clicks to add a project, or cancel the project form
            form.onclick = function(f){
                let newButton = f.target;
                if (newButton.tagName == 'BUTTON'){
                    //If either button is clicked, remove the form
                    removeForm(content, form);

                    //If form is submitted, edit the project
                    if (newButton.id == 'submit-project'){
                        //Change the selected project's name
                        projectsList[projectIndex].name = form.elements.namedItem('project-title').value;

                        //Delete projects from sidebar and render sidebar again
                        /*document.querySelector('#sidebar').querySelectorAll('.project-sidebar').forEach(n => n.remove());
                        projectsList.forEach((project, index) => {
                            renderSidebar(project.name, index)
                        });*/

                        //Change the project name in the sidebar
                        updateProjectName(document.querySelector('#sidebar').querySelector(`[data-index="${projectIndex}"]`).querySelector('h3'), projectsList[projectIndex].name);
                        
                        //Change the project name in full project view in DOM
                        updateProjectName(document.querySelector('#project-top-row').querySelector('h2'), projectsList[projectIndex].name);

                        //Save projects to localStorage, with project edited
                        saveProjects('projectsList', projectsList);         
                    }
                }
            }
        } else if(button.id == 'delete-project'){
            //Delete project from projectsList array
            deleteProject(projectsList, document.querySelector('#project-full').dataset.index);

            //Delete projects from sidebar and render sidebar again
            document.querySelector('#sidebar').querySelectorAll('.project-sidebar').forEach(n => n.remove());
            projectsList.forEach((project, index) => {
                renderSidebar(project.name, index)
            });

            //Render new first project in full. Only do this if projectsList is not empty
            if (projectsList.length > 0){
                renderMain(content, projectsList[0].name, 0);
                projectsList[0].todos.forEach((todo) => {
                    renderToDo(document.querySelector('#todos-list'), todo.title, todo.description,
                                todo.dueDate, todo.priority, projectsList[0].todos.indexOf(todo), todo.status);
                });
            } else {
                //If projectsList is empty, remove the project from the full view but do not try
                //to display another program
                content.removeChild(document.querySelector('#project-full'));
            }

            //Save projects to localStorage, with project deleted from it
            saveProjects('projectsList', projectsList);
        }
    }
})();