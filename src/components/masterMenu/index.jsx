import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";

export default () => {
  return (
    <Container>
      <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div class="app-brand demo">
          <a href="" class="app-brand-link">
            <span class="app-brand-logo demo">
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
            class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <li class="menu-item">
            <a href="/dashboard-main" class="menu-link">
              <i class="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </a>
          </li>

          <li class="menu-item">
            <a href="/area-criacao" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Area de criação</div>
            </a>
          </li>

          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Em breve</span>
          </li>

          <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons bx bx-lock"></i>
              <div data-i18n="Misc">Teste A-B</div>
            </a>
          </li>

          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Gestão</span>
          </li>
          <li class="menu-item">
            <a href="/meus-videos" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons bx bx-play"></i>
              <div data-i18n="Account Settings">Meus vídeos</div>
            </a>
          </li>

          <li class="menu-item">
            <a href="/afiliados" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons bx bx-cube-alt"></i>
              <div data-i18n="Misc">Afiliados</div>
            </a>
          </li>

          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Pessoal</span>
          </li>

          <li class="menu-item">
            <a href="#" class="menu-link">
              <i class="menu-icon tf-icons bx bx-user"></i>
              <div data-i18n="Basic">Meu perfil</div>
            </a>
          </li>

          <li class="menu-item">
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons bx bx-dollar"></i>
              <div data-i18n="User interface">Meu Plano</div>
            </a>
          </li>

          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Atendimentos &amp; Suporte</span>
          </li>

          <li class="menu-item">
            <a
              href="#"
              class="menu-link"
            >
              <i class="menu-icon tf-icons bx bx-phone"></i>
              <div data-i18n="Documentation">Suporte</div>
            </a>
          </li>
        </ul>
      </aside>
    </Container>
  );
};
