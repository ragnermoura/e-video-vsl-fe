<template id="Menu">
  
    
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <router-link
          class="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard-main"
        >
          
          <div class="sidebar-brand-text mx-3" style="background-color: #FFF; width: 200px; height: 50px; border-radius: 50px;"><img src="../../assets/images/logo.jpg" class="img-fluid " style="margin-top: 2px !important;" width="100" ></div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard-main">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Monitoramento</span></router-link>
          
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Adminstrador</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-user"></i>
            <span>Usuários</span>
          </a>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Controle:</h6>
              <router-link class="collapse-item" to="/cadastro-user" >Cadastro</router-link>
            </div>
          </div>
        </li>

        

        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilidades</span>
          </a>
          <div
            id="collapseUtilities"
            class="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Ações de Utilitilidades:</h6>
              <router-link class="collapse-item" to="/cadastro-empresa">Cadastrar empresa</router-link>
              <router-link class="collapse-item" to="/cadastro-tipo">Cadastrar tipo de Doc.</router-link>
            </div>
          </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Plataforma</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-folder"></i>
            <span>Documentos</span>
          </a>
          <div
            id="collapsePages"
            class="collapse show"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Cadastro</h6>
              <router-link class="collapse-item" to="/cadastro-pergunta">Novo documento</router-link>
      
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Pesquisa:</h6>
              <router-link class="collapse-item" to="/cadastro-resposta">Vencimentos</router-link>
            </div>
          </div>
        </li>

        

        <!-- Nav Item - Tables -->
       

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
 
</template>
<script>
import api from "../../services/api";
export default {
  name: "Menu",
};
</script>
