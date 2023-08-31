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
import Metricas from "./pages/Dashboard/Metricas";
import MeuPerfil from "./pages/Dashboard/MeuPerfil";
import { useAuth } from "./context/authProvider";
import { RequireAuth } from "./components/RequireAuth";
import EsqueciSenha from "./pages/EsqueciSenha";
import ValidadeCode from "./pages/ValidadeCode";
import NewPassword from "./pages/NewPassword";



export default() => {

    const auth = useAuth()



    return(
    
        <Routes>

           
            <Route path="/" element={<Login/>} />


            <Route path="/esqueci" element={<EsqueciSenha/>}/>
            <Route path="/verificar-codigo" element={<ValidadeCode/>}/>
            <Route path="/nova-senha" element={<NewPassword/>}/>
            {/* <Route path="/home" element={<Home/>} /> */}
            {/* <Route path="/cadastro" element={<Cadastro/>} /> */}
            {/* <Route path="/plano" element={ <Plano/> } />
            <Route path="/pagamento" element={<Pagamento/>} />
            <Route path="/obrigado" element={<Obrigado/>} /> */}

            <Route path="/dashboard-main" element={<RequireAuth><Main/> </RequireAuth>} />
            <Route path="/metricas/:id_video" element={<RequireAuth> <Metricas/> </RequireAuth>} />
            <Route path="/area-criacao" element={<RequireAuth><Create/> </RequireAuth>} />
            <Route path="/meus-videos" element={<RequireAuth><MeusVideos/> </RequireAuth>} />
            <Route path="/video/:id_video" element={<RequireAuth><VideoPage/> </RequireAuth>} />
            <Route path="/edicao/:id_video" element={<RequireAuth><Edicao/> </RequireAuth>} />
            <Route path="/full-video/:id_video" element={<RequireAuth><FullVideoPage/> </RequireAuth>} />
            <Route path="/afiliados" element={<RequireAuth><Afiliado/> </RequireAuth>} />
            <Route path="/meu-perfil" element={<RequireAuth><MeuPerfil/> </RequireAuth>} />
        </Routes>
 
    )
}