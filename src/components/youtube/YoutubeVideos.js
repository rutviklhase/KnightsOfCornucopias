import "./YoutubeVideos.scss"
import React from "react"
import YouTube from "react-youtube"

export default function YoutubeVideos()
{
    const opts = {
        height: '250',
        width: '350'
    }
    return(
        <div className="YoutubeVideos">
            <h1 className="YoutubeHead">----Guild Videos----</h1>

            <div className="Videos1">
            <YouTube videoId="icUbvs-3JRA" className="YoutubeVideo" opts={opts}></YouTube>
            <YouTube videoId="MpxbTq78BOQ" className="YoutubeVideo" opts={opts}></YouTube>
            
    
            <YouTube videoId="nLgUtqZziW4" className="YoutubeVideo" opts={opts}></YouTube>
            <YouTube videoId="WIkLTxd6X2c" className="YoutubeVideo" opts={opts}></YouTube>
            </div>
            

        </div>
    )
}