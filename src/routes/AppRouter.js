import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from '../components/Categories'
import  LandingPage  from '../components/LandingPage'
import Registro from '../components/Registro'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/categories' element={<Categories/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter