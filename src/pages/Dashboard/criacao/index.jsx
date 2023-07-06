import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";


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
