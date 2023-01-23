import React from 'react'
import ProjectDetails from './ProjectDetails';
import { projects } from '../constants/constants';
import { useHistory } from 'react-router-dom'

const renderProjectDetails = projects.map(project => <ProjectDetails key={project.id} project={project} />);

function RecentProjects() {
    const history = useHistory()



    return (
        <div>

        <button className='back-button' onClick={() => history.push('/')}>Back</button>

        <h1>My Portfolio</h1>
        

        <div className='grid-container'>
            {renderProjectDetails}
        </div>

        </div>
    )
}

export default RecentProjects