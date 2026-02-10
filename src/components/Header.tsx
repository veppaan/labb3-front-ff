import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <ul>
            <li><NavLink to="/">Startsida</NavLink></li>
            <li><NavLink to="/products">Produkter</NavLink></li>
            <li><NavLink to="/login">Logga in</NavLink></li>
        </ul>
    </header>
  )
}

export default Header