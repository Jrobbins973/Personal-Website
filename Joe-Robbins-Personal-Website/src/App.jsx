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
  <div className='nav-links'>
      <div >
        <h3 className='link'>About Me</h3>
      </div>
      <div >
        <h3 className='link2'>Blog</h3>
      </div>
      <div >
        <h3 className='link3'>Recent Projects</h3>
      </div>
      <div >
        <h3 className='link4'>What I'm Working On</h3>
      </div>
    </div>
  </div>
  )
}

export default App

{/* <h3>Blog</h3>
<h3>Recent Projects</h3>
<h3>What I'm working on</h3> */}