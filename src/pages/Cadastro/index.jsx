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
                      <img
                        src={Logo}
                        alt=""
                        srcset=""
                        className="img-fluid"
                        style={{ width: 200 }}
                      />
                    </span>
                   
                  </a>
                </div>

                <h4 class="mb-2">A venda começa aqui 🚀</h4>
                <p class="mb-4">Insira seus dados e comece a diversão</p>

                <form
                  id="formAuthentication"
                  class="mb-3"
                  action="index.html"
                  method="POST"
                >
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nome"
                      name="nome"
                      placeholder="Insira seu Nome"
                      autofocus
                    />
                  </div>
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="sobrenome"
                      name="sobrenome"
                      placeholder="insira seu Sobrenome"
                      autofocus
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Insira seu melhor email"
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <label class="form-label" for="password">
                      Escolha uma senha forte
                    </label>
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
                        id="terms-conditions"
                        name="terms"
                      />
                      <label class="form-check-label" for="terms-conditions">
                        Eu aceito
                        <a href="javascript:void(0);"> Os termos e condições</a>
                      </label>
                    </div>
                  </div>
                  <button class="btn btn-primary d-grid w-100">
                    Tudo pronto
                  </button>
                </form>

                <p class="text-center">
                  <span>Já tem uma conta?</span>
                  <a href="/login">
                    <span className="createCount">Voltar ao Login</span>
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
