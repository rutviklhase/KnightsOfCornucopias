
import castle from "../../assets/images/castle.png"
import './SmallCastle.scss'

export default function SmallCastle(props){
    return(
        <div className="SmallCastle">
                <img classsName="Castle2" src={castle} width={props.size}/>
        </div>
    )
}