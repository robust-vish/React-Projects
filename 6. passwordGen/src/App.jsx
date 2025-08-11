import { useState, useCallback,useEffect,useRef } from 'react'

//kisi bhi cheez ka jab aapko reference lena hota hai
//tab useRef hook ko use karte hain

function App() {
 
  const [length, setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [char,setChar]=useState(false);
  const[password,setPassword]=useState("");

  //useRef hook
  let passwordRef=useRef(null)

  //when number is checked we want that passwordgen should called
  //when character is checked than also we want that passwordgen should called
  //so there should be way to optimsed it, so we will use useCallback hook
  // syntax useCallback(fn,dependencies), it let's you cache a function(memoise)
  // between it re-renders

  //due to dependency list,when there is change in length,
  //number and char then optimisation, caching takes place, due to which latest value of 
  //password is stored
  //for optimisation we can also use setPassword as a parameter in dependency array
  //main aim of useCallback is only to optimise,memoise 
  let passwordgen=useCallback(()=>{

     let pass='';
     let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     if(number){
        str+="1234567890";
     }
     if(char){
      str+="!@#$%^&*(){}[]";
     }


     for(let i=1;i<=length;i++){
         let idx=Math.floor(Math.random()*str.length+1)
         pass+=str[idx];
     }
     setPassword(pass)

  },[length,number,char])


  //this function is used to copy password to clipboard when user click on copy button
  //because we are working in core react so we have access to window object, if you are using nextjs
  // where server side rendering takes place where you don't have access to window object\
  // Q.1 here if you don't give password in dependency array 
  //to highlight copied password we use passwordRef
  const copypasswordClipboard=useCallback(()=>{
         passwordRef.current?.select()
         //for optional select to specific number of character you can use
        //  passwordRef.current?.setSelectionRange(0,4); 
         window.navigator.clipboard.writeText(password)
  },[password])
 
//now when the page loads we want to call passwordgen, but when we directly call
//then it will give us error, so we use another react hook here useEffect hook
//syntax useEffect(setup,dependencies)
//what useEffect will do, when there is any change in either length, number or char
// then run passwordgen(). it also run function when the page loads

useEffect(()=>{
  passwordgen();
},[length,number,char])
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>welcome to password generator</h1>

      <div style={{textAlign:'center'}}>
        <input type="text"
        value={password} 
        //readOnly paramerter prevent to write in text box
        readOnly
        ref={passwordRef}
        />
        <button 
        style={{backgroundColor:"blue", color:'white'}}
        onClick={copypasswordClipboard}> Copy</button>
      </div>

      <br />

      <div style={{textAlign:'center'}}>
        <input type="range"
         min={8}
         max={100}
         value={length}
         onChange={(e)=> {setLength(e.target.value)}}/>
        <label htmlFor="">Length: {length}</label>


        <input type="checkbox"
        //this defaultChecked will set initial state of checkbox =false, equal to number
        defaultChecked={number}
        // this is most important, when we click on number checkbox, then onChange function is triggered
        // then it toggle number, and as value of number changes it triggers passwordgen using useEffect hook
        // which cause password to update and visible on text field.
        onChange={()=>setNumber(prev=>!prev)} />
        <label htmlFor="">Number</label>


        <input type="checkbox"
         defaultChecked={char} 
         onChange={()=>setChar(prev=>!prev)}/>
        <label htmlFor="">Character</label>
      </div>

    </>
  )
}

export default App
