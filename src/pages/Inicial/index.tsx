import { Box } from "@mui/material";
import InitialHeader from "../../components/ui/InitialHeader";
import { Container } from "./Inicial.Styled";
import Banner from "../../components/ui/Banner";

const Initial = () => {
    return (
        <Container>
            <Box component='header' className="header-container">
                <InitialHeader />
            </Box>
            <Banner />
        </Container>
    )
}

export default Initial;