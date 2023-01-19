import './Team.scss'
import Card from '@mui/material/Card';
import { CardMedia, Typography } from '@mui/material';
import knight1 from "../../assets/images/knight1.png"
import knight2 from "../../assets/images/knight2.png"
import knight3 from "../../assets/images/knight3.png"
import knight4 from "../../assets/images/knight4.png"
import mh from "../../assets/images/mh.jpg"
import juju from "../../assets/images/juju.jpg"
import braz from "../../assets/images/braz.jpeg"
import mhcircle from "../../assets/images/mhcircle.png"
import brazcircle from "../../assets/images/brazcircle.png"
import jujucircle from "../../assets/images/jujucircle.png"
import scottcircle from "../../assets/images/scottcircle.png"


import { color } from '@mui/system';
import { Parallax } from "react-scroll-parallax";


export default function Team(){
    var mhbio = "mh bio";

    return (
        <div className="Teamm" id="Teamm">
            <Parallax translateY={[-80, -80]}>
            <h1 className="TeamHeading">---- Meet our Team ----</h1>
            {/* <div className="TeamMems">
                <Card sx={{ maxWidth: "200px",  m: 5}} className="Member">
                    <CardMedia
                        component="img"
                        height="200"
                        image={mh}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>MoodyHound</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Strategy & Operations</span>
                        </div>
                </Card>
                
                <Card sx={{ maxWidth: "200px",  m: 5}}  className="Member">
                    <CardMedia
                        component="img"
                        height="200"
                        image={knight4}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Scott of the Corn </span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Finance & Marketing</span>
                        </div>
                </Card>

                <Card sx={{ Width: 300,  m: 5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={braz}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Braz</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Gaming Officer</span>
                        </div>
                </Card>

                <Card sx={{ maxWidth: 200,  m: 5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={juju}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Dame Juju </span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Community Officer</span>
                        </div>
                </Card>
                
            </div> */}
            <div className="bio">
                <img src={mhcircle} className="circleimage"/>
                <div className="biobody"><div className='bioname'>MoodyHound - Nick West</div><br/>Knights Guild of Cornucopias - Strategy; Round Table<br/>Crypto Journey - Blockchain introduction and early investor of the Cardano Ecosystem; 2017/18<br/>Day-to-Day - Over 20 years experience in both project and asset management. A number of board appointments as a non executive director in the engineering and research industry and business transformation<br/>Favourite Console - PC<br/>Favourite Games -The bard's tale, neverwinter nights series, games workshop mordheim, world of warcraft, d&d online, blood bowl and the forest
                <br/>First NFT - Some dodgy Eth rug pull... Then my own 'Moodyhound' CNFT<br/>Other Passions - Lifelong dungeons and dragons tabletop rpg dungeon master and player. Hugo, his dog...
</div>
            </div>

            <div className="bio">
                <img src={jujucircle} className="circleimage"/>
                <div className="biobody"><div className='bioname'>Dame Juju</div><br/>Knights Guild of Cornucopias - Community; Round Table<br/>Crypto Journey - Bought my first Bitcoin 2018. Then I went down the rabbit hole and discovered Charles Hoskinson's whiteboard video in 2020 and have been a Cardano fan ever since.<br/>Day-to-Day - Mother, nurse, wife, and small business owner.<br/>Favourite Console - PC<br/>Favourite Games - My all time favorite game that I grew up with was King's Quest. I was obsessed with this game and have so many fond memories trying to solve the quests. My second favorite game after that was Leisure Suit Larry.<br/>First NFT - 30 plots of Pavia land. I still hold 27.<br/>Other Passions - Trying to learn the craft of day trading and having drinks with good friends.</div>
            </div>

            <div className="bio">
                <img src={brazcircle} className="circleimage"/>
                <div className="biobody"><div className='bioname'>Braz - Geordain Brazier</div><br/>Knights Guild of Cornucopias - Gaming; Round Table<br/>Crypto Journey - Supporter of the Cardano Ecosystem; December 2019.<br/>Day-to-Day - Almost a decade of experience in planning, managing and delivering effects in support of health logistics operations.<br/>Favourite Console - Playstation<br/>Favourite Games - Runescape, Call of Duty, Horizon Zero Dawn, Horizon Forbidden West, Crash Bandicoot, Ratchet and Clank, God of War, Last of Us, Uncharted.<br/>First NFT - Cornucopias Bubblejet Sprinter [Legendary] 2022<br/>Other Passions - Crossfit, Listening to Audiobooks & Chess</div>
            </div>

            <div className="bio">
                <img src={scottcircle} className="circleimage"/>
                <div className="biobody"><div className='bioname'>Scott</div></div>
            </div>
            </Parallax>
        </div>
       
    )
}