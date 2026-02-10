
const LoginPage = () => {
  return (
    <div>
        <h1>Logga in</h1>
        <form>
            <label htmlFor="username">Användarnamn</label>
            <input type="text" id="username" name="username" placeholder="Skriv ditt användarnamn" />
            <label htmlFor="password">Lösenord</label>
            <input type="text" id="password" name="password" placeholder="Skriv ditt lösenord..." />
            <button className="loginBtn" style={{color: "white", backgroundColor: "blue", padding: "8px 20px", borderRadius: "8px", border: "none", fontSize: "1em", cursor: "pointer"}}>Logga in</button>
        </form>
    </div>
  )
}

export default LoginPage