import { Box } from "@mui/material";
import InitialHeader from "../../components/ui/InitialHeader";
import { Container } from "./Inicial.Styled";
import Banner from "../../components/sections/Banner";
import SocialsFixed from "../../components/ui/SocialsFixed";
import Footer from "../../components/sections/Footer";
import Servicos from "../../components/sections/Servicos";
import Clientes from "../../components/sections/Clientes";
import Tecnologias from "../../components/sections/Tecnologias";
import Contato from "../../components/sections/Contato";

const Initial = () => {
    return (
        <Container>
            <Box component='header' className="header-container">
                <InitialHeader />
            </Box>
            <Box className="socials-fixed">
                <SocialsFixed />
            </Box>
            <Box className="banner" id="sobre">
                <Banner />
            </Box>
            <Box className="clientes" id="clientes">
                <Clientes />
            </Box>
            <Box className="servicos">
                <Servicos />
            </Box>
            <Box className="tecnologias" id="tecnologias">
                <Tecnologias />
            </Box>
            <Box className="contato" id="contato">
                <Contato />
            </Box>
            <Box className="footer">
                <Footer />
            </Box>
        </Container>
    )
}

export default Initial;