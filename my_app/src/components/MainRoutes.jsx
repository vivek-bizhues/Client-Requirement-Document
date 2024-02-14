import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

const MainRoutes = () => {
  return (
    <div>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  </Routes>
    </div>
  )
}

export default MainRoutes
