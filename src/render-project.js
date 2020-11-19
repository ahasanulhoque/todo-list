const showProjectForm = (content, action) => {
    const projectForm = document.createElement('form');
    projectForm.id = 'project-form';

    const formTitle = document.createElement('h3');
    formTitle.innerHTML = `${action} Project`;
    projectForm.appendChild(formTitle);

    const projectTitleLabel = document.createElement('label');
    projectTitleLabel.setAttribute('for', 'project-title');
    projectTitleLabel.innerHTML = 'Project Title';
    projectForm.appendChild(projectTitleLabel);

    const projectTitleInput = document.createElement('input');
    projectTitleInput.setAttribute('name', 'project-title');
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('placeholder', 'Project Title');
    projectForm.appendChild(projectTitleInput);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'button');
    submit.id = 'submit-project';
    submit.innerHTML = `${action} Project`;
    projectForm.appendChild(submit);

    const cancel = document.createElement('button');
    cancel.setAttribute('type', 'button');
    cancel.id = 'cancel-project';
    cancel.innerHTML = 'Cancel';
    projectForm.appendChild(cancel);

    content.appendChild(projectForm);
}

const updateProjectName = (projectNameDOM, projectName) => {
    projectNameDOM.innerHTML = projectName;
}

export {showProjectForm, updateProjectName}