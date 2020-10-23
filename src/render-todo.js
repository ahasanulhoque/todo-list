//Function for newToDo form
//Show form on page
//On click of submit button, return user values and close form

const showToDoForm = (content) => {
    const newForm = document.createElement('form');

    const toDoTitle = document.createElement('h3');
    toDoTitle.innerHTML = "New ToDo";
    newForm.appendChild(toDoTitle);

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'todo-title');
    titleLabel.innerHTML = 'ToDo Title';
    newForm.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('name', 'todo-title');
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
    submit.id = 'submit-todo';
    submit.innerHTML = 'Add ToDo';
    newForm.appendChild(submit);

    const cancel = document.createElement('button');
    cancel.setAttribute('type', 'button');
    cancel.id = 'cancel-todo';
    cancel.innerHTML = 'Cancel';
    newForm.appendChild(cancel);

    content.appendChild(newForm);
}

//Function to remove form when it is submitted or canceled
const removeToDoForm = (content, form) => {
    content.removeChild(form);
}

//Function to render todo on page
const renderToDo = (projectDOM, title, description, dueDate, priority) => {
    //variableDOM convention used to indicate that these are elements rendered in DOM tree,
    //rather than the variables used in the app's logic

    //This function will also need buttons to set as complete or delete

    const newToDoButton = document.querySelector('#new-to-do');
    
    const toDoDOM = document.createElement('div');
    toDoDOM.classList.add('to-do');

    const titleDOM = document.createElement('h3');
    titleDOM.innerHTML = title;
    toDoDOM.appendChild(titleDOM);

    const descriptionDOM = document.createElement('p');
    descriptionDOM.innerHTML = description;
    toDoDOM.appendChild(descriptionDOM);

    const dueDateDOM = document.createElement('p');
    dueDateDOM.innerHTML = dueDate;
    toDoDOM.appendChild(dueDateDOM);

    //May need to take priorityDOM out if it is not displayed on page
    const priorityDOM = document.createElement('p');
    priorityDOM.innerHTML = priority;
    toDoDOM.appendChild(priorityDOM);

    projectDOM.insertBefore(toDoDOM, newToDoButton);
}

export {showToDoForm, removeToDoForm, renderToDo};