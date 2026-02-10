import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { Admin, LoginCredentials, AuthResponse, AuthContextType } from "../types/auth.types";

//Skapar context
const AuthContext = createContext<AuthContextType | null >(null);

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const login = async (credentials: LoginCredentials) => {

        try {
            const res = await fetch("http://localhost:5001/admins", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            if(!res.ok) throw new Error("Inloggnignen misslyckades");

            const data = await res.json() as AuthResponse;

            localStorage.setItem("token", data.token);
            setAdmin(data.admin)
        } catch (error) {
            throw error;
        }

    }

    const logout = () => {
        localStorage.removeItem("token");
        setAdmin(null);
    }

    return (
        <AuthContext.Provider value={{admin, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () : AuthContextType => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth måste användas inom en AuthProvider");
    }

    return context;
}