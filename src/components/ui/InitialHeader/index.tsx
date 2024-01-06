import { Box, useMediaQuery, useTheme } from "@mui/material";
import { HeaderStyled } from "./InitialHeader.Styled";
import TemporaryDrawer from "../../features/Drawer";
import LogoClaro from '../../../assets/logo-claro.webp';
import LogoEscuro from '../../../assets/logo-escuro.webp';
import ButtonFindTalent from "../ButtonFindTalent";
import useBackground from "../../../hooks/useBackground";
import { Link } from "react-scroll";
import * as Scroll from 'react-scroll';

const InitialHeader = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const backgroundColor = useBackground(true);

  let Logo = backgroundColor === "var(--bg-section-escuro)" ? LogoClaro : LogoEscuro;

  const section = [
    { title: "Sobre", link: 'sobre' },
    { title: "Serviços", link: 'servicos' },
    { title: "Tecnologias", link: 'tecnologias' }
  ];

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
          {section.map((i) =>
            <li key={i.link}>
              <Link
                to={i.link}
                spy={true}
                smooth={true}
                duration={800}
              >{i.title}</Link>
            </li>
          )}
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