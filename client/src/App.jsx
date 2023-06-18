import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Monuments from "./pages/Monuments"
// import Monument from "./pages/Monument"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Monument from './pages/Monument'
import Order from './pages/Order'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/monuments" exact element={<Monuments/>}/>
        <Route path="/login" exact  element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/monument/:id" exact element={<Monument/>}/>
        <Route path="/order" exact element={<Order/>}/>
       

      </Routes>

    </Router>
  )
}

export default App