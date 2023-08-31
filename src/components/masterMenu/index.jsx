import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useAuth } from "../../context/authProvider";
export default () => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const auth = useAuth()
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona o evento de redimensionamento para atualizar a largura quando a janela é redimensionada
    window.addEventListener('resize', handleResize);

    // Remove o evento de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container open={isOpen}>
{width <= 995 &&
<IoMenu style={{marginLeft: 20, marginTop: 20}} onClick={handleToggle} size={48}/>
}

      <aside
        id=""
        className="menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="" className="app-brand-link">
            <span className="app-brand-logo demo">
              <img
                src={Logo}
                alt=""
                srcset=""
                className="img-fluid logo"
              />
              
            </span>
          </a>
          {width <= 995 &&
<IoMenu onClick={handleToggle} size={48}/>
}
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-item">
            <a href="/dashboard-main" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </a>
          </li>

          <li className="menu-item">
            <a href="https://evideovsl.com.br/tutoriais/" target="_blank" className="menu-link">
              <i className="menu-icon tf-icons bx bx-video"></i>
              <div data-i18n="Basic">Tutorial</div>
            </a>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Área de criação</span>
          </li>

          <li className="menu-item">
            <a href="/area-criacao" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-edit"></i>
              <div data-i18n="Layouts">Editor de VSL</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="/meus-videos" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-play"></i>
              <div data-i18n="Account Settings">Meus vídeos</div>
            </a>
          </li>
         

          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock"></i>
              <div data-i18n="Misc">Teste A-B | <small className="text-primary">Em criação</small></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock"></i>
              <div data-i18n="Misc">Pixel | <small className="text-primary">Em criação</small></div>
            </a>
          </li>

        
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Vitrine de Produtos </span>
          </li>

          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-store"></i>
              <div data-i18n="Misc">Nossos Produtos |<small className="text-primary"><br/>Em breve</small></div>
            </a>
          </li>
          
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-store"></i>
              <div data-i18n="Misc">Produtos Parceiros |<small className="text-primary"> Em breve</small></div>
            </a>
          </li>
        


          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pessoal</span>
          </li>

      
          
          <li className="menu-item">
            <a href="/meu-perfil" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-user"></i>
              <div data-i18n="User interface">Meu perfil</div>
            </a>
          </li>  
       
          <li className="menu-item">
            <a  onClick={() => {
               sessionStorage.clear()
              auth?.logout()
              navigate('/')
            }} className="menu-link">
              <i className="menu-icon tf-icons bx bx-door-open"></i>
              <div data-i18n="Basic">Logout</div>
            </a>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Atendimentos &amp; Suporte</span>
          </li>

          <li className="menu-item">
            <a
              href="https://api.whatsapp.com/send?phone=5571982414747&text=Ol%C3%A1%20quero%20falar%20com%20suporte%20do%20e-video%20vsl"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bx-phone"></i>
              <div data-i18n="Documentation">Suporte</div>
            </a>
          </li>
        </ul>
      </aside>
    </Container>
  );
};
