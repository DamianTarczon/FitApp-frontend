import React from "react"

export default function Tile(props: any) {
    return (
        <div id={props.id} className={props.className} onClick={(e) => props.handleClick(e, props.name)}>
            <img src={props.img} alt='img'/>
            <p>{props.name}</p>
        </div>
    )
}