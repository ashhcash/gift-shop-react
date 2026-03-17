import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Front from './Front'
import Slider from './Slider'
import Mid from './Mid'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Front></Front>
      <Slider></Slider>
      <Mid></Mid>
    </div>
  )
}

export default App
