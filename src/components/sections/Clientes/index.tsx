import { Box } from "@mui/material";
import { Container } from "./Clientes.Styled";
import Carousel from "../../features/Carousel";

const Clientes = () => {
  return (
    <Container>
      <Box className="container-geral">
        <Box className="text-container">
          <h2>Conheça alguns dos nossos parceiros que apoiam nossos serviços</h2>
        </Box>
        <Box className="carousel-container-geral">
          <Carousel />
        </Box>
      </Box>
    </Container>
  )
}

export default Clientes;