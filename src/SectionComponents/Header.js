import React from 'react'
import { Pane, Button, Heading, majorScale, Paragraph, UnorderedList, ListItem  } from 'evergreen-ui'
import logo from '../logo512.png'

function Header(){
    return(
        <div>
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
                height={majorScale(20)}
            >
                {/* <img src={logo} /> */}
                    <Pane>
                        <Heading> Hello World, Welcome to Etienne's Website!</Heading>
                    </Pane>
            </Pane>
            <Button>LAUNCHED!!</Button>
            <Pane 
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            border="default"
                            height={majorScale(15)}>
                
                        <Paragraph>This site is still under contstruction, but hey, we live out here!</Paragraph>
                    </Pane>
        </div>
        )
}

export default Header