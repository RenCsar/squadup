import { Box } from "@mui/material";
import InitialHeader from "../../components/ui/InitialHeader";
import { Container } from "./Inicial.Styled";

const Initial = () => {
    return (
        <Container>
            <Box component='header' className="header-container">
                <InitialHeader />
            </Box>
        </Container>
    )
}

export default Initial;