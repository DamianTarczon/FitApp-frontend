import React from "react"

export default function Tile(props: any) {
    return (
        <div id={props.id} className={props.className} onClick={(e) => props.handleClick(e, props.name)}>
            {props.img ? <img src={props.img} alt='img'/> : null}
            <p>{props.name}</p>
        </div>
    )
}