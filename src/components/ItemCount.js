import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0)
    const sumarContador = () => {
        if (contador > 10) {
            alert('no es una cantidad valida')
        } else setContador(contador + 1)
    }

    const restarContador = () => {
        if (contador < 0) {
            alert('no es una cantidad valida')
        } else setContador(contador - 1)
    }


    return (
        <>
            <p>Elegir cantidad de productos: {contador}</p>
            <button onClick={sumarContador}>agregar</button>
            <button onClick={restarContador}>quitar</button>
        </>
    )
}

export default Contador