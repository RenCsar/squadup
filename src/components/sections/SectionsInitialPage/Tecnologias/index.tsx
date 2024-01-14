import { Box } from "@mui/material";
import { Container } from "./Tecnologias.Styled";
import Carousel from "../../../features/Carousel";
import tech from '../../../../utils/tech.json';

const Tecnologias = () => {
  return (
    <Container >
      <Box className="container-geral" id="tecnologias">
        <Box className="text-container">
          <h2>Desenvolvimento com <span>qualidade</span> e <span>segurança</span></h2>
          <p>Mas sem nos limitar às tecnologias</p>
        </Box>
        <Box className="carousel-container-geral">
          <Carousel content={tech} />
        </Box>
      </Box>
    </Container>
  )
}

export default Tecnologias;