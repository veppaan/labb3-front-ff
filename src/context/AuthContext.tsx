import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type { Admin, LoginCredentials, AuthResponse, AuthContextType } from "../types/auth.types";

//Skapar context
const AuthContext = createContext<AuthContextType | null >(null);

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [admin, setAdmin] = useState<Admin | null>(null);

    //logga in användare
    const login = async (credentials: LoginCredentials) => {
        try {
            const res = await fetch("http://localhost:5001/admins/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            if(!res.ok) throw new Error("Inloggningen misslyckades");

            const data = await res.json() as AuthResponse;

            localStorage.setItem("token", data.token);
            setAdmin(data.admin)
        } catch (error) {
            throw error;
        }

    }
    //Logga ut användare genom att ta bort token
    const logout = () => {
        localStorage.removeItem("token");
        setAdmin(null);
    }

    //Autetisera token
    const validateToken = async () => {
        const token = localStorage.getItem("token");

        if(!token){
            return;
        }

        try {
            const res = await fetch("http://localhost:5001/auth", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + token
                }
            });
            if(res.ok){
                const data = await res.json();
                setAdmin(data.user);
            }
        } catch (error) {
            localStorage.removeItem("token");
            setAdmin(null);
        }
    }

    useEffect(() => {
        validateToken();
    }, []);

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