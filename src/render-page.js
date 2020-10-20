const renderPage = (() => {
    const content = document.querySelector('#content');
    const defaultProject = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const newProject = document.createElement('button');
    const newToDo = document.createElement('button');

    projectTitle.innerHTML = 'Default Project';

    newProject.innerHTML = 'New Project';
    newProject.id = 'new-project';

    newToDo.innerHTML = 'New ToDo';
    newToDo.classList.add('new-to-do');

    defaultProject.appendChild(projectTitle);
    defaultProject.appendChild(newToDo);

    content.appendChild(newProject);
    content.appendChild(defaultProject);
})();

export {renderPage};