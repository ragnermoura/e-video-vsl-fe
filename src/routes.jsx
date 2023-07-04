import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Plano from "./pages/Plano";
import Pagamento from "./pages/Pagamento";



export default() => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/plano" element={<Plano/>} />
            <Route path="/pagamento" element={<Pagamento/>} />
        </Routes>
    )
}