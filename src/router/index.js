import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/dashboard/MainView.vue";
import UserView from "../views/dashboard/UserView.vue";
import EmpresaView from "../views/dashboard/EmpresaView.vue";
import TipoView from "../views/dashboard/TipoView.vue";
import DocumentoView from "../views/dashboard/DocumentoView.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard-main",
      name: "dashboard-main",
      component: MainView,
    },
    {
      path: "/cadastro-user",
      name: "cadastro-user",
      component: UserView,
    },
    {
      path: "/cadastro-empresa",
      name: "cadastro-empresa",
      component: EmpresaView,
    },
    {
      path: "/cadastro-tipo",
      name: "cadastro-tipo",
      component: TipoView,
    },
    {
      path: "/cadastro-documento",
      name: "cadastro-documento",
      component: DocumentoView,
    },

  ],
});

export default router;
