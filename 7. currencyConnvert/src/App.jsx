import { useState } from 'react'
//index.js by default call hoti hai, is wajah se waha se direcly import kar sakte hain
import {InputBox} from './component'
import useCurrencyInfo from './hooks/useCurrencyinfo'
function App() {
  // these are the states we need to create
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

    const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
    const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
         <h1 style={{textAlign:'center'}}>Currency converter with vishal lala</h1>
         <form  
         onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
           }}>
              
                   <div>
              <InputBox 
                          label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                        </div>

                        <div>
                          <button
                          type='button'
                          onClick={swap}>
                          swap
                          </button>
                        </div>

                        <div>
                            <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                        </div>
                 
                 <button type='submit'>
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                 </button>

         </form>
    </>
  )
}

export default App
