import Header from "./components/Header";
import Productos from "./components/Productos";
import Main from "./components/Main"
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Header
                nombre='Joel'
                apellido='Loreto'
            />
            <Main />
            <Productos />
            <Footer />
        </>
    )
}

export default App
