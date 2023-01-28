import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [val, setVal] = useState("1st sentence")

  const Change=()=>{
   /* if(val === "1st sentence"){
      setVal("2nd sentence")
    }
    else if(val === "2nd sentence"){
      setVal("1st sentence")
    }
    else{
      setVal("Invalid")
    }*/
    val==="1st sentence" ? setVal("2nd sentence") : setVal("1st sentence")
  }
  return (
    <div className="App">
     <h1>{val}</h1>
     <button onClick={Change}>Click</button>
    </div>
  )
}

export default App
