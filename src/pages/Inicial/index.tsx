import { Box } from "@mui/material";
import InitialHeader from "../../components/ui/InitialHeader";
import { Container } from "./Inicial.Styled";
import Banner from "../../components/sections/Banner";
import SocialsFixed from "../../components/ui/SocialsFixed";
import Footer from "../../components/sections/Footer";
import Servicos from "../../components/sections/Servicos";

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
            <Box className="serviços" id="servicos">
                <Servicos />
            </Box>
            <Box className="footer">
                <Footer />
            </Box>
        </Container>
    )
}

export default Initial;