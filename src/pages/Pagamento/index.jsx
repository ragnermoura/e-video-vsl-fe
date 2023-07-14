import { Container } from "./styles";
import Logo from '../../assets/img/logo.png'
import Boleto from "../../assets/img/icons/boleto.png";
import { useState } from "react";

export default () => {
  const [formLocal, setFormLocal] = useState("");

  return (
    <Container>
      <div class="container-xxl ">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                <a href="#" class="app-brand-link gap-2">
                    <span class="app-brand-logo demo">
                      <img src={Logo} alt="" srcset="" className="img-fluid" style={{width: 200}} />
                    </span>
                  </a>
                </div>

                <h4 class="mb-2">
                  Seu plano é o <strong>Básico</strong> 👋
                </h4>
                <p class="mb-4">por favor, escolha o metodo de pagamento.</p>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <button
                        class="btn  btnPagamento d-grid w-100"
                        onClick={() => setFormLocal("boleto")}
                      >
                        <div class="areaPay">
                          <img
                            width="34"
                            height="34"
                            src="https://img.icons8.com/color/48/boleto-bankario.png"
                            alt="boleto-bankario"
                          />
                          <span>Boleto</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <button
                        class="btn  btnPagamento d-grid w-100"
                        onClick={() => setFormLocal("cartao")}
                      >
                        <div class="areaPay">
                          <img
                            width="34"
                            height="34"
                            src="https://img.icons8.com/ios/50/bank-card-back-side--v1.png"
                            alt="bank-card-back-side--v1"
                          />
                          <span>Cartão</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {formLocal == "boleto" && (
                  <div>
                    <form
                      id="boleto"
                
                      class="mb-3"
                      action="index.html"
                      method="POST"
                    >
                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Seu nome
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="nome"
                          name="nome"
                          placeholder="Digite seu nome"
                          autofocus
                        />
                      </div>
                      <div class="mb-3 form-password-toggle">
                        <div class="d-flex justify-content-between">
                          <label class="form-label" for="password">
                            CPF
                          </label>
                        </div>
                        <div class="input-group input-group-merge">
                          <input
                            type="text"
                            id="cpf"
                            class="form-control"
                            name="cpf"
                            placeholder="000.000.000-00"
                            aria-describedby="password"
                          />
                        </div>
                      </div>

                      <div class="mb-3">
                        <button
                          class="btn btn-primary d-grid w-100"
                          type="submit"
                        >
                          Gerar boleto
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {formLocal == "cartao" && (
                  <form
                    id="card"
                    class="mb-3"
                    action="index.html"
                    method="POST"
                  >
                    <div class="mb-3 form-password-toggle">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">
                          Qual seu telefone?
                        </label>
                      </div>
                      <div class="input-group input-group-merge">
                        <input
                          type="text"
                          id="telefone"
                          class="form-control"
                          name="card"
                          placeholder="(00)0000-0000"
                          aria-describedby="card"
                        />
                      </div>
                    </div>

                    <div class="mb-3 form-password-toggle">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">
                          Numero do Cartão
                        </label>
                      </div>
                      <div class="input-group input-group-merge">
                        <input
                          type="text"
                          id="card"
                          class="form-control"
                          name="card"
                          placeholder="0000 0000 0000 0000"
                          aria-describedby="card"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              Validade
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                            <input
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="00/0000"
                              aria-describedby="card"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              CVV
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                            <input
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="000"
                              aria-describedby="card"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-3">
                      <button
                        class="btn btn-primary d-grid w-100"
                        type="submit"
                      >
                        Pagar
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
