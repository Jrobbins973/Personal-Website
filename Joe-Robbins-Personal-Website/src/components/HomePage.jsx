import React from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route} from "react-router-dom";

function HomePage() {
    const history = useHistory()
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
                <h3 onClick={() => history.push('/AboutMe')} className='link'>About Me</h3>
            </div>
            <div >
                <h3 onClick={() => history.push('/Blog')} className='link2'>Blog</h3>
            </div>
            <div >
                <h3 onClick={() => history.push('/RecentProjects')} className='link3'>Recent Projects</h3>
            </div>
            <div >
                <h3 onClick={() => history.push('/InTheWorks')} className='link4'>What I'm Up To</h3>
            </div>
            </div>
            </div>
    )
}

export default HomePage