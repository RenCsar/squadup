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
              {/* <SocialsFixed /> Componentizar */}
              <a href="https://www.linkedin.com/in/renan-cesar/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50"
                  fill="#fff">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>      </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30"
                  fill="#fff">
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50"
                  fill="#fff">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>      </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50"
                  fill="#fff">
                  <path d="M 33 29 C 31.203125 29 30 30.515625 30 33 C 30 35.484375 30.890625 38.046875 33 38 C 35.21875 37.949219 36.019531 35.777344 36 33 C 35.984375 30.515625 34.792969 29 33 29 Z M 44.261719 17.066406 C 44.535156 15.722656 44.652344 10.964844 42.679688 6 C 42.679688 6 38.148438 6.496094 31.296875 11.199219 C 29.863281 10.800781 27.429688 10.601563 25 10.601563 C 22.570313 10.601563 20.140625 10.800781 18.699219 11.195313 C 11.851563 6.496094 7.324219 6 7.324219 6 C 5.347656 10.964844 5.445313 15.609375 5.738281 17.066406 C 3.417969 19.585938 2 22.609375 2 26.742188 C 2 44.707031 16.90625 44.996094 20.667969 44.996094 C 21.519531 44.996094 23.210938 44.996094 25 45 C 26.789063 44.996094 28.484375 44.996094 29.332031 44.996094 C 33.09375 44.996094 48 44.707031 48 26.742188 C 48 22.609375 46.582031 19.585938 44.261719 17.066406 Z M 25.140625 43 L 25 43 C 15.570313 43 8.15625 41.660156 8.15625 32.496094 C 8.15625 30.300781 8.933594 28.265625 10.773438 26.574219 C 13.84375 23.753906 19.035156 25.246094 24.929688 25.246094 C 24.953125 25.246094 25.050781 25.246094 25.070313 25.246094 C 30.964844 25.246094 36.160156 23.757813 39.230469 26.574219 C 41.070313 28.265625 41.84375 30.300781 41.84375 32.496094 C 41.84375 41.660156 34.570313 43 25.140625 43 Z M 17 29 C 15.207031 29 14 31.015625 14 33.5 C 14 35.984375 15.207031 38 17 38 C 18.796875 38 20 35.984375 20 33.5 C 20 31.015625 18.796875 29 17 29 Z"></path>
                </svg>
              </a>
            </Box>
            <ButtonFindTalent backgroundColor="var(--bg-btn-primary)" color="var(--font-color-secondary)" />
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