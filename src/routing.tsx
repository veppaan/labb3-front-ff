import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import OneProduct from "./pages/OneProductPage";

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
                path: "/add",
                element: (
                    <ProtectedRoute>
                        <AddPage />
                    </ProtectedRoute>
                ) 
            },
            {
                path: "/edit/:id",
                element: (
                    <ProtectedRoute>
                        <EditPage />
                    </ProtectedRoute>
                ) 
            },
            {
                path: "/oneproduct/:id",
                element: (
                        <OneProduct />
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