import React from 'react'
import JapanPic from "../../Resources/IMG_1354.jpeg"
import {Link} from 'react-scroll'
import './Bio.css'

function Bio () {
    return(
        <div>
        <div className="main-div-bio">
            <div className="bio-content">
                <div className="bio-header">
                    <h1 className="bio-header">About Me</h1>
                </div>
                <div className="bio-middle-content">
                    <div className="bio-img-container">
                        <img className="bio-img" src={JapanPic} alt="Fushimi inari"/>
                    </div>
                    <div className="bio-vision">
                        <p className="bio-vision-text">I'm a Software Engineer with a passion for solving 
                        business problems with technical solutions. As an avid learner and someone who approaches 
                        problems with a big-picture mindset, I'm always looking for new skills to pickup and add to 
                        my tool-belt.  Outgoing and customer focused, I have proven experience building relationships 
                        with clients by developing effective and dynamic solutions 
                        for their changing needs with a positive attitude.</p>
                        {/* <h2 className="bio-vision-header">Experience</h2>
                        <p className="bio-vision-text">Prudential Backend Engineer</p>
                        <p className="bio-vision-text">Prudential Data Egnieer</p>
                        <p className="bio-vision-text">Frontend Engineer</p> */}
                        {/* <h2 className="bio-vision-header">Skills</h2>
                        <p className="bio-vision-text">Proficient: Python, Pandas, CAD Software</p>
                        <p className="bio-vision-text">Knowledgeable: JavaScript, Pandas, Java, Unity</p>
                        <p className="bio-vision-text">Learning: API Development</p> */}
                    </div>
                </div>
                <div className="bio-skills">
                        <div className="bio-skills-header">
                            <h2>Skills</h2>
                        </div>
                        <div className="bio-skills-container">
                            <Link activeClass="active" to="Projects" spy={true} smooth={true}>
                                <div className="bio-skills-proficient">
                                    <h3>Proficient</h3>
                                    <ul>
                                        <li>Python</li>
                                        <li>Bash Scripting</li>
                                        <li>SQL / RDBMS</li>
                                        <li>CAD Designs</li>
                                    </ul>
                                </div>
                            </Link>
                            <Link activeClass="active" to="Projects" spy={true} smooth={true}>
                                <div className="bio-skills-knowledgeable">
                                    <div className="bio-skill-list-heading">
                                        <h3>Knowledgeable</h3>
                                    </div>

                                    <ul>
                                        <li>JavaScript</li>
                                        <li>Pandas Library</li>
                                        <li>Java</li>
                                        <li>Unity</li>
                                    </ul>
                                </div>
                            </Link>
                            <Link activeClass="active" to="Projects" spy={true} smooth={true}>
                                <div className="bio-skills-learning">
                                    <h3>Learning</h3>
                                    <ul>
                                        <li>React</li>
                                        <li>CSS / HTML</li>
                                        <li>API Development</li>
                                        <li>Apachee Spark</li>
                                    </ul>
                                </div>
                            </Link>
                            <Link activeClass="active" to="Projects" spy={true} smooth={true}>
                                <div className="bio-skills-systems">
                                    <h3>Systems </h3>
                                    <ul>
                                        <li>Splunk</li>
                                        <li>Autosys</li>
                                        <li>Jenkins</li>
                                        <li>Hadoop</li>
                                    </ul>
                                </div> 
                            </Link>
                        
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
    )
}

export default Bio