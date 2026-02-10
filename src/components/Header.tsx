import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <ul>
            <li><NavLink to="/">Startsida</NavLink></li>
            <li><NavLink to="/products">Produkter</NavLink></li>
        </ul>
    </header>
  )
}

export default Header