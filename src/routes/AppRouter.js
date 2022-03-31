import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  LandingPage  from '../components/LandingPage'
import Registro from '../components/Registro'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/registro' element={<Registro/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter