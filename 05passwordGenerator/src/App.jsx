import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
   
  // useRef hook
  const passwordRef = useRef(null);

  // 🔐 Password Generator
  const passwordGenerator = useCallback(() => { // talk about how dependencies depend in useCallback and any method how to optimized ,stored or kept in cache or memory not use for execution
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+[]{}`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // 🔁 Auto-generate on change
  useEffect(() => { // in this , we talk about any change occur in method or anything should re-render again according to change, it is used for execution
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // 📋 Copy + Select
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex justify-center bg-black pt-16 sm:pt-20 px-4">
      
      <div className="w-full max-w-3xl bg-gray-700 rounded-xl shadow-lg px-4 sm:px-6 py-6 text-orange-500">
        
        
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Password Generator
        </h1>

        
        <div className="flex flex-col sm:flex-row shadow rounded-lg overflow-hidden mb-6">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="w-full py-3 px-4 text-black text-xl sm:text-2xl md:text-3xl bg-white"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 text-white px-4 py-2 text-lg sm:text-xl md:text-2xl hover:bg-blue-800 transition"
          >
            Copy
          </button>
        </div>

       
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-base sm:text-xl md:text-2xl">
          
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer w-full sm:w-auto accent-blue-600"
            />
            <label>Length: {length}</label>
          </div>

          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              className="accent-blue-600"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              className="accent-blue-600"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;



