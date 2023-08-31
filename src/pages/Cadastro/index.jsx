import { Container } from "./styles";
import Logo from '../../assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authApi } from "../../services/auth";
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
export default () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  })

  const handleCadastro = async () => {
console.log('resquest')
    const res = await authApi.cadastro(user)
    console.log(res)
    console.log(res?.data)
    if(res?.data?.success){
      console.log('loguei')
       sessionStorage.setItem('userId', res?.data.usuarioCriado.id_user)

      navigate('/')

    }else {
      toast.error(res?.message, {
        theme: 'colored'
      })
    }

  }

  return (
    <Container>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="/" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                      <img
                        src={Logo}
                        alt=""
                        className="img-fluid"
                        style={{ width: 200 }}
                      />
                    </span>
                   
                  </a>
                </div>

                <h4 className="mb-2">A venda começa aqui 🚀</h4>
                <p className="mb-4">Insira seus dados e comece a diversão</p>

                
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      placeholder="Insira seu Nome"
                      autoFocus
                      onChange={e => setUser({...user, nome: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sobrenome"
                      name="sobrenome"
                      onChange={e => setUser({...user, sobrenome: e.target.value})}
                      placeholder="insira seu Sobrenome"
                      autoFocus
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Insira seu melhor email"
                      onChange={e => setUser({...user, email: e.target.value})}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <label className="form-label" htmlFor="password">
                      Escolha uma senha forte
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={e => setUser({...user, senha: e.target.value})}
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
                        id="terms-conditions"
                        name="terms"
                      />
                      <label className="form-check-label" htmlFor="terms-conditions">
                        Eu aceito
                        <a > Os termos e condições</a>
                      </label>
                    </div>
                  </div>
                  <button onClick={handleCadastro} className="btn btn-primary d-grid w-100">
                    Tudo pronto
                  </button>
                

                <p className="text-center">
                  <span>Já tem uma conta?</span>
                  <a href="/">
                    <span className="createCount">Voltar ao Login</span>
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
