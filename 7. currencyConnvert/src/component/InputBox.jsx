import React from 'react'
//there is also a hook called useId,
//which is used for generating unique id's , that can be
//passed to accessibility attributes, tab se next input filed par 
// jump karne ke liye use kiya jata hai.
function InputBox({
  //these are the props we are passing using object destructuring.
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {

 

  return (
    <div>
      <label>{label}</label>
      <input type="number"
       placeholder='Amount'
       //if disabled =true then we cannot edit in input field
       // if it is false then we can edit and write in it.
       disabled={amountDisable}
       value={amount}
       //if onAmountChange not exits then don't execute it else execute it after &&.
       onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />

       <select
       value={selectCurrency}
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
       disabled={currencyDisable}
       >
            {/* //key is passed for performance 
            // rememer the key in loops in react*/}
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}

       </select>
    </div>

    
  )
}

export default InputBox