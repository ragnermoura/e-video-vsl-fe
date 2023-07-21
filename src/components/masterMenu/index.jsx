import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";

export default () => {
  return (
    <Container>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="" className="app-brand-link">
            <span className="app-brand-logo demo">
              <img
                src={Logo}
                alt=""
                srcset=""
                className="img-fluid"
                style={{ width: 160 }}
              />
            </span>
          </a>

          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
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
            <a href="#" className="menu-link">
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
            <a href="/meus-videos" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-chart"></i>
              <div data-i18n="Account Settings">Métricas</div>
            </a>
          </li>

          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock"></i>
              <div data-i18n="Misc">Teste A-B |<small className="text-primary"> Em breve</small></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock"></i>
              <div data-i18n="Misc">Pixel | <small className="text-primary"> Em breve</small></div>
            </a>
          </li>

        
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Vitrine de Produtos</span>
          </li>

          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-store"></i>
              <div data-i18n="Misc">Nossos Produtos</div>
            </a>
          </li>
          
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-store"></i>
              <div data-i18n="Misc">Produtos Parceiros</div>
            </a>
          </li>
        


          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pessoal</span>
          </li>

          <li className="menu-item">
            <a href="#" className="menu-link">
              <i className="menu-icon tf-icons bx bx-user"></i>
              <div data-i18n="Basic">Meu perfil</div>
            </a>
          </li>

          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dollar"></i>
              <div data-i18n="User interface">Meu Plano</div>
            </a>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Atendimentos &amp; Suporte</span>
          </li>

          <li className="menu-item">
            <a
              href="#"
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
