import Item from "./Item"

const ItemList = ({ productos }) => {

    return (
        <>
            {productos.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        title={producto.title}
                        id={producto.id}
                        image={producto.image}
                        price={producto.price}
                    />
                )
            }
            )}

        </>
    )
}

export default ItemList