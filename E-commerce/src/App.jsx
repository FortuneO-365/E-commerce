import React, { useEffect } from 'react'
import Nav from './pages/nav/Nav'
import "./App.css"
import SignIn from './pages/SignIn/SignIn'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from './pages/main/Main'
import AcctDropdown from './components/AcctDropdown'
import Signup from './pages/Signup/Signup'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>} >
            <Route index element={<Main/>} />
            <Route path='/login' element={<SignIn/>} />
            <Route path='/signup' element={<Signup/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
