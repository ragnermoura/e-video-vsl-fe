<template id="NavBar">
  <div class="TopNavbar">
    
    <nav id="navbar" style="height: 100px;" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"
        ><img
          src="../../../assets/images/logo_horizontal.png"
          class="logo"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Funcionalidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Planos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-primary btn-login ml-3 mr-3">
              <span class="text-login">Login</span>
            </button>
          </li>
      
         
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import Topbar from "../../../components/website/topBar/index.vue";
export default {
  name: "NavBar",
  components: {
    Topbar,
  },
  mounted() {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolled > 0) {
        navbar.style.backgroundColor =
          "#260b52"; /* Defina a cor desejada */
      } else {
        navbar.style.backgroundColor =
          "transparent"; /* Volta para a cor transparente quando estiver no topo */
      }
    });
  },
};
</script>
<style>
@import url("../../../assets/css/navbar.css");
</style>
