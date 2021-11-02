import ItemCount from './ItemCount'

const ItemDetail = ({ productos }) => {

    return (
        <>
            {productos.map((prod) => {
                return (
                    <div key={prod.id}>
                        <h4 key={prod.title}>{prod.title}</h4>
                        <small key={prod.id}>{prod.id}</small>
                        <img key={prod.title} alt='img' src={prod.image} />
                        <h4 key={prod.price}>{prod.price}</h4>
                        <ItemCount />
                    </div>

                )
            }
            )}

        </>
    )
}

export default ItemDetail