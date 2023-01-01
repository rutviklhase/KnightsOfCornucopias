import React from "react";
import ReactDOM from "react";
import "./Footer.scss";
import logo from "./../../assets/images/logo.png"

export default function footer(){
    return(
        <div className="Footer">
            <footer className="footercontent">
                <img src={logo}/>
            </footer>

        </div>
    )
}