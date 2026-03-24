// Hooks → let function components use React features (like state) without classes
//  Hooks only work in function components
//  They make code simple and reusable
//  They must be used at the top level (not inside loops/conditions)
// hooks take value in form of array of two lengths first one is the value and second one is the function to update the value

// useState → stores and updates data in a component
// useEffect → runs code after the component loads or updates
// useContext → shares data between components without props
// useReducer → manages complex state logic
// useRef → stores value without re-render OR accesses DOM
// useMemo → saves calculation result to improve performance
// useCallback → saves function to avoid unnecessary re-creation

import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter , setCounter] = useState(5);

  //let counter = 5;

  const addValue = () => {
    if (counter < 20) {
     setCounter(prevCounter => prevCounter+1); // setCounter recieves callback also to update the value
     setCounter(prevCounter => prevCounter+1);
     setCounter(prevCounter => prevCounter+1);
     setCounter(prevCounter => prevCounter+1);
    }
  }

  const removeValue =() => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
    }
  }

  return (
    <>
      <h1> Chai aur React </h1>
      <h2> Counter value: {counter} </h2>
      <div >
        <button
          onClick={addValue}
        >
          Add value {counter}
        </button>
        <br/>
        <button
          onClick = {removeValue}
        >
          remove value {counter}
        </button>
      </div>
      
      <p>footer: {counter}</p>
    </>
  )
}

export default App
