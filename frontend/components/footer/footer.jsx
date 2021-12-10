import React from "react";
import {VscGithub} from 'react-icons/vsc'
import {BsLinkedin, BsPersonCircle} from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <div className="dark-blue-foot" >
                <h1 className="icon-footer-name" >Matthew Swedin 2021</h1>
                <a href="https://github.com/mattswedin" target="_blank" ><VscGithub className="icon-footer" color={"white"} size={40}/></a>
                <a href="https://www.linkedin.com/in/mattswedin/" target="_blank" ><BsLinkedin className="icon-footer" color={"white"} size={40}/></a>
                <a href="https://www.matthewswedin.com/" target="_blank" ><BsPersonCircle className="icon-footer" color={"white"} size={40}/></a>
            </div>
        </div>
    )
}

export default Footer;