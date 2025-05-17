import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Navber from '../Components/Navber'

const layout = () => {
  return (
    <>
      <Navber/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default layout
