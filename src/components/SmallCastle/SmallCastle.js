
import castle from "../../assets/images/castle.png"
import castlesmall from "../../assets/images/castlesmall.png"
import './SmallCastle.scss'

export default function SmallCastle(props){
    return(
        <div className="SmallCastle">
                <img classsName="Castle2" src={castlesmall} width={props.size}/>
        </div>
    )
}