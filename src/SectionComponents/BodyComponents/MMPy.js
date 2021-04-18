import React from 'react'
import { Pane, Button, Text, majorScale, Heading, Paragraph, TranslateIcon} from 'evergreen-ui'
import logo from '../../logo512.png'
import './MMPy.css'
import BioPic from '../../Resources/etienne.jpg'



function MMPy(){
    return(
        <div className="mm_main">
            <div className="description">
                <text>In an effort to pretend like I know basketball, and learn how to develop a full stack project, I decided to design and build this project</text>
            </div>
            <div className="wate_inputs">
                <label for="AdjEM">Adjusted EM</label>
                <input id="AdjEM" type="number" />
            </div>

        </div>
    )}

export default MMPy
