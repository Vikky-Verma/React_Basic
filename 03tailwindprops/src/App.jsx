import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from './components/Card'

function App() {

  let myObj = {  
    username: "vikky",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100 p-4">
      <h1 className="bg-green-400 text-black px-6 py-4 rounded-xl text-lg font-bold">
        Tailwind Test
      </h1>
      <Card  username ="chaiaurcode" btntxt ="click me" /> 
      <Card username = "vikky"  btntxt = "visit me" />
    </div>
    </>
  );
}

export default App;

// how to use tailwind in react

// using tailwind v3
// 1. Create Vite React App
// npm create vite@latest my-app
// cd my-app
// npm install
// 2. Install Tailwind v3 + dependencies
// npm install -D tailwindcss postcss autoprefixer
// 3. Create Tailwind config file
// npx tailwindcss init -p
// 4. Configure Tailwind to remove unused styles in production
// open tailwind.config.js and add the paths to all of your template files in the content array
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// 5. Add Tailwind directives to your CSS
// open src/index.css and add the following lines
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// 6. Start the development server
// npm run dev
// then add tailwind class to the app.jsx file to to test tailwind is working or not

// using tailwind v4
// 1. Create Vite React App
// npm create vite@latest my-app --template react
// cd my-app
// npm install
// 2. Install Tailwind (Latest v4 way)
// npm install tailwindcss @tailwindcss/vite
// 3. Update vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// })
// 4. Add Tailwind in CSS
//  src/index.css
// @import "tailwindcss";
// 5. Import CSS
// 👉 src/main.jsx
// import './index.css'
// 6. Run project
// npm run dev
// ✅ 7. Test Tailwind
// export default function App() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold text-blue-500">
//         Tailwind v4 Working
//        </h1>
//     </div>
//   )
// }
// according to that we have done all the steps and added tailwind class in app.jsx file to test tailwind is working or not


// props  how props passes in react component using curly bracket and whenever used we use curly bracket 