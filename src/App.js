import Header from "./components/Header";
import Main from "./components/Main"
import Footer from './components/Footer'
import ItemDetailContainer from "./components/ItemDetailContainer";
/* import ItemListContainer from "./components/ItemListContainer"; */



const App = () => {
    return (
        <>
            <Header
                nombre='Joel'
                apellido='Loreto' />
            <Main />
            {/* <ItemListContainer
            /> */}
            <ItemDetailContainer />
            <Footer />
        </>
    )
}

export default App
