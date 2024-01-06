import { Box, useMediaQuery, useTheme } from "@mui/material";
import { HeaderStyled } from "./InitialHeader.Styled";
import TemporaryDrawer from "../../features/Drawer";
import LogoClaro from '../../../assets/logo-claro.webp';
import LogoEscuro from '../../../assets/logo-escuro.webp';
import ButtonFindTalent from "../ButtonFindTalent";
import useBackground from "../../../hooks/useBackground";

const InitialHeader = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const backgroundColor = useBackground(true);

  let Logo = backgroundColor === "var(--bg-section-escuro)" ? LogoClaro : LogoEscuro;

  return (
    <HeaderStyled backgroundcolor={backgroundColor}>
      <Box className="logo-container">
        <img src={Logo} alt="logo" />
      </Box>
      <Box component="nav"
        sx={{
          display: (mdDown ? 'none' : 'block')
        }}
      >
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <ButtonFindTalent
            color={"var(--font-color-secondary)"}
            backgroundColor={"var(--bg-btn-primary)"}
            backgoundColorHover={backgroundColor === "var(--bg-section-escuro)" ? "var(--bg-section-claro)" : "var(--bg-section-escuro)"}
          />
        </ul>
      </Box>
      <Box
        sx={{
          display: (mdDown ? 'block' : 'none')
        }}
      >
        <TemporaryDrawer />
      </Box>
    </HeaderStyled>
  )
}

export default InitialHeader;