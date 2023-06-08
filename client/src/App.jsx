import React from 'react'
import Monuments from "./pages/Monuments"
import Monument from "./pages/Monument"
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/monuments" element={<Monuments />} />
        
        <Route path="/monument/:id" element={<Monument/>} />
      </Routes>
    </Router>
  )
}

export default App