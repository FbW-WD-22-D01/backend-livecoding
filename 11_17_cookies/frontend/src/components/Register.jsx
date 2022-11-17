import * as React from 'react'
import './Register.css'

export default function Register () {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])
  // errors: ['password: password too weak']
  const [registered, setRegistered] = React.useState(false)

  const submit = async (e) => {
    e.preventDefault()
    console.log('submit', {name, email, password})

    const response = await fetch('http://localhost:3001/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, password, email})
    })

    // response: {status: 400, body: ? }

    if(response.status === 200) {
      setRegistered(true)
    }
    else if(response.status === 400) {
      const result = await response.json()
      // result = [{password:'password too weak'}]
      const errors = []
      for(const row of result.message) {
        // {password:'password too weak'}
        for(const key in row) {
          // key: password
          errors.push(row[key])
        }
      }
      setErrors(errors)
    }
    else {
      setErrors(['Etwas ist schief gelaufen'])
    }
  }

  if(registered) {
    return (
      <h1>Wilkommen</h1>
    )
  }

  return (
    <form className='Register' onSubmit={submit}>
      <h3>Registrieren</h3>
      <input type='text' placeholder='Name...' value={name} onChange={e => setName(e.target.value)}/>
      <input type='email' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Absenden</button>
      {errors.map(error => (
        <div key={error} className='error'>{error}</div>
      ))}
    </form>
  )
}