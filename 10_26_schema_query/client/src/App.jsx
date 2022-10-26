import { useState } from 'react'


import {Route, Routes} from 'react-router-dom';
import User from './pages/User';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/user/:userId" element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
