const toDo = (title, description, dueDate, priority) => {
    let status = false

    return { title, description, dueDate, priority, status }
}

const toggleStatus = (status) => {
    return !status
}

export { toDo, toggleStatus }
