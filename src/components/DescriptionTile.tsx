import './DescriptionTile.scss'

interface DescriptionTileProps {
    title: string,
    description: string,
    img: string,
    imgPosition: string 
}

export default function DescriptionTile(props: DescriptionTileProps) {
    return (
        <div className="description">
            {props.imgPosition === 'top' && 
            <img src={props.img} alt={props.img}></img>}
            <h2>{props.title}</h2>
            {props.imgPosition === 'middle' && 
            <img src={props.img} alt={props.img}></img>}
            <p>{props.description}</p>
            {props.imgPosition === 'down' && 
            <img src={props.img} alt={props.img}></img>}
        </div>
    )
}