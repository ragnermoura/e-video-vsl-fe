<template id="Login">
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <img src="../../assets/images/logo_horizontal_color.png" />
              </div>
              <h4>Olá! Vamos iniciar!</h4>
              <h6 class="font-weight-light">Faça o login para continuar.</h6>
              <form class="pt-3">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Seu e-mail"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Sua senha"
                  />
                </div>
                <div class="mt-3">
                  <a
                    class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                    href="../../index.html"
                    >ENTRAR</a
                  >
                </div>
                <div
                  class="my-2 d-flex justify-content-between align-items-center"
                >
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" /> Mantenha-me conectado
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Perdeu a senha?</a>
                </div>
                
                <div class="text-center mt-4 font-weight-light">
                 Não tenho conta?
                  <a href="Register" class="text-primary">Criar</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
