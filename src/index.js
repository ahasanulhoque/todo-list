import {toDo} from './todo-logic.js';
import {renderPage} from './render-page.js'
import {createToDo} from './render-todo.js'

//Test toDo object
const hw = toDo('Homework', 'Homework', '12/1/20', 1);
console.log(hw);

const content = document.querySelector('#content');

content.onclick = function(e){
    //Listen for creation of newToDos
    let button = e.target;
    if (button.className == 'new-to-do'){
        //Call a form function from a render module
        createToDo(content);
    }
}