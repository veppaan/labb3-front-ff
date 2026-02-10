import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartPage />
    },
    {
        path: "/products",
        element: <ProductsPage />
    }
])

export default router;