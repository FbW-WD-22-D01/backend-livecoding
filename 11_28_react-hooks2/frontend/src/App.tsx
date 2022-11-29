import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register'
import Account from './routes/Account'
import { UserProvider } from './hooks/useUser'


function App() {

  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Account />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App
