import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import ListaProdutos from "./pages/listaProdutos/ListaProdutos"
import DetProduto from "./pages/detProduto/DetProduto"
import Login from "./pages/login/Login"


export default function App() {
    return (

        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Produtos" element={<ListaProdutos />} />
                <Route path="/DetProduto" element={<DetProduto />} />
                <Route path="/login" element={<Login />} />
                <Route path="*"
                    element={
                        <img className="container-notfound" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6etVn_eZhOiIOjhpl5FyZ4ApO6LKwmWXc0cUG0rORQ&s=10" alt="Imagem de não encontrado" />

                    } />
            </Routes>
            <Footer />
        </>

    )
}