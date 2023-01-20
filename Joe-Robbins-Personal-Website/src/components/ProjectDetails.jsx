import React from 'react'

function ProjectDetails(props) {
    const {project} = props
    return (
        <div>
            
            <div className='grid-items'>
            <h2>{project.title}</h2>
            <h4>{project.description}</h4>
            <img src ={project.image}/>
            </div>
            
        </div>
    )
}

export default ProjectDetails