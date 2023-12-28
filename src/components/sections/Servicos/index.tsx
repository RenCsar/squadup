import { Box } from "@mui/material";
import { Container } from "./Servicos.Styled";
import Projeto from './../../../assets/projetos.svg';
import Web from './../../../assets/web.svg';
import Design from './../../../assets/design.svg';
import ServicesClients from "../../ui/ServicesClients";
import Services from "./../../../utils/servicos.json";

const Servicos = () => {

  const imagens: Record<string, string> = {
    projeto: Projeto,
    web: Web,
    design: Design
  }

  return (
    <Container>
      <Box className="container-geral" id="servicos">
        <h2>Modelos de Outsourcing de TI</h2>
        <Box className="card-container">
          {
            Services.map((i) =>
              <ServicesClients
                title={i.title}
                img={imagens[i.img]}
                classStyle={i.classStyle}
                items={i.items}
              />
            )
          }
        </Box>
      </Box>
    </Container>
  )
}

export default Servicos;