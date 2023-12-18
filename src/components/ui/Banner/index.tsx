import { Box, Button } from "@mui/material";
import { Container } from "./Banner.Styled";
import Logo from "../../../assets/logo-escuro.png";
import Homem from "../../../assets/person-ti1.png";
import { Link } from "react-router-dom";
import ExecutiveBanner from "../ExecutiveBanner";
import ButtonFindTalent from "../ButtonFindTalent";

const Banner = () => {
  return (
    <Container id="sobre">
      <Box className="container-geral">
        <Box className="banner-header">
          <img src={Logo} alt="" />
          <p>Code with Confidence, SquadUp with Excellence.</p>
          <Box className="text-container">
            <p>
              Precisando escalar seu time de TI de forma rápida e eficiente? Conectamos empresas aos melhores talentos de TI. Encontre o Seu Futuro Profissional aqui!
            </p>
            <div className="link-container">
              <ButtonFindTalent
                color={"var(--font-color-secondary)"}
                backgroundColor={"var(--bg-btn)"}
              />
            </div>
          </Box>
        </Box>
        <ExecutiveBanner img={Homem} />
      </Box>
    </Container>
  )
}

export default Banner;