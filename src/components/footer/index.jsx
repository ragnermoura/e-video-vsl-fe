import { Container } from "./styles";

export default () => {
  return (
    <Container>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
          <div className="mb-2 mb-md-0">
            Copyright © 2023 - <a
              href=""
              className="footer-link fw-bolder"
            >
               &nbsp; e-Videos VSL
            </a>. Todos os direitos reservados. Feito com ❤️ em Salvador 
            
          </div>

        </div>
      </footer>
    </Container>
  );
};
