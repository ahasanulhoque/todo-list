import { format } from 'date-fns'



//Function for newToDo form
//Show form on page
//On click of submit button, return user values and close form

const showToDoForm = (content, action, existingTitle, existingDescription, existingDueDate, existingPriority) => {
    //action is a string, used to show either 'Add' or 'Edit' on the form, according to
    //what was clicked

    const newForm = document.createElement('form');
    newForm.id = 'todo-form';

    const toDoTitle = document.createElement('h3');
    toDoTitle.innerHTML = `${action} Todo`;
    newForm.appendChild(toDoTitle);

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'todo-title');
    titleLabel.innerHTML = 'ToDo Title';
    newForm.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('name', 'todo-title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'ToDo Title');
    titleInput.setAttribute('required', '');
    if (existingTitle) {titleInput.setAttribute('value', existingTitle);}
    newForm.appendChild(titleInput);
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = 'ToDo Description';
    newForm.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'ToDo Description');
    if (existingDescription) {descriptionInput.setAttribute('value', existingDescription);}
    newForm.appendChild(descriptionInput);

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.innerHTML = 'Due Date';
    newForm.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('required', '');
    if (existingDueDate) {dateInput.setAttribute('value', existingDueDate);}
    newForm.appendChild(dateInput);

    const priorityWrapper = document.createElement('div');
    priorityWrapper.id = 'priority-question-wrapper';

    const priorityInputLow = document.createElement('input');
    priorityInputLow.id = 'low-priority';
    priorityInputLow.setAttribute('name', 'priority');
    priorityInputLow.setAttribute('type', 'radio');
    priorityInputLow.setAttribute('value', 'Low priority');
    if (existingPriority == 'Low priority') {priorityInputLow.setAttribute('checked', '');}
    priorityWrapper.appendChild(priorityInputLow);

    const priorityLabelLow = document.createElement('label');
    priorityLabelLow.setAttribute('for', 'low-priority');
    priorityLabelLow.innerHTML = 'Low priority';
    priorityWrapper.appendChild(priorityLabelLow);

    const priorityInputMedium = document.createElement('input');
    priorityInputMedium.id = 'medium-priority';
    priorityInputMedium.setAttribute('name', 'priority');
    priorityInputMedium.setAttribute('type', 'radio');
    priorityInputMedium.setAttribute('value', 'Medium priority');
    if (existingPriority == 'Medium priority') {priorityInputMedium.setAttribute('checked', '');}
    priorityWrapper.appendChild(priorityInputMedium)

    const priorityLabelMedium = document.createElement('label');
    priorityLabelMedium.setAttribute('for', 'medium-priority');
    priorityLabelMedium.innerHTML = 'Medium priority';
    priorityWrapper.appendChild(priorityLabelMedium);

    const priorityInputHigh = document.createElement('input');
    priorityInputHigh.id = 'high-priority';
    priorityInputHigh.setAttribute('name', 'priority');
    priorityInputHigh.setAttribute('type', 'radio');
    priorityInputHigh.setAttribute('value', 'High priority');
    if (existingPriority == 'High priority') {priorityInputHigh.setAttribute('checked', '');}
    priorityWrapper.appendChild(priorityInputHigh)

    const priorityLabelHigh = document.createElement('label');
    priorityLabelHigh.setAttribute('for', 'high-priority');
    priorityLabelHigh.innerHTML = 'High priority';
    priorityWrapper.appendChild(priorityLabelHigh);

    newForm.appendChild(priorityWrapper);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.id = 'submit-todo';
    submit.innerHTML = `${action} Todo`;
    newForm.appendChild(submit);

    const cancel = document.createElement('button');
    cancel.setAttribute('type', 'button');
    cancel.id = 'cancel-todo';
    cancel.innerHTML = 'Cancel';
    newForm.appendChild(cancel);

    content.appendChild(newForm);
}

//Function to render todo on page
const renderToDo = (toDosDOM, title, description, dueDate, priority, todoIndex, status) => {
    //variableDOM convention used to indicate that these are elements rendered in DOM tree,
    //rather than the variables used in the app's logic

    //This function will also need buttons to set as complete or delete

    const toDoDOM = document.createElement('section');
    toDoDOM.classList.add('todo');
    toDoDOM.dataset.index = todoIndex;

    if (priority == 'Low priority'){
        toDoDOM.classList.add('low-priority');
    } else if(priority == 'Medium priority'){
        toDoDOM.classList.add('medium-priority');
    } else if(priority == 'High priority'){
        toDoDOM.classList.add('high-priority');
    }

    if (status){
        toDoDOM.classList.add('todo-completed');
    }

    const todoTopRow = document.createElement('div');
    todoTopRow.classList.add('todo-top-row');

    const todoNameAndDate = document.createElement('div');
    todoNameAndDate.classList.add('todo-name-and-date');

    const titleDOM = document.createElement('h3');
    titleDOM.classList.add('todo-title');
    titleDOM.innerHTML = title;
    todoNameAndDate.appendChild(titleDOM);

    const dueDateDOM = document.createElement('p');
    dueDateDOM.classList.add('todo-due-date');
    dueDateDOM.innerHTML = format(Date.UTC(dueDate.slice(0,4), dueDate.slice(5,7)-1, dueDate.slice(8,10))+86400000, 'MM/dd/yyyy');
    todoNameAndDate.appendChild(dueDateDOM);

    todoTopRow.appendChild(todoNameAndDate);

    //Section for buttons
    const todoButtons = document.createElement('div');
    todoButtons.classList.add('todo-buttons');

    const expandButton = document.createElement('button');
    expandButton.classList.add('expand-todo');
    expandButton.setAttribute('title', 'Expand Todo');
    expandButton.dataset.index = todoIndex;
    expandButton.innerHTML = '+';
    todoButtons.appendChild(expandButton);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-todo');
    editButton.classList.add('edit-button');
    editButton.setAttribute('title', 'Edit Todo');
    editButton.dataset.index = todoIndex;
    editButton.innerHTML = 'Edit';
    todoButtons.appendChild(editButton);

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-todo');
    checkButton.setAttribute('title', 'Change Todo Status');
    checkButton.dataset.index = todoIndex;
    checkButton.innerHTML = 'Complete?';
    todoButtons.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-todo');
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('title', 'Delete Todo');
    deleteButton.dataset.index = todoIndex;
    deleteButton.innerHTML = 'X'
    todoButtons.appendChild(deleteButton)

    todoTopRow.appendChild(todoButtons);
    toDoDOM.appendChild(todoTopRow);

    const todoDetails = document.createElement('div');
    todoDetails.classList.add('todo-details');
    todoDetails.classList.add('todo-details-hidden');

    const descriptionDOM = document.createElement('p');
    descriptionDOM.classList.add('todo-description');
    descriptionDOM.innerHTML = description;
    todoDetails.appendChild(descriptionDOM);

    const priorityDOM = document.createElement('p');
    priorityDOM.classList.add('todo-priority');
    priorityDOM.innerHTML = priority;
    todoDetails.appendChild(priorityDOM);
    
    toDoDOM.appendChild(todoDetails);

    toDosDOM.appendChild(toDoDOM);
}

const expandToDo = (todoDOM) => {
    //Change expand button to opposite
    let expandButton = todoDOM.querySelector('.expand-todo');
    if (expandButton.innerHTML == '+'){
        expandButton.innerHTML = '-';
    } else {
        expandButton.innerHTML = '+';
    }

    //Toggle class for details section
    let detailsDOM = todoDOM.querySelector('.todo-details');
    detailsDOM.classList.toggle('todo-details-hidden');
}

const editToDo = (todoDOM, title, description, dueDate, priority) => {
    //Function to edit a todo already in the DOM tree

    let titleDOM = todoDOM.querySelector('.todo-title');
    titleDOM.innerHTML = title;
    
    let descriptionDOM = todoDOM.querySelector('.todo-description');
    descriptionDOM.innerHTML = description;

    let dueDateDOM = todoDOM.querySelector('.todo-due-date');
    dueDateDOM.innerHTML = format(Date.UTC(dueDate.slice(0,4), dueDate.slice(5,7)-1, dueDate.slice(8,10))+86400000, 'MM/dd/yyyy');

    let priorityDOM = todoDOM.querySelector('.todo-priority');
    priorityDOM.innerHTML = priority;

    //Change todo DOM object's priority class, to update styling
    if (priority == 'Low priority'){
        todoDOM.classList.add('low-priority');
        todoDOM.classList.remove('medium-priority');
        todoDOM.classList.remove('high-priority');
    } else if(priority == 'Medium priority'){
        todoDOM.classList.add('medium-priority');
        todoDOM.classList.remove('low-priority');
        todoDOM.classList.remove('high-priority');
    } else if(priority == 'High priority'){
        todoDOM.classList.add('high-priority');
        todoDOM.classList.remove('low-priority');
        todoDOM.classList.remove('medium-priority');
    }
}

const toggleTodoStatusClass = (todoDOM) => {
    //This function toggles the class used to style a todo as completed
    todoDOM.classList.toggle('todo-completed');
}

export { showToDoForm ,  
         renderToDo , 
         expandToDo , 
         editToDo,
         toggleTodoStatusClass };