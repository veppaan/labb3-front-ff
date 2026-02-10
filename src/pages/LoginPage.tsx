import { useState } from "react"

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
    }

  return (
    <div>
        <h1>Logga in</h1>
        <form onSubmit={handleClick}>
            {error && (
                <p>{error}</p>
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
            type="text" 
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