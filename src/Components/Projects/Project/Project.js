import React from 'react'
import './Project.css'

function Project (props){
    return(
        <div className="project-main">
            <div className="project-header">
                <h2>{props.project.name}</h2>
                <h4>{props.project.date}</h4>
            </div>
            <h3>{props.project.stack}</h3>
            <div className="project-body">
                <div className="project-body-text">
                    {<p >{props.project.dscr}</p>}
                </div>
                <div className="project-body-text">
                    { props.project.learnings ? <p><span>Learnings: </span>{props.project.learnings}</p> : null }
                </div>
                <div className="project-body-text">
                    { props.project.planAugmt ? <p><span>Planned Augmentations: </span>{props.project.planAugmt}</p> : null }
                </div>
                <div>
                {props.project.github ? <a href={props.project.github}>GitHub</a> : null}
                    
                </div>
            </div>
        </div>
    )
}

export default Project