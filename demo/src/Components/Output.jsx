import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from './Context'


function Output() {
 const{message}=useContext(Context)
 
  return (
    <div>your entered message is: {message}</div>
  )
}

export default Output