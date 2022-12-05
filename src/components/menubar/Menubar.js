import React from "react";
import ReactDOM from "react-dom";
import "./menubar.scss"

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
                </list>
            </nav>
        </div>
    )
}