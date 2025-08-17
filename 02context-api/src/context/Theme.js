import { useContext,createContext } from "react";

//we can give default values inside create context,
//means context jab pehli baar bane tab kya variables already bane ho.
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

//here contextProvider we will create from same file

export const ThemeProvider=ThemeContext.Provider

//we can also make custom hook here and then export it
//so we don't need to import useContext and ThemeContext in other files
// we can directly use this custom hook and access
//properties like themeMode,darkTheme and lightTheme.
export default function useTheme(){
    return useContext(ThemeContext);
}