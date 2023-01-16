import React from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route} from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

function HomePage() {
    const history = useHistory()
    return (
<div>
        <h1>Welcome! My name is Joe Robbins</h1>
        <h3 style={{width: '850px'}}>I'm a Software Engineering Bootcamp graduate looking to start a career in Software Development. Please click the links below to find out a little more about me.</h3>
        <div className = "wrapper">
        <div className = "static-txt">    </div>
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

        <div className='lets-connect'>
            <br></br>
            <br></br>
            <p >Let's Connect!</p>
            <a style={{cursor: 'pointer'}} href='https://www.linkedin.com/in/joe-robbins-swe/' target="_blank"><  FaLinkedin /></a>
        </div>
</div>
    )
}

export default HomePage