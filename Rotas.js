import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../paginas/Cadastro/Cadastro'
import Login from '../paginas/Login/Login'



function Rotas(){

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='cadastro' element={<Cadastro/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas