import './Register.css'
import useUser from '../hooks/useUser'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Register () {
  const user = useUser()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    const success = await user.register(email, password, name)

    if(!success) setError(true)
  }

  return (
    <form className='Register' onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <label htmlFor='name'>Name</label>
      <input 
        id='name' 
        type='text' 
        placeholder="Name..." 
        value={name} 
        onChange={e => setName(e.target.value)}
      />
      <button>Send</button>
      <Link to='/login'>ich will mich einloggen</Link>
      {error && <p className='error'>Etwas ist schief gelaufen</p>}
    </form>
  )
}