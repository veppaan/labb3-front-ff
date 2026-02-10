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
            <p>Test-footer</p>
        </footer>
    </>
  )
}

export default Layout