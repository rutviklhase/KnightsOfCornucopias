import React from "react";
import ReactDOM from "react-dom";
import "./menubar.scss"

export default function Menubar()
{
    return (
        <div className="Menubar">
            <nav className="Navbar"> 
                <list>
                    <li className="Home"> 
                        Home
                    </li>
                    <li className="Team">
                        Team
                    </li>
                    <li className="Roadmap">
                        Roadmap
                    </li>
                    
                </list>
            </nav>
        </div>
    )
}