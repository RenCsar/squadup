import { Box, useMediaQuery, useTheme } from "@mui/material";
import { HeaderStyled } from "./Header.Styled";
import TemporaryDrawer from "../../features/Drawer";
import LogoClaro from '../../../assets/logo-claro.webp';
import LogoEscuro from '../../../assets/logo-escuro.webp';
import useBackground from "../../../hooks/useBackground";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const backgroundColor = useBackground(true);

  let Logo = backgroundColor === "var(--bg-section-escuro)" ? LogoClaro : LogoEscuro;

  const section = [
    { title: "Home", link: '/home' },
    { title: "Talentos", link: '/talentos' },
  ];

  return (
    <HeaderStyled backgroundcolor={backgroundColor}>
      <Box className="logo-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </Box>
      <Box component="nav"
        sx={{
          display: (mdDown ? 'none' : 'block')
        }}
      >
        <ul>
          {section.map((i) =>
            <li key={i.link}>
              <Link
                to={i.link}
              >{i.title}</Link>
            </li>
          )}
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

export default Header;