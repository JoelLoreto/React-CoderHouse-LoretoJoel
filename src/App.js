import Header from "./components/Header";
import Productos from "./components/Productos";
import Contador from "./components/ItemCount";
import Main from "./components/Main"
import Container from "./components/ItemListContainer";
import Footer from './components/Footer'


const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Container
                nombre='Joel'
                apellido='Loreto'
            />
            <Productos />
            <Contador />
            <Footer />
        </>
    )
}

export default App
