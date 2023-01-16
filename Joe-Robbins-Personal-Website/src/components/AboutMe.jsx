import React from 'react'
import { useHistory } from 'react-router-dom'

function AboutMe() {
    const history = useHistory()


    return (
        <div>
            <button onClick={() => history.push("/")}>Back</button>
            <h1>About Me</h1>
        </div>
    )
}

export default AboutMe