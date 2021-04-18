import React, {Component} from 'react'
import { Pane, Button, Text, majorScale, Heading, TranslateIcon} from 'evergreen-ui'
import Bio from './BodyComponents/Bio'
import Printing from './BodyComponents/Printing'
import MMPy from './BodyComponents/MMPy'
import './Body.css'

export default class body extends Component {
    render(){
        return(
            <div id="Bio" className="main_body">
                <Bio />
                <MMPy />
            </div>
        )}}


            //     // <div id="Bio">
            //     //     <Bio />
            //     // </div>
            //     // <div id="Projects">
            //     //     <h1>this is the project section</h1>
            //     // </div>
            //     // <div id="Printing">
            //     //     <Printing />
            //     // </div>                
            // /* <Pane
            //     margin={0}
            //     background="overlay"
            //     textAlign="center"
            //     alignItems="center"
            //     justifyContent="center"
            //     border="default"
            //     height={majorScale(100)}> */

            // {/* </Pane> */
            // {/* <Pane
            //     margin={0}
            //     background="overlay"
            //     textAlign="center"
            //     alignItems="center"
            //     justifyContent="center"
            //     border="default"
            //     height={majorScale(100)}> */}
            //     // <div id="Printing">
            //     //     <Printing />
            //     // </div>
            // {/* </Pane> */}

            // {/* <Pane
            //     margin={0}
            //     background="overlay"
            //     textAlign="center"
            //     alignItems="center"
            //     justifyContent="center"
            //     border="default"
            //     height={majorScale(100)}>
            //     <div id="ShellScripts">
            //         <h1>My Shell Scripts</h1>
            //         <p>This is a test but includes stuff like:</p>
            //         <ul>
            //             <li>Terminal Go</li>
            //             <li>math command</li>
            //             <li>other stuff</li>
            //             <li>Fire Works anniation</li>
            //         </ul>
            //     </div>
            // </Pane>
            //  */}
