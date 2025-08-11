import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card9 from './components/firstCom'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    name:"sagar",
    address:"indore",
    age:23
  }

  const array=[1,2,3,4];

  //here we are reusing Card9 component, and passing props from here
  //these props are now handled inside component file
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>hello world</h1>
      <Card9 age="25" address="machalpur" newobj={myobj} newarray={array}/>
      <Card9 username="lala bairagi"/>
  
    </>
  )
}

export default App

 