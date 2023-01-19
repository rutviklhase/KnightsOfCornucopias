import React from "react";
import { ReactDOM } from "react";
import "./Roadmap.scss"
import road from "../../assets/images/Frame 2.png"
import line from "../../assets/images/Line.png"
import line2 from "../../assets/images/Line2.png"
import { Parallax } from "react-scroll-parallax";
import island from "../../assets/images/island.png"

export default function Roadmap(){
    return(
      
        <div className="Roadmap">
            
            <Parallax translateY={[-2, 30]}>
            
            <h1 className="RoadmapHead">----- Join Us On Our Journey! -----</h1>
            <div className="Map"> 
                 <p className="HomeContent">
            The Knights of Cornucopias is a CNFT gaming guild for Cornucopias Game that is being built on the Cardano blockchain. As a guild, we have acquired a massive inventory of Cornucopias NFTs and have also created our own Knight NFTs that will have in-game utility as well as income potential. The Knights is not only the premier in-game Guild, we are also a positive community that advocates for players from all over the world. Join us and rise to the top of the metaverse as we build and grow together.
            </p>
                <img src={road} className="road"></img>
                <div className="roadname">*RoadMap Is Under Construction*</div>
                <img src={line} className="line"></img>
                <img src={road} className="road"></img>
                <div className="roadname"></div>
                <img src={line} className="line"></img>
                <img src={road} className="road"></img>
                <div className="roadname"></div>
                <img src={line2} className="line"></img>
                <img src={island} className="island"/>

                
            </div>

            </Parallax>



        </div>

     
    
    )
}
