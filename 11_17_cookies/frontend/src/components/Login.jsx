import './Login.css'
import * as React from 'react'
import UserDetails from './UserDetails'

export default function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])
  const [token, setToken] = React.useState('')

  const submit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })

    if(response.status === 200) {
      const token = await response.text()
      setToken(token)
    }
    else {
      setErrors(['Email oder Passwort ist falsch'])
    }
  }

  if(token) {
    return <UserDetails token={token}/>
  }

  return (
    <form className='Login' onSubmit={submit}>
      <h3>Login</h3>
      <input type='email' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Absenden</button>
      {errors.map(error => (
        <div key={error} className='error'>{error}</div>
      ))}
    </form>
  )
}