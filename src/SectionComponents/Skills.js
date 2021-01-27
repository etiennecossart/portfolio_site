import React from 'react'
import { Pane, Text, majorScale, Box } from 'evergreen-ui'

var pane_width=200
var pane_height=80
var pane_margin=12

function Skills(){
    return(
        <div>
            <Pane
               elevation={2}
                    float="left"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
            >
                <Pane
                    elevation={2}
                    float="left"
                    width={pane_width}
                    height={pane_height}
                    margin={pane_margin}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text size={majorScale(10)}>Python</Text>
                </Pane>
                <Pane
                    elevation={2}
                    float="left"
                    width={pane_width}
                    height={pane_height}
                    margin={pane_margin}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text size={majorScale(10)}>Java</Text>
                </Pane>
                <Pane
                    elevation={2}
                    float="left"
                    width={pane_width}
                    height={pane_height}
                    margin={pane_margin}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text size={majorScale(10)}>Unity Games</Text>
                </Pane>
                <Pane
                    elevation={2}
                    float="left"
                    width={pane_width}
                    height={pane_height}
                    margin={pane_margin}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text size={majorScale(10)}>React</Text>
                </Pane>
                <Pane
                    elevation={2}
                    float="left"
                    width={pane_width}
                    height={pane_height}
                    margin={pane_margin}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
 
                >
                    <Text size={majorScale(10)}>Bash Scripting</Text>
                </Pane>
            </Pane>
        </div>
    )
}

export default Skills