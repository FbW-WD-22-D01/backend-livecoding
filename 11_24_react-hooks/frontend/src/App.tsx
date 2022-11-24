import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register'
import Account from './routes/Account'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Account />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
