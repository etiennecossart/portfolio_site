import React from 'react'
import Typical from 'react-typical'
import {Link} from 'react-scroll'
import './Header.css'



function Header () {
    return(
        <div className="header-main">
            <div className="main-div">
                <text>Hey there, Welcome!</text>
                <text>I'm <span className="name">Étienne Cossart</span>,</text>
                <text> a <span className="typer">
                    <Typical 
                        loop={Infinity}
                        wrapper="n"
                        steps={[
                                'software developer',
                                2500,
                                'backend engineer',
                                2500,
                                'big data engineer',
                                2500,
                                'frontend developer',
                                2500,
                                'fast & avid learner',
                                2500,
                                '3D printing creator',
                                2500,
                                'whiteboard enthusist',
                                2500,
                                'creative problem solver',
                                2500
                            ]}
                        />
                    </span>
                </text>
            </div>
            <div className="button_wrapper">
                <Link activeClass="active" to="Bio" spy={true} smooth={true}>
                    <button class="button"><span>View Portfolio</span></button>
                </Link>            
            </div>
        </div>
    )
}

export default Header