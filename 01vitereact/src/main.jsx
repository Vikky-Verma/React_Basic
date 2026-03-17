import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime' // we can use jsx without importing react because it is a new feature in react 17, but it is recommended to import react because it will work with state and lifecycle methods.
import App from './App.jsx'


function MyApp() {
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// const reactElement = {
//     type :'a',
//     props: {
//         href : 'https://www.google.com',
//         target : '_blank',
//     },
//     children: 'Click me to visit google'
// }


const anotherElement = (
    <a href="https://www.google.com" target="_blank">
        Visit google
    </a>
)

const anotherUser = " chai aur react ";

// React.createElement()  is a react library which is used to create a react element without using JSX, it takes three arguments, type, props and children. It returns a react element which is an object.

const reactElement = React.createElement(
    'a', // type
    { href: 'https://www.google.com', target: '_blank' }, // props
    'Click me to visit google', // children
    anotherUser // we can also pass variables as children
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App /> //
    // <MyApp />
    // MyApp() we can write like this also because it is function it is not recommended because it will not work with state and lifecycle methods.

    // reactElement  // we can write like this also because it is a react element created using JSX, it is not recommended because it will work with state and lifecycle methods.

    // anotherElement // we can write like this also because it is a react element created using JSX, it is recommended because it will work with state and lifecycle methods.

    reactElement // we can write like this also because it is a react element created using React.createElement(), it is recommended because it will work with state and lifecycle methods. react library will convert this react element into a DOM element and render it on the screen.

    // <App/>
  
)
