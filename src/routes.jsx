import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Plano from "./pages/Plano";
import Pagamento from "./pages/Pagamento";
import Main from "./pages/Dashboard/main";
import Create from "./pages/Dashboard/criacao";
import MeusVideos from "./pages/Dashboard/meusVideos";
import VideoPage from "./pages/Dashboard/VideoPage";
import FullVideoPage from "./pages/Dashboard/FullVideoPage";
import Afiliado from "./pages/Dashboard/Afiliado";
import Obrigado from "./pages/Obrigado";
import Home from "./pages/Home";
import Edicao from "./pages/Dashboard/edicao";



export default() => {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/plano" element={<Plano/>} />
            <Route path="/pagamento" element={<Pagamento/>} />
            <Route path="/obrigado" element={<Obrigado/>} />
            <Route path="/dashboard-main" element={<Main/>} />
            <Route path="/area-criacao" element={<Create/>} />
            <Route path="/meus-videos" element={<MeusVideos/>} />
            <Route path="/video/:id_video" element={<VideoPage/>} />
            <Route path="/edicao/:id_video" element={<Edicao/>} />
            <Route path="/full-video/:id_video" element={<FullVideoPage/>} />
            <Route path="/afiliados" element={<Afiliado/>} />
        </Routes>
    )
}