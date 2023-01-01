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
