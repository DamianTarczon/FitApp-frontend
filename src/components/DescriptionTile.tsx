import { Link } from "react-router-dom";
import './DescriptionTile.scss'

interface DescriptionTileProps {
    title: string,
    description: string,
    url: string,
    buttonText: string 
}

export default function DescriptionTile(props: DescriptionTileProps) {
    return (
        <div className="description">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link to={props.url}><button>{props.buttonText}</button></Link>
        </div>
    )
}