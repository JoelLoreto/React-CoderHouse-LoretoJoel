import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"

const ItemList = () => {

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
            <div>
                {productos.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <h4 Key={prod.title}>{prod.title}</h4>
                            <img Key={prod.image} alt='img' src={prod.image} />
                            <h4 key={prod.price}>{prod.price}</h4>
                            <ItemCount />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ItemList




/*
return (
    <div>
        {productos.map((prod) => {
            return (
                <div key={prod.id}>
                    <h4 Key={prod.title}>{prod.title}</h4>
                    <img Key={prod.image} alt='img' src={prod.image} />
                    <h4 key={prod.price}>{prod.price}</h4>
                    <ItemCount />
                </div>
            )
        })}
    </div>
) */