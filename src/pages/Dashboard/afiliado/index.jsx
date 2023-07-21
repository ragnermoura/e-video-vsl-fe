import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import Afiliado from "../../../assets/img/afiliados.jpg"

export default () => {
  return (
    <Container>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className="layout-page">
            <NavBar />

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-4">
                      
                      <div className="card-body">
                        <img src={Afiliado} style={{width: 500, justifyContent: 'center', alignItems: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className="img-fluid" alt="" srcset="" />
                        <h3 className="text-center">http://Teste.com.br/seunome</h3>
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
    </Container>
  );
};
