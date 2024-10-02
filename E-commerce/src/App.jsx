import React, { useEffect } from 'react'
import Nav from './pages/nav/Nav'
import "./App.css"
import SignIn from './pages/SignIn/SignIn'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from './pages/main/Main'
import AcctDropdown from './components/AcctDropdown'

function App() {
  useEffect(()=>{
    fetch("http://localhost:9000/customers")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>} >
            <Route index element={<Main/>} />
            <Route path='/login' element={<SignIn/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
