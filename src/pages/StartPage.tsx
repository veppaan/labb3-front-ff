import { useAuth } from "../context/AuthContext"

const StartPage = () => {

  const {admin} = useAuth();

  return (
    <div>
        <h1>Startsida</h1>
        <b>Välkommen {admin?.firstname}</b>
    </div>
  )
}

export default StartPage