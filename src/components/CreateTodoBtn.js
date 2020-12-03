import React from 'react'
import { Link } from 'react-router-dom'

const CreateTodoBtn = () => {

    return (
        <div className="open-Create-Todo">
            <Link to='/createTodo' className='createTodoBtn'>
            </Link>
        </div>
    )

}

export default CreateTodoBtn