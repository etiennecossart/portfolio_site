import React from 'react'
import { Heading, Pane, Paragraph, Text, majorScale } from 'evergreen-ui'

function Vision(){
    return(
        <div>
            <Pane
            background="tint1"
            padding={majorScale(3)}>
                <Paragraph>
                     Full Stack Software Engineer with a unique perspective and a passion for tackling new challenges for business problems with technical solutions. 
                    As a goal-oriented, avid learner, I self-taught Python, PySpark, and Splunk to become a  growing contributor early on, despite no prior technical experience in big data. 
                    Outgoing and customer focused, I have proven experience building relationships with clients, developing effective and dynamic solutions for their changing needs with a positive attitude.
                </Paragraph>
            </Pane>
        </div>
    )
}

export default Vision