import {React, Component, useState}from 'react'
import prjData from './ProjectData'
import Project from './Project/Project'
import './ProjectList.css'

// function ProjectList(){
//     return(
//         <div className="project-list-main">
//             <Project />
//             <Project />
//             <Project />
//         </div>
//     )
// }


class ProjectList extends Component{
    // const [active, setActive] = useState()
    constructor(){
        super()
        this.state = {
            projectList: prjData
        }
        this.handleActive = this.handleActive.bind(this)
    }

    handleActive(id){
        console.log('Active: ', id)
    }
    render() {
        const projects = prjData.map(prj => <Project key = {prj.id } project={prj} handleActive={this.handleActive}/>)
        return(
            <div className="project-list-main">
                {projects}
                
            </div>
            )
    }
}
export default ProjectList