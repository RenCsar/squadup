import { Box, useMediaQuery, useTheme } from "@mui/material";
import { HeaderStyled } from "./InitialHeader.Styled";
import TemporaryDrawer from "../../features/Drawer";
import Logo from '../../../assets/logo-escuro.webp'
import ButtonFindTalent from "../ButtonFindTalent";

const InitialHeader = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeaderStyled>
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
          <li>
            <a href="#contato">Contato</a>
          </li>
          <ButtonFindTalent
            color={"var(--font-color-secondary)"}
            backgroundColor={"var(--bg-btn-primary)"}
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