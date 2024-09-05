import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'

import Listing from "./pages/listing"

function App() {

  return (
    <div>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
