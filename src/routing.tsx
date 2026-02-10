import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

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
                element: (
                    <ProtectedRoute>
                        <ProductsPage />
                    </ProtectedRoute>
                ) 
            },
            {
                path: "/login",
                element: <LoginPage />
            }
        ]
    }
])

export default router;