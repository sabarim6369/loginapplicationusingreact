
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from '../frontend/components/login'
import Signup from '../frontend/components/signup'
import Home from './frontend/components/home'
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </Router>
  
  
  )
}

export default App