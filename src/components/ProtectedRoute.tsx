import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: ReactNode
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({children}) => {

    const {admin} = useAuth();

    if(!admin){
        return <Navigate to="/login" replace />
    }

    return(
        <>
        {children}
        </>
    )
}

export default ProtectedRoute