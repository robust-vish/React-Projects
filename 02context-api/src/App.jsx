import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode]=useState("light")

  //we can also define functionality of these methods here only
  const lightTheme=()=>{
    setThemeMode("light")
  }

   const darkTheme=()=>{
    setThemeMode("dark")
  }

  //let's do actual change in theme
  useEffect(()=>{
    //pehle default theme ko remove kardo
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])  

  return (

//by values we can access Context variables
//now whatever components we have inside ThemeProvider below have access to these variables
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme button componenent is rendered here */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card is rendered here */}
                       <Card/>
                    </div>
                </div>
            </div>

  </ThemeProvider>

  )
}

export default App
