import React, { useContext, useState } from 'react'
import useDemo from './Context';


function Input() {
const {setMessage}= useDemo();
  return (
    <>
       <label htmlFor="">Enter text here:- </label>
       <input type="text" onChange={(e)=>setMessage(e.target.value)} />
    </>
  )
}

export default Input