import {useEffect, useState} from 'react'
import {Contextprovider} from "./context/Todocontext.js";
import {Todoitem,Todosform} from "./components/index.js";



function App() {
   const[todos, setTodos] = useState([])

    //here we will add todo, sari array ko spread kiya
    // phir usme new todo dala, id overwrite karke
    const addTodo = (todo) => {
       setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    }

    //here we will update means edit todo
    //purani sari todos ki array par iterate kiya, jiski id match kari
    //usko naye todo se replace kar diya
    const updateTodo = (id,todo) => {
       setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
    }

    //jo id match kari usko chorkar baki sabko
    //restore kar liya
    const deleteTodo=(id)=>{
       setTodos((prev)=> prev.filter((prevTodo)=>prevTodo.id !== id))
    }

    //jiski id match kari, uske ander ki completed field ko toggle kar diya. 
    const toggleComplete=(id)=>{
       setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo));
    }

    //now let's learn about local storage.there are only two properties
    // setItem and getItem, setItem takes key,value in string format
    // getItem takes only key then give corresponding value from localStorage
    // idhar values loge to json me convert karna padega,
    // udhar value doge to string me convert karna padega

    //when our page loads we want that all the previous todos we set should visible
    //so we need to bring them from local storage, we use useEffect hook for this

    useEffect(() => {
        // here "todos" is key and array of todos that previously set
        // we store them in variable todos, here Json todos is in array format
        const todos=JSON.parse(localStorage.getItem("todos"));

        //if todos we get are not empty array then we set
        //our todos that will be reflected in ui by useState hook
        if(todos && todos.length>0){
            setTodos(todos);
        }
    }, []);

   // when there is any change in todo, then we also need to set it in local storage
  // so we will make another useEffect for this
  // json.stringify convert Array to Json string format
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);
    
  return (
      <Contextprovider value={{todos,addTodo,updateTodo,deleteTodo,deleteTodo,toggleComplete}}>
      <div className="bg-white min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2  ">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */}
                  <Todosform/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {/*//here we need to do looping, and we need to use key, for performance improvement*/}
                  {todos.map((todo)=>(
                      <div key={todo.id} className='w-full'>
                          <Todoitem todo={todo}/>
                      </div>

                  ))}
              </div>                           
          </div>
      </div>
      </Contextprovider>
  )
}

export default App
