import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <StartPage />
            },
            {
                path: "/products",
                element: <ProductsPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            }
        ]
    }
])

export default router;