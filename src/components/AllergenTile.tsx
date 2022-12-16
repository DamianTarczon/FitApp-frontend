import React from "react"

export default function AllergenTile(props: any) {
    return (
        <div className="allergen--tile" onClick={(e) => props.handleClick(e, props.name)}>
            <img src={props.img} alt='img'/>
            <p>{props.name}</p>
        </div>
    )
}