import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from './components/Footer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Switch } from "wouter"


const App = () => {
    return (
        <>
            <BrowserRouter >
                <Header
                    nombre='Joel'
                    apellido='Loreto' />
                <Switch>
                    <Route path="/" component={ItemListContainer} exact />
                    <Route path="/ItemDetail/id:" component={ItemDetailContainer} exact />
                    <Route path="/category/:categoriaId:" component={ItemListContainer} exact />
                </Switch>
                <Main />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App