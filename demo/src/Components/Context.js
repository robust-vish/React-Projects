import { createContext,useContext } from "react";


export const Context=createContext()


export const ContextProvider=Context.Provider;

export default function useDemo(){
    return useContext(Context)
}