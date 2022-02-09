
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ToDoContext = createContext()

const ToDoContextProvider = ({ children }) => {

    const url = "http://localhost:5000"

    const [toDos, setToDos] = useState([])

    const [toDoEdit, setToDoEdit] = useState({
        toDoItem: {},
        edit: false
    })

    const fetchToDo = async () => {
        const response = await axios.get(`${url}/toDo`)
        setToDos(response.data.sort(((b,a) => a.id- b.id)))             // sorted with sort
    }

    useEffect(() => {
        fetchToDo()
    }, [])

    const deleteToDos = async (id) => {
        await axios.delete(`${url}/toDo/${id}`)
        setToDos(toDos.filter((item) => item.id !== id))

    }

    const addToDo = async (newToDo) => {
        const response = await axios.post(`${url}/toDo`, newToDo)
        setToDos([response.data, ...toDos])
    }

    const updateToDo = async (id, updateToDo) => {
        const response = await axios.put(`${url}/toDo/${id}`, updateToDo)
        setToDos(toDos.map((item) => item.id === id ? { ...item, ...response.data } : item))
        setToDoEdit({
            toDoItem: {},
            edit: false
        })
    }

    const editToDo = (toDoItem) => {
        setToDoEdit({
            toDoItem,
            edit: true
        })
    }

    return (
        <ToDoContext.Provider value={{ toDos, deleteToDos, addToDo, updateToDo, editToDo, toDoEdit }} >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider