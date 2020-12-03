
export const get_todos = 'get_todos'
export const add_todo = 'add_todo_item'
export const update_todo_status = 'update_todo_status'

//get all todos action
export const getTodos = (todos) => {
    return {
        type: get_todos,
        todos
    }
}

//get all todos action
export const addTodo = (todoItem) => {
    return {
        type: add_todo,
        todoItem
    }
}

export const updateTodoStatus = (newTodoStatus, todoId) => {
    return {
        type: update_todo_status,
        newTodoStatus,
        todoId
    }
}

export const handleAddTodo = (todoItem) => {
    // const todos = JSON.parse(localStorage.getItem('todos'))
    return (dispatch) => {
        dispatch(addTodo(todoItem))
    }

}

export const handleUpdateTodoStatus = (newStatus, todoId) => {
    // const todos = JSON.parse(localStorage.getItem('todos'))
    return (dispatch) => {
        dispatch(updateTodoStatus(newStatus, todoId))
    }

}

