
import { ThemeContext } from "../context/ThemeContext"
import { ToDoContext } from "../context/ToDoContext"

import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Form = () => {

    const { addToDo, toDoEdit, updateToDo } = useContext(ToDoContext)
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()
    const [text, setText] = useState("")
    const [priority, setPriority] = useState(5)         // default priority
    const location = useLocation().pathname

    useEffect(() => {
        if (toDoEdit.edit === true && location === "/edit-toDo") {
            setText(toDoEdit.toDoItem.text)
            setPriority(toDoEdit.toDoItem.priority)
        }
    }, [toDoEdit])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handlePriorityChange = (e) => {
        setPriority(+e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newToDo = {
            text,
            priority
        }

        if (toDoEdit.edit === true) {
            updateToDo(toDoEdit.toDoItem.id, newToDo)
            navigate("/")       // redirect to homepage
        }
        else {
            addToDo(newToDo)
            navigate("/")       // redirect to homepage
        }
        setText("")
        setPriority(undefined)
    }

    return (
        <form onSubmit={handleSubmit} className={`form form${theme.t}`}>
            <h2 className="form-add-title">{toDoEdit.edit === true ? "Edit Task" : "Add a New Task"}</h2>
            <div>
                <label htmlFor="text" className="form-input-label">To-Do</label>
                <input required={true} onChange={handleTextChange} value={text} type="text" id="form-input" autoComplete={false}/>
            </div>
            <div className="form-add-priority">
                <ul className='form-priority'>
                    <h3 className="form-priority-title">Priority</h3>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num1'
                            name='priority'
                            value='1'
                            onChange={handlePriorityChange}
                            checked={priority === 1}
                        />
                        <label htmlFor='num1'>1</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num2'
                            name='priority'
                            value='2'
                            onChange={handlePriorityChange}
                            checked={priority === 2}
                        />
                        <label htmlFor='num2'>2</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num3'
                            name='priority'
                            value='3'
                            onChange={handlePriorityChange}
                            checked={priority === 3}
                        />
                        <label htmlFor='num3'>3</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num4'
                            name='priority'
                            value='4'
                            onChange={handlePriorityChange}
                            checked={priority === 4}
                        />
                        <label htmlFor='num4'>4</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num5'
                            name='priority'
                            value='5'
                            onChange={handlePriorityChange}
                            checked={priority === 5}
                        />
                        <label htmlFor='num5'>5</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num6'
                            name='priority'
                            value='6'
                            onChange={handlePriorityChange}
                            checked={priority === 6}
                        />
                        <label htmlFor='num6'>6</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num7'
                            name='priority'
                            value='7'
                            onChange={handlePriorityChange}
                            checked={priority === 7}
                        />
                        <label htmlFor='num7'>7</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num8'
                            name='priority'
                            value='8'
                            onChange={handlePriorityChange}
                            checked={priority === 8}
                        />
                        <label htmlFor='num8'>8</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num9'
                            name='priority'
                            value='9'
                            onChange={handlePriorityChange}
                            checked={priority === 9}
                        />
                        <label htmlFor='num9'>9</label>
                    </li>
                    <li className={`form-priority-item form-priority-item${theme.t}`}>
                        <input
                            type='radio'
                            id='num10'
                            name='priority'
                            value='10'
                            onChange={handlePriorityChange}
                            checked={priority === 10}
                        />
                        <label htmlFor='num10'>10</label>
                    </li>
                </ul>
            </div>
            <button type="submit" className={`form-btn-submit form-btn-submit${theme.t}`}>Send</button>
            <Link to="/" className={`form-btn-homepage form-btn-homepage${theme.t}`}>Homepage</Link>
        </form>
    )
}
export default Form