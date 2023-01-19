import React from "react";
import ReactDOM from "react-dom";
import "./menubar.scss"
import logo from "../../assets/images/logo.png"
import disc from "../../assets/images/discord.png"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { blue } from "@mui/material/colors";
import twit from "../../assets/images/twitter.png"
import utube from "../../assets/images/utube.png"

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
                        <a href="#FAQ">FAQ</a>
                    </li>
                    <li className="Roadmap">
                        <a href = "#Teamm">TEAM</a>
                    </li>
                    <li className="Home"> 
                        HOME
                    </li>
                    <li className="LogoMain"> 
                        <img src={logo}/>
                        
                    </li>
                </list>

                <Box className="socialsbox"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 50,
                    height: 200,
                    backgroundColor: '#23203d',
                    },
                }}
                >
                <Paper elevation={5} ><a href="https://discord.gg/knights-of-cornucopias"><img src={disc}className="discord"></img></a>
                <a href="https://twitter.com/theknightsguild"><img src={twit}className="discord"></img></a>
                <a href="https://www.youtube.com/channel/UCP-cD4wYXPB5DiQnrvMQXkQ"><img src={utube}className="discord"></img></a>
                </Paper>
            </Box>
            </nav>
        </div>
    )
}