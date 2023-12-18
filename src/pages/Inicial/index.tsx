import { Box } from "@mui/material";
import InitialHeader from "../../components/ui/InitialHeader";
import { Container } from "./Inicial.Styled";
import Banner from "../../components/sections/Banner";
import SocialsFixed from "../../components/ui/SocialsFixed";

const Initial = () => {
    return (
        <Container>
            <Box component='header' className="header-container">
                <InitialHeader />
            </Box>
            <Banner />
            <Box className="socials-fixed">
                <SocialsFixed />
            </Box>
        </Container>
    )
}

export default Initial;