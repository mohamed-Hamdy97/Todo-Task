import React from 'react'
import CreateTodoBtn from '../components/CreateTodoBtn'
import TodoCategories from '../components/TodoCategories'
import { connect } from "react-redux";

const MyTodos = ({ todos }) => {
    console.log('ds', todos);

    return (
        <div className="list-todos">
            <div className="list-todos-title">
                <h1>My Todos</h1>
            </div>
            <div className="list-todos-content">
                <div>
                    <TodoCategories todos={todos} />
                    <CreateTodoBtn />
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    console.log('sta', state.todos);
    return state
}

export default connect(mapStateToProps)(MyTodos)