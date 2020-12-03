import { intialTodos } from '../utils/helpers';
import { getTodos } from './todos';


export function getInitialData() {
    // const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : intialTodos
    return (dispatch) => {
        return dispatch(getTodos(intialTodos))
    }
}