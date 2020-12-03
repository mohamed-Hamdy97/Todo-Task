import React from 'react'
import TodoItem from './TodoItem';

const TodoCategories = ({ todos }) => {
    const todoCategories = [
        { title: 'To Do', key: 'toDo' },
        { title: 'In Progress', key: 'inProgress' },
        { title: 'Done', key: 'done' },
    ];
    console.log('t', todos[0]);
    return (
        <div>
            {todoCategories.map((category) => (
                <div className="todoCategory" key={category.key}>
                    <h2 className="todoCategory-title">{category.title}</h2>
                    <div className="todoCategory-todos">
                        <ol className="todos-List">     {/* change */}
                            {todos.map((item, index) => (
                                item.status === category.key ?
                                    <TodoItem todoItem={item} key={item.id} />
                                    : null
                            ))}
                        </ol>
                    </div>

                </div>
            ))}
        </div>
    )

}


export default TodoCategories