import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  return (
    <div>
      <h1>Welcome! My name is Joe Robbins</h1>
    <div className = "wrapper">
    <div className = "static-txt">I'm a </div>
    <ul className = "dynamic-txts">
      <li><span>Developer</span></li>
      <li><span>Scientist</span></li>
      <li><span>Student</span></li>
      <li><span>Dog Lover</span></li>
    </ul>
  </div>
  </div>
  )
}

export default App
