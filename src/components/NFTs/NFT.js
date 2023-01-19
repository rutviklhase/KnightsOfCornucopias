import React from "react";
import "./NFT.scss";
import shieldnft from "./../../assets/images/shield.jpg"
import swordnft from "./../../assets/images/sword.png"
import headgearnft from "./../../assets/images/headgear.jpg"


export default function(){
    return(
        <div className="NFTs">
         <h1 className="NFTHead">----The Complete Knight Series NFTs----</h1>
            
            <div className="NFTContent">
                <a href="https://www.jpg.store/collection/knightsofcornucopias"><div className="NFT"> <img src={shieldnft}/> </div></a>
                <a href="https://www.jpg.store/collection/knightsguildofcornucopiaspart2"><div className="NFT"> <img src={swordnft}/> </div></a>
                <a href="https://knights-guild.ada-anvil.io/en/"><div className="NFT"> <img src={headgearnft}/> </div></a>
            </div>
            
        </div>
    )
}