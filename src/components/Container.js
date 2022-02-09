

import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

const Container = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <div className={theme.container}></div>
    )
}

export default Container