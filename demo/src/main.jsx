import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Context, ContextProvider } from './Components/Context'
import Output from './Components/Output'
import Input from './Components/Input'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
