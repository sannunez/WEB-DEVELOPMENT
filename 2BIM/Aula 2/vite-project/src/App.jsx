
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import MainInfo from "./componentes/mainInfo"
import { Outlet } from "react-router-dom"


function App() {
  

  return (
    <>
    <Header/>
    {/* OUTLET --> onde o conteudo que será alterado na pagina ficará */}
    <Outlet/>
    <Footer/>
    </>
    

  )
}

export default App
