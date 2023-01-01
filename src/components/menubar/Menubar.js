import React from "react";
import ReactDOM from "react-dom";
import "./menubar.scss"
import logo from "../../assets/images/logo.png"

export default function Menubar()
{
    return (
        <div className="Menubar">
            <nav className="Navbar"> 
                <list className = "Menulist">
                <li className="Roadmap">
                       <a href="https://drive.google.com/file/d/1vwY1wH_x0lGOF_4P65iRM6EtbxcvSUO2/view">WHITEPAPER</a> 
                    </li>
                <li className="Roadmap">
                        FAQ
                    </li>
                <li className="Roadmap">
                        ROADMAP
                    </li>
                    <li className="Team">
                        TEAM
                    </li>
                    <li className="Home"> 
                        HOME
                    </li>
                    <li className="LogoMain"> 
                        <img src={logo}/>
                    </li>
                </list>
            </nav>
        </div>
    )
}