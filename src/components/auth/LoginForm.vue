<template id="Login">
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center mt-5">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <img
                      src="../../assets/images/logo.jpg"
                      class="img-fluid mb-4"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <form class="user" @submit.prevent="handleSubmit">
                    <div class="form-group mt-3">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="email"
                        v-model="email"
                        aria-describedby="emailHelp"
                        placeholder="Digite seu email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="senha"
                        v-model="senha"
                        class="form-control form-control-user"
                        placeholder="Digite sua senha"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Lembre-me</label
                        >
                      </div>
                      <div
                        class="alert alert-warning mt-3 text-center"
                        role="alert" id="msgUser" hidden
                      >
                        E-mail e/ou senha incorretos.
                      </div>

                      <div
                        class="alert alert-success mt-3 text-center"
                        role="alert" hidden
                      >
                        <strong> Deslogado com sucesso!</strong>
                      </div>
                    </div>
                    <button
                      type="submit"
                      style="background-color: #9c0c49; border: none"
                      class="btn btn-primary btn-user btn-block mt-4"
                    >
                      Login
                  </button>
                  </form>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../services/api";
import VueJwtDecode from 'vue-jwt-decode'
export default {
  name: "Login",

  mounted(){
   let notAuth = localStorage.getItem("auth") 
   let msg_error = localStorage.getItem('error')

   if(msg_error == null && notAuth == false){
    document.getElementById("msgUser").hidden = true
   } else{
    document.getElementById("msgUser").hidden = false
   }

  },

  methods: {
    async handleSubmit(e) {
      let youEmail = document.getElementById("email").value;
      let youPass = document.getElementById("senha").value;

     await api.login(youEmail, youPass)
    },
  },
};
</script>
<style>
body{
  background-image: url('../../assets/images/patern.jpg');
}
</style>
