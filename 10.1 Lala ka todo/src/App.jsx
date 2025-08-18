import {useContext, useEffect, useState} from 'react'
import useTodo, {ContextProvider} from './context/Context.js'
import Form from "./Components/Form.jsx";
import Items from "./Components/Items.jsx";


function App() {
    const [todos, setTodos] = useState([])

    //here we defind addTodo function,
    //inside array of objects we just adding newobject
    //with overwriting id value
    const addTodo=(newtodo)=> {
        setTodos(prev=> [{id:Date.now(),...newtodo}, ...prev])
    }

    //adding functionality of localstorage,localstorage
    //se todos nikalo or onto todos ke ander dedo using setTodo()
    //phir unpar niche loop lagakar hum render karwa rahe hain
    //initially jab page load ho tab
    useEffect(() => {
      const todos =JSON.parse(localStorage.getItem('todos'));
      if(todos && todos.length>0){
          setTodos(todos);
      }
    }, []);

    //yaha par todos me kuch bhi change ho to updated
    //todos ko local storage me add kardo
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);

    
  return (
    <ContextProvider value={{addTodo}}>
       <h1>Lala ka todo</h1>
        <Form/>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <Items todo={todo}/>
            </div>

        ))}
    </ContextProvider>
  )
}

export default App
