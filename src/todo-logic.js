const toDo = (title, description, dueDate, priority) => {
    let completed = false;

    const toggleStatus = () => {
        completed = !completed;
    }

    return {title, description, dueDate, priority, completed, toggleStatus}
};



export {toDo};