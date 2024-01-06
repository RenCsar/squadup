import { Box } from "@mui/material";
import { Container } from "./Clientes.Styled";
import Carousel from "../../features/Carousel";
import Quote from '../../../assets/quote.webp';
import marcas from '../../../utils/marcas.json';

const Clientes = () => {
  return (
    <Container>
      <Box className="container-geral">
        <Box className="text-container">
          <h2>Conheça alguns dos nossos <span>parceiros</span> que apoiam nossos <span>serviços</span></h2>
        </Box>
        <Box className="carousel-container-geral">
          <Carousel content={marcas} />
        </Box>
        <Box className="depoimento">
          <img src={Quote} alt="Aspas duplas" />
          <Box className="text-depoimento">
            <p>Hoje com a SquadUP conseguimos atender todas as lojas das empresas para as quais prestamos serviços em todo o Brasil, mantendo excelentes padrões de qualidade.</p>
            <Box className="empresa-depoimento">
              <img src="https://i.imgur.com/cFYFa4n.png" alt="logo-empresa" />
              <p>- Lisk</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Clientes;