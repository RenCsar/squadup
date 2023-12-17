import { Box, useMediaQuery, useTheme } from "@mui/material";
import { HeaderStyled } from "./InitialHeader.Styled";
import TemporaryDrawer from "../../features/Drawer";
import { Link } from "react-router-dom";

const InitialHeader = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeaderStyled>
      <Box className="logo-container">
        <h2>SquadUP</h2>
      </Box>
      <Box component="nav"
        sx={{
          display: (mdDown ? 'none' : 'block')
        }}
      >
        <ul>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Tecnologias</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <Link to="/home">Encontre um Talento</Link>
          </li>
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