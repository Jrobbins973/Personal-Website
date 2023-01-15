import { useState } from 'react'
import './App.css'
import RecentProjects from './components/RecentProjects'
import AboutMe from './components/AboutMe'
import Blog from './components/Blog'
import WorkingOn from './components/WorkingOn'
import { useHistory } from 'react-router-dom'
import { Switch, Route} from "react-router-dom";
import HomePage from './components/HomePage'

function App() {
  

  return (
    <div>


      <Switch>

      <Route exact path = '/'>
        <HomePage />
      </Route>

      <Route exact path = '/AboutMe'>
        <AboutMe />
      </Route>

      <Route exact path = '/Blog'>
        <Blog />
      </Route>

      <Route exact path = '/RecentProjects'>
        <RecentProjects />
      </Route>

      <Route exact path = '/InTheWorks'>
        <WorkingOn />
      </Route>

      </Switch>
    
  </div>
  )
}

export default App

{/* <h3>Blog</h3>
<h3>Recent Projects</h3>
<h3>What I'm working on</h3> */}