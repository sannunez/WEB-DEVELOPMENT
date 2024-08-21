import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import MainInfo from './componentes/mainInfo.jsx'
import Servicos from './pages/Servicos.jsx'
import Contatos from './pages/Contatos.jsx'

const router = createBrowserRouter([
  { //objeto
    path: "/", // caminho
    element: <App/>,
    //filho --> children
    children: [
      {index: true, element: <MainInfo/>}, // --> o que será mostrado no outlet que importamos por padrão
      {path: "sobre", element: <Sobre/>},
      {path: "servicos", element:<Servicos/>},
      {path: "contatos", element:<Contatos/>}
      // {path: "*", element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
