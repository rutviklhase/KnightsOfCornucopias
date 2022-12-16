import './Team.scss'
import Card from '@mui/material/Card';
import { CardMedia, Typography } from '@mui/material';
import knight1 from "../../assets/images/knight1.png"
import { color } from '@mui/system';

export default function Team(){
    return (
        <div className="Team">
            <h1 className="TeamHeading"> --------- Meet our Team -------</h1>
            <div className="TeamMems">
                <Card sx={{ maxWidth: "200px",  m: 5}} className="Member">
                    <CardMedia
                        component="img"
                        height="200"
                        image={knight1}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Duke</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Founder</span>
                        </div>
                </Card>
                
                <Card sx={{ maxWidth: 200,  m: 5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={knight1}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Duke</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Founder</span>
                        </div>
                </Card>

                <Card sx={{ maxWidth: 200,  m: 5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={knight1}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Duke</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Founder</span>
                        </div>
                </Card>

                <Card sx={{ maxWidth: 200,  m: 5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={knight1}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Duke</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Founder</span>
                        </div>
                </Card>

                <Card sx={{ maxWidth: 200,  m: 5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={knight1}
                        alt="green iguana"
                    />
                    <Typography>
                        <span>Duke</span><br/>
                    </Typography>
                        <div className='CardText'>
                            
                            <span>Founder</span>
                        </div>
                </Card>
                
            </div>
        </div>
    )
}