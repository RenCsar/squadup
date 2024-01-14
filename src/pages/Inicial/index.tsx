import { Box } from "@mui/material";
import InitialHeader from "../../components/ui/InitialHeader";
import { Container } from "./Inicial.Styled";
import Banner from "../../components/sections/SectionsInitialPage/Banner";
import SocialsFixed from "../../components/ui/SocialsFixed";
import Footer from "../../components/sections/SectionsInitialPage/Footer";
import Servicos from "../../components/sections/SectionsInitialPage/Servicos";
import Clientes from "../../components/sections/SectionsInitialPage/Clientes";
import Tecnologias from "../../components/sections/SectionsInitialPage/Tecnologias";
import Empresa from "../../components/sections/SectionsInitialPage/Empresa";

const Initial = () => {
    return (
        <Container>
            <Box component='header' className="header-container">
                <InitialHeader />
            </Box>
            <Box className="socials-fixed">
                <SocialsFixed isfooter={false} />
            </Box>
            <Box className="banner" id="sobre">
                <Banner />
            </Box>
            <Box className="empresa" id="empresa">
                <Empresa />
            </Box>
            <Box className="servicos">
                <Servicos />
            </Box>
            <Box className="clientes" id="clientes">
                <Clientes />
            </Box>
            <Box className="tecnologias">
                <Tecnologias />
            </Box>
            <Box className="footer" id="footer">
                <Footer />
            </Box>
        </Container>
    )
}

export default Initial;