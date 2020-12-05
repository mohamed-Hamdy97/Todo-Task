import React, { useState } from 'react'
import { formatToDoItem } from '../utils/helpers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

const CreateTodoForm = ({ handleAddTodoItem }) => {
    const [title, setTitle] = useState('');
    const [description, setDecription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());
    const [priority, setPriority] = useState('low');
    const [user, setUser] = useState('Ikin');
    const history = useHistory();

    const handleSubmitAndResetForm = ev => {
        ev.preventDefault();

        handleAddTodoItem(formatToDoItem(title, description, priority, startDate, endDate, 'toDo', user))
        // Reset value
        setTitle('');
        setDecription('');
        history.push("/");
    };

    const handleItemChange = ev => {
        ev.target.id === "new-title-item" ?
            setTitle(ev.target.value)
            : setDecription(ev.target.value)
    }

    const active = (e, type) => {
        if (e.target.value !== priority) {
            type !== 'user' ? setPriority(e.target.value) : setUser(e.target.value)
        }

    }

    return (
        <form method="POST" onSubmit={handleSubmitAndResetForm}>
            <div className="row">
                <label>title</label>
                <input
                    type="text"
                    className="form-control"
                    id="new-title-item"
                    name="new-title-item"
                    placeholder="I want to do..."
                    value={title}
                    width={300}
                    onChange={handleItemChange}
                    autoFocus
                />
            </div>
            <div className="row">
                <label >Description</label>
                <input
                    type="text"
                    className="form-description"
                    id="new-decription-item"
                    name="new-decription-item"
                    placeholder="Enter the description of the To do"
                    value={description}
                    onChange={handleItemChange}
                />
            </div>
            <div className="deadline-select">
                <div className="row">
                    <label>Start Date</label>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                <div className="row">
                    <label>End Date</label>
                    <DatePicker selected={endDate} onChange={date => setEndtDate(date)} />
                </div>
            </div>
            <div className="priority">
                <label>Select Priority </label>
                <select defaultValue={priority} onClick={(e) => { active(e, 'priority') }}>
                    <option value="move" disabled>select Priority...</option>
                    <option value="low" >Low</option>
                    <option value="medium" >Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            {/*  note these user should be added as a reducer in the store but just because the time but the concept is clear */}
            <div className="priority">
                <label>Select User </label>
                <select defaultValue={user} onClick={(e) => { active(e, 'user') }}>
                    <option value="move" disabled>select user...</option>
                    <option value="mohamed" >Mohamed</option>
                    <option value="marwa" >Marwa</option>
                    <option value="Ikin">Ikin Guluzada</option>
                </select>
            </div>
            <div className="col-auto">
                <button
                    type="submit"
                    data-testid="form-submit"
                    className="add-btn"
                    disabled={!title || !description}
                    aria-label="Add todo item">
                    Submit
                        </button>
            </div>
        </form>
    )

}



export default CreateTodoForm