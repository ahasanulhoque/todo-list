import {toDo} from './todo-logic.js';
import {renderPage} from './render-page.js'
import {showToDoForm, removeToDoForm} from './render-todo.js'

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
                    console.log(newToDo);
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