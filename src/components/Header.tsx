import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./Header.css"

const Header = () => {

  const {admin, logout} = useAuth();
  return (
    <header>
        <ul>
            <li><NavLink to="/">Startsida</NavLink></li>
            <li><NavLink to="/products">Produkter</NavLink></li>
            <li>
              {
              !admin ? <NavLink to="/login">Logga in</NavLink> : <button onClick={logout}>Logga ut</button>
              }
            </li>
        </ul>
    </header>
  )
}

export default Header