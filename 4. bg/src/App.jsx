import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("aqua") //here aqua is default color is there
  // on body when the page loads
  document.body.style.backgroundColor=count;
  return (
    <div style={{backgroundColor:count}}>
     <button onClick={()=>setCount("red")}>red</button>
     <button onClick={()=>setCount("green")}>green</button>
     <button onClick={()=>setCount("blue")}>blue</button>
     <button onClick={()=>setCount("yellow")}>yellow</button>
     <button onClick={()=>setCount("orange")}>orange</button>
     </div>
      
  
  )
}

export default App
