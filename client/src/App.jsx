import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Monuments from "./pages/Monuments"
// import Monument from "./pages/Monument"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/monuments" element={<Monuments/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
       

      </Routes>

    </Router>
  )
}

export default App