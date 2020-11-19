const toDo = (title, description, dueDate, priority) => {
    let status = false;

    /*const toggleStatus = () => {
        status = !status;
    }*/

    return {title, description, dueDate, priority, status}
};

const toggleStatus = (status) => {
     return !status;
}


export {toDo, toggleStatus};