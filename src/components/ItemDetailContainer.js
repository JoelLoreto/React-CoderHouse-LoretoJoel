import React, { useEffect, useState } from "react";
import { useParams } from "wouter";
import ItemDetail from "./ItemDetail";
import productos from "../json/Productos.json"

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState([])


    useEffect(() => {

        setTimeout(() => {

            setItem(
                productos.filter(item => item.id === parseInt(id))
            )

        }, 2000)
    }, [])

    if (productos.length === 0) {
        return (
            <>
                <p>Loading</p>
            </>)
    } else {
        return (
            <>
                <ItemDetail productos={item} />
            </>
        )
    }
}

export default ItemDetailContainer