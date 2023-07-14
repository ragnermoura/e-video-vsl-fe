import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import { authApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  const handleLogin = async () => {
    const res = await authApi.login(user);
    console.log(res);
    console.log(res?.data);
    if (res?.data?.success) {
      console.log("loguei");
      localStorage.setItem("userId", res?.data?.user_id);
      localStorage.setItem("token", res?.data?.token);

      navigate("/dashboard-main");
    }
  };

  return (
    <Container>
      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="#" class="app-brand-link gap-2">
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

                <h4 class="mb-2">Bem-vindo ao e-Video! 👋</h4>
                <p class="mb-4">
                  Por favor, insira seus dados para entrar na plataforma.
                </p>

                <div class="alert alert-warning" hidden role="alert">
                 Ainda não confirmamos seu pagamento :/
                </div>
                <div class="alert alert-danger" hidden role="alert">
                 Oops... O e-mail e/ou senha estão incorretos, tente novamente :(
                </div>
                <div class="alert alert-success" hidden role="alert">
                Você saiu... Volte logo!
                </div>
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
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
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
                      onChange={(e) =>
                        setUser({ ...user, senha: e.target.value })
                      }
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
                  <button
                    onClick={handleLogin}
                    class="btn btn-primary d-grid w-100"
                  >
                    Entrar
                  </button>
                </div>

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
