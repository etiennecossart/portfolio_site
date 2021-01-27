import React from 'react'
import { Pane, Text, majorScale, Box } from 'evergreen-ui'

function Footer(){
    return(
        <div>
            <Pane
                height={majorScale(10)}
                background="greenTint"
                alignItems="center"
                justifyContent="center"
                >
                <Text size={majorScale(5)}>Footer: thanks for visiting the site!</Text> 
            </Pane>
        </div>
    )
}

export default Footer