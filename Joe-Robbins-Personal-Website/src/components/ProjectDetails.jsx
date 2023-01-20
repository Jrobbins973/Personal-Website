import React from 'react'

function ProjectDetails(props) {

    const newTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };



    const {project} = props
    return (
        <div>
            
            <div className='grid-items'>
            <img src ={project.image}/>
            <h2>{project.title}</h2>
            <h4>{project.description}</h4>
            <p><strong>Technology:</strong> {project.technology}</p>
            <button onClick={() => newTab('https://www.youtube.com/watch?v=N-IjnXJAWWA')}>Video</button>
            <button onClick={() => newTab('https://github.com/Jrobbins973/Exercise-api')}>GitHub</button>
            </div>
            
        </div>
    )
}

export default ProjectDetails