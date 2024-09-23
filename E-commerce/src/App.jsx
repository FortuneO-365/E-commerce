import React, { useEffect } from 'react'
import Nav from './pages/nav/Nav'

function App() {
  useEffect(()=>{
    fetch("http://localhost:9000/customers")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  },[])
  return (
    <Nav/>
  )
}

export default App
