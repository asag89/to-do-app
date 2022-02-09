
// components
import ToDoItem from "./ToDoItem"

import { ToDoContext } from "../context/ToDoContext"
import { ThemeContext } from "../context/ThemeContext"

import { useContext, } from "react"
import { Link } from "react-router-dom"

const ToDoList = () => {

    const { toDos } = useContext(ToDoContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`toDoList toDoList${theme.t}`}>
            <div className={`toDoList-control toDoList-control${theme.t}`}>
                    <span>{toDos.length} {toDos.length >1 ? "Tasks": "Task"} Remaining</span>
                    <Link to="/add-toDo" className={`btn-add btn-add${theme.t}`}>Add</Link>
            </div>
            {
                toDos.map((toDoItem) => (
                    <ToDoItem key={toDoItem.id} toDoItem={toDoItem} />
                ))
            }
        </div>
    )
}

export default ToDoList