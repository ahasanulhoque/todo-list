import { removeToDoForm } from "./render-todo";

const Project = (name) => {
    let todos = [];

    const deleteToDo = (todosArray, removedTodoIndex) => {
        todosArray.splice(removedTodoIndex, 1);
    }

    return {name, todos, deleteToDo}
}

const deleteProject = (projectsList, deletedProjectIndex) => {
    projectsList.splice(deletedProjectIndex, 1);
}

export { Project, deleteProject }