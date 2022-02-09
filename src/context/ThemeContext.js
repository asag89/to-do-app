
import { FaMoon, FaSun } from "react-icons/fa";

import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

    const [darkTheme] = useState({ t: "-d", i: <FaSun /> })
    const [lightTheme] = useState({ t: "-l", i: <FaMoon /> })

    const [theme, setTheme] = useState(darkTheme)

    const changeTheme = () => {
        setTheme(theme === darkTheme ? lightTheme : darkTheme)
    }
    
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
