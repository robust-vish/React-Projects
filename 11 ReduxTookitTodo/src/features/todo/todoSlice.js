//nanoid is used to generate unique id's
import {createSlice,nanoid} from "@reduxjs/toolkit";

//let's make initial state for store
//it can be array/object

const initialState={
    todos:[{id:1, text:"hello world"}]
}

//now we will create slice, which is like bigger version of reducers
// createSlice we give argument as object
//name, initialState and reducers are predefined syntax

//reducers me properties or functions aate hai
//context api, me functions ka bas declaration likh rahe the, defination nhi, but here we
//write declaration and defination in the same file.
//always there two arguments in the function (state,action)
//state represent current state
//action give us values, to complete our functions
//action.payload.(kuch bhi jo lena ho)= jo bhi deta bheja hai
//reducers or bhi add kar sakte ho, jaise editTodo etc. 
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)     // yaha par todos ke array ki state me naya banakar push kar rahe hai bas
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(
                (todo)=> todo.id !== action.payload
            )
        }
    }
})

//ab sari reducers ki functionality ko export kar diya kyoki
//wo components me kaam aaenge.
export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;