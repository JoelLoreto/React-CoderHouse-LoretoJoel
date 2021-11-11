import { Link } from "wouter"
import ItemCount from './ItemCount'


const ItemDetail = ({ productos }) => {

    const { id, description1, description2, description3, title, image }
    return (
        <div key={id} id={id}>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={image} />
            <div>
                <ul>
                    <li key="1">{description1}</li>
                    <li key="2">{description2}</li>
                    <li key="3">{description3}</li>
                </ul>
            </div>
            <h4>Price: {item.price}</h4>
            <div>
                {Array(item.starts)
                    .fill()
                    .map((_, i) => (
                        <p>###</p>
                    ))}
            </div>
            <div>
                <ItemCount />
            </div>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ItemDetail