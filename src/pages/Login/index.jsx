import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import { authApi } from "../../services/auth";
import { useNavigate, useLocation} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../context/authProvider";
export default () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    senha: "",
  });
const auth = useAuth()
const location = useLocation()

const redirectPath = location.state?.path || '/dashboard-main'

  const handleLogin = async () => {
    const res = await authApi.login(user);
    if (res?.data?.success) {
      console.log("loguei");
      auth.login(res?.data?.user)
      sessionStorage.setItem("userId", res?.data?.user_id);
      sessionStorage.setItem("token", res?.data?.token);
      sessionStorage.setItem('user', JSON.stringify(res?.data?.user))
      sessionStorage.setItem('plano', JSON.stringify(res?.data?.plano))
      navigate(redirectPath, {replace: true, });
    } else {
      toast.error(res?.message, {
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
                  <a href="#"  className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                      <img
                        src={Logo}
                        alt=""
                        srcSet=""
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
                  <label htmlFor="email" className="form-label">
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
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
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
                   
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    
                    <a href="/esqueci" className="textEsqueci" htmlFor="remember-me">
                   
                      Esqueci a senha

                    </a>
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
{/* 
                <p className="text-center">
                  <span>Não tem cadastro?</span>
                  <a href="/cadastro">
                    <span className="createCount">Crie sua conta aqui</span>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};
