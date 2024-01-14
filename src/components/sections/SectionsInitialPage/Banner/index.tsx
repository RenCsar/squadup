import { Box } from "@mui/material";
import { Container } from "./Banner.Styled";
import Logo from "../../../../assets/logo-escuro.webp";
import Homem from "../../../../assets/person-ti1.webp";
import ExecutiveBanner from "../../../ui/ExecutiveBanner";
import ButtonFindTalent from "../../../ui/ButtonFindTalent";

const Banner = () => {
  return (
    <Container>
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
                backgroundcolor={"var(--bg-btn-primary)"}
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