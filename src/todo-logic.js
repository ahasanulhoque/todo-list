const toDo = (title, description, dueDate, priority) => {
    let status = false;

    /*const toggleStatus = () => {
        status = !status;
    }*/

    return {title, description, dueDate, priority, status}
};

const toggleStatus = (status) => {
    status = !status;
}


export {toDo, toggleStatus};