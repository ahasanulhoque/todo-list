import {toDo} from './todo-logic.js';
import {renderPage} from './render-page.js'
import {showToDoForm, removeToDoForm, renderToDo} from './render-todo.js'

//Test toDo object
const hw = toDo('Homework', 'Homework', '12/1/20', 1);
console.log(hw);

const content = document.querySelector('#content');

content.onclick = function(e){
    //Listen for creation of newToDos
    let button = e.target;
    if (button.className == 'new-to-do'){
        //Call a form function from a render module
        showToDoForm(content);

        let form = document.querySelector('form');

        //Listen for clicks on new todo form, for submit or cancel buttons
        form.onclick = function(f){
            let newButton = f.target;
            if (newButton.tagName == 'BUTTON'){
                removeToDoForm(content,form);
                if (newButton.id = 'submit-to-do'){
                    //If todo form is submitted instead of canceled
                    //create new todo object
                    let newToDo = toDo(form.elements.namedItem('title').value,
                                        form.elements.namedItem('description').value,
                                        form.elements.namedItem('date').value,
                                        form.elements.namedItem('priority').value);
                    console.log(newToDo); //Test if working
                    //Next: render todo on page
                    const currentProject = document.querySelector('#content div');
                    renderToDo(currentProject, newToDo.title, newToDo.description,
                                newToDo.dueDate, newToDo.priority);
                }
            }
        }
    }
}

//Each project will be an array
//When a new ToDo is created, it will be added to project array
//Iterate over project array and use ToDo.priority to determine where
//to push ToDo into project array

//Use data-index for arrays and submit buttons?
//Or only have submit button for shown project/array