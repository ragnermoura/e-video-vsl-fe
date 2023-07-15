import { Container } from "./styles";
import Logo from '../../assets/img/logo.png'
import Boleto from "../../assets/img/icons/boleto.png";
import { useState } from "react";
import InputMask from 'react-input-mask'
import { paymentApi } from "../../services/payment";
import { useNavigate } from "react-router";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default () => {
  const [formLocal, setFormLocal] = useState("");
const navigate = useNavigate()
  const [boletoForm, setBoletoForm] = useState({
    nome: '',
    cpf: '',
  })
  const [cardForm, setCardForm] = useState({
    telefone: '',
    numero: '',
    documento: '',
    validade: '',
    cvv: '',
    nomeImpresso: ''
  })
  const [endereco, setEndereco] = useState({
    rua: '',
    estado: '',
    bairro: '',
    complemento: '-',
    numero: '',
    cep: '',
    cidade: ''
  })

  const handleSubcribe = async (type) => {

    const idPlano =  localStorage.getItem('plano_id')
    const idUser =   localStorage.getItem('idUser')
    const idPlanoSistema =  localStorage.getItem('plano_id_sistema')

    if(type == 'boleto') {
      const body = {
        id_plano: idPlano,
        metodoPagamento: 'boleto',
        id_user: idUser,
        id_plano_sistema: idPlanoSistema,
        documento: boletoForm?.cpf?.split('.').join('').split('-').join(''),
      }
      const req = await paymentApi.createAssinatura(body)

      const data = req.data
      if(data?.success){

        navigate('/')

      } else {
        toast.error(res?.mensagem, {
          theme: 'colored'
        })
      }
    } else {
      const body = {

        id_plano: idPlano,
        metodoPagamento: 'credit_card',
        id_user: idUser,
        id_plano_sistema: idPlanoSistema,
        celular: cardForm?.telefone?.split('+')?.join('')?.split(' ')?.join('')?.split('-')?.join('')?.split('(')?.join('')?.split(')')?.join(''),
        documento: cardForm?.documento?.split('.').join('').split('-').join(''),
        cartao: {
          number: cardForm?.numero.split(' ').join(''),
          cvv: cardForm?.cvv,
          validade: cardForm?.validade,
          holder: cardForm?.nomeImpresso,
          address: {
            line_1: `${endereco?.numero}, ${endereco?.rua}, ${endereco?.bairro} `,
            line_2: endereco?.complemento,
            city: endereco?.cidade,
            zip_code: endereco?.cep.split('-').join(''),
            state: endereco?.estado,
            country: 'BR'
          }
        }

      }

      const req = await paymentApi.createAssinatura(body)

      const data = req.data

      if(data?.success){

        navigate('/')

      } else{
        toast.error(res?.mensagem, {
          theme: 'colored'
        })
      }
    }

  }
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
                  <div id="boleto"
                
                  class="mb-3">
                    
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
                          onChange={e => setBoletoForm({...boletoForm, nome: e.target.value})}
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
                          <InputMask
                          mask={'999.999.999-99'}
                          onChange={e => setBoletoForm({...boletoForm, cpf: e.target.value})}
                          >
                          { inputProps => <input id="cpf"
                          class="form-control"
                          {...inputProps}
                          name="cpf"
                          placeholder="000.000.000-00"
                          aria-describedby="cpf" 
                          type="text"/>}
                            
                            </InputMask>
                        </div>
                      </div>

                      <div class="mb-3">
                        <button
                        onClick={() => handleSubcribe('boleto')}
                          class="btn btn-primary d-grid w-100"
                         
                        >
                          Gerar boleto
                        </button>
                      </div>
                    
                  </div>
                )}

                {formLocal == "cartao" && (
                  <div
                  id="card"
                    class="mb-3">
                  
                    <div class="mb-3 form-password-toggle">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">
                          Qual seu telefone?
                        </label>
                      </div>
                      <div class="input-group input-group-merge">
                          <InputMask
                          mask={'+55 (99) 99999-9999'}
                          onChange={e => setCardForm({...cardForm, telefone: e.target.value})}
                          >    
                          { inputProps =>                        
                        <input
                        {...inputProps}
                        type="text"
                        id="telefone"
                        class="form-control"
                        name="card"
                        placeholder="(00)0000-0000"
                        aria-describedby="card"
                        />
                      }
                          </InputMask>
                      </div>
                    </div>

                    <div class="mb-3 form-password-toggle">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">
                          Numero do Cartão
                        </label>
                      </div>
                      <div class="input-group input-group-merge">
                      <InputMask
                          mask={'9999 9999 9999 9999'}
                          onChange={e => setCardForm({...cardForm, numero: e.target.value})}
                          >    
                          { inputProps =>     
                        <input
                          type="text"
                          {
                            ...inputProps
                          }
                          id="card"
                          class="form-control"
                          name="card"
                          placeholder="0000 0000 0000 0000"
                          aria-describedby="card"
                        /> }
                        </InputMask>
                      </div>
                    </div>

                    <div class="mb-3 form-password-toggle">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">
                          Nome impresso no Cartão
                        </label>
                      </div>
                      <div class="input-group input-group-merge">
                     
                           
                        <input
                          onChange={e => setCardForm({...cardForm, nomeImpresso: e.target.value})}
                          id="card"
                          class="form-control"
                          name="card"
                          placeholder="0000 0000 0000 0000"
                          aria-describedby="card"
                        /> 
                      </div>
                    </div>

                    
                    <div class="mb-3 form-password-toggle">
                        <div class="d-flex justify-content-between">
                          <label class="form-label" for="password">
                            CPF
                          </label>
                        </div>
                        <div class="input-group input-group-merge">
                          <InputMask
                          mask={'999.999.999-99'}
                          onChange={e => setCardForm({...cardForm, documento: e.target.value})}
                          >
                          { inputProps => <input id="cpf"
                          class="form-control"
                          {...inputProps}
                          name="cpf"
                          placeholder="000.000.000-00"
                          aria-describedby="cpf" 
                          type="text"/>}
                            
                            </InputMask>
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
                          <InputMask
                          mask={'99/9999'}
                          onChange={e => setCardForm({...cardForm, validade: e.target.value})}
                          >    
                          { inputProps =>   
                            <input
                            {...inputProps}
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="00/0000"
                              aria-describedby="card"
                            /> }
                            </InputMask>
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
                          <InputMask
                          mask={'999'}
                          onChange={e => setCardForm({...cardForm, cvv: e.target.value})}
                          >    
                          { inputProps =>   
                            <input
                            {...inputProps}
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="000"
                              aria-describedby="card"
                            /> }
                            </InputMask>
                          </div>
                        </div>
                      </div>
                    </div>

              
                    <div class="row">
                      <div class="col-md-8">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              Rua
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                          
                            <input
                          
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="Rua exemplo"
                              aria-describedby="card"
                              onChange={e => setEndereco({...endereco, rua: e.target.value})}
                            /> 
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              Numero
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                            <input
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="146"
                              aria-describedby="card"
                              onChange={e => setEndereco({...endereco, numero: e.target.value})}
                            /> 
                          </div>
                        </div>
                      </div>
                    </div>

              
                    <div class="row">
                      <div class="col-md-7">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              Bairro
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                          
                            <input
                          
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="Bairro exemplo"
                              aria-describedby="card"
                              onChange={e => setEndereco({...endereco, bairro: e.target.value})}
                            /> 
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              cep
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                          <InputMask
                          mask={'99999-999'}
                          onChange={e => setEndereco({...endereco, cep: e.target.value})}
                          >    
                          { inputProps =>   
                            <input
                            {...inputProps}
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="99999-999"
                              aria-describedby="card"
                            /> }
                            </InputMask>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-8">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              Cidade
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                          
                            <input
                          
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="Rua exemplo"
                              aria-describedby="card"
                              onChange={e => setEndereco({...endereco, cidade: e.target.value})}
                            /> 
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3 form-password-toggle">
                          <div class="d-flex justify-content-between">
                            <label class="form-label" for="password">
                              Cod. Estado
                            </label>
                          </div>
                          <div class="input-group input-group-merge">
                            <input
                              type="text"
                              id="card"
                              class="form-control"
                              name="card"
                              placeholder="SP"
                              aria-describedby="card"
                              onChange={e => setEndereco({...endereco, estado: e.target.value})}
                            /> 
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-3">
                      <button
                        class="btn btn-primary d-grid w-100"
                       onClick={() => handleSubcribe('card')}
                      >
                        Pagar
                      </button>
                    </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};
