import { Link } from "react-router-dom"
import useUser from "../hooks/useUser"

export default function Account () {
  const user = useUser()

  if(user.loading) return null

  if(!user.user) {
    return (
      <div>
        <h1>you are not logged in</h1>
        <Link to='/login'>zum Login</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Account</h1>
      <p>Name: {user.user.name}</p>
      <p>Email: {user.user.email}</p>
      <button onClick={user.logout}>logout</button>
    </div>
  )
}