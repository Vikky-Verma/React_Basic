import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // it comes from react-router-dom and it used for changing the layout whenever it placed and fixed other things as same and also it is used for nesting of url  how render on ui what type in the urlbox

function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>

    </>
  )
}

export default Layout