import { Box } from "@mui/material";
import { Container } from "./Footer.Styled";
import RCLogo from "../../../assets/rc-logo.webp";
import Logo from "../../../assets/logo-escuro.webp";
import Gptw from "../../../assets/gptw.webp";
import ButtonFindTalent from "../../ui/ButtonFindTalent";
import SocialsFixed from "../../ui/SocialsFixed";

const Footer = () => {
  return (
    <Container>
      <Box className="container-geral">
        <Box className="first-section">
          <Box className="img-container">
            <img src={Logo} alt="logo-empresa" />
          </Box>
          <Box className="content">
            <Box className="text-container">
              <p>A <span>SquadUP</span> é uma empresa de fictícia focada no desenvolvimento de aplicativos mobile e sistemas web. Fornecemos soluções para startups até o mais alto nível empresarial. Como empresa que trabalha com desenvolvimento de aplicativos para dispositivos móveis garantimos que você receba a atenção do seu público-alvo e aumente o número de clientes em seu app para dispositivos móveis.</p>
            </Box>
            <Box className="outsourcing">
              <h3>Outsourcing de TI e Squads</h3>
              <ul>
                <li>
                  <a href="https://encr.pw/QfL7m" target="_blank">O que é outsourcing de TI?</a>
                </li>
                <li>
                  <a href="https://encr.pw/DQo0O" target="_blank">Tipos de contrato de outsourcing</a>
                </li>
                <li>
                  <a href="https://acesse.dev/QfL7m" target="_blank">Por que terceirizar seu software?</a>
                </li>
                <li>
                  <a href="https://acesse.one/FqRWr" target="_blank">Quanto custa um aplicativo?</a>
                </li>
                <li>
                  <a href="https://l1nq.com/7QGWs" target="_blank">O que é Squad Ágil?</a>
                </li>
              </ul>
            </Box>
            <Box className="squadup">
              <h3>SquadUP</h3>
              <ul>
                <li>
                  <a href="#">Trabelhe conosco</a>
                </li>
                <li>
                  <a href="#">Diretrizes da marca</a>
                </li>
                <li>
                  <a href="#">Use Academy Bootcamp</a>
                </li>
                <li>
                  <a href="#">Cases de sucesso</a>
                </li>
                <li>
                  <a href="#">Imprensa</a>
                </li>
              </ul>
            </Box>
            <Box className="gptw">
              <img src={Gptw} alt="gptw-logo" />
            </Box>
          </Box>
          <Box className="last-line">
            <Box>
              <p>25.135.052.77/0001-08</p>
              <p>SquadUp Soluções em Tecnologia</p>
            </Box>
            <Box className="social-media">
              <SocialsFixed isfooter={true} />
            </Box>
            <ButtonFindTalent backgroundcolor="var(--bg-btn-primary)" color="var(--font-color-secondary)" />
          </Box>
        </Box>
        <Box className="second-section">
          <p>Copyright © 2024 SquadUp S/A</p>
          <a href="https://portfolio-rc.vercel.app/" target="_blank">
            <img src={RCLogo} alt="Logo-rc" />
          </a>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer;