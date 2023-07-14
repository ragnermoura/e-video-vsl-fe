import { Container } from "./styles";
import CardsPlan from "../../components/cardsPlan";

export default () => {
  return (
    <Container>
       
      <div style={{width:"100%", height: "100%", marginTop: "20%"}}>
       
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Basic <i class="fa fa-star"> </i></h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                <small style={{fontSize: 18}}>R$ </small>47<small class="text-body-secondary fw-light"><small style={{fontSize: 18}}> /mês </small></small>
              </h1>
              <hr />
              <ul class="list-unstyled mt-3 mb-4" style={{textAlign: "left"}}>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> 5 VSL</li>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> Todas os recursos do e-Vídeo</li>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> Suporte</li>
               
              </ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-primary"
              >
               Assinar
              </button>
            </div>
          </div>
        </div>
        <div class="col" style={{marginTop: "-25px"}}>
        <div class="card-header py-3" style={{backgroundColor: "#f03939"}}>
              <h4 class="my-0 fw-normal text-white">Starter <i class="fa fa-star text-white"></i> <i class="fa fa-star text-white"></i> <i class="fa fa-star text-white"></i></h4>
              
            </div>
          <div class="card mb-4 rounded-3 shadow-sm">
            
            <div class="card-body">
            <h1 class="card-title pricing-card-title">
                <small style={{fontSize: 18}}>R$ </small>79<small class="text-body-secondary fw-light"><small style={{fontSize: 18}}> /mês </small></small>
              </h1>
              <hr />
              <ul class="list-unstyled mt-3 mb-4" style={{textAlign: "left"}}>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> 10 VSL</li>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> Todas os recursos do e-Vídeo</li>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> Suporte</li>
               
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">
                Assinar
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Pro <i class="fa fa-star"></i> <i class="fa fa-star"></i></h4>
            </div>
            <div class="card-body">
            <h1 class="card-title pricing-card-title">
                <small style={{fontSize: 18}}>R$ </small>97<small class="text-body-secondary fw-light"><small style={{fontSize: 18}}> /mês </small></small>
              </h1>
              <hr />
              <ul class="list-unstyled mt-3 mb-4" style={{textAlign: "left"}}>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> 15 VSL</li>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> Todas os recursos do e-Vídeo</li>
                <li class="mb-4"><i class="fa fa-check-circle text-danger"></i> Suporte</li>
               
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">
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
