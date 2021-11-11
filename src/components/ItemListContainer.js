import React, { useEffect, useState } from "react";
import { useParams } from "wouter";
import ItemList from "./ItemList";
import productos from "../json/Productos.json"


const ItemListContainer = (param) => {

    const { categoriaId } = useParams()
    const [items, setItems] = useState([])


    useEffect(() => {

        setTimeout(() => {

            if (categoriaId) {
                const productos_filter = productos.filter(producto => producto.category === categoriaId)
                setItems(productos_filter)
            } else {
                setItems(productos)
            }

        }, 2000)
    }, [categoriaId])

    if (productos.length === 0) {
        return (
            <>
                <p>Loading</p>
            </>)
    } else {
        return (
            <>
                <ItemList productos={items} />
            </>
        )
    }
}

export default ItemListContainer