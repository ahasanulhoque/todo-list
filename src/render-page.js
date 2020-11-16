const renderSidebar = (projectName, index) => {
    //render the sidebar
    //should have project titles

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

    //This section will have the project title and buttons to edit the project title or delete
    //the project
    const projectTopRow = document.createElement('div');
    projectTopRow.id = 'project-top-row';

    const projectTitleDOM = document.createElement('h2');
    projectTitleDOM.innerHTML = projectTitle;
    projectTopRow.appendChild(projectTitleDOM);

    const editProjectButton = document.createElement('button');
    editProjectButton.id = 'edit-project';
    editProjectButton.setAttribute('title', 'Edit Project');
    editProjectButton.innerHTML = '\u270e';
    projectTopRow.appendChild(editProjectButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.id = 'delete-project';
    deleteProjectButton.setAttribute('title', 'Delete Project');
    deleteProjectButton.innerHTML = 'X';
    projectTopRow.appendChild(deleteProjectButton);

    projectMainDOM.appendChild(projectTopRow);
    
    //This section will have all the todos
    const toDosDOM = document.createElement('secton');
    toDosDOM.id = 'todos-list';
    projectMainDOM.appendChild(toDosDOM);

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