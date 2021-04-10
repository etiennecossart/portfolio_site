import React from 'react'
import Typical from 'react-typical'
import {Link} from 'react-scroll'

import { Pane, Button, Text, majorScale, Heading, TranslateIcon} from 'evergreen-ui'
import logo from '../logo512.png'
import './Header.css'


function Header(){
    return(
        <div className="header">
            <Pane
                margin={0}
                background="overlay"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                border="default"
                height={majorScale(100)}> 
            <div>
                <div className="greeting">
                    <header>Welcome to my website!!</header>
                    <header><text>I'm <text className="my_name">Étienne Cossart</text>,</text></header>
                    <header>
                        <text>a </text> 
                        <text className="typer">
                            <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                        'software developer',
                                        2000,
                                        'backend enginner',
                                        2000,
                                        'big data engineer',
                                        2000,
                                        'frontend developer',
                                        2000,
                                        'fast / avid learner',
                                        2000,
                                        '3D printing designer',
                                        2000,
                                        'whiteboard enthusist',
                                        2000,
                                        'creative problem solver',
                                        2000
                                    ]}
                            />
                        </text>
                    </header>  
                </div>
            </div>
            <div className="Navigator">
                <Pane>
                    <ul>
                        <Button height={50} margin="2%" appearance="primary" intent="warning"><Link activeClass="active" to="Printing" spy={true} smooth={true}>3D Printing</Link></Button>
                        <Button height={50} margin="2%" appearance="primary" intent="warning"><Link activeClass="active" to="ShellScripts" spy={true} smooth={true}>Shell Scripts</Link></Button>
                        <Button height={50} margin="2%" appearance="primary" intent="warning">My latest Python project</Button>
                    </ul>
                </Pane>

                {/* <header>Check out my:</header>
                <Button
                height={40}
                margin={majorScale(1)}
                intent="info"
                appearence="minimal"
                border-color="white"
                href="#Prints"
                >3D Prints</Button>
                <Button
                height={40}
                margin={majorScale(1)}
                intent="info">Latest Python Project</Button> */}

            </div>
            </Pane>
            

        </div>
       
        // <div className="outterBox">
        //     <Pane
        //         background="overlay"
        //         textAlign="center"
        //         alignItems="center"
        //         justifyContent="center"
        //         border="default"
        //         height={majorScale(100)
        //         }
        //     >
        //         <Pane>
        //         <Heading
        //         size={900}> Welcome to Etienne Cossart's Website!</Heading>
        //         </Pane>
        //         <Pane
        //         margin={10}>

                
        //         <Button 
        //             display="flex"
        //             alignItems="center"
        //             justifyContent="center"
        //             border="default"
        //             background = "pink"
        //             >
        //             View my stuff
        //         </Button>    
        //         <Paragraph>This site is still under contstruction, but hey, we live out here!</Paragraph>
        //         </Pane>

                
        //     </Pane>

        //     <Pane 
        //         display="flex"
        //         alignItems="center"
        //         justifyContent="center"
        //         border="default"
        //         height={majorScale(50)}>
                
                
        //     </Pane>
        // </div>
        )
}

export default Header