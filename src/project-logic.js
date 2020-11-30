const Project = (name) => {
    let todos = []

    return { name, todos }
}

const deleteToDo = (todosArray, removedTodoIndex) => {
    todosArray.splice(removedTodoIndex, 1)
}

const deleteProject = (projectsList, deletedProjectIndex) => {
    projectsList.splice(deletedProjectIndex, 1)
}

export { Project, deleteToDo, deleteProject }
