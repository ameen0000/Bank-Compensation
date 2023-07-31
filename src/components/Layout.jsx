import React from 'react'
import Nav from '../nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../foot/Footer'

function Layout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
