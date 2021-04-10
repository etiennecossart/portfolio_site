import React, {Component} from 'react'
import { Pane, Button, Text, majorScale, Heading, TranslateIcon} from 'evergreen-ui'

export default class body extends Component {
    render(){
        return(
            <>
            <Pane
                margin={0}
                background="overlay"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                border="default"
                height={majorScale(100)}>
                <div id="Printing">
                    <h1>My 3D Printing Projects</h1>
                    <p>This is a test with all of my stuff about 3D printing. Things to include:</p>
                    <ul>
                        <li>Headphone Holder</li>
                        <li>Backpack Closet Hanger</li>
                        <li>Marker Stand</li>
                        <li>Cannon Ball Base</li>
                    </ul>
                </div>
            </Pane>

            <Pane
                margin={0}
                background="overlay"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                border="default"
                height={majorScale(100)}>
                <div id="ShellScripts">
                    <h1>My Shell Scripts</h1>
                    <p>This is a test but includes stuff like:</p>
                    <ul>
                        <li>Terminal Go</li>
                        <li>math command</li>
                        <li>other stuff</li>
                        <li>Fire Works anniation</li>
                    </ul>
                </div>
            </Pane>
            
            </>
        )
    }
}