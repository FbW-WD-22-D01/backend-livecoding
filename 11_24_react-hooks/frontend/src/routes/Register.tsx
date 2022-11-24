import './Register.css'

export default function Register () {

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className='Register' onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' placeholder="Email..."/>
      <label htmlFor='password'>Passwort</label>
      <input id='password' type='password' placeholder="Password..."/>
      <button>Send</button>
    </form>
  )
}