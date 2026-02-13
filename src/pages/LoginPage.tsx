import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {login, admin} = useAuth();
    const navigate = useNavigate();

    //Control if login user
    useEffect(() => {
        if(admin){
            navigate("/products");
        }
    }, [admin])

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            await login({username, password});
            navigate("/products");
            
        } catch (error) {
            setError("Inlogging misslyckad, kontrollera inloggningsuppgifter och försök igen.")
        }
    }

  return (
    <div>
        <h1>Logga in</h1>
        <form onSubmit={handleClick}>
            {error && (
                <p className="errorMsg">{error}</p>
            )}
            <label htmlFor="username">Användarnamn</label>
            <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Skriv ditt användarnamn" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Lösenord</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Skriv ditt lösenord..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="loginBtn" style={{color: "white", backgroundColor: "blue", padding: "8px 20px", borderRadius: "8px", border: "none", fontSize: "1em", cursor: "pointer"}}>Logga in</button>
        </form>
    </div>
  )
}

export default LoginPage