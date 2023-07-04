import { Container } from "./styles";
import CardsPlan from "../../components/cardsPlan";

export default () => {
  return (
    <Container>
      <CardsPlan titulo={'Básico'} preco={'R$49,00'} descricao={['5 Videos VSL']} />
      <CardsPlan titulo={'Profissional'} preco={'R$79,00'} descricao={['10 Videos VSL']}/>
      <CardsPlan titulo={'Expert'} preco={'R$99,00'} descricao={['15 Videos VSL']}/>
    </Container>
  );
};
