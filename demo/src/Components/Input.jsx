import React, { useContext, useState } from 'react'
import { Context } from './Context'


function Input() {
const {setMessage}=useContext(Context)
  return (
    <>
       <label htmlFor="">Enter text here:- </label>
       <input type="text" onChange={(e)=>setMessage(e.target.value)} />
    </>
  )
}

export default Input