import React, { useEffect } from 'react'
import Nav from './pages/nav/Nav'
import "./App.css"
import SignIn from './pages/SignIn/SignIn'

function App() {
  useEffect(()=>{
    fetch("http://localhost:9000/customers")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
    <Nav/>
    
    <SignIn/>
    </>
  )
}

export default App
