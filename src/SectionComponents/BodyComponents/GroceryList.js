import React from 'react'
import './GroceryList.css'

function GroceryList(){
    return(
        <div>
            <h1 className="app_header">Hello world, does this is an app</h1>
            <div className="list_controls">
                <div className="user_input_section">
                    teeest tone
                    <input/>
                </div>
                <div className="task_list">
                    <ul> ToDo tasks
                        <li>test 1</li>
                        <li>test 2</li>
                        <li>andother one</li>
                        <li>bloop</li>
                    </ul>
                </div>
                <div className="completed_list">
                    <ul> Completed tasks
                        <li>asdf 1</li>
                        <li>safs 2</li>
                        <li>sfd one</li>
                        <li>as</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GroceryList

