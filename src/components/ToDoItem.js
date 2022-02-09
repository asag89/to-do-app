
import { ToDoContext } from "../context/ToDoContext"
import { ThemeContext } from "../context/ThemeContext"

import { useContext } from "react"
import { Link } from "react-router-dom"

const ToDoItem = ({ toDoItem }) => {

    const { deleteToDos, editToDo } = useContext(ToDoContext)

    const { theme} = useContext(ThemeContext)

    return (
        <div className={`toDoItem toDoItem${theme.t}`}>
            <div className="toDoItem-field">
                <div>{toDoItem.text}</div>
            </div>
            <div className="toDoItem-control">
                <div className={`priority priority${theme.t}`}>{toDoItem.priority}</div>
                <Link to="/edit-toDo" onClick={() => editToDo(toDoItem)} className={`btn-update btn-update${theme.t}`}>Update</Link>
                <button onClick={() => deleteToDos(toDoItem.id)} className={`btn-delete btn-delete${theme.t}`}>Complete</button>
            </div>
        </div>
    )
}

export default ToDoItem 