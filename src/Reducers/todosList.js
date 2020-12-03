import { add_todo, get_todos, update_todo_status } from "../actions/todos"

export default function todosList(state = [], action) {
    switch (action.type) {
        case get_todos:
            return action.todos
        case add_todo:
            return [
                ...state,
                action.todoItem
            ]
        case update_todo_status:
            return state.map((item) => {
                return item.id === action.todoId ? { ...item, status: action.newTodoStatus } : item
            });
        default:
            return state
    }

}