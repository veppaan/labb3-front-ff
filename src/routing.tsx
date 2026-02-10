import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./components/Layout";

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
            }
        ]
    }
])

export default router;