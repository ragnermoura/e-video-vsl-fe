import { Container } from "./styles";
import Logo from '../../assets/img/logo.png'

export default () => {
  return (
    <Container>
      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="index.html" class="app-brand-link gap-2">
                    <span class="app-brand-logo demo">
                      <img src={Logo} alt="" srcset="" className="img-fluid" style={{width: 200}} />
                    </span>
        
                  </a>
                </div>

                <h4 class="mb-2">Bem-vindo ao e-Video! 👋</h4>
                <p class="mb-4">
                  Por favor, insira seus dados para entrar na plataforma.
                </p>

                <form
                  id="formAuthentication"
                  class="mb-3"
                  action="index.html"
                  method="POST"
                >
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Seu e-mail
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Digite seu e-mail"
                      autofocus
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" for="password">
                        Senha
                      </label>
                    </div>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label class="form-check-label" for="remember-me">
                        {" "}
                        Lembre-me{" "}
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary d-grid w-100" type="submit">
                      Entrar
                    </button>
                  </div>
                </form>

                <p class="text-center">
                  <span>Não tem cadastro?</span>
                  <a href="/cadastro">
                    <span className="createCount">Crie sua conta aqui</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
