import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Plano from "./pages/Plano";
import Pagamento from "./pages/Pagamento";
import Main from "./pages/Dashboard/main";



export default() => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/plano" element={<Plano/>} />
            <Route path="/pagamento" element={<Pagamento/>} />
            <Route path="/dashboard-main" element={<Main/>} />
        </Routes>
    )
}