const renderPage = (() => {
    const content = document.querySelector('#content');
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