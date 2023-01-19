import "./Faq.scss";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


export default function Faq(){
    return (
        <div className="Faq" id ="FAQ">
            <div className="FaqHeading">--- FAQ ---</div>
            <div className="FaqBody">Welcome to the Knights of Cornucopias! We are excited to have you here. This guild is built upon a friendly community who want to help and be a part of the Cornucopias journey. By joining this guild, you will have advantages in-game that you otherwise would not as an individual player. </div>
            {/* <div className="Questions">Q. Who are The Knights of Cornucopias?</div> */}
            {/* <div className="Answers"> The Knights of Cornucopias was founded during the early stages of development for Cornucopias. It was built upon passionate adopters of crypto gaming & truly believed this game is the first AAA metaverse being built on the Cardano blockchain. </div>

            <div className="Questions">Q. What are the benefits of joining the guild? </div>
            <div className="Answers"> There are many benefits to joining a gaming guild. A well-organized guild can help progress your in-game character much faster than going solo, the social aspect of being part of a larger community makes it more fun to play, and your character will be able to participate in challenges that are specifically for guilds</div>

            <div className="Questions">Q. What are the different roles in the guild? </div>
            <div className="Answers"> 
            The Round Table - Original founders of the Knights of Cornucopias <br/>
            Round Table Generals - Strategic leaders that work closely with the Round Table to progress the guild forward. <br/>
            Knight Commander - Leaders in the Knights to help lead in specific areas of the guild.<br/>
            Knight Officer - Entry level leadership position.<br/>
            Knight - The most important core member who this guild is built for. Knights will game together and build camaraderie along the way.<br/>
            Citizen - All newcomers <br/>
            Squires - Gamers ages 18 & under 
            
            </div>

            <div className="Questions">Q. How do I advance from Citizen to Knight? </div>
            <div className="Answers"> All new guild members will start out as a citizen. Citizens have the chance to interact with other guild members & find out if this guild is the right fit. <br/>
            Certain steps must be taken to advance: <br/>
            - A Knight must abide by the code at all times. <br/>
            - Be a helpful, friendly, & be active member in the Knights community. <br/>
            - Pledge your loyalty to Knights by adding Knights to the end of your discord handle (optional).<br/>
            - If at any time a Knight does not follow the code, a warning will be issued. After the warning, if the member continues with this behavior, the Knight title will be downgraded to Citizen. If a malicious act to intentionally harm the guild or its members has occurred, no warning will be issued and an automatic downgrade or ban will be implemented.  <br/>
            </div>
            <div className="Questions">Q. Do I need to own an NFT to participate? </div>
            <div className="Answers"> You can join the guild without owning an NFT. The Cornucopias game will have a system that will allow owners to lend their NFT so that anyone can play.</div> */}
            
            <div className="FAQSection">
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="h6" gutterBottom>Q. Who are The Knights of Cornucopias?</Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6" gutterBottom> <div className="Ans">The Knights of Cornucopias was founded during the early stages of development for Cornucopias. It was built upon passionate adopters of crypto gaming & truly believed this game is the first AAA metaverse being built on the Cardano blockchain.</div></Typography>
                        </AccordionDetails>
                </Accordion>


                <Accordion>
                    <AccordionSummary>
                        <Typography variant="h6" gutterBottom>Q. What are the benefits of joining the guild?</Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6" gutterBottom> <div className="Ans">There are many benefits to joining a gaming guild. A well-organized guild can help progress your in-game character much faster than going solo, the social aspect of being part of a larger community makes it more fun to play, and your character will be able to participate in challenges that are specifically for guilds</div></Typography>
                        </AccordionDetails>
                </Accordion>


                <Accordion>
                    <AccordionSummary>
                        <Typography variant="h6" gutterBottom>Q. What are the different roles in the guild? </Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6" gutterBottom> <div className="Ans">The Round Table - Original founders of the Knights of Cornucopias <br/>
            Round Table Generals - Strategic leaders that work closely with the Round Table to progress the guild forward. <br/>
            Knight Commander - Leaders in the Knights to help lead in specific areas of the guild.<br/>
            Knight Officer - Entry level leadership position.<br/>
            Knight - The most important core member who this guild is built for. Knights will game together and build camaraderie along the way.<br/>
            Citizen - All newcomers <br/>
            Squires - Gamers ages 18 & under</div></Typography>
                        </AccordionDetails>
                </Accordion>


                <Accordion>
                    <AccordionSummary>
                        <Typography variant="h6" gutterBottom>Q. How do I advance from Citizen to Knight?</Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6" gutterBottom> <div className="Ans">All new guild members will start out as a citizen. Citizens have the chance to interact with other guild members & find out if this guild is the right fit. <br/>
            Certain steps must be taken to advance: <br/>
            - A Knight must abide by the code at all times. <br/>
            - Be a helpful, friendly, & be active member in the Knights community. <br/>
            - Pledge your loyalty to Knights by adding Knights to the end of your discord handle (optional).<br/>
            - If at any time a Knight does not follow the code, a warning will be issued. After the warning, if the member continues with this behavior, the Knight title will be downgraded to Citizen. If a malicious act to intentionally harm the guild or its members has occurred, no warning will be issued and an automatic downgrade or ban will be implemented.  </div></Typography>
                        </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="h6" gutterBottom>Q.  Do I need to own an NFT to participate?</Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6" gutterBottom> <div className="Ans">You can join the guild without owning an NFT. The Cornucopias game will have a system that will allow owners to lend their NFT so that anyone can play.</div></Typography>
                        </AccordionDetails>
                </Accordion>


                

            </div>

        </div>
    )
}