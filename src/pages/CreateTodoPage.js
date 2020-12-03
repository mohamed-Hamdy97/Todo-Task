import React from 'react'
import { connect } from "react-redux";
import { addTodo } from '../actions/todos';
import CreateTodoForm from '../components/CreateTodoForm'

const CreateTodoApp = ({ handleAddItem }) => {
console.log(handleAddItem);
    return (
        <div className="create-todo">
            <div className="list-todos-title">
                <h1>Add New Todo</h1>
            </div>
            <div className='create-todo-form'>
                <CreateTodoForm handleAddTodoItem={handleAddItem} />
            </div>
        </div>
    )

}

const mapDispatchToProps = {
    handleAddItem: addTodo,
};


export default connect(null, mapDispatchToProps)(CreateTodoApp)