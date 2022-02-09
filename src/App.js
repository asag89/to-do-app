
import ToDoContextProvider from "./context/ToDoContext"
import ThemeContextProvider from "./context/ThemeContext"

// Components
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
import Form from "./components/Form"

// router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

    return (
        <ThemeContextProvider>
            <ToDoContextProvider>
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<ToDoList />} />
                            <Route path="/add-toDo" element={<Form />} />
                            <Route path="/edit-toDo" element={<Form />} />
                        </Routes>
                    </div>
                </Router>
            </ToDoContextProvider>
        </ThemeContextProvider>
    )
}

export default App