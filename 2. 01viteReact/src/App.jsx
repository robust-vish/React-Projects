import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {


let [counter,setCounter]=useState(10);


 function increment(){
  //below syntax will increment value of counter only by 1
  // eventhough we write it 4 times, react send it as 1 batch
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);

  // this syntax will modifies value of previos counter
  // in each setCounter()
   setCounter(prevcounter=> prevcounter+1)
   setCounter(prevcounter=> prevcounter+1)
   setCounter(prevcounter=> prevcounter+1)
   setCounter(prevcounter=> prevcounter+1)
 }


 function decrement(){
   setCounter(counter-1)
 }


  return (
     <>
     <h1>lala ka project</h1>
     <h2>Counter value: {counter}</h2>


     <button onClick={increment} >increase count {counter} </button>


     <br /><br />


     <button onClick={decrement}>decrease count {counter}</button>


     <p>{counter}</p>
     </>
  )
}


export default App