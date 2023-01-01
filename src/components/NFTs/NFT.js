import React from "react";
import "./NFT.scss";
import shieldnft from "./../../assets/images/shieldnft.gif"
import swordnft from "./../../assets/images/swordnft.gif"
import headgearnft from "./../../assets/images/headgearnft.gif"


export default function(){
    return(
        <div className="NFTs">
         <h1 className="NFTHead">The Complete Knight Series NFTs</h1>
            
            <div className="NFTContent">
                <div className="NFT"> <img src={shieldnft}/> </div>
                <div className="NFT"> <img src={swordnft}/> </div>
                <div className="NFT"> <img src={headgearnft}/> </div>
            </div>
            
        </div>
    )
}