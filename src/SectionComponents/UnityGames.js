import React from 'react'
import { Heading, Pane, Text, majorScale } from 'evergreen-ui'

function UnityGames(){
    return(
        <div>
            <Pane
                background="orangeTint"
                padding={majorScale(5)} >
                    <Pane
                    padding={majorScale(3)}
                    boarder="thin">
                        <Heading>Video Game Development Projects</Heading>
                    </Pane>
                
                <Text>Experience</Text>
                <Text>Game Programming (CS104) - Lafayette College</Text>
                <Text>Unity 3D Game Development - Udemy.com</Text>
            </Pane>
        </div>
    )
}

export default UnityGames