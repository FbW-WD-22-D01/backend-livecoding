import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import * as React from 'react'
import UserDetails from './components/UserDetails'

const initialToken = localStorage.getItem('login-token')

function App() {
  const [mode, setMode] = React.useState('login')
  const [token, setToken] = React.useState(initialToken)

  if(token) return (
    <div className='App'>
      <UserDetails token={token} setToken={setToken}/>
    </div>
  )

  return (
    <div className='App'>
      {mode === 'login' && <Login onRegisterSwitch={() => setMode('register')} setToken={setToken}/>}
      {mode === 'register' && <Register onLoginSwitch={() => setMode('login')}/>}
    </div>
  )
}

export default App
