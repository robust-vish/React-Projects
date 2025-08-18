import React, { useState } from 'react'
import useDemo from './Context'


function Output() {
 const{message}=useDemo();
 
  return (
    <div>your entered message is: {message}</div>
  )
}

export default Output