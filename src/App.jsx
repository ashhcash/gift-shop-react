import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Front from './Front'
import Slider from './Slider'
import Mid from './Mid'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Front></Front>
      <Slider></Slider>
      <Mid></Mid>
      <Footer></Footer>
    </div>
  )
}

export default App
