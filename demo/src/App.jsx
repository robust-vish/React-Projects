import React from 'react'
import { Context } from './Components/Context'
import { useContext,useState } from 'react'
import { ContextProvider } from './Components/Context'
import Input from './Components/Input'
import Output from './Components/Output'


function App() {
  const[message,setMessage]=useState("")
  return (
    <ContextProvider value={{message,setMessage}}>
            <Input/>
            <Output/>
    </ContextProvider>
  )
}

export default App