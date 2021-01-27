import React from 'react'
import { Pane, Text, majorScale, Box } from 'evergreen-ui'
import logo from '../logo512.png'

function ReactProjects(){
    return(
        <div>
            <Pane
                height={majorScale(10)}
                background="greenTint"
                alignItems="center"
                justifyContent="center"
                >
                <Text size={majorScale(5)}>React Projects</Text> 
            </Pane>
        </div>
    )
}

export default ReactProjects
