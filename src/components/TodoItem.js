import React from 'react'
import { handleUpdateTodoStatus } from '../actions/todos';
import { formateDate } from '../utils/helpers';
import { connect } from "react-redux";

const TodoItem = ({ todoItem, dispatch }) => {
    const { id, title, description, status, startDate, endDate, assignedTo, priority } = todoItem ? todoItem : null

    const active = (e) => {
        if (e.target.value !== status) {
            dispatch(handleUpdateTodoStatus(e.target.value, id))
        }

    }

    return (
        <li className="todo">
            <div className="todo-content">
                <div className="todo-title">{title}</div>
                <p className="todo-descreption">{description}</p>
            </div>
            <div className="deadline-section">
                <div>Deadline</div>
                <p>from: {formateDate(startDate)}  to:  {formateDate(endDate)}</p>
            </div>
            <div className="Assigned-section deadline-section">
                <div>Assigned To</div>
                <p>{assignedTo}</p>
            </div>
            <div className="last-section">
                {/* <div className="priority">{priority}</div> */}

                <div className="todo-satus-btn">
                    <div className="todo-satus-changer">
                        <select defaultValue={status} onClick={(e) => { active(e) }}>
                            <option value="move" disabled>Move to...</option>
                            <option value="toDo" >To DO</option>
                            <option value="inProgress" >In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                </div>
            </div>
        </li>
    )

}

export default connect()(TodoItem)