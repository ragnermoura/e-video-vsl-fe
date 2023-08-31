import { useEffect, useState } from "react"
import Footer from "../../../components/footer"
import MasterMenu from "../../../components/masterMenu"
import { Container } from "./styles"
import { userApi } from "../../../services/user"
import { useNavigate } from "react-router-dom"
import {toast, ToastContainer} from 'react-toastify'
export default () => {
const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [plano, setPlano] = useState({})
    const [data, setData]= useState({
        senhaAntiga: '',
senha: '',
confirmSenha: ''
    })

    const handleUpdatePassword = async () => {

        const body ={ 
            id_user: user?.id_user,
            senhaAntiga: data.senhaAntiga,
            senha: data.senha,
            confirmSenha: data.confirmSenha
        }

        const res = await userApi.atualizaSenha(body)

        if (res?.data?.success) {
          
            navigate("/dashboard-main");
          } else { 
            toast.error(res?.message, {
                theme: 'colored'
              })
          }

    }

    useEffect(() => {

        const user = JSON.parse( sessionStorage.getItem('user'))
        const plano = JSON.parse( sessionStorage.getItem('plano'))
        console.log(plano)
        setUser(user)
        setPlano(plano)
    }, [])
    return(
        <Container>
        <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className="sm-mt layout-page ">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-md-12 mt-4">
                  
                    <h5 className="title">Meu Perfil</h5>


<div className="col-12">
<div className="card ">
    <div className="card-body">
        <div className="center">

        
        <div className="linha_data">
            <div className="label">Nome</div>
            <div className="content">{user?.nome} {user?.sobrenome}</div>
        </div>
        <div className="linha_data">
            <div className="label">E-mail</div>
            <div className="content">{user?.email}</div>
        </div>
        </div>
        <hr/>
        <div className="linha">
            <div className="input-row" >
                <label>Senha atual</label>
                <input type="password" onChange={e => setData({...data, senhaAntiga: e.target.value})}/>
                </div>
            <div className="input-row" >
                <label>Nova senha</label>
                <input type="password" onChange={e => setData({...data, senha: e.target.value})}/>
                </div>
            <div className="input-row" >
                <label>Confirme sua nova senha</label>
                <input type="password" onChange={e => setData({...data, confirmSenha: e.target.value})}/>
                </div>
        </div>
        <button className="custom-btn" onClick={handleUpdatePassword}>Salvar</button>
    </div>
</div>

</div>

                  </div> 
                  <div className="col-md-12 mt-4">
                  
                    <h5 className="title">Meu Plano</h5>


<div className="col-12">
<div className="card ">
    <div className="card-body">
        <div className="center">

        
        <div className="linha_data">
            <div className="label">Plano Atual</div>
            <div className="content">{plano?.nome_plano}</div>
        </div>
        </div>
        <hr className="rule"/>
       
        
      <div className="row row-cols-1 row-cols-md-3 mb-3 justify-content-center text-center">

{/* basic */}
{
    plano?.nome_plano !== 'Plano Basic' && 
(
<div className="col">
  <div className="card mb-4 rounded-3 shadow-sm">
    <div className="card-header py-3">
      <h4 className="my-0 fw-normal">Basic <i className="fa fa-star"> </i></h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
        <small style={{fontSize: 18}}>R$ </small>47<small className="text-body-secondary fw-light"><small style={{fontSize: 18}}> /mês </small></small>
      </h1>
      <hr />
      <ul className="list-unstyled mt-3 mb-4" style={{textAlign: "left"}}>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> 5 VSL</li>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> Todas os recursos do e-Vídeo</li>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> Suporte</li>
       
      </ul>
      <a 
      style={{color: "#f9f9f9"}}
      href="https://pagamento.evideovsl.com.br/subscribe/basic-plano"
        type="button"
        className="w-100 btn btn-lg btn-primary"
        target="_blank"
      >
       Melhorar
      </a>
    </div>
  </div>
</div>)
}
{/* Starter */}
{
    plano?.nome_plano !== 'Plano Starter' && (

<div className="col" style={{marginTop: "-25px"}}>
<div className="card-header py-3" style={{backgroundColor: "#f03939"}}>
      <h4 className="my-0 fw-normal text-white">Starter <i className="fa fa-star text-white"></i> <i className="fa fa-star text-white"></i> <i className="fa fa-star text-white"></i></h4>
      
    </div>
  <div className="card mb-4 rounded-3 shadow-sm">
    
    <div className="card-body">
    <h1 className="card-title pricing-card-title">
        <small style={{fontSize: 18}}>R$ </small>79<small className="text-body-secondary fw-light"><small style={{fontSize: 18}}> /mês </small></small>
      </h1>
      <hr />
      <ul className="list-unstyled mt-3 mb-4" style={{textAlign: "left"}}>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> 10 VSL</li>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> Todas os recursos do e-Vídeo</li>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> Suporte</li>
       
      </ul>
      <a href="https://pagamento.evideovsl.com.br/subscribe/99af6a0e-437e-4b29-a818-743d4df797e3" target="_blank" type="button" style={{color: "#f9f9f9"}} className="w-100 btn btn-lg btn-primary">
        Melhorar
      </a>
    </div>
  </div>
</div>)
}
{/* Pro */}
{
    plano?.nome_plano !== 'Plano Pro' &&
(
<div className="col">
  <div className="card mb-4 rounded-3 shadow-sm border-primary">
    <div className="card-header py-3 text-bg-primary border-primary">
      <h4 className="my-0 fw-normal">Pro <i className="fa fa-star"></i> <i className="fa fa-star"></i></h4>
    </div>
    <div className="card-body">
    <h1 className="card-title pricing-card-title">
        <small style={{fontSize: 18}}>R$ </small>97<small className="text-body-secondary fw-light"><small style={{fontSize: 18}}> /mês </small></small>
      </h1>
      <hr />
      <ul className="list-unstyled mt-3 mb-4" style={{textAlign: "left"}}>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> 15 VSL</li>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> Todas os recursos do e-Vídeo</li>
        <li className="mb-4"><i className="fa fa-check-circle text-danger"></i> Suporte</li>
       
      </ul>
      <a href="https://pagamento.evideovsl.com.br/subscribe/99af6a0e-437e-4b29-a818-743d4df797e3" target="_blank" style={{color: "#f9f9f9"}} type="button" className="w-100 btn btn-lg btn-primary">
       Melhorar
      </a>
    </div>
  </div>
</div>)
}
</div>
    </div>
</div>

</div>

                  </div>
                </div>
              </div>

              <Footer />

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
        </Container>
    )
}