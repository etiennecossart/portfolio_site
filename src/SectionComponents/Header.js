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
                border="none"
                margin={0}
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                height={majorScale(100)}> 
            <div>
                <div className="greeting">
                    <header>Welcome to my website!!</header>
                    <header><text>I'm <text className="my_name"><Link activeClass="active" to="Bio" spy={true} smooth={true}>Etienne Cossart</Link></text>, a</text></header>
                    <header>
                        {/* <text>a </text>  */}
                        <text className="typer">
                            <Typical 
                                loop={Infinity}
                                wrapper="n"
                                steps={[
                                        'software developer',
                                        2500,
                                        'backend engineer',
                                        2500,
                                        'big data engineer',
                                        2500,
                                        'frontend developer',
                                        2500,
                                        'fast & avid learner',
                                        2500,
                                        '3D printing creator',
                                        2500,
                                        'whiteboard enthusist',
                                        2500,
                                        'creative problem solver',
                                        2500
                                    ]}
                            />
                        </text>
                    </header>  
                </div>
            </div>
            <div className="checkout_wrapper">
                <Link activeClass="active" to="Bio" spy={true} smooth={true}>
                    <button class="button"><span>View Portfolio</span></button>
                </Link>







                
                {/* <Pane>
                    <ul>
                            <Link activeClass="active" to="Bio" spy={true} smooth={true}>
                                <Heading size={900}>About Me</Heading>
                            </Link>
                        <button className="section_button"><Link activeClass="active" to="Printing" spy={true} smooth={true}>3D Printing</Link></button>
                        <button className="section_button"><Link activeClass="active" to="ShellScripts" spy={true} smooth={true}>Shell Scripts</Link></button>
                        <button className="section_button">My latest Python project</button>
                    </ul>
                </Pane> */}

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