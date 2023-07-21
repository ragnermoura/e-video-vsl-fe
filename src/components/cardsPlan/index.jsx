import { Container } from "./styles";
import {FaCheck} from 'react-icons/fa6'

export default ({ titulo, preco, descricao }) => {
  return (
    <Container>
      <div className="container-xxl">
        <div className="authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-2"> {titulo}</h4>
                <p className="mb-4">{preco}</p>
                <h6><strong>Descrição do plano</strong> </h6>
                <ul>
                  {descricao.map((item) => (
                    <li><FaCheck/> {item}</li>
                  ))}
                </ul>

                <button className="btn btn-primary d-grid w-100" type="submit">
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
