import React from "react"
import './Tile.scss'

interface TileProps {
    id: number,
    className: string,
    img: string,
    name: string,
    handleClick: any
}

export default function Tile(props: TileProps) {
    return (
        <div id={props.id.toString()} className={props.className} onClick={(e) => props.handleClick(e, props.name)}>
            {props.img ? <img src={props.img} alt='img'/> : null}
            <p>{props.name}</p>
        </div>
    )
}