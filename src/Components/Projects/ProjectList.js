import {React, Component }from 'react'
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
    render() {
        const projects = prjData.map(prj => <Project key = {prj.id } project={prj} />)
        return(
            <div className="project-list-main">
                {projects}
                
            </div>
            )
    }
}
export default ProjectList