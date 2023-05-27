<template id="Register">
  <div class="login">
    <img src="../../assets/images/logo.jpg" class="logo img-fluid mt-4" />
    <div class="container-fluid">
      <div class="form-login mt-3">
        <h1 class="text-title mb-4">Vamos ao cadastro :)</h1>
        <form>
          <div>
            <div class="left-inner-addon input-container">
              <i class="fa fa-user"></i>
              <input
                type="text"
                class="form-control"
                placeholder=" Digite seu nome"
              />
            </div>
          </div>
          <div>
            <div class="left-inner-addon input-container">
              <i class="fa fa-user"></i>
              <input
                type="text"
                class="form-control"
                placeholder=" Digite seu sobrenome"
              />
            </div>
          </div>
          <div>
            <div class="left-inner-addon input-container">
              
              <select
                type="select"
                class="form-control input-select"
            
              >
                <option value="">Escolha aqui sua matéria</option>
              </select>
            </div>
          </div>
          <div>
            <div class="left-inner-addon input-container">
              <i class="fa fa-envelope"></i>
              <input
                type="email"
                class="form-control"
                placeholder=" Digite seu e-mail"
              />
            </div>
          </div>
          <div>
            <div class="left-inner-addon input-container">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                class="form-control"
                placeholder="Insira sua senha"
              />
            </div>
          </div>

         
          <div class="d-grid gap-2 mt-3">
            <button class="btn btn-primary btn_entrar" type="button">
              Salvar
            </button>
          </div>
          <h6 class="text-center mt-2 mb-2 text-ou">OU</h6>
          <div class="d-grid gap-2 mt-2">
            <router-link to="/" class="btn btn-outline-primary btn_cadastar" type="button">
              Voltar ao Login
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
};
</script>
