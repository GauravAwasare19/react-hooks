import { useState } from 'react'

import './App.css'

function App() {

  const [val,setVal]=useState("Using state")


  const Change = ()=>{
    setVal("learning state")
  }

  return (
    <div className="App">
      <h1>{val}</h1>
      <button onClick={Change}>Click</button>
    </div>
  )
}

export default App
