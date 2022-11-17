import * as React from 'react'
import './Register.css'

export default function Register () {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log('submit', {name, email, password})

    fetch('http://localhost:3001/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, password, email})
    })
  }

  return (
    <form className='Register' onSubmit={submit}>
      <h3>Registrieren</h3>
      <input type='text' placeholder='Name...' value={name} onChange={e => setName(e.target.value)}/>
      <input type='email' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Absenden</button>
    </form>
  )
}