import {createContext, useContext} from "react";

export const Todocontext=createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed:false,
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
    
});


export const Contextprovider=Todocontext.Provider;

export default function useTodo(){
    return useContext(Todocontext);
}                                 