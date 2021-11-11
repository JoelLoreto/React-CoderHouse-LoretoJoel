
import Nav from './Nav'

const Header = ({ nombre, apellido }) => {
    return (
        <header id="header">

            <h1>Jack Bazar</h1>

            <p>Bienvenido {nombre} {apellido}</p>
            <span className="material-icons">
                <a href='#'>shopping_cart</a>
            </span>

            <Nav />
        </header>

    )
}

export default Header