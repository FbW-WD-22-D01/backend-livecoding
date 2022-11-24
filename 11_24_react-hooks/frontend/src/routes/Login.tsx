import './Login.css'
import * as React from 'react'
import useUser from '../hooks/useUser'
import { Link } from 'react-router-dom'

export default function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const user = useUser()
  const [error, setError] = React.useState(false)

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    const success = await user.login(email, password)

    if(!success) {
      setError(true)
    }
  }

  return (
    <form className='Login' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor='email'>Email</label>
      <input 
        id='email' 
        type='email' 
        placeholder="Email..."
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Passwort</label>
      <input 
        id='password' 
        type='password' 
        placeholder="Password..."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button>Send</button>
      <Link to='/register'>ich will mich registrieren</Link>
      {error && <p className='error'>Etwas ist schief gelaufen!</p>}
    </form>
  )
}