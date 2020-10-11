const renderPage = (() => {
    const body = document.querySelector('body');
    const defaultProject = document.createElement('div');
    const projectTitle = document.createElement('h2');

    projectTitle.innerHTML = 'Default Project';

    defaultProject.appendChild(projectTitle);
    body.appendChild(defaultProject);
})();

export {renderPage};