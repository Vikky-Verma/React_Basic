import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")   // ✅ default USD
  const [to, setTo] = useState("inr")       // ✅ default INR
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // ✅ SAFE SWAP
  const swap = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // ✅ SAFE CONVERT
 const convert = () => {
    const numAmount = Number(amount)

    // ❌ stop if invalid
    if (!currencyInfo || !currencyInfo[to] || isNaN(numAmount)) return

    setConvertedAmount(numAmount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex justify-center items-center px-3 sm:px-4 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')",
      }}
    >
      
      {/* 🔥 CENTERED GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 max-w-4xl w-full items-stretch">
        
        {/* 🔥 IMAGE */}
        <div className="h-[180px] sm:h-[220px] md:h-auto">
          <img
            src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg"
            alt="currency"
            className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>

        {/* 🔥 CARD */}
        <div className="w-full border border-gray-600 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 bg-white/30 backdrop-blur-sm flex flex-col justify-center">
          
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            {/* FROM */}
            <div className="mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}   // ✅ FIXED
                onAmountChange={(val) => setAmount(Number(val))}
              />
            </div>

            {/* SWAP */}
            <div className="relative h-0.5 my-2">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO */}
            <div className="mt-2 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}   // ✅ FIXED
                amountDisable         // ⚠️ handled in InputBox
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition"
            >
              Convert {String(from).toUpperCase()} to {String(to).toUpperCase()}
            
            </button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default App