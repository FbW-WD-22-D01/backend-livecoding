import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import * as React from 'react'
import UserDetails from './components/UserDetails'



function App() {
  const [mode, setMode] = React.useState('login')
  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    fetch('http://localhost:3001/user/loggedIn', {
        credentials: 'include',
      }). then((response) => {
        console.log(response)
        if (response.status === 200){
         setLoggedIn(true)
        }
      })
      .catch((err) => console.log(err))
  },[])
  
  
  
  if(loggedIn) return (
    <div className='App'>
      <UserDetails setLoggedIn={setLoggedIn}/>
    </div>
  )


  return (
    <div className='App'>
      {mode === 'login' && <Login onRegisterSwitch={() => setMode('register')} setLoggedIn={setLoggedIn}/>}
      {mode === 'register' && <Register onLoginSwitch={() => setMode('login')}/>}
    </div>
  )
}

export default App
