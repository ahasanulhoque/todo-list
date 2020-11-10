import { removeToDoForm } from "./render-todo";

const Project = (name) => {
    let todos = [];

    const deleteToDo = (todosArray, removedTodoIndex) => {
        todosArray.splice(removedTodoIndex, 1);
    }

    return {name, todos, deleteToDo}
}

/*Project.prototype.deleteToDo = function(todosArray, removedTodoIndex){
    todosArray.splice(removedTodoIndex, 1);
}*/

export {Project}