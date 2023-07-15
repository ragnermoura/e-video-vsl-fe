import { Container } from "./styles";
import CardsPlan from "../../components/cardsPlan";
import { useNavigate } from "react-router";

export default () => {
  const navigate = useNavigate() 

  const handleSave = (id, id_sistema) => {
    console.log('id', id)
    localStorage.setItem('plano_id', id)
    localStorage.setItem('plano_id_sistema', id_sistema)
    navigate('/pagamento')
  }

  return (
    <Container>
       
      <div style={{width:"100%", height: "100%", marginTop: "20%"}}>
       
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">

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
              <button
                type="button"
                onClick={() => handleSave('plan_rg5pmQDiLik94PzG', '9260d7a7-7c7f-422d-8bed-ac0271c4c439')}
                className="w-100 btn btn-lg btn-primary"
              >
               Assinar
              </button>
            </div>
          </div>
        </div>
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
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Assinar
              </button>
            </div>
          </div>
        </div>
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
              <button type="button" className="w-100 btn btn-lg btn-primary">
               Assinar
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* 
      <CardsPlan titulo={'Básico'} preco={'R$49,00'} descricao={['5 Videos VSL']} />
      <CardsPlan titulo={'Profissional'} preco={'R$79,00'} descricao={['10 Videos VSL']}/>
      <CardsPlan titulo={'Expert'} preco={'R$99,00'} descricao={['15 Videos VSL']}/> */}
    </Container>
  );
};
