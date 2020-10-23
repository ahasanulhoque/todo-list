const renderSidebar = (projectName, index) => {
    //render the sidebar
    //should have project titles and todo titles

    const sidebar = document.querySelector('#sidebar');

    const projectSide = document.createElement('div');  //The sidebar instance of the whole project
    projectSide.dataset.index = index;
    projectSide.classList.add('project-sidebar');

    const projectSideName = document.createElement('h3');
    projectSideName.dataset.index = index;
    projectSideName.innerHTML = projectName;

    projectSide.appendChild(projectSideName);
    sidebar.appendChild(projectSide);
}

const renderMain = (content, projectTitle, index) => {
    //render the main part for each project

    //Remove whichever project is already shown
    if(document.querySelector('#project-full')){
        content.removeChild(document.querySelector('#project-full'));
    }
    

    const projectMainDOM = document.createElement('div');
    projectMainDOM.id = 'project-full';
    projectMainDOM.dataset.index = index;

    const projectTitleDOM = document.createElement('h2');
    const newToDo = document.createElement('button');

    projectTitleDOM.innerHTML = projectTitle;

    newToDo.innerHTML = 'New ToDo';
    newToDo.id = 'new-to-do';

    projectMainDOM.appendChild(projectTitleDOM);
    projectMainDOM.appendChild(newToDo);

    
    content.appendChild(projectMainDOM);
}


//Below function is immediately executed to load on page load
const renderPage = (() => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('div');
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