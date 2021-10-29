import ItemList from "./ItemList"


const Container = ({ nombre, apellido }) => {
    return (
        < div id='saludo'>
            <p>Bienvenido {nombre} {apellido}</p>

            <ItemList />
        </div>
    )

}

export default Container

/* return (
    < div id='saludo'>
        <p >Bienvenido {nombre} {apellido}</p>

        <ItemList />
    </div>
) */