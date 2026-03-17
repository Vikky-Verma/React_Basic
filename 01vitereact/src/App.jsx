import Chai from "./chai";

function App() { 
  const username = "chai aur code"; 
  // we can use javascript expression inside JSX by using curly braces {}. it will evaluate the expression and return the result. we can use any valid javascript expression inside curly braces {}. we can also use variables, functions, objects, arrays etc. inside curly braces. it will evaluate the expression and return the result.
  // we cant use coditinal statements, loops , if else statements etc. inside JSX because they are not expressions, they are statements. we can use ternary operator instead of if else statements inside JSX because it is an expression. we can also use logical && operator to conditionally render elements inside JSX.

  return (
    <>  
      <Chai/>
      <h1>Welcome to react {username}</h1> 
      <p>test paragraph</p>
    </>
  )
}

export default App


// we can wrap multiple elements in a div or React Fragment (<> </>) to return a single element from the component.