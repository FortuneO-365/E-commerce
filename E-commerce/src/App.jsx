import React, { useEffect } from 'react'

function App() {
  return (
    useEffect(()=>{
      fetch("http://localhost:9000/customers")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
    },[])
  )
}

export default App
