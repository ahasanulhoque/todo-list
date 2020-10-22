const renderSidebar = () => {
    //render the sidebar
    //should have project titles and todo titles
}

const renderMain = () => {
    //render the main part for each project
}


//Below function is immediately executed to load on page load
const renderPage = (() => {
    const content = document.querySelector('#content');

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    const newProject = document.createElement('button');
    newProject.innerHTML = 'New Project';
    newProject.id = 'new-project';

    const defaultProjectSide = document.createElement('h3');
    defaultProjectSide.innerHTML = 'Default project';

    sidebar.appendChild(newProject);
    sidebar.appendChild(defaultProjectSide);
    content.appendChild(sidebar);

    const defaultProject = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const newToDo = document.createElement('button');

    projectTitle.innerHTML = 'Default Project';

    newToDo.innerHTML = 'New ToDo';
    newToDo.classList.add('new-to-do');

    defaultProject.appendChild(projectTitle);
    defaultProject.appendChild(newToDo);

    
    content.appendChild(defaultProject);
})();

export {renderPage};