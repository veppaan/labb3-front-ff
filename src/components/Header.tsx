import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./Header.css"

const Header = () => {

  const {admin, logout} = useAuth();

  return (
    <header>
      <div style={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
        {
        !admin ? <></> : <p style={{display:"flex", justifyContent: "center", alignContent: "center", fontSize: "1.2em", fontWeight: "600", color: "purple"}}>Hej {admin?.firstname}!</p>
        }
        <ul>
            <li><NavLink to="/">Startsida</NavLink></li>
            <li><NavLink to="/products">Produkter</NavLink></li>
            <li style={{whiteSpace: "nowrap"}}>
              {
              !admin ? <NavLink to="/login">Logga in</NavLink> : <button onClick={logout}>Logga ut</button>
              }
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header