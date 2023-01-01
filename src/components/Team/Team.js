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

import { color } from '@mui/system';
import { Parallax } from "react-scroll-parallax";

export default function Team(){
    return (
        <div className="Team">
            <Parallax translateY={[-80, -80]}>
            <h1 className="TeamHeading"> --------- Meet our Team -------</h1>
            <div className="TeamMems">
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
                
                <Card sx={{ maxWidth: 300,  m: 5}}>
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

                <Card sx={{ Width: 200,  m: 5}}>
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
                
            </div>
            </Parallax>
        </div>
       
    )
}