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
                        Roadmap
                    </li>
                    <li className="Team">
                        Team
                    </li>
                    <li className="Home"> 
                        Home
                    </li>
                    <li className="LogoMain"> 
                        <img src={logo}/>
                    </li>
                </list>
            </nav>
        </div>
    )
}