import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    //we want to show data in ui also so we are using useState hook, here
    const[data,setData]=useState({});
    useEffect(()=>{
         fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
         .then((res)=> res.json())
         .then(res=>setData(res[currency]))
    },[currency])

    return data;
}

export default useCurrencyInfo;