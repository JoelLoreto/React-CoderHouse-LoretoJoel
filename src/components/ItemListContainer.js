import { useEffect, useState } from "react";

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const getData = () => {

        fetch("/Productos.json")
            .then(function (response) {

                return response.json()
            })

            .then(function (productosJson) {
                setProductos(productosJson)
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
                <ItemList productos={productos} />
            </>
        )
    }
}

export default ItemListContainer