import React from "react";
import ItemCount from "./ItemCount"

export default function Items({ title, id, image, price }) {
    return (
        <>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={image} />
            <h4>{price}</h4>
            <ItemCount />
        </>

    )
}


