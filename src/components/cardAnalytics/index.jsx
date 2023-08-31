
import { Container, Number, TextCard } from "./styles"

export default ({number, text, percentage}) => {
    return (
        <Container>
            <Number>{number}{percentage ? '%' : ''}</Number>
            <TextCard>{text}</TextCard>
        </Container>
    )

}