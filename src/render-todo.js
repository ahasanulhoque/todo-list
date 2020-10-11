//Function for newToDo form
//Show form on page
//On click of submit button, return user values and close form


const createToDo = (content) => {
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
    
    const submit = document.createElement('button');
    submit.setAttribute('type', 'button');
    submit.innerHTML = 'Add ToDo';
    newForm.appendChild(submit);

    content.appendChild(newForm);
}

export {createToDo};