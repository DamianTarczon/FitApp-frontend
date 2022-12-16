import React from "react"

export default function AllergenTile(props: any) {
    return (
        <div className="allergen--tile">
            <img src={props.img} alt='img'/>
            <p>{props.name}</p>
        </div>
    )
}