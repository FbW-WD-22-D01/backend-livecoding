import './Login.css'

export default function Login () {

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className='Login' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' placeholder="Email..."/>
      <label htmlFor='password'>Passwort</label>
      <input id='password' type='password' placeholder="Password..."/>
      <button>Send</button>
    </form>
  )
}