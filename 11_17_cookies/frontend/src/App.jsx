import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import * as React from 'react'

function App() {
  const [mode, setMode] = React.useState('login')
  return (
    <div className='App'>
      {mode === 'login' && <Login onRegisterSwitch={() => setMode('register')}/>}
      {mode === 'register' && <Register onLoginSwitch={() => setMode('login')}/>}
    </div>
  )
}

export default App
