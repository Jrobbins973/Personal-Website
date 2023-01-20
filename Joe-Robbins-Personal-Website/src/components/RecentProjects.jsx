import React from 'react'
import ProjectDetails from './ProjectDetails';
import { projects } from '../constants/constants';


const renderProjectDetails = projects.map(project => <ProjectDetails key={project.id} project={project} />);

function RecentProjects() {
    return (
        <div>

        <h1>My Portfolio</h1>
        

        <div className='grid-container'>
            {renderProjectDetails}
        </div>

        </div>
    )
}

export default RecentProjects