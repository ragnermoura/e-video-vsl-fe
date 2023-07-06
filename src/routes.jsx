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



export default() => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/plano" element={<Plano/>} />
            <Route path="/pagamento" element={<Pagamento/>} />
            <Route path="/dashboard-main" element={<Main/>} />
            <Route path="/area-criacao" element={<Create/>} />
            <Route path="/meus-videos" element={<MeusVideos/>} />
            <Route path="/video/:id_video" element={<VideoPage/>} />
            <Route path="/full-video/:id_video" element={<FullVideoPage/>} />
        </Routes>
    )
}