import {createContext,useContext} from "react";

//here the object inside createContext({}),
//is called default context value
export const Context = createContext({
    todo:[
        {   id:1,
            title:""
        }
    ],
    addTodo:(todo)=>{}
});

export const ContextProvider=Context.Provider;

export default function useTodo(){
    return useContext(Context);
}