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

    //The below element will contain the list of the project's todos
    const todosList = document.createElement('secton');
    todosList.classList.add('todos-sidebar');

    projectSide.appendChild(projectSideName);
    projectSide.appendChild(todosList);
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

    const projectTitleDOM = document.createElement('h2');
    projectTitleDOM.innerHTML = projectTitle;
    projectMainDOM.appendChild(projectTitleDOM);
    
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