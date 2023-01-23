import { useState } from 'react'
import './App.css'
import RecentProjects from './components/RecentProjects'
import AboutMeModal from './components/AboutMeModal'
import Blog from './components/Blog'
import AboutMePage from './components/AboutMePage'
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
        <AboutMePage />
      </Route>

      <Route exact path = '/Blog'>
        <Blog />
      </Route>

      <Route exact path = '/RecentProjects'>
        <RecentProjects />
      </Route>

      <Route exact path = '/Resume'>
       
      </Route>

      </Switch>
    
  </div>
  )
}

export default App

{/* <h3>Blog</h3>
<h3>Recent Projects</h3>
<h3>What I'm working on</h3> */}