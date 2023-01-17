import React from 'react'
import { useHistory } from 'react-router-dom'

function AboutMe(props) {
    const {setShowModal} = props
    const history = useHistory()


    return (
        <div className='modal' onClick={() => setShowModal(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>Modal Title</h4>
                </div>
                <div className='modal-body'>
                    Modal Content
                </div>
                <div className='modal-footer'>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe