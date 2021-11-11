import React from "react";
import { Link } from "wouter";


const Item = ({ item }) => {
    return (
        <div key={item.id}>
            <h4>{item.title}</h4>
            <small>{item.id}</small>
            <img alt={item.title} src={item.image} />
            <h4>Price: {item.price}</h4>
            <div>
                {Array(item.starts)
                    .fill()
                    .map((_, i) => (
                        <p>###</p>
                    ))}
            </div>
            <a>
                <Link to={`/ItemDetail/${item.id}`}>Ver Detalles</Link>
            </a>

        </div>

    )
}


export default Item