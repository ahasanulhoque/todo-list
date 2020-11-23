//Below function is immediately executed to load on page load
const renderPage = (() => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('section');
    sidebar.id = 'sidebar';

    const sidebarTopWrapper = document.createElement('div');
    sidebarTopWrapper.id = 'sidebar-top-wrapper'

    const sidebarTitle = document.createElement('h2');
    sidebarTitle.innerHTML = 'Projects'
    sidebarTopWrapper.appendChild(sidebarTitle);

    const newProject = document.createElement('button');
    newProject.innerHTML = 'New Project';
    newProject.id = 'new-project';
    sidebarTopWrapper.appendChild(newProject);

    const sidebarListOfProjects = document.createElement('section');
    sidebarListOfProjects.id = 'projects-list';

    sidebar.appendChild(sidebarTopWrapper);
    sidebar.appendChild(sidebarListOfProjects);
    content.appendChild(sidebar);
})();

const renderSidebar = (projectName, index) => {
    //render the sidebar
    //should have project titles

    const sidebarListOfProjects = document.querySelector('#projects-list');

    const projectSide = document.createElement('button');  //The sidebar instance of the whole project
    projectSide.dataset.index = index;
    projectSide.classList.add('project-sidebar');
    projectSide.innerHTML = projectName;

    sidebarListOfProjects.appendChild(projectSide);
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

    const projectButtonWrapper = document.createElement('div');
    projectButtonWrapper.id = 'project-buttons';

    const newToDo = document.createElement('button');
    newToDo.innerHTML = 'New Todo';
    newToDo.id = 'new-todo';
    projectButtonWrapper.appendChild(newToDo);

    const editProjectButton = document.createElement('button');
    editProjectButton.id = 'edit-project';
    editProjectButton.classList.add('edit-button');
    editProjectButton.setAttribute('title', 'Edit Project');
    editProjectButton.innerHTML = '\u270e';
    projectButtonWrapper.appendChild(editProjectButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.id = 'delete-project';
    deleteProjectButton.classList.add('delete-button');
    deleteProjectButton.setAttribute('title', 'Delete Project');
    deleteProjectButton.innerHTML = 'X';
    projectButtonWrapper.appendChild(deleteProjectButton);

    projectTopRow.appendChild(projectButtonWrapper);

    projectMainDOM.appendChild(projectTopRow);
    
    //This section will have all the todos
    const toDosDOM = document.createElement('secton');
    toDosDOM.id = 'todos-list';
    projectMainDOM.appendChild(toDosDOM);
   
    content.appendChild(projectMainDOM);
}

//Function to remove form when it is submitted or canceled
const removeForm = (content, form) => {
    content.removeChild(form);
}

export { renderPage, renderSidebar , renderMain , removeForm };