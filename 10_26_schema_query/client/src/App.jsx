import { useState } from 'react'


import {Route, Routes} from 'react-router-dom';
import Profile from './pages/Profile';
import Users from './pages/Users';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<Profile/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </>
  )
}

export default App
