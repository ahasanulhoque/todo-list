const renderSidebar = (projectName, index) => {
    //render the sidebar
    //should have project titles and todo titles

    const sidebar = document.querySelector('#sidebar');

    const projectSide = document.createElement('section');  //The sidebar instance of the whole project
    projectSide.dataset.index = index;
    projectSide.classList.add('project-sidebar');

    const projectSideName = document.createElement('h3');
    projectSideName.dataset.index = index;
    projectSideName.innerHTML = projectName;

    projectSide.appendChild(projectSideName);
    sidebar.appendChild(projectSide);
}

const renderSidebarTodos = () => {
    //This funciton will update the sidebar when a new todo is created
}

const renderMain = (content, projectTitle, index) => {
    //This function renders the project in full on the page

    //The full view of the project will be a section with id='project-full'
    //If this section already exists (project is already in full view), remove it:
    if(document.querySelector('#project-full')){
        content.removeChild(document.querySelector('#project-full'));
    }
    

    const projectMainDOM = document.createElement('section');
    projectMainDOM.id = 'project-full';
    projectMainDOM.dataset.index = index;                   //Give the div a data-index that is
                                                            //equal to the project's index in the
                                                            //project array

    const projectTitleDOM = document.createElement('h2');
    projectTitleDOM.innerHTML = projectTitle;
    projectMainDOM.appendChild(projectTitleDOM);
    
    const toDosDOM = document.createElement('secton');
    toDosDOM.id = 'todos-list';
    projectMainDOM.appendChild(toDosDOM);

    /* Removing this to make objects more loosely coupled
    if(toDosArray){
        //If there are already toDos in the project, they will be children of the below section:
        const toDosDOM = document.createElement('section');

        toDosArray.forEach((toDo) => {
            //Render each toDo in the array passed to the renderMain function:
            const toDoDOM = document.createElement('section');
            toDoDOM.classList.add('to-do');

            const titleDOM = document.createElement('h3');
            titleDOM.innerHTML = toDo.title;
            toDoDOM.appendChild(titleDOM);

            const descriptionDOM = document.createElement('p');
            descriptionDOM.innerHTML = toDo.description;
            toDoDOM.appendChild(descriptionDOM);

            const dueDateDOM = document.createElement('p');
            dueDateDOM.innerHTML = toDo.dueDate;
            toDoDOM.appendChild(dueDateDOM);

            //May need to take priorityDOM out if it is not displayed on page
            const priorityDOM = document.createElement('p');
            priorityDOM.innerHTML = toDo.priority;
            toDoDOM.appendChild(priorityDOM);

            toDosDOM.appendChild(toDoDOM);
        });
        projectMainDOM.appendChild(toDosDOM);
    }*/

    const newToDo = document.createElement('button');
    newToDo.innerHTML = 'New ToDo';
    newToDo.id = 'new-to-do';
    projectMainDOM.appendChild(newToDo);
   
    content.appendChild(projectMainDOM);
}


//Below function is immediately executed to load on page load
const renderPage = (() => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('section');
    sidebar.id = 'sidebar';

    const sidebarTitle = document.createElement('h2');
    sidebarTitle.innerHTML = 'Projects'

    const newProject = document.createElement('button');
    newProject.innerHTML = 'New Project';
    newProject.id = 'new-project';

    sidebar.appendChild(sidebarTitle);
    sidebar.appendChild(newProject);
    content.appendChild(sidebar);

    /*
    const defaultProject = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const newToDo = document.createElement('button');

    projectTitle.innerHTML = 'Default Project';

    newToDo.innerHTML = 'New ToDo';
    newToDo.classList.add('new-to-do');

    defaultProject.appendChild(projectTitle);
    defaultProject.appendChild(newToDo);

    
    content.appendChild(defaultProject);
    */
})();

export {renderSidebar, renderMain, renderPage};