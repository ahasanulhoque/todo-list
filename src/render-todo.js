//Function for newToDo form
//Show form on page
//On click of submit button, return user values and close form

//Add the rest of the required ToDo properties to this form
const showToDoForm = (content) => {
    const newForm = document.createElement('form');

    const toDoTitle = document.createElement('h3');
    toDoTitle.innerHTML = "New ToDo";
    newForm.appendChild(toDoTitle);

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerHTML = 'ToDo Title';
    newForm.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'ToDo Title');
    newForm.appendChild(titleInput);
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = 'ToDo Description';
    newForm.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'ToDo Description');
    newForm.appendChild(descriptionInput);

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.innerHTML = 'Due Date';
    newForm.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('placeholder', 'Due Date');
    newForm.appendChild(dateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.innerHTML = 'ToDo priority';
    newForm.appendChild(priorityLabel);

    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('placeholder', 'ToDo Priority');
    newForm.appendChild(priorityInput);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'button');
    submit.id = 'submit-to-do';
    submit.innerHTML = 'Add ToDo';
    newForm.appendChild(submit);

    content.appendChild(newForm);

    //Return user values so index can create new ToDo object?
}

const removeToDoForm = (content, form) => {
    content.removeChild(form);
}

export {showToDoForm, removeToDoForm};