import Header from "./Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>
            <p>Labb 3 - Fördjupad frontend</p>
        </footer>
    </>
  )
}

export default Layout