import { Container } from "./styles";
import {FaCheck} from 'react-icons/fa6'

export default ({ titulo, preco, descricao }) => {
  return (
    <Container>
      <div class="container-xxl">
        <div class="authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <h4 class="mb-2"> {titulo}</h4>
                <p class="mb-4">{preco}</p>
                <h6><strong>Descrição do plano</strong> </h6>
                <ul>
                  {descricao.map((item) => (
                    <li><FaCheck/> {item}</li>
                  ))}
                </ul>

                <button class="btn btn-primary d-grid w-100" type="submit">
                  Selecionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
