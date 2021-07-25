import React, { useImperativeHandle, useState } from 'react'
import GitHubLogo from '../../../Resources/github.jpeg'
import './Project.css'

function Project (props){
    const [active, setActive] = useState(false)

    return(
        // <div className="project-main">
        //     <div className="project-header">
        //         <h2>{props.project.name}</h2>
        //         <h4>{props.project.date}</h4>
        //     </div>
        //     <h3>{props.project.stack}</h3>
        //     <div className="project-body">
        //         <div className="project-body-text">
                    // <p>{props.project.dscr}</p>
        //         </div>
        //         <div className="project-body-text">
        //             { props.project.learnings ? <p><span>Learnings: </span>{props.project.learnings}</p> : null }
        //         </div>
        //         <div className="project-body-text">
        //             { props.project.planAugmt ? <p><span>Planned Augmentations: </span>{props.project.planAugmt}</p> : null }
        //         </div>
        //         <div>
        //         {props.project.github ? <a href={props.project.github}><img src={GitHubLogo} className = "project-github"/></a> : null}
                    
        //         </div>
        //     </div>
        // </div>


        <div className="project-main">
            <div className="project-heading">
                <div className="container">
                    <div className="project-header" onClick={() => setActive(!active)}>
                        <div className="project-header-text">
                            <div className="project-title-line">
                                <h2>{props.project.name}</h2>
                                <h4>{props.project.date}</h4>
                            </div>
                            <h3>{props.project.stack}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={(active == true ? "show " : "") + "project-content"}>
                    <p>{props.project.dscr}</p>
                    { props.project.learnings ? <p><span>Learnings: </span>{props.project.learnings}</p> : null }
                    { props.project.planAugmt ? <p><span>Planned Augmentations: </span>{props.project.planAugmt}</p> : null }
                    { props.project.github ? <a href={props.project.github}><img src={GitHubLogo} className = "project-github"/></a> : null}
                </div>
            </div>
        </div>
    )
}

export default Project