
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {

    const { theme, changeTheme} = useContext(ThemeContext)

    return(
        <header className={`header header${theme.t}`}>
            <h1>TO DO APP</h1>
            <button onClick={() => changeTheme()} className={`btn-theme btn-theme${theme.t}`}>{theme.i}</button>
        </header>
    )
}

export default Header