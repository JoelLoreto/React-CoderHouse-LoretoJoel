
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])


    const getData = () => {

        fetch('https://fakestoreapi.com/products')
            .then((data) => {
                const productos_de_api = data.json()
                return productos_de_api
            })
            .then((array_de_productos) => {
                setProductos(array_de_productos)
            })
    }

    useEffect(() => {

        setTimeout(() => {

            getData()

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
                <ItemDetail productos={productos} />
            </>
        )
    }
}

export default ItemDetailContainer

