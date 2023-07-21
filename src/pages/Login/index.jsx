import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import { authApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  const handleLogin = async () => {
    const res = await authApi.login(user);
    if (res?.data?.success) {
      console.log("loguei");
      localStorage.setItem("userId", res?.data?.user_id);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem('nome_usuario', res?.data?.name)
      navigate("/dashboard-main");
    } else {
      toast.error(res?.mensagem, {
        theme: 'colored'
      })
    }
  };

  return (
    <Container>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="#" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
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

                <h4 className="mb-2">Bem-vindo ao e-Video! 👋</h4>
                <p className="mb-4">
                  Por favor, insira seus dados para entrar na plataforma.
                </p>

                <div className="alert alert-warning" hidden role="alert">
                 Ainda não confirmamos seu pagamento :/
                </div>
                <div className="alert alert-danger" hidden role="alert">
                 Oops... O e-mail e/ou senha estão incorretos, tente novamente :(
                </div>
                <div className="alert alert-success" hidden role="alert">
                Você saiu... Volte logo!
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Seu e-mail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Digite seu e-mail"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    autofocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" for="password">
                      Senha
                    </label>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      onChange={(e) =>
                        setUser({ ...user, senha: e.target.value })
                      }
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" for="remember-me">
                      {" "}
                      Lembre-me{" "}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    onClick={handleLogin}
                    className="btn btn-primary d-grid w-100"
                  >
                    Entrar
                  </button>
                </div>

                <p className="text-center">
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
      <ToastContainer />
    </Container>
  );
};
