import React from 'react'
import { Pane, Button, Text, majorScale, Heading, Paragraph, TranslateIcon} from 'evergreen-ui'
import logo from '../../logo512.png'
import './Bio.css'
import BioPic from '../../Resources/etienne.jpg'



function Bio(){
    return(
        <div className="bio_body">
                <h1 className="bio_header" >About Me</h1>
                <h3 className="vision">I'm a software engineer with a passion for learning, designing, and building technical solutions. </h3>                    <div className="bio_pic">
                <img className="bio_image" src={BioPic}/>
        </div>
                    
                    {/* <div>
                        <h2 className="skills">Technical Skills</h2>
                        <div className="skill_types">
                            <span>OOP</span>
                            <span>Data</span>
                            <span>Design</span>
                        </div>    
                        <ul>
                            <h3>Proficient</h3>
                            <li>OOP: Python, Java</li>
                            <li>Data: SQL, Pandas (Python)</li>
                            <li>Shell Scripting</li>
                            <li>Design: CAD Software</li>
                        </ul>
                        <ul>
                            <h3>Knowledgeable</h3>
                            <li>OOP: React</li>
                            <li>Data: PySpark</li>
                            <li>C++</li>
                            <li>Swift</li>
                        </ul>
                    <ul>
                            <h3>Learning</h3>
                            <li>JavaScript</li>
                            <li>Data: Scala</li>
                            <li>Design: Unity</li>
                        </ul>
                    </div>
                     */}
        </div>
    )}

export default Bio







{/* <div>
        <Pane background="tomato">
            <Heading paddingTop="2%" size={900} textAlign="center">About Me</Heading>
            <div>
                <Text size={700} color="white">This is my motto and where its going to be</Text>
            </div>
                <Paragraph>
                    Sup Fellas Full Stack Software Engineer with a unique perspective and a passion for tackling new challenges for business problems with technical solutions. 
                    As a goal-oriented, avid learner, I self-taught Python, PySpark, and Splunk to become a  growing contributor early on, despite no prior technical experience in big data. 
                    Outgoing and customer focused, I have proven experience building relationships with clients, developing effective and dynamic solutions for their changing needs with a positive attitude.
                </Paragraph>
            <div className="column-2">
                <Heading size={600} textAlign="center">Technical Skills</Heading>
                <Pane display="inline-block">
                    <Heading size={500}>Proficient</Heading>
                    <ul>
                        <li>Python | Java</li>
                        <li>Bash Scripting</li>
                        <li>SQL   | Pandas</li>
                        <li>CAD Software</li>
                    </ul>
                    <Heading size={500}>Proficient</Heading>
                    <ul>
                        <li>Python | Java</li>
                        <li>Bash Scripting</li>
                        <li>SQL   | Pandas</li>
                        <li>CAD Software</li>
                    </ul>
                </Pane>
                <Pane>
                    <Heading size={600} textAlign="center">Technical Skills</Heading>
                </Pane>


                <img src={logo} className="bio_pic" />
            </div>
        </Pane>
    </div> */}