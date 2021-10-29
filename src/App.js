import Header from "./components/Header";
import Main from "./components/Main"
import Footer from './components/Footer'
import Container from "./components/ItemListContainer";



const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Container
                nombre='Joel'
                apellido='Loreto'
            />
            <Footer />
        </>
    )
}

export default App
