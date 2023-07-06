import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import Afiliado from "../../../assets/img/afiliados.jpg"

export default () => {
  return (
    <Container>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <MasterMenu />
          <div class="layout-page">
            <NavBar />

            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card mb-4">
                      
                      <div class="card-body">
                        <img src={Afiliado} style={{width: 500, justifyContent: 'center', alignItems: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className="img-fluid" alt="" srcset="" />
                        <h3 className="text-center">http://Teste.com.br/seunome</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />

              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
